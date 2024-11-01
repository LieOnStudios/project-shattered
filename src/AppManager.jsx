import { useState } from 'react'
import { getCurrentWindow } from '@tauri-apps/api/window';
import { appDataDir } from "@tauri-apps/api/path";
const appWindow = getCurrentWindow();

const defaultConfig = {
    theme: 'system',
    nav: {
        compact: false
    }
};

const AppManager = () => {
    const [maximised, setMaximised] = useState(false);

    appWindow.listen('tauri://resize', async () => {
        setMaximised(await appWindow.isMaximized());
    });

    return { appWindow, appDataDir, maximised };
};

export default AppManager;