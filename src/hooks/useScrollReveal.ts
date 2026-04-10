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
        start = 'top 40%',
        end = 'top 10%',
    } = options;

    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        gsap.fromTo(
            el,
            { opacity: 0, y, z },
            {
                opacity: 1,
                y: 0,
                z: 0,
                duration,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start,
                    end,
                    scrub: 1,
                },
            },
        );

        if (fadeOut) {
            gsap.to(el, {
                opacity: 0,
                y: -y,
                z: -z,
                scrollTrigger: {
                    trigger: el,
                    start: 'bottom 55%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, [fadeOut, y, duration, start, end]);

    return ref;
};
