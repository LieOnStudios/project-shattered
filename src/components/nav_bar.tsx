import { Component } from "solid-js";

const NavBar: Component = () => {
	return (
		<nav class="flex h-full w-48 bg-slate-900">
			<div
				data-tauri-drag-region
				class="inline-flex items-center justify-between w-full h-12 px-3 py-2"
			>
				<div class="w-6 h-6 bg-purple-800 rounded" />
				<div class="flex flex-col justify-center gap-0">
					<div class="font-bold text-base/4 text-slate-50">Project Shattered</div>
					<a
						href="https://github.com/LieOnStudios/project_shattered/tree/windows_dev"
						target="_blank"
						class="inline-flex font-medium text-xs w-max text-slate-300 hover:underline hover:text-slate-100"
					>
						v{APP_VERSION} - {BUILD_TYPE}
					</a>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
