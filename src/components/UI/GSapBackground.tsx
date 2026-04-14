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
                { opacity: 0, y: 0 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '#about',
                        start: 'top 70%',
                        end: 'bottom 80%',
                        scrub: 1,
                    },
                }
            );

            gsap.to([leftCircle, rightCircle], {
                y: (i) => (i === 0 ? '30vh' : '210vh'),
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '#about',
                    start: '+=73% 70%',
                    end: '+=120%',
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });
        });

        mm.add("(min-width: 769px)", () => {
            gsap.fromTo(
                container,
                { opacity: 0, y: 0 },
                {
                    opacity: 1,
                    y: 0,
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
                y: (i) => (i === 0 ? '100%' : '210%'),
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '#about',
                    start: '+=73% 70%',
                    end: '+=100%',
                    scrub: 1,
                    pin: true,
                    pinSpacing: false
                },
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <div
            ref={refBackground}
            className="absolute inset-0 z-0 w-full overflow-y-visible xxs:overflow-x-hidden sm:overflow-x-visible lg:overflow-x-visible"
        >
            <div ref={refLeftCircle} className="absolute top-5/10 md:top-2/10 md:bottom-0 left-0 w-80 h-80 md:w-100 md:h-100 2xl:w-150 2xl:h-150 bg-accent-500/20 xxs:bg-accent-500/25 md:bg-accent-500/15 rounded-full blur-[120px]" />
            <div ref={refRightCircle} className="absolute top-1/10 2xl:top-0 right-0 w-80 h-80 md:w-100 md:h-100 2xl:w-150 2xl:h-150 xxs:bg-primary-500/25 md:bg-primary-500/15 rounded-full blur-[120px]" />
        </div>
    )
}
