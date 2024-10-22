use tauri::http::{HeaderMap, HeaderName, HeaderValue};

use std::fs::{self};

pub fn read_data_from_file(path: &str) -> Result<String, std::io::Error> {
    // Reads file data
    // Returns file data and err
    let file_data = fs::read_to_string(path);
    file_data
}

// pub fn write_data_to_file(data: &str, path: &str) {
//     let _ = fs::write(path, data);
// }

// pub fn create_new_dirs(path: &str) {

// }

// Fixed by @NotGhoull - https://github.com/LieOnLion/project-shattered/commit/3dd2e1ec6600795a99533b8e43b643b916078f56
pub fn convert_json_to_headers(data: &str) -> HeaderMap {
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
pub async fn read_data_from_https(url: &str, headers: &str) -> Result<serde_json::Value, reqwest::Error> {
    // Create a new Client.
    // Send a GET request to server with headers.
    let client = reqwest::Client::new();
    let data: serde_json::Value = client
        .get(url).headers(convert_json_to_headers(&headers))
        .send().await?.json().await?;

    // Returns data and err.
    Ok(data)
}