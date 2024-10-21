import { getCurrentWindow } from '@tauri-apps/api/window';
import { useState } from "react";
const appWindow = getCurrentWindow();

import { LuMinus } from "react-icons/lu";
import { FiMinimize, FiMaximize } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

const TitleBar = () => {
    const [maximised, setMaximised] = useState<boolean>(false);

    appWindow.listen("tauri://resize", async () => {
        setMaximised(await appWindow.isMaximized());
    });

    return (
        <header data-tauri-drag-region className='inline-flex w-full h-12 items-center justify-between border-b-2 border-grey-300 select-none'>
            <div className='inline-flex items-center justify-center gap-4 w-56 h-6 border-r-2 border-grey-300'>
                <div className='w-6 h-6 bg-primary-100 rounded' />
                <div className='font-bold text-grey-950'>Project Shattered</div>
            </div>
            <div data-tauri-drag-region className='font-medium text-xs text-grey-800'>v{APP_VERSION} - {BUILD_TYPE} build</div>
            <div className='inline-flex items-center justify-center gap-6 w-40 h-6 border-l-2 border-grey-300'>
                <button className='flex justify-center items-center text-grey-900 w-6 h-6 rounded hover:bg-grey-300' onClick={() => appWindow.minimize()}>
                    <LuMinus className='h-5 flex justify-center' />
                </button>
                <button className='flex justify-center items-center text-grey-900 w-6 h-6 rounded hover:bg-grey-300' onClick={() => appWindow.toggleMaximize()}>
                    {!maximised && <FiMaximize className='h-5' />}
                    {maximised && <FiMinimize className='h-5' />}
                </button>
                <button className='flex justify-center items-center text-grey-900 w-6 h-6 rounded hover:bg-red-500 bg-opacity-50' onClick={() => appWindow.close()}>
                    <CgClose className='h-5' />
                </button>
            </div>
        </header>
    );
};

export default TitleBar;