export const Footer = () => {
    return <div className="flex xxs:flex-col-reverse md:flex-row justify-between max-w-5xl md:max-w-5xl lg:max-w-6xl xl:max-w-6xl mx-auto px-8 md:px-10 lg:px-10 xl:px-0 py-12 w-full xxs:gap-5 md:gap-0">
        <div className="flex flex-col items-start gap-2">
            <span className="font-body text-primary-100 font-bold tracking-wide">
                © {new Date().getFullYear()} preSoftCore. All rights reserved.
            </span>
            <span className="text-md text-primary-400 font-body flex items-center gap-1.5">
                Design and build with{' '}
                <span className="inline-block animate-[heartbeat_1.6s_ease-in-out_infinite]">❤️</span>
            </span>
        </div>
        <div className="flex flex-col xxs:items-start md:items-end ">
            <span className="text-primary-100 text-xl font-display font-medium tracking-wide">
                Current Status
            </span>
            <div className="flex items-center gap-2">
                <span className="relative flex w-2 h-2">
                    <span className="animate-ping absolute inline-flex h-4 w-4 -top-1 -left-1 rounded-full bg-green-400 opacity-30" style={{ animationDuration: '2s' }} />
                    <span className="relative inline-flex rounded-full w-2 h-2 bg-green-400" />
                </span>
                <span className="text-md font-medium text-green-400 font-body">Available for work</span>
            </div>
        </div>
    </div>;
};
