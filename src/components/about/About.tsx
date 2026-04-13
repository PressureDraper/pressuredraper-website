'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { aboutStats } from '@/utils/about.utils';

export const About = () => {
    const refBackground = useScrollReveal<HTMLDivElement>({ fadeOut: true, y: 0, z: 50, start: 'top 100%', end: 'top 90%', duration: 1 });
    const refInfo = useScrollReveal<HTMLDivElement>({
        fadeOut: true,
        y: 60,
        z: 0,
        start: 'top 60% xxs:100%',
        end: 'top 20%',
    });

    return (
        <div ref={refBackground} className="min-h-screen flex items-center mx-auto lg:px-0 xxs:py-40 lg:py-24">
            <div
                className="absolute inset-0 -z-10 bg-transparent w-full overflow-y-visible xxs:overflow-x-hidden sm:overflow-x-visible lg:overflow-x-visible"
            >
                <div className="absolute top-0 right-0 w-150 h-150 xxs:bg-primary-500/15 lg:bg-primary-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-150 h-150 bg-accent-500/15 rounded-full blur-[120px]" />
            </div>
            <div
                ref={refInfo}
                className="flex flex-col gap-10 max-w-5xl md:max-w-5xl lg:max-w-6xl xl:max-w-6xl mx-auto justify-items-start px-8 md:px-10 lg:px-10 xl:px-0"
            >
                <div className="flex flex-col gap-6">
                    <span className="text-primary-400 text-sm font-body tracking-widest">About</span>
                    <h2 className="text-neutral-100 text-3xl md:text-4xl font-bold font-display">
                        What I bring to a team
                    </h2>
                    <p className="md:w-2/3 text-neutral-400 text-lg font-body leading-relaxed text-justify">
                        I don't just write code — I solve problems. With a strong foundation in both
                        frontend and backend, I bring a product-oriented mindset to any project. I
                        focus on building things that are fast, maintainable, and genuinely useful.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
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
                </div>
            </div>
        </div>
    );
};
