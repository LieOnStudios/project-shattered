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
    // Get file's absolute path.
    // File err check (if it exists and can be read).
    let absolute_path = path::absolute(path);
    let err_check = fs::metadata(path);
    if err_check.is_err() {
        // Returns err and file path.
        return err_check.unwrap_err().to_string() + " from file " + &absolute_path.unwrap().display().to_string();
    }
    // Read file data.
    // Returns file data.
    let file_data = fs::read_to_string(path).unwrap();
    file_data.into()
}

// Fixed by @NotGhoull - https://github.com/LieOnLion/project-shattered/commit/3dd2e1ec6600795a99533b8e43b643b916078f56
fn convert_json_to_headers(data: &str) -> HeaderMap {
    let mut map = HeaderMap::new();
    // Deserialize the JSON string into a serde_json::Value.
    let data_json = serde_json::from_str::<serde_json::Value>(data).unwrap();

    // Check if the root element is an array of headers.
    if let Some(headers) = data_json.as_array() {
        for header in headers {
            // Clone header name and value to ensure they have an owned String type.
            let header_name = header["header"].as_str().unwrap().to_string();
            let header_value = header["value"].as_str().unwrap().to_string();

            // Insert the owned values into the HeaderMap.
            map.insert(header_name.parse::<HeaderName>().unwrap(), HeaderValue::from_str(&header_value).unwrap());
        }
    }
    // Returns HeaderMap.
    map
}

#[tokio::main]
async fn load_data_from_https(url: &str, headers: &str) -> Result<serde_json::Value, reqwest::Error> {
    // Create a new Client.
    // Send a GET request to server with headers.
    let client = reqwest::Client::new();
    let data: serde_json::Value = client
        .get(url).headers(convert_json_to_headers(&headers))
        .send().await?.json().await?;

    // Returns data and err.
    Ok(data)
}

#[tauri::command]
fn get_data_from_https(url: &str, headers: &str) -> String {
    // Passes values into load_data_from_https().
    // Data err check.
    let data = load_data_from_https(url, headers);
    if data.is_err() {
        // Returns data err.
        return data.unwrap_err().to_string();
    }
    // Returns the data in JSON (pretty).
    serde_json::to_string_pretty(&data.unwrap()).unwrap()
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            load_data_from_file,
            save_data_to_file,
            get_data_from_https
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
