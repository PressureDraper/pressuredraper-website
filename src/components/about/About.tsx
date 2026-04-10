'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export const About = () => {
    const refBackground = useScrollReveal<HTMLDivElement>({ fadeOut: true, y: 0, z: 50 });
    const refInfo = useScrollReveal<HTMLDivElement>({
        fadeOut: true,
        y: 60,
        z: 0,
        start: 'top 60% xxs:100%',
        end: 'top 20%',
    });

    return (
        <div className="min-h-screen flex items-center mx-auto lg:px-0 xxs:py-40 lg:py-24">
            <div
                ref={refBackground}
                className="absolute inset-0 -z-10 bg-transparent w-full overflow-y-visible xxs:overflow-x-hidden sm:overflow-x-visible lg:overflow-x-visible"
            >
                <div className="absolute top-0 right-0 w-150 h-150 xxs:bg-primary-500/10 lg:bg-primary-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-150 h-150 bg-accent-500/15 rounded-full blur-[120px]" />
            </div>
            <div
                ref={refInfo}
                className="flex flex-col gap-10 max-w-5xl md:max-w-5xl lg:max-w-6xl xl:max-w-6xl mx-auto justify-items-start px-8 md:px-10 lg:px-10 xl:px-0"
            >
                <div className="flex flex-col gap-6">
                    <span className="text-accent-400 text-sm font-body tracking-widest">About</span>
                    <h2 className="text-neutral-100 text-4xl md:text-5xl font-extrabold font-display">
                        What i bring to a{' '}
                        <span className="bg-linear-to-br from-primary-500 to-accent-400 to-65% bg-clip-text text-transparent">
                            team
                        </span>
                    </h2>
                    <p className="grid grid-cols-1 md:grid-cols-2 text-neutral-400 text-lg font-body leading-relaxed">
                        I don't just write code — I solve problems. With a strong foundation in both
                        frontend and backend, I bring a product-oriented mindset to anywhere I go. I
                        focus on building things that are fast, maintainable, and genuinely useful.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {[
                        { label: 'Years of experience', value: '4+' },
                        { label: 'Projects shipped', value: '20+' },
                        { label: 'Technologies', value: '15+' },
                        { label: 'Coffee per day', value: '3' },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 flex flex-col gap-2"
                        >
                            <span className="text-3xl font-extrabold font-display text-neutral-100">
                                {stat.value}
                            </span>
                            <span className="text-neutral-500 text-sm font-body">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
