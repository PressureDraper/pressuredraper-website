'use client';

import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const GSapBackground = () => {
    const refBackground = useRef<any>(null);
    const refLeftCircle = useRef<any>(null);
    const refRightCircle = useRef<any>(null);

    useLayoutEffect(() => {
        const container = refBackground.current;
        const leftCircle = refLeftCircle.current;
        const rightCircle = refRightCircle.current;

        const mm = gsap.matchMedia();

        mm.add('(max-width: 768px)', () => {
            gsap.fromTo(
                container,
                { opacity: 0 },
                {
                    opacity: 1,
                    ease: 'power2.out',
                    z: 0,
                    force3D: true,
                    scrollTrigger: {
                        trigger: '#about',
                        start: 'top 70%',
                        end: '+=73%',
                        scrub: 1,
                    },
                },
            );

            gsap.fromTo(
                [leftCircle, rightCircle],
                {
                    y: (i) => (i === 0 ? '-0dvh' : '0dvh'),
                },
                {
                    y: (i) => (i === 0 ? '-30dvh' : '220dvh'),
                    z: 0,
                    force3D: true,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '#about',
                        start: '+=73% 20%',
                        endTrigger: '#skills',
                        end: '50% 80%',
                        scrub: 1,
                        pin: container,
                        pinSpacing: false,
                        invalidateOnRefresh: true,
                    },
                },
            );
        });

        mm.add('(min-width: 769px)', () => {
            gsap.fromTo(
                container,
                { opacity: 0 },
                {
                    opacity: 1,
                    ease: 'power2.out',
                    z: 0,
                    force3D: true,
                    scrollTrigger: {
                        trigger: '#about',
                        start: 'top 70%',
                        end: '+=73%',
                        scrub: 1,
                    },
                },
            );

            gsap.fromTo(
                [leftCircle, rightCircle],
                {
                    y: (i) => (i === 0 ? '-0dvh' : '0dvh'),
                },
                {
                    y: (i) => (i === 0 ? '30dvh' : '110dvh'),
                    z: 0,
                    force3D: true,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '#about',
                        start: '+=73% 20%',
                        endTrigger: '#skills',
                        end: '50% 80%',
                        scrub: 1,
                        pin: container,
                        pinSpacing: false,
                        invalidateOnRefresh: true,
                    },
                },
            );
        });

        return () => {
            mm.revert();
            ScrollTrigger.getAll()
                .filter(st => !document.contains(st.trigger as Element))
                .forEach(st => st.kill());
        };
    }, []);

    return (
        <div ref={refBackground} className="absolute inset-0 z-0 w-full h-full">
            <div
                ref={refLeftCircle}
                className="absolute bottom-0 left-0 w-80 h-80 md:w-100 md:h-100 2xl:w-150 2xl:h-150 bg-accent-500/10 xxs:bg-accent-500/25 md:bg-accent-500/10 rounded-full blur-[80px] md:blur-[120px]"
                style={{ willChange: 'transform' }}
            />
            <div
                ref={refRightCircle}
                className="absolute top-0 xxs:top-20 right-0 w-80 h-80 md:w-100 md:h-100 2xl:w-150 2xl:h-150 bg-primary-500/10 xxs:bg-primary-500/25 md:bg-primary-500/10 rounded-full blur-[80px] md:blur-[120px]"
                style={{ willChange: 'transform' }}
            />
        </div>
    );
};
