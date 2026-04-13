
export const Projects = () => {
    return (
        <div className='min-h-screen flex items-center mx-auto lg:px-0 xxs:py-40 lg:py-24'>
            <div
                className="flex flex-col gap-10 max-w-5xl md:max-w-5xl lg:max-w-6xl xl:max-w-6xl mx-auto justify-items-start px-8 md:px-10 lg:px-10 xl:px-0"
            >
                <div className="flex flex-col gap-6">
                    <span className="text-primary-400 text-sm font-body tracking-widest">Projects</span>
                    <h2 className="text-neutral-100 text-3xl md:text-4xl font-bold font-display">
                        Selected Work
                    </h2>
                    <p className="md:w-2/3 text-neutral-400 text-lg font-body leading-relaxed text-justify">
                        A few projects that showcase how I think — from problem identification to architecture decisions and trade-offs.
                    </p>
                </div>
            </div>
        </div>
    )
}
