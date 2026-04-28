'use client';

import { useState } from 'react';

export const HomeButtons = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleDownload = async () => {
        setLoading(true);

        try {
            const response = await fetch(
                'https://pub-3f6d278538eb44eb9d12c305b7f17f51.r2.dev/CV_SAHIB_HERNANDEZ_EN.pdf',
            );
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'CV_SAHIB_HERNANDEZ_EN.pdf';
            link.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleProjectsClick = (e: React.MouseEvent<HTMLButtonElement>, name: string) => {

        const section = document.getElementById(name.toLowerCase());

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-row gap-4">
            <button onClick={(e) => handleProjectsClick(e, 'projects')} className="rounded-xl px-3.5 py-2.5 bg-transparent border-b border-accent-500 text-sm text-neutral-200 font-medium font-body hover:bg-accent-950/30 transition-colors duration-300 hover:cursor-pointer">
                View Projects <span className="ml-1 font-bold">→</span>
            </button>
            <button
                onClick={handleDownload}
                disabled={loading}
                className="rounded-xl px-3.5 py-2.5 bg-transparent text-sm text-neutral-200 font-medium font-body hover:bg-neutral-900 transition-colors duration-300 hover:cursor-pointer border-b border-neutral-500"
            >
                {loading ? (
                    <div className="flex flex-row items-center gap-2">
                        <svg
                            className="animate-spin w-4 h-4 text-neutral-400"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            />
                        </svg>
                        <span>Downloading...</span>
                    </div>
                ) : (
                    <>
                        <span className="font-bold">↓</span> Download Resume
                    </>
                )}
            </button>
        </div>
    );
};
