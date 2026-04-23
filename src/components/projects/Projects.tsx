'use client'

import { useEffect, useRef, useCallback } from 'react'
import { projectsInfo } from '../../utils/projects.utils'
import { PoolNode } from '@/interfaces/carousel.types'
import { AUTO_ADVANCE_SPEED, LERP_FACTOR, TOTAL_CARDS } from '@/utils/carousel.utils'
import { lerp, renderCardHTML, resolveSlotAtOffset, wrapIndex } from '@/helpers/carousel.helper'

export const Projects = () => {
    const sceneRef = useRef<HTMLDivElement>(null)
    const poolRef = useRef<PoolNode[]>([])
    const currentPositionRef = useRef(0)
    const targetPositionRef = useRef(0)
    const isAutoPlayingRef = useRef(true)
    const rafIdRef = useRef<number>(0)
    const lastFrameTimeRef = useRef<number | null>(null)
    const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const touchStartXRef = useRef(0)
    const isMobileRef = useRef(false)
    const dotsRef = useRef<HTMLButtonElement[]>([])

    const buildPool = useCallback(() => {
        const scene = sceneRef.current
        if (!scene) return

        isMobileRef.current = window.innerWidth < 700
        scene.innerHTML = ''
        poolRef.current = []

        const visibleOffsets = isMobileRef.current ? [-1, 0, 1] : [-2, -1, 0, 1, 2]

        visibleOffsets.forEach(slotOffset => {
            const wrapperEl = document.createElement('div')

            wrapperEl.style.cssText = `
                position: absolute;
                border-radius: 14px;
                overflow: hidden;
                cursor: pointer;
                transform-origin: center center;
                will-change: transform, opacity;
            `

            scene.appendChild(wrapperEl)

            poolRef.current.push({
                el: wrapperEl,
                content: wrapperEl,
                off: slotOffset,
                renderedIndex: null,
            })
        })
    }, [])

    const updatePool = useCallback(() => {
        const smoothPosition = currentPositionRef.current
        const isMobile = isMobileRef.current
        const stableCenterIndex = Math.round(targetPositionRef.current)
        const fractionalShift = smoothPosition - stableCenterIndex

        poolRef.current.forEach((poolNode) => {
            const { el, off } = poolNode
            const effectiveOffset = off - fractionalShift
            const slot = resolveSlotAtOffset(effectiveOffset, isMobile)
            const projectIndex = wrapIndex(stableCenterIndex + off)

            if (poolNode.renderedIndex !== projectIndex) {
                poolNode.renderedIndex = projectIndex
                el.innerHTML = renderCardHTML(projectsInfo[projectIndex], projectIndex)
            }

            if (!slot) {
                el.style.opacity = '0'
                el.style.pointerEvents = 'none'
                return
            }

            const colorBlend = Math.max(0, 1 - Math.abs(effectiveOffset) * 2)
            const grayscaleAmt = Math.round((1 - colorBlend) * 100)
            const brightnessAmt = lerp(0.4, 1.0, colorBlend)

            el.style.width = `${slot.width}px`
            el.style.height = `${slot.height}px`
            el.style.opacity = `${slot.opacity}`
            el.style.zIndex = `${Math.round(10 - Math.abs(effectiveOffset) * 3)}`
            el.style.filter = `grayscale(${grayscaleAmt}%) brightness(${brightnessAmt.toFixed(2)})`
            el.style.pointerEvents = 'auto'
            el.style.cursor = Math.abs(effectiveOffset) > 0.3 ? 'pointer' : 'default'
            el.style.transform = `translateX(${slot.x}%) translateZ(${slot.z}px) rotateY(${slot.rotateY}deg) scale(${slot.scale})`
        })

        const activeDotIndex = wrapIndex(stableCenterIndex)
        dotsRef.current.forEach((dot, dotIndex) => {
            if (!dot) return
            dot.style.background = dotIndex === activeDotIndex ? 'white' : 'rgba(255,255,255,0.2)'
            dot.style.width = dotIndex === activeDotIndex ? '18px' : '6px'
            dot.style.borderRadius = dotIndex === activeDotIndex ? '3px' : '50%'
        })
    }, [])

    const tick = useCallback((timestamp: number) => {
        rafIdRef.current = requestAnimationFrame(tick)

        if (!lastFrameTimeRef.current) {
            lastFrameTimeRef.current = timestamp
            return
        }

        lastFrameTimeRef.current = timestamp

        if (isAutoPlayingRef.current) {
            targetPositionRef.current += AUTO_ADVANCE_SPEED
        }

        const positionDiff = targetPositionRef.current - currentPositionRef.current
        currentPositionRef.current += positionDiff * LERP_FACTOR

        if (!isAutoPlayingRef.current && Math.abs(positionDiff) < 0.001) {
            currentPositionRef.current = targetPositionRef.current
        }

        updatePool()
    }, [updatePool])

    useEffect(() => {
        buildPool()
        rafIdRef.current = requestAnimationFrame(tick)

        const handleResize = () => {
            isMobileRef.current = window.innerWidth < 700
            buildPool()
        }

        window.addEventListener('resize', handleResize)

        return () => {
            cancelAnimationFrame(rafIdRef.current)
            window.removeEventListener('resize', handleResize)
            if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
        }
    }, [buildPool, tick])

    const navigate = useCallback((direction: number) => {
        isAutoPlayingRef.current = false
        targetPositionRef.current = Math.round(currentPositionRef.current) + direction

        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
        resumeTimerRef.current = setTimeout(() => {
            isAutoPlayingRef.current = true
        }, 4000)
    }, [])

    const onDotClick = (dotIndex: number) => {
        const currentSnapped = Math.round(currentPositionRef.current)
        let indexDiff = dotIndex - wrapIndex(currentSnapped)

        if (indexDiff > TOTAL_CARDS / 2) indexDiff -= TOTAL_CARDS
        if (indexDiff < -TOTAL_CARDS / 2) indexDiff += TOTAL_CARDS

        isAutoPlayingRef.current = false
        targetPositionRef.current = currentPositionRef.current + indexDiff

        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
        resumeTimerRef.current = setTimeout(() => {
            isAutoPlayingRef.current = true
        }, 4000)
    }

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartXRef.current = e.touches[0].clientX
    }

    const onTouchEnd = (e: React.TouchEvent) => {
        const dragDistance = e.changedTouches[0].clientX - touchStartXRef.current
        if (Math.abs(dragDistance) > 40) navigate(dragDistance < 0 ? 1 : -1)
    }

    const onSceneClick = (e: React.MouseEvent) => {
        const clickedCard = (e.target as HTMLElement).closest<HTMLDivElement>(
            'div[style*="border-radius: 14px"], div[style*="border-radius:14px"]'
        )
        if (!clickedCard) return

        const poolNode = poolRef.current.find(node => node.el === clickedCard)
        if (!poolNode) return

        const fractionalShift = currentPositionRef.current - Math.round(currentPositionRef.current)
        const effectiveOffset = poolNode.off - fractionalShift

        if (effectiveOffset < -0.3) navigate(-1)
        else if (effectiveOffset > 0.3) navigate(1)
    }

    return (
        <section id="projects" className="relative w-full min-h-screen">
            <div className="min-h-screen flex flex-col items-center justify-center mx-auto lg:px-0 lg:py-24">

                {/* Header */}
                <div className="flex flex-col gap-10 max-w-5xl md:max-w-5xl lg:max-w-6xl xl:max-w-6xl mx-auto justify-items-start px-8 md:px-10 lg:px-10 xl:px-0 w-full">
                    <div className="flex flex-col gap-4">
                        <span className="text-accent-500 font-display tracking-wide">Projects</span>
                        <h2 className="text-neutral-100 text-3xl md:text-4xl font-bold font-display">
                            Selected Work
                        </h2>
                        <p className="md:w-2/3 text-neutral-400 text-lg font-body leading-relaxed text-justify">
                            A few projects that showcase how I think — from problem identification to architecture decisions and trade-offs.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl w-full mt-10 pt-15 overflow-hidden">
                    <div className="relative">
                        <div
                            ref={sceneRef}
                            className="relative flex h-100 items-center justify-center"
                            style={{ perspective: '2000px', perspectiveOrigin: '50% 40%' }}
                            onTouchStart={onTouchStart}
                            onTouchEnd={onTouchEnd}
                            onClick={onSceneClick}
                        />

                        <button
                            onClick={() => navigate(-1)}
                            className="absolute left-3 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-white/70 text-sm transition hover:bg-white/15 hover:text-white"
                        >
                            ←
                        </button>

                        <button
                            onClick={() => navigate(1)}
                            className="absolute right-3 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-white/70 text-sm transition hover:bg-white/15 hover:text-white"
                        >
                            →
                        </button>
                    </div>

                    <div className="mt-22 flex justify-center gap-2">
                        {projectsInfo.map((_, dotIndex) => (
                            <button
                                key={dotIndex}
                                ref={el => { if (el) dotsRef.current[dotIndex] = el }}
                                onClick={() => onDotClick(dotIndex)}
                                className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
                                style={{ width: '6px', background: 'rgba(255,255,255,0.2)' }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}