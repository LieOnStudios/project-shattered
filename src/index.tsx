/* @refresh reload */
import { Component } from "solid-js";
import { render } from "solid-js/web";
import Routes from "./routes";
import "./index.css";

// Components
import TitleBar from "./components/title_bar";
import NavBar from "./components/nav_bar";

interface Props {
  children?: HTMLElement;
}

const App: Component<Props> = (props) => {
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
