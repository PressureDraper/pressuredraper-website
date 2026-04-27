'use client';

import Image from 'next/image';
import { projectsInfo } from '../../utils/projects.utils';

type Project = (typeof projectsInfo)[number];

interface ProjectCardProps {
    project: Project;
    index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
    return (
        <div className="transition-transform duration-300 w-full h-full flex flex-col">
            <div className="relative w-full aspect-video">
                <Image
                    src={project.img}
                    alt="cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-t-lg object-cover"
                />
            </div>
            <div className="group rounded-b-xl border border-neutral-800 border-t-0 bg-neutral-900/20 p-6 flex flex-col gap-4 hover:border-primary-500/70 transition-colors duration-400 flex-1">
                <div className="w-full rounded-md flex justify-between">
                    <span className="text-neutral-100 font-display tracking-[0.2em] text-xs opacity-60">
                        {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <div className="flex gap-4">
                        {project.buttons[0].active && (
                            <a href={project.code_url} target="_blank" rel="noopener noreferrer">
                                <svg
                                    viewBox="0 0 27 27"
                                    fill="none"
                                    stroke="var(--color-neutral-400)"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="hover:cursor-pointer hover:stroke-neutral-200 transition-colors duration-300 w-5 h-5 md:w-5.5 md:h-5.5"
                                >
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                            </a>
                        )}
                        {project.buttons[2].active && (
                            <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 27 27"
                                    fill="none"
                                    stroke="var(--color-neutral-400)"
                                    strokeWidth="1.5"
                                    className="hover:cursor-pointer hover:stroke-neutral-200 transition-colors duration-300 w-5 h-5 md:w-5.5 md:h-5.5"
                                >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
                <span className="text-xl font-bold font-display text-neutral-300 flex justify-between items-center">
                    {project.title}
                    <span className="text-sm font-light">{project.date}</span>
                </span>
                <span className="text-neutral-400 text-sm font-body text-justify">
                    <ul className="list-disc xxs:pl-3 md:pl-4 space-y-1 text-neutral-400 marker:text-primary-300">
                        {project.desc.map((bullet: string, bulletIndex: number) => (
                            <li key={bulletIndex}>{bullet}</li>
                        ))}
                    </ul>
                </span>
                <div className="grid grid-cols-3 xxs:grid-cols-1 md:grid-cols-3 xxs:gap-4">
                    <div className="flex flex-col gap-2">
                        <span className="text-accent-400 text-xs font-body tracking-widest">
                            PROBLEM
                        </span>
                        <span className="text-neutral-400/90 text-sm font-body">
                            {project.problem}
                        </span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-accent-400 text-xs font-body tracking-widest">
                            SOLUTION
                        </span>
                        <span className="text-neutral-400/90 text-sm font-body">
                            {project.solution}
                        </span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-accent-400 text-xs font-body tracking-widest">
                            KEY DECISIONS
                        </span>
                        <span className="text-neutral-400/90 text-sm font-body">
                            {project.key_decisions}
                        </span>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-1.5">
                    {project.icons.map((tech: string) => {
                        const [techName, desc] = tech.split(':');
                        return (
                            <span
                                key={tech}
                                className="flex items-center gap-1.5 px-3 py-1 text-sm border-b border-primary-700 bg-neutral-300/25 rounded-full"
                            >
                                <img
                                    src={`/icons/${techName}.svg`}
                                    className="xxs:w-3 xxs:h-3 md:w-5 md:h-5"
                                    alt={techName}
                                />
                                <span className="text-body text-neutral-300">
                                    {desc ?? techName}
                                </span>
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
