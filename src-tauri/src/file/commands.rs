use super::manager::{read_data_from_file, read_data_from_https};

use std::fs::{self};
use std::path::{self};

#[tauri::command]
pub fn write_file(data_str: &str, path: &str) {
    // Dir err check (if it exists).
    if fs::metadata(path).is_err() {
        // Creates dir if it cannot be found.
        let split_path = path.split("/");
        let no_file_path = path.replace(split_path.last().unwrap(), "");
        let _ = fs::create_dir_all(no_file_path);
    }
    // Writes data to file.
    let _ = fs::write(path, data_str);
}

#[tauri::command]
pub fn read_file(path: &str) -> String {
    // Passes values into read_data_from_file().
    // data err check (if file exists and can be read).
    let file_data = read_data_from_file(path);
    if file_data.is_err() {
        // Returns err and absolute file path.
        return file_data.unwrap_err().to_string() + " from file: " + &path::absolute(path).unwrap().display().to_string();
    }
    // Returns file data.
    return file_data.unwrap()
}

#[tauri::command]
pub fn fetch_get(url: &str, headers: &str) -> String {
    // Passes values into read_data_from_https().
    // data err check.
    let data = read_data_from_https(url, headers);
    if data.is_err() {
        // Returns data err and absolute url.
        return data.unwrap_err().to_string() + " from url: " + &url.to_string();
    }
    // Returns the data in JSON (pretty string).
    return serde_json::to_string_pretty(&data.unwrap()).unwrap()
}