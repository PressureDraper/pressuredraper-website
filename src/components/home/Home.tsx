import { HomeButtons } from './HomeButtons';

export const Home = () => {
    return (
        <>
            <video
                className="absolute inset-0 h-full w-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="./background.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-neutral-950/55 z-0" />

            <div className="relative z-10 min-h-[calc(100vh-4rem)] flex flex-col justify-center max-w-6xl mx-auto gap-6 md:gap-8 px-8 md:px-10 lg:px-10 xl:px-0 py-10 xxs:py-0 xsl:py-10 xs:py-10 sm:py-10 md:py-10 lg:py-0 xl:py-0">
                <h1 className="text-neutral-200 text-4xl md:text-7xl font-extrabold font-display">
                    Precision, by{' '}
                    <span className="gradient-text bg-linear-to-br from-primary-500 to-accent-400 to-85% bg-clip-text text-transparent">
                        design
                    </span>
                </h1>
                <h2 className="text-neutral-200 text-3xl md:text-6xl font-extrabold font-display">
                    <span className="gradient-text bg-linear-to-br from-primary-500 to-accent-400 to-85% bg-clip-text text-transparent">
                        Depth{' '}
                    </span>
                    in every layer
                </h2>
                <p className="text-neutral-400 text-lg md:text-xl max-w-2xl font-body">
                    Software Engineer with +4 years of experience specialized in full-stack
                    development — building a seamless blend of performance, security and aesthetics.
                </p>
                <HomeButtons />
                <div className="flex flex-row gap-8 mt-5">
                    <a href="https://github.com/PressureDraper" target="_blank">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={'var(--color-neutral-400)'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="hover:cursor-pointer hover:stroke-neutral-200 transition-colors duration-300 w-5 h-5 md:w-5.5 md:5.5"
                        >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/pressuredraper" target="_blank">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={'var(--color-neutral-400)'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="hover:cursor-pointer hover:stroke-neutral-200 transition-colors duration-300 w-5 h-5 md:w-5.5 md:h-5.5"
                        >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                    <a href="mailto:rojeru.san1983@gmail.com" target="_blank">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={'var(--color-neutral-400)'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="hover:cursor-pointer hover:stroke-neutral-200 transition-colors duration-300 w-5 h-5 md:w-5.5 md:h-5.5"
                        >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
};
