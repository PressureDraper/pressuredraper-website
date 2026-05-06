'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { GSapBackground } from '../UI/GSapBackground';
import { ParticlesBackground } from '../UI/ParticlesBackground';
import { useTranslations } from 'next-intl';

export const About = () => {
    const t = useTranslations("about");
    const stats = t.raw("stats");

    const refInfo = useScrollReveal<HTMLDivElement>({
        fadeOut: true,
        y: 80,
        z: 0,
        duration: 1,
        start: 'top 60%',
        end: 'bottom 50%',
    });

    return (
        <section id="about" className="relative w-full min-h-screen">
            <ParticlesBackground particleCount={10} />
            <GSapBackground />
            <div className="min-h-screen flex items-center mx-auto lg:px-0 xxs:py-24 lg:py-24">
                <div
                    ref={refInfo}
                    className="flex flex-col gap-10 max-w-5xl md:max-w-5xl lg:max-w-6xl xl:max-w-6xl mx-auto justify-items-start px-8 md:px-10 lg:px-10 xl:px-0"
                >
                    <div className="flex flex-col gap-6">
                        <span className="text-accent-500 font-display tracking-widest">{t("title")}</span>
                        {/* <span className="text-primary-400 text-sm font-body tracking-widest">About</span> */}
                        <h2 className="text-neutral-100 text-3xl md:text-4xl font-bold font-display">
                            {t("subtitle")}
                        </h2>
                        <p className="md:w-2/3 text-neutral-400 text-lg font-body leading-relaxed text-justify">
                            {t("description")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        {
                            stats.map((stat: any) => (
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
                                    <span className="text-neutral-400/90 text-sm font-body">
                                        {stat.description}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};
