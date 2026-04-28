import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

export const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Skills', href: '#' },
    { name: 'Contact', href: '#' },
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