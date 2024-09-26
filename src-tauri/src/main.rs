#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fs::{ self };

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
        return err_check.unwrap_err().to_string()
    }
    let json = fs::read_to_string(path).unwrap();
    json.into()
}

#[tokio::main]
async fn load_data_from_https(url: &str, headers: &str) -> Result<serde_json::Value, reqwest::Error> {
    let client = reqwest::Client::new();
    let headers_json_wraped: Result<serde_json::Value, serde_json::Error> = serde_json::from_str(headers);
    let header_json = headers_json_wraped.unwrap();
    let data: serde_json::Value = client.get(url).header(header_json["key"].as_str().unwrap(), header_json["value"].as_str().unwrap()).send().await?.json().await?;

    Ok(data)
}

#[tauri::command]
fn get_data_from_https(url: &str, headers: &str) -> String {
    let data = load_data_from_https(url, headers);
    if data.is_err() {
        return data.unwrap_err().to_string()
    }
    serde_json::to_string_pretty(&data.unwrap()).unwrap()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![load_data_from_file, save_data_to_file, get_data_from_https])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}