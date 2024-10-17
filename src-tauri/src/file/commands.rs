use super::manager::{load_data_from_https};

use std::fs::{self};
use std::path::{self};

#[tauri::command]
pub fn save_data_to_file(data_str: &str, path: &str) {
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
pub fn load_data_from_file(path: &str) -> String {
    // File err check (if it exists and can be read).
    let err_check = fs::metadata(path);
    if err_check.is_err() {
        // Returns err and absolute file path.
        return err_check.unwrap_err().to_string() + " from file " + &path::absolute(path).unwrap().display().to_string();
    }
    // Read file data.
    // Returns file data.
    let file_data = fs::read_to_string(path).unwrap();
    file_data.into()
}

#[tauri::command]
pub fn get_data_from_https(url: &str, headers: &str) -> String {
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