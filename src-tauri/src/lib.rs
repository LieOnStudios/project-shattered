use file::commands::{load_data_from_file, save_data_to_file, get_data_from_https};

mod file;

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
