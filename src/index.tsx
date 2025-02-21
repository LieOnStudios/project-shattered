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
			<TitleBar />
			<div class="inline-flex w-svw h-[calc(100svh-(var(--spacing)*12))] overflow-hidden">
				<NavBar />
				<div class="flex flex-col w-[calc(100svw-2px-(var(--spacing)*56))] overflow-auto gap-72 bg-slate-800">
					{props.children}
				</div>
			</div>
		</>
	);
};

render(() => <Routes root={App} />, document.getElementById("root") as HTMLElement);
