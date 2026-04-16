'use client';

import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export const GSapBackground = () => {
    const refBackground = useRef<any>(null);
    const refLeftCircle = useRef<any>(null);
    const refRightCircle = useRef<any>(null);

    useLayoutEffect(() => {
        const container = refBackground.current;
        const leftCircle = refLeftCircle.current;
        const rightCircle = refRightCircle.current;

        const mm = gsap.matchMedia();

        mm.add("(max-width: 768px)", () => {
            gsap.fromTo(
                container,
                { opacity: 0 },
                {
                    opacity: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '#about',
                        start: 'top 70%',
                        end: '+=73%',
                        scrub: 1,
                    },
                }
            );

            gsap.to([leftCircle, rightCircle], {
                y: (i) => (i === 0 ? '-80dvh' : '110dvh'),
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '#about',
                    start: '+=73% 70%',
                    endTrigger: '#projects',
                    end: 'bottom 70%',
                    scrub: 1,
                    pin: container,
                    pinSpacing: false,
                    invalidateOnRefresh: true
                },
            });
        });

        mm.add("(min-width: 769px)", () => {
            gsap.fromTo(
                container,
                { opacity: 0 },
                {
                    opacity: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '#about',
                        start: 'top 70%',
                        end: '+=73%',
                        scrub: 1,
                    },
                }
            );

            gsap.to([leftCircle, rightCircle], {
                y: (i) => (i === 0 ? '-50dvh' : '30dvh'),
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '#about',
                    start: '+=73% 70%',
                    endTrigger: '#projects',
                    end: 'bottom 70%',
                    scrub: 1,
                    pin: container,
                    pinSpacing: false,
                    invalidateOnRefresh: true,
                },
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <div
            ref={refBackground}
            className="absolute inset-0 z-0 w-full h-full"
        >
            <div ref={refLeftCircle} className="absolute bottom-0 left-0 w-80 h-80 md:w-100 md:h-100 2xl:w-150 2xl:h-150 bg-accent-500/20 rounded-full blur-[120px]" />
            <div ref={refRightCircle} className="absolute top-0 xxs:top-20 right-0 w-80 h-80 md:w-100 md:h-100 2xl:w-150 2xl:h-150 bg-primary-500/20 rounded-full blur-[120px]" />
        </div>
    )
}
