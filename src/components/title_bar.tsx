import { Component } from "solid-js";
import { Maximize, Minus, X } from "lucide-solid";

const TitleBar: Component = () => {
	return (
		<header
			data-tauri-drag-region
			class="inline-flex w-full h-12 items-center justify-between border-b-2 border-slate-700 bg-slate-900 select-none"
		>
			<div class="inline-flex items-center justify-center gap-5 w-56 h-6 border-r-2 border-slate-700">
				<div class="w-6 h-6 bg-purple-800 rounded" />
				<div class="font-bold text-slate-50">Project Shattered</div>
			</div>
			<a
				href="https://github.com/LieOnStudios/project_shattered/tree/windows_dev"
				target="_blank"
				class="font-medium text-xs text-slate-300 hover:text-slate-100 hover:underline"
			>
				v{APP_VERSION} - {BUILD_TYPE}
			</a>
			<div class="inline-flex items-center justify-center gap-4 w-38 h-6 border-l-2 border-slate-700">
				<button
					class="flex justify-center items-center text-slate-100 w-6 h-6 rounded hover:bg-slate-700 cursor-pointer"
					on:click={() => console.log("minimise")}
				>
					<Minus size={16} />
				</button>
				<button
					class="flex justify-center items-center text-slate-100 w-6 h-6 rounded hover:bg-slate-700 cursor-pointer"
					on:click={() => console.log("toggle maximise")}
				>
					<Maximize size={16} />
				</button>
				<button
					class="flex justify-center items-center text-slate-100 w-6 h-6 rounded hover:bg-red-700/50 cursor-pointer"
					on:click={() => console.log("hi")}
				>
					<X size={16} />
				</button>
			</div>
		</header>
	);
};

export default TitleBar;
