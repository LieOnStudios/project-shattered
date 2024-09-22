const { invoke } = window.__TAURI__.core;

let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form").addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });
});

async function save_data() {
  let data_str = JSON.stringify( {curseforge: greetInputEl.value}, null, "\t" );
  invoke("save_data_to_file", { dataStr: data_str, path: "../data/ids.json" });
  let file_data = await invoke("load_data_from_file", { path: "../data/ids.json" });
  console.log( file_data );
}

// async function load_data() {
//   let file_data = await invoke("load_data_from_file", { path: "../data/ids.json" });
//   let json = JSON.parse(file_data);
//   greetInputEl.value = json.curseforge;
// }

// load_data();

// greetInputEl.addEventListener("input", () => {
//   greetMsgEl = document.querySelector("#greet-msg");
//   greet();
// });

async function load_data() {
  let file_data = await invoke("get_data_from_https", { url: "https://api.modrinth.com/v2/project/HKKqmr2p", headers: `{"key": "x-api-key", "value": ""}` });
  let header = await invoke("load_data_from_file", { path: "../data/ids.json" });
  let header_json = JSON.parse(header);
  // let file_data = await invoke("get_data_from_https", { url: "https://api.curseforge.com/v1/mods/858032", headers: `{"key": "x-api-key", "value": "${header_json["curseforge"]}"}` });
  // let json = JSON.parse(file_data);
  console.log(file_data);
}