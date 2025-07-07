/* @refresh reload */
import { Component, createEffect } from "solid-js";
import { render } from "solid-js/web";
import Routes from "./routes";
import "./index.css";

// Components
import TitleBar from "./components/title_bar";
import NavBar from "./components/nav_bar";
import { invoke } from "@tauri-apps/api/core";

interface Props {
  children?: HTMLElement;
}

const App: Component<Props> = (props) => {
  createEffect(async () => {
    const message = await invoke<string>("get_encryption_key");
    console.log(message);
  });

  return (
    <>
      <NavBar />
      <div class="flex flex-col grow overflow-hidden">
        <TitleBar />
        <main class="flex flex-col grow overflow-auto gap-4 mr-2 mb-2 p-2 rounded-lg bg-slate-200 dark:bg-slate-800">
          {props.children}
        </main>
      </div>
    </>
  );
};

render(
  () => <Routes root={App} />,
  document.getElementById("root") as HTMLElement
);
