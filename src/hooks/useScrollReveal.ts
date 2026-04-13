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
            if (fadeOut) {
                // Single timeline: fade in → hold → fade out
                // One ScrollTrigger owns the whole sequence — no conflicts
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        // markers: true,
                        start,           // fade-in starts here
                        end, // fade-out ends here
                        scrub: 1,
                    },
                });

                // Segment 1: fade IN (from start → `end` offset)
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

                // Segment 2: hold fully visible
                tl.to(el, { opacity: 1, duration: 1 });

                // Segment 3: fade OUT
                tl.to(el, {
                    opacity: 0,
                    y: -y,
                    z: 0,
                    ease: 'power2.in',
                    duration: 1.5,
                });
            }
        }, el);

        return () => ctx.revert();
    }, [fadeOut, y, z, duration, start, end]);

    return ref;
};