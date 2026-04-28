'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { skills } from '@/utils/skills.utils';
import Image from 'next/image';
import { ParticlesBackground } from '../UI/ParticlesBackground';

export const Skills = () => {
    const refSkills = useScrollReveal<HTMLDivElement>({
        fadeOut: true,
        y: 80,
        z: 0,
        duration: 1,
        start: 'top 60%',
        end: 'bottom 50%',
    });

    return (
        <section id="skills" className="relative w-full min-h-screen">
            <ParticlesBackground particleCount={30} />
            <div className="min-h-screen flex items-center mx-auto lg:px-0 xxs:py-24 lg:py-24">
                <div
                    ref={refSkills}
                    className="flex flex-col gap-10 max-w-5xl md:max-w-5xl lg:max-w-6xl xl:max-w-6xl mx-auto justify-items-start px-8 md:px-10 lg:px-10 xl:px-0"
                >
                    <div className="flex flex-col gap-6">
                        <span className="text-primary-400 font-display tracking-widest">
                            Skills
                        </span>
                        <h2 className="text-neutral-100 text-3xl md:text-4xl font-bold font-display">
                            Technical depth
                        </h2>
                        <p className="md:w-2/3 text-neutral-400 text-lg font-body leading-relaxed text-justify">
                            Technologies I've worked with, grouped by domain. I value depth over
                            breadth — I'd generally rather master a few tools than skim many.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                        {skills.map((stat) => (
                            <div
                                key={stat.title}
                                className="group rounded-xl border border-neutral-800 bg-neutral-900/20 p-5 flex flex-col gap-4 hover:border-accent-500/70 transition-colors duration-400"
                            >
                                <div className="flex flex-row items-center gap-2">
                                    {stat.svg && (
                                        <div
                                            className="about-icon w-fit h-auto text-accent-400/70 group-hover:text-accent-300 bg-accent-500/10 rounded-md p-1.5 transition-colors duration-400"
                                            dangerouslySetInnerHTML={{ __html: stat.svg }}
                                        />
                                    )}
                                    <span className="text-sm font-light font-display text-primary-200">
                                        {stat.title}
                                    </span>
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {stat.badges.map((skill: string) => {
                                        const [techName, desc] = skill.split(':');
                                        return (
                                            <div
                                                key={skill}
                                                className="flex flex-row gap-2 items-center bg-neutral-900/80 border border-neutral-500/30 p-1 rounded-sm"
                                            >
                                                <Image
                                                    loading="lazy"
                                                    width={21}
                                                    height={21}
                                                    src={`/icons/${techName.toLocaleLowerCase()}.svg`}
                                                    alt={techName}
                                                    style={{
                                                        width: 21,
                                                        height: 21,
                                                        borderRadius:
                                                            skill === 'typescript' ? 5 : 0,
                                                    }}
                                                />
                                                <span className="text-sm font-body text-neutral-300">
                                                    {desc ? desc : techName}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
