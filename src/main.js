const { invoke } = window.__TAURI__.core;

async function save_data() {
  let data_str = JSON.stringify({ curseforge: "key :)" }, null, "\t");
  invoke("save_data_to_file", { dataStr: data_str, path: "../data/keys.json" });
  let file_data = await invoke("load_data_from_file", { path: "../data/keys.json" });
  console.log( file_data );
}

async function load_data() {
  let file_data = await invoke("get_data_from_https", { url: "https://api.modrinth.com/v2/project/HKKqmr2p", headers: `{"key": "x-api-key", "value": ""}` });
  let curseforge_key = await invoke("load_data_from_file", { path: "../data/keys.json" });
  let curseforge_key_json = JSON.parse(curseforge_key);
  // let file_data = await invoke("get_data_from_https", { url: "https://api.curseforge.com/v1/mods/858032", headers: `{"key": "x-api-key", "value": "${header_json["curseforge"]}"}` });
  // let json = JSON.parse(file_data);
  console.log(file_data);
}

save_data()