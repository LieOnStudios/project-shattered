#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fs::{self};
use std::path::{self};

use tauri::http::{HeaderMap, HeaderName, HeaderValue};

#[tauri::command]
fn save_data_to_file(data_str: &str, path: &str) {
    if fs::metadata(path).is_err() {
        let split_path = path.split("/");
        let no_file_path = path.replace(split_path.last().unwrap(), "");
        let _ = fs::create_dir_all(no_file_path);
    }
    let _ = fs::write(path, data_str);
}

#[tauri::command]
fn load_data_from_file(path: &str) -> String {
    let err_check = fs::metadata(path);
    if err_check.is_err() {
        return err_check.unwrap_err().to_string();
    }
    let file_path = path::absolute(path);
    println!("{}", file_path.unwrap().display().to_string());
    let file_data = fs::read_to_string(path).unwrap();
    file_data.into()
}

fn convert_json_to_headers(data: &str) -> HeaderMap {
    let mut map = HeaderMap::new();

    // Deserialize the JSON string into a serde_json::Value
    let data_json = serde_json::from_str::<serde_json::Value>(data).unwrap();

    // Check if the root element is an array of headers
    if let Some(headers) = data_json.as_array() {
        for header in headers {
            // Clone header name and value to ensure they have an owned String type
            let header_key = header["header"].as_str().unwrap().to_string();
            let header_value = header["value"].as_str().unwrap().to_string();

            // Parse the header_key as a HeaderName (Required by HeaderMap::)
            let header_name = header_key.parse::<HeaderName>().unwrap();

            // Insert the owned values into the HeaderMap
            map.insert(header_name, HeaderValue::from_str(&header_value).unwrap());
        }
    }

    map
}

#[tokio::main]
async fn load_data_from_https(
    url: &str,
    headers: &str,
) -> Result<serde_json::Value, reqwest::Error> {
    let client = reqwest::Client::new();
    let data: serde_json::Value = client
        .get(url)
        .headers(convert_json_to_headers(&headers))
        .send()
        .await?
        .json()
        .await?;

    Ok(data)
}

#[tauri::command]
fn get_data_from_https(url: &str, headers: &str) -> String {
    let data = load_data_from_https(url, headers);
    if data.is_err() {
        return data.unwrap_err().to_string();
    }
    serde_json::to_string_pretty(&data.unwrap()).unwrap()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            load_data_from_file,
            save_data_to_file,
            get_data_from_https
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
