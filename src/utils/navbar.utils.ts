import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

export const navItems = [
    { name: 'home', href: '#' },
    { name: 'about', href: '#' },
    { name: 'projects', href: '#' },
    { name: 'skills', href: '#' },
    { name: 'contact', href: '#' },
];

export const handleItemClick = (e: any, name: string, setIsMenuOpen?: (isOpen: boolean) => void) => {
    e.preventDefault();

    const id = name.toLowerCase();
    const section = document.getElementById(id);

    if (id !== 'home' && !section) return;

    gsap.to(window, {
        scrollTo: { y: id === 'home' ? 0 : section!, autoKill: true },
        duration: 1.2,
        ease: 'power3.out',
    });
    
    setIsMenuOpen?.(false);
};