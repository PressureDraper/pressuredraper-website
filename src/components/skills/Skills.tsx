
export const Skills = () => {
    return (
        <section id="skills" className="relative w-full min-h-screen">
            <div className="min-h-screen flex items-center mx-auto lg:px-0 xxs:py-40 lg:py-24">
                <div
                    className="flex flex-col gap-10 max-w-5xl md:max-w-5xl lg:max-w-6xl xl:max-w-6xl mx-auto justify-items-start px-8 md:px-10 lg:px-10 xl:px-0"
                >
                    <div className="flex flex-col gap-6">
                        <span className="text-accent-500 font-display tracking-widest">Skills</span>
                        <h2 className="text-neutral-100 text-3xl md:text-4xl font-bold font-display">
                            Technical depth
                        </h2>
                        <p className="md:w-2/3 text-neutral-400 text-lg font-body leading-relaxed text-justify">
                            Technologies I work with daily, grouped by domain. I value depth over breadth — I'd rather master a few tools than skim many.
                        </p>
                    </div>

                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        {aboutStats.map((stat) => (
                            <div
                                key={stat.title}
                                className="group rounded-xl border border-neutral-800 bg-neutral-900/20 p-6 flex flex-col gap-2 hover:border-primary-500/70 transition-colors duration-400"
                            >
                                {stat.svg && (
                                    <div
                                        className="about-icon w-fit h-auto text-primary-400/80 group-hover:text-primary-300 bg-primary-500/10 rounded-md p-1.5 mb-3 transition-colors duration-400"
                                        dangerouslySetInnerHTML={{ __html: stat.svg }}
                                    />
                                )}
                                <span className="text-xl font-bold font-display text-neutral-300">
                                    {stat.title}
                                </span>
                                <span className="text-neutral-400/90 text-sm font-body">{stat.description}</span>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    )
}
