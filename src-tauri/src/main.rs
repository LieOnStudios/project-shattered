// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Runs shattered_lib::run(). wow, thats all?
fn main() {
    shattered_lib::run()
}
