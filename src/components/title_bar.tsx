import { Component, createSignal, Match, Switch } from "solid-js";
import { Maximize, Minimize, Minus, X } from "lucide-solid";
import { getCurrentWindow } from "@tauri-apps/api/window";

const window = await getCurrentWindow();

const windowData = () => {
	const [isMaximized, setIsMaximized] = createSignal(false);

	window.listen("tauri://resize", async () => {
		setIsMaximized(await window.isMaximized());
	});

	return { isMaximized };
};

const TitleBar: Component = () => {
	const { isMaximized } = windowData();

	return (
		<header
			data-tauri-drag-region
			class="inline-flex w-full h-8 mb-2 items-center justify-end bg-slate-900 select-none"
		>
			<div class="inline-flex items-center justify-center gap-4 h-6 mx-2">
				<button
					class="flex justify-center items-center text-slate-100 w-6 h-6 rounded hover:bg-slate-700 cursor-pointer"
					on:click={() => window.minimize()}
				>
					<Minus size={16} />
				</button>
				<button
					class="flex justify-center items-center text-slate-100 w-6 h-6 rounded hover:bg-slate-700 cursor-pointer"
					on:click={() => window.toggleMaximize()}
				>
					<Switch>
						<Match when={isMaximized()}>
							<Minimize size={16} />
						</Match>
						<Match when={!isMaximized()}>
							<Maximize size={16} />
						</Match>
					</Switch>
				</button>
				<button
					class="flex justify-center items-center text-slate-100 w-6 h-6 rounded hover:bg-red-700/50 cursor-pointer"
					on:click={() => window.close()}
				>
					<X size={16} />
				</button>
			</div>
		</header>
	);
};

export default TitleBar;
