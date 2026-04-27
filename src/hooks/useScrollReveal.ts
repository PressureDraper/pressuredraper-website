'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollRevealOptions } from '@/interfaces/gsap.types';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = <T extends HTMLElement = HTMLElement>(
    options: ScrollRevealOptions = {},
) => {
    const {
        fadeOut = true,
        y = 200,
        z = 0,
        duration = 1,
        start = 'top 60%',
        end = 'bottom 40%',
    } = options;

    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start,
                    end,
                    scrub: 1,
                },
            });

            tl.fromTo(
                el,
                { opacity: 0, y, z },
                {
                    opacity: 1,
                    y: 0,
                    z: 0,
                    ease: 'power2.out',
                    duration: 2,
                },
            );

            tl.to(el, { opacity: 1, duration: 1 });

            tl.to(el, {
                opacity: 0,
                y: -y,
                z: 0,
                ease: 'power2.in',
                duration: 2,
            });
        }, el);

        return () => ctx.revert();
    }, [fadeOut, y, z, duration, start, end]);

    return ref;
};
