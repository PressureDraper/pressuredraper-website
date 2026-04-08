
export const Home = () => {
    return (
        <>
            <video className="absolute inset-0 h-full w-full object-cover" autoPlay loop muted playsInline>
                <source src="./background.webm" type="video/webm" />
            </video>

            <div className="absolute inset-0 bg-neutral-950/50" />

            <div className="relative z-10 flex flex-col h-full justify-center max-w-6xl mx-auto gap-4 md:gap-8 px-8 md:px-0">
                <h1 className="text-neutral-200 text-4xl md:text-7xl font-extrabold font-display">
                    Precision, by
                    <span className="gradient-text bg-linear-to-br from-primary-500 to-accent-400 to-65% bg-clip-text text-transparent ml-2 md:ml-3">
                        design
                    </span>
                    .
                </h1>
                <h2 className="text-neutral-200 text-3xl md:text-6xl font-extrabold font-display">
                    <span className="gradient-text bg-linear-to-br from-primary-500 to-accent-400 to-65% bg-clip-text text-transparent mr-2 md:mr-3">
                        Depth
                    </span>
                    in every layer.
                </h2>
                <p className="text-neutral-400 text-lg md:text-xl max-w-2xl font-body">
                    Software Engineer with +4 years of experience specialized in full-stack development — where precision meets design in a seamless blend of performance, security and aesthetics.
                </p>
            </div>
        </>
    )
}
