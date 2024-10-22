import { useState } from 'react'
import { getCurrentWindow } from '@tauri-apps/api/window';
import { appDataDir } from "@tauri-apps/api/path";
const appWindow = getCurrentWindow();

// const defaultConfig = {
//     theme: 'system',
//     nav: {
//         compact: false
//     }
// };

const AppManager = () => {
    // const [config, setconfig] = useState();
    const [maximised, setMaximised] = useState(false);

    appWindow.listen('tauri://resize', async () => {
        setMaximised(await appWindow.isMaximized());
    });

    // useEffect(() => {
    //     const save = async () => {
    //         const dataDir = await appDataDir();
    //         await invoke('write_file', {path: `${dataDir}\\config.json`, data: (JSON.stringify(config, null, 4))});
    //     }; save();
    // }, [config]);

    // useEffect(() => {
    //     const manageConfig = async () => {
    //         const dataDir = await appDataDir();
    //         const config_read = await invoke('read_file', { path: `${dataDir}\\config.json` });
    //         const config_json = JSON.parse(config_read);

    //         setconfig(() => {
    //             fillObject(defaultConfig, config_json)
    //             console.log(config_json);
    //             return({
    //                 ...defaultConfig, ...config_json
    //             }
    //         )});
    //     }; 
    //     manageConfig();
    // }, [])
    
    // const fillObject = (from, to) => {
    //     for (var key in from) {
    //         if (Object.prototype.toString.call(from[key]) === '[object Object]') {
    //             if (!to.hasOwnProperty(key)) {
    //                 to[key] = {};
    //             }
    //             fillObject(from[key], to[key]);
    //         }
    //         else if (!to.hasOwnProperty(key)) {
    //             to[key] = from[key];
    //         }
    //     } for (var key in to) {
    //         if (!from.hasOwnProperty(key)) {
    //             delete to[key]
    //         }
    //     }
    // }

    return { appWindow, appDataDir, maximised };
};

export default AppManager;