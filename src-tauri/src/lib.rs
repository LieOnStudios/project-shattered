use file::commands::{fetch_get, read_file, write_file};


mod file;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            read_file,
            write_file,
            fetch_get
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
