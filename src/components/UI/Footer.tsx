export const Footer = () => {
    return (
        <div className="flex xxs:flex-col xxs:justify-center md:flex-row justify-between items-center max-w-5xl md:max-w-5xl lg:max-w-6xl xl:max-w-6xl mx-auto md:px-10 lg:px-10 xl:px-0 py-8 w-full xxs:gap-3 md:gap-0">

            <div>
                <span className="font-body text-neutral-400 font-light tracking-wide">
                    © {new Date().getFullYear()} preSoftCore. All rights reserved.
                </span>
            </div>

            <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
                <span className="text-md text-neutral-400 font-body font-light flex items-center justify-center gap-1.5">
                    Designed and built with{' '}
                    <span className="inline-block animate-[heartbeat_1.6s_ease-in-out_infinite]">❤️</span>
                </span>
            </div>

            <div className="md:ml-auto flex items-center gap-2">
                <span className="relative flex w-2 h-2">
                    <span className="animate-ping absolute inline-flex h-4 w-4 -top-1 -left-1 rounded-full bg-accent-500 opacity-30" style={{ animationDuration: '2s' }} />
                    <span className="relative inline-flex rounded-full w-2 h-2 bg-accent-500" />
                </span>
                <span className="font-light text-accent-500 font-body">Available for work</span>
            </div>

        </div>
    )
};
