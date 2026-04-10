'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollChildrenOptions } from '@/interfaces/gsap.types';

gsap.registerPlugin(ScrollTrigger);

export const useScrollChildren = <T extends HTMLElement = HTMLElement>(
    options: ScrollChildrenOptions = {},
) => {
    const { selector = '[data-reveal]', stagger = 0.15, y = 40, start = 'top 75%' } = options;

    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const children = el.querySelectorAll(selector);
        if (!children.length) return;

        gsap.fromTo(
            children,
            { opacity: 0, y },
            {
                opacity: 1,
                y: 0,
                stagger,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start,
                    toggleActions: 'play none none reverse',
                },
            },
        );

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, [selector, stagger, y, start]);

    return ref;
};
