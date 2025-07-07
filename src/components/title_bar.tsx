import { Component, createSignal, Show } from "solid-js";
import { Maximize, Minimize, Minus, X } from "lucide-solid";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { Button } from "./ui/button";

const window = getCurrentWindow();

const getIsWindowMaximised = () => {
  const [isMaximised, setIsMaximised] = createSignal(false);

  window.listen("tauri://resize", async () => {
    setIsMaximised(await window.isMaximized());
  });

  return { isMaximised };
};

const TitleBar: Component = () => {
  const { isMaximised } = getIsWindowMaximised();

  return (
    <header
      data-tauri-drag-region
      class="inline-flex w-full h-12 p-2 items-center justify-end select-none"
    >
      <div class="inline-flex items-center justify-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          extra="hover:bg-slate-200 dark:hover:bg-slate-800"
          on:click={() => window.minimize()}
        >
          <Minus size={16} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          extra="hover:bg-slate-200 dark:hover:bg-slate-800"
          on:click={() => window.toggleMaximize()}
        >
          <Show when={isMaximised()} fallback={<Maximize size={16} />}>
            <Minimize size={16} />
          </Show>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          extra="hover:bg-red-600/50 dark:hover:bg-red-600/50"
          on:click={() => window.close()}
        >
          <X size={16} />
        </Button>
      </div>
    </header>
  );
};

export default TitleBar;
