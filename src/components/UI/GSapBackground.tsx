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
            gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    markers: true,
                    start: 'top 70%',
                    end: 'bottom 80%',
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            }).fromTo(
                container,
                { opacity: 0, y: 0, z: 50 },
                {
                    opacity: 1,
                    y: 0,
                    z: 0,
                    ease: 'power2.out',
                    duration: 2,
                },
            );
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
                        trigger: container,
                        start: 'top 70%',
                        end: '+=68%',
                        scrub: 1,
                        markers: false,
                    },
                }
            );

            gsap.to(leftCircle, {
                y: -500,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: leftCircle, // or container if you prefer
                    start: 'top 80%',     // 👈 starts later
                    end: '+=50%',
                    scrub: 1,
                    markers: true,
                },
            });

        });

        return () => mm.revert();
    }, []);

    return (
        <div
            ref={refBackground}
            className="absolute inset-0 -z-10 w-full overflow-y-visible xxs:overflow-x-hidden sm:overflow-x-visible lg:overflow-x-visible"
        >
            <div ref={refLeftCircle} className="absolute bottom-0 left-0 w-150 h-150 bg-accent-500/40 rounded-full blur-[120px]" />
            <div ref={refRightCircle} className="absolute top-0 right-0 w-150 h-150 xxs:bg-primary-500/15 lg:bg-primary-500/20 rounded-full blur-[120px]" />
        </div>
    )
}
