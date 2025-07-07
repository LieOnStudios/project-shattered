use dotenvy::dotenv;
use std::env;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![get_encryption_key])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn get_encryption_key() -> String {
    dotenv().ok();
    let enc_password =
        env::var("ENC_PASSWORD").expect("ENC_PASSWORD is required to encrypt API keys");

    enc_password
}
