'use client';

import { handleItemClick, navItems } from '@/utils/navbar.utils';
import { MenuButton } from './MenuButton';
import { useEffect, useState } from 'react';
import { LanguageButton } from './LanguageButton';
import { useTranslations } from "next-intl";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const t = useTranslations("nav");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`text-neutral-400 w-full mx-auto px-4 h-16 border-b border-neutral-700/20 select-none transition-colors duration-300 fixed z-50 ${scrolled ? 'bg-neutral-600/10 backdrop-blur-sm' : 'bg-transparent'}`}
        >
            <nav className="relative max-w-6xl mx-auto h-full flex items-center justify-between">
                <div className="w-5/12 font-display text-xl">
                    <span className="gradient-text bg-linear-to-br from-primary-500 from-0% to-accent-400 bg-clip-text text-transparent font-bold">
                        preSoft
                    </span>
                    <span className="font-bold">Core</span>
                </div>
                <div className="hidden md:flex w-7/12 items-center justify-end gap-10">
                    {navItems.map((item) => (
                        <a
                            onClick={(e) => handleItemClick(e, item.name)}
                            key={item.name}
                            href={item.href}
                            className="nav-link font-body relative text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
                            style={{ '--line-width': '100%' } as React.CSSProperties}
                            aria-label={`Navigate to ${item.name} section`}
                        >
                            {t(item.name)}
                        </a>
                    ))}
                </div>
                <LanguageButton />
                <MenuButton />
            </nav>
        </header>
    );
};
