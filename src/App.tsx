import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import { appDataDir } from "@tauri-apps/api/path";
import "./App.css";

function App() {
  async function getData() {
    const appDataDirPath = await appDataDir();
    let keys: string = await invoke("read_file", { path: `${appDataDirPath}\\data\\keys.json` });
    let keys_json = JSON.parse(keys);
    console.log(await invoke("fetch_get", { url: "https://api.curseforge.com/v1/mods/858032", headers: `[{"header": "x-api-key", "value": "${keys_json["curseforge"]}"}]` }));
  }
  getData()

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          id="greet-input"
          onChange={() => getData()}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
    </div>
  );
}

export default App;
