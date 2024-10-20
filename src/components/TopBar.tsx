const TopBar = () => {
    return (
        <header className='border-b-2 border-grey-300'>
            <div className='inline-flex items-center justify-center py-2 gap-4 w-56 border-r-2 border-grey-300'>
                <div className='w-8 h-8 bg-primary-100 rounded-avg' />
                <div className='flex flex-col gap-0'>
                    <span className='font-bold text-grey-950'>Project Shattered</span>
                    <span className='font-medium text-xs text-grey-800'>v{APP_VERSION} - {BUILD_TYPE} build</span>
                </div>
            </div>
        </header>
    );
};

export default TopBar;