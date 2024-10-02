const { invoke } = window.__TAURI__.core;
const { appDataDir, appLocalDataDir } = window.__TAURI__.path;

const appDataDirPath = await appDataDir();

async function save_data(file_path, data_str) {
  await invoke("save_data_to_file", { dataStr: data_str, path: file_path });
  let file_data = await invoke("load_data_from_file", { path: file_path });
  console.log( "Set File \"" + file_path + "\" to:\n" + file_data );
  document.getElementById("data").innerHTML = file_path;
}

async function load_data() {
  let file_data = await invoke("get_data_from_https", { url: "https://api.modrinth.com/v2/project/HKKqmr2p", headers: '[{"header": "x-api-key", "value": ""}]' });
  let curseforge_key = await invoke("load_data_from_file", { path: `${appDataDirPath}\\data\\keys.json` });
  let curseforge_key_json = JSON.parse(curseforge_key);
  // let file_data = await invoke("get_data_from_https", { url: "https://api.curseforge.com/v1/mods/858032", headers: `{"key": "x-api-key", "value": "${header_json["curseforge"]}"}` });
  // let json = JSON.parse(file_data);
  console.log(file_data);
}

save_data(`${appDataDirPath}\\data\\keys.json`, JSON.stringify({ curseforge: "my curseforge key :V" }, null, "\t"));
load_data();