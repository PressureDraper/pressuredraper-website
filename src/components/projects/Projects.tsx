'use client'

import Image from 'next/image'
import { useEffect, useRef, useCallback } from 'react'
import { projectsInfo } from '../../utils/projects.utils'

// ─── Types ────────────────────────────────────────────────────────────────────

interface PoolItem {
    el: HTMLDivElement
    glow: HTMLDivElement
    bg: HTMLDivElement
    content: HTMLDivElement
    off: number
}

interface SlotDef {
    x: number
    z: number
    ry: number
    scale: number
    opacity: number
    w: number
    h: number
}

// ─── Constants ────────────────────────────────────────────────────────────────

const N = projectsInfo.length

const SLOT_DESKTOP: Record<number, SlotDef> = {
    [-2]: { x: -107, z: -320, ry: 42,  scale: 0.52, opacity: 0.55, w: 180, h: 240 },
    [-1]: { x: -53,  z: -160, ry: 28,  scale: 0.75, opacity: 0.85, w: 210, h: 290 },
    [0]:  { x: 0,    z: 0,    ry: 0,   scale: 1.00, opacity: 1.00, w: 260, h: 350 },
    [1]:  { x: 53,   z: -160, ry: -28, scale: 0.75, opacity: 0.85, w: 210, h: 290 },
    [2]:  { x: 107,  z: -320, ry: -42, scale: 0.52, opacity: 0.55, w: 180, h: 240 },
}

const SLOT_MOBILE: Record<number, SlotDef> = {
    [-1]: { x: -51, z: -160, ry: 28,  scale: 0.72, opacity: 0.75, w: 200, h: 270 },
    [0]:  { x: 0,   z: 0,    ry: 0,   scale: 1.00, opacity: 1.00, w: 240, h: 320 },
    [1]:  { x: 51,  z: -160, ry: -28, scale: 0.72, opacity: 0.75, w: 200, h: 270 },
}

const AUTO_SPEED  = 0.00018
const LERP_FACTOR = 0.07

// ─── Helpers ──────────────────────────────────────────────────────────────────

function mod(i: number) {
    return ((i % N) + N) % N
}

function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t
}

function lerpSlot(lo: SlotDef, hi: SlotDef, t: number): SlotDef {
    return {
        x:       lerp(lo.x,       hi.x,       t),
        z:       lerp(lo.z,       hi.z,       t),
        ry:      lerp(lo.ry,      hi.ry,      t),
        scale:   lerp(lo.scale,   hi.scale,   t),
        opacity: lerp(lo.opacity, hi.opacity, t),
        w:       lerp(lo.w,       hi.w,       t),
        h:       lerp(lo.h,       hi.h,       t),
    }
}

function resolveSlot(effOff: number, isMobile: boolean): SlotDef | null {
    const map = isMobile ? SLOT_MOBILE : SLOT_DESKTOP
    const lo  = Math.floor(effOff)
    const hi  = Math.ceil(effOff)
    const t   = effOff - lo
    const sLo = map[lo] ?? null
    const sHi = map[hi] ?? null
    if (!sLo && !sHi) return null
    if (!sLo) return sHi!
    if (!sHi) return sLo
    return lerpSlot(sLo, sHi, t)
}

// Accent color per project (index-matched to projectsInfo order)
const PROJECT_COLORS: string[] = [
    '#60a5fa', // Xalapa Móvil        – blue
    '#a78bfa', // Digital Signature   – violet
    '#00c6ff', // Personal Website    – cyan
    '#34d399', // HR System           – emerald
    '#fb7185', // Medical Congress v2 – rose
    '#fbbf24', // Tickets App         – amber
    '#c084fc', // Medical Evaluation  – purple
    '#f472b6', // Medical Congress v1 – pink
    '#38bdf8', // Heroes App          – sky
    '#f97316', // Currency Converter  – orange
    '#4ade80', // Cipher Challenge    – green
    '#e879f9', // MP3 Glass Player    – fuchsia
    '#818cf8', // Lotus Bot           – indigo
]

// ─── Component ────────────────────────────────────────────────────────────────

export const Projects = () => {
    const sceneRef    = useRef<HTMLDivElement>(null)
    const poolRef     = useRef<PoolItem[]>([])
    const posRef      = useRef(0)
    const targetRef   = useRef(0)
    const autoRef     = useRef(true)
    const rafRef      = useRef<number>(0)
    const lastTimeRef = useRef<number | null>(null)
    const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const touchXRef   = useRef(0)
    const isMobileRef = useRef(false)
    const dotsRef     = useRef<HTMLButtonElement[]>([])

    // ── Build DOM pool ──────────────────────────────────────────────────────

    const buildPool = useCallback(() => {
        const scene = sceneRef.current
        if (!scene) return

        isMobileRef.current = window.innerWidth < 700
        scene.innerHTML = ''
        poolRef.current = []

        const offsets = isMobileRef.current ? [-2, -1, 0, 1, 2] : [-3, -2, -1, 0, 1, 2, 3]

        offsets.forEach(off => {
            const card    = document.createElement('div')
            const glow    = document.createElement('div')
            const bg      = document.createElement('div')
            const overlay = document.createElement('div')
            const content = document.createElement('div')

            card.style.cssText = `
                position:absolute; border-radius:14px; overflow:hidden;
                cursor:pointer; transform-origin:center center;
                will-change:transform,filter,opacity;
            `
            glow.style.cssText    = `position:absolute; inset:-3px; border-radius:17px; z-index:0;`
            bg.style.cssText      = `position:absolute; inset:0; border-radius:14px; overflow:hidden;`
            overlay.style.cssText = `
                position:absolute; inset:0; border-radius:14px; z-index:1;
                background:linear-gradient(to top,rgba(0,0,0,0.85) 0%,rgba(0,0,0,0.15) 50%,transparent 100%);
            `
            content.style.cssText = `position:absolute; bottom:0; left:0; right:0; padding:1rem; z-index:2;`

            card.appendChild(glow)
            card.appendChild(bg)
            card.appendChild(overlay)
            card.appendChild(content)
            scene.appendChild(card)

            poolRef.current.push({ el: card, glow, bg, content, off })
        })
    }, [])

    // ── Update pool each frame ──────────────────────────────────────────────

    const updatePool = useCallback(() => {
        const pos       = posRef.current
        const isMobile  = isMobileRef.current
        const centerIdx = Math.round(pos)
        const shift     = pos - centerIdx

        poolRef.current.forEach(({ el, glow, bg, content, off }) => {
            const effOff  = off - shift
            const sl      = resolveSlot(effOff, isMobile)

            if (!sl) {
                el.style.opacity       = '0'
                el.style.pointerEvents = 'none'
                return
            }

            const colorAmt = Math.max(0, 1 - Math.abs(effOff) * 2)
            const gray     = Math.round((1 - colorAmt) * 100)
            const bright   = lerp(0.4, 1.0, colorAmt)
            const projIdx  = mod(centerIdx + off)
            const proj     = projectsInfo[projIdx]
            const color    = PROJECT_COLORS[projIdx] ?? '#60a5fa'
            const glowHex  = Math.round(colorAmt * 68).toString(16).padStart(2, '0')

            el.style.width         = `${sl.w}px`
            el.style.height        = `${sl.h}px`
            el.style.opacity       = `${sl.opacity}`
            el.style.zIndex        = `${Math.round(10 - Math.abs(effOff) * 3)}`
            el.style.filter        = `grayscale(${gray}%) brightness(${bright.toFixed(2)})`
            el.style.pointerEvents = 'auto'
            el.style.cursor        = Math.abs(effOff) > 0.3 ? 'pointer' : 'default'
            el.style.transform     = `translateX(${sl.x}%) translateZ(${sl.z}px) rotateY(${sl.ry}deg) scale(${sl.scale})`

            // Glow
            glow.style.cssText = `
                position:absolute; inset:-3px; border-radius:17px; z-index:0;
                opacity:${colorAmt.toFixed(2)};
                background:radial-gradient(ellipse at 50% 85%, ${color}55 0%, transparent 65%);
                box-shadow: 0 0 50px 12px ${color}${glowHex};
            `

            // Background image — reuse existing img if same project
            const existingImg = bg.querySelector('img')
            if (!existingImg || existingImg.dataset.projIdx !== String(projIdx)) {
                bg.innerHTML = ''
                bg.style.cssText = `
                    position:absolute; inset:0; border-radius:14px; overflow:hidden;
                    background:#0a0e14;
                `
                const img = document.createElement('img')
                img.src                   = proj.img
                img.alt                   = proj.title
                img.dataset.projIdx       = String(projIdx)
                img.style.cssText         = `
                    width:100%; height:100%; object-fit:cover;
                    display:block; border-radius:14px;
                `
                bg.appendChild(img)
            }

            // Content
            const isCenter  = Math.abs(effOff) < 0.5
            const isMid     = Math.abs(effOff) < 1.5
            const titleSize = isCenter ? 17 : isMid ? 13 : 11
            const showMeta  = isMid

            // Active buttons
            const activeButtons = proj.buttons
                .filter(b => b.active)
                .map(b => `
                    <a
                        href="${b.name === 'code' ? proj.code_url : proj.demo_url}"
                        target="_blank"
                        rel="noopener noreferrer"
                        style="
                            font-size:9px; font-weight:500; letter-spacing:0.1em;
                            text-transform:uppercase; padding:3px 8px; border-radius:4px;
                            display:inline-block; text-decoration:none;
                            background:${color}22; color:${color};
                            border:1px solid ${color}44;
                            font-family:inherit;
                            pointer-events:${isCenter ? 'auto' : 'none'};
                        "
                    >${b.name}</a>
                `).join('')

            content.innerHTML = `
                <div style="
                    display:flex; align-items:center; gap:6px;
                    margin-bottom:${showMeta ? '6px' : '0'};
                    flex-wrap:wrap;
                ">
                    <span style="
                        font-size:9px; font-weight:500; letter-spacing:0.13em;
                        text-transform:uppercase; padding:3px 8px; border-radius:4px;
                        background:${color}22; color:${color};
                        border:1px solid ${color}44;
                        font-family:inherit;
                    ">${proj.date.split('—')[0].trim()}</span>
                    ${isCenter ? activeButtons : ''}
                </div>
                <div style="
                    font-weight:700; color:white;
                    font-size:${titleSize}px; line-height:1.2;
                    margin-bottom:${showMeta ? '5px' : '0'};
                    font-family:inherit;
                ">${proj.title}</div>
                ${showMeta && isCenter ? `
                    <div style="
                        font-size:10px; font-weight:300;
                        color:rgba(255,255,255,0.55);
                        line-height:1.5; font-family:inherit;
                        display:-webkit-box; -webkit-line-clamp:2;
                        -webkit-box-orient:vertical; overflow:hidden;
                    ">${proj.desc[0]}</div>
                ` : ''}
            `
        })

        // Sync dots
        const activeDot = mod(Math.round(pos))
        dotsRef.current.forEach((dot, i) => {
            if (!dot) return
            dot.style.background    = i === activeDot ? 'white' : 'rgba(255,255,255,0.2)'
            dot.style.width         = i === activeDot ? '18px' : '6px'
            dot.style.borderRadius  = i === activeDot ? '3px' : '50%'
        })
    }, [])

    // ── RAF tick ────────────────────────────────────────────────────────────

    const tick = useCallback((time: number) => {
        rafRef.current = requestAnimationFrame(tick)
        if (!lastTimeRef.current) { lastTimeRef.current = time; return }

        const dt = Math.min(time - lastTimeRef.current, 50)
        lastTimeRef.current = time

        if (autoRef.current) targetRef.current += AUTO_SPEED * dt

        const diff = targetRef.current - posRef.current
        posRef.current += diff * LERP_FACTOR

        if (!autoRef.current && Math.abs(diff) < 0.001) {
            posRef.current = targetRef.current
        }

        updatePool()
    }, [updatePool])

    // ── Mount / unmount ─────────────────────────────────────────────────────

    useEffect(() => {
        buildPool()
        rafRef.current = requestAnimationFrame(tick)

        const onResize = () => {
            isMobileRef.current = window.innerWidth < 700
            buildPool()
        }
        window.addEventListener('resize', onResize)

        return () => {
            cancelAnimationFrame(rafRef.current)
            window.removeEventListener('resize', onResize)
            if (resumeTimer.current) clearTimeout(resumeTimer.current)
        }
    }, [buildPool, tick])

    // ── Navigate ────────────────────────────────────────────────────────────

    const navigate = useCallback((dir: number) => {
        autoRef.current   = false
        targetRef.current = Math.round(posRef.current) + dir
        if (resumeTimer.current) clearTimeout(resumeTimer.current)
        resumeTimer.current = setTimeout(() => { autoRef.current = true }, 4000)
    }, [])

    // ── Dot click ───────────────────────────────────────────────────────────

    const onDotClick = (i: number) => {
        const current = Math.round(posRef.current)
        let diff = i - mod(current)
        if (diff > N / 2) diff -= N
        if (diff < -N / 2) diff += N
        autoRef.current   = false
        targetRef.current = posRef.current + diff
        if (resumeTimer.current) clearTimeout(resumeTimer.current)
        resumeTimer.current = setTimeout(() => { autoRef.current = true }, 4000)
    }

    // ── Touch ───────────────────────────────────────────────────────────────

    const onTouchStart = (e: React.TouchEvent) => {
        touchXRef.current = e.touches[0].clientX
    }

    const onTouchEnd = (e: React.TouchEvent) => {
        const dx = e.changedTouches[0].clientX - touchXRef.current
        if (Math.abs(dx) > 40) navigate(dx < 0 ? 1 : -1)
    }

    // ── Card click ──────────────────────────────────────────────────────────

    const onSceneClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement
        const cardEl =
            target.closest<HTMLDivElement>('div[style*="border-radius: 14px"]') ??
            target.closest<HTMLDivElement>('div[style*="border-radius:14px"]')
        if (!cardEl) return

        const item = poolRef.current.find(p => p.el === cardEl)
        if (!item) return

        const shift  = posRef.current - Math.round(posRef.current)
        const effOff = item.off - shift

        if (effOff < -0.3) navigate(-1)
        else if (effOff > 0.3) navigate(1)
    }

    // ── Render ──────────────────────────────────────────────────────────────

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

                {/* Carousel */}
                <div className="max-w-7xl w-full mt-10">
                    <div className="relative">
                        <div
                            ref={sceneRef}
                            className="relative flex h-100 items-center justify-center"
                            style={{ perspective: '1100px', perspectiveOrigin: '50% 40%' }}
                            onTouchStart={onTouchStart}
                            onTouchEnd={onTouchEnd}
                            onClick={onSceneClick}
                        />

                        {/* Edge fades */}
                        <div
                            className="pointer-events-none absolute inset-y-0 left-0 w-[22%] z-20"
                            style={{ background: 'transparent' }}
                        />
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 w-[22%] z-20"
                            style={{ background: 'transparent' }}
                        />

                        {/* Prev */}
                        <button
                            onClick={() => navigate(-1)}
                            className="absolute left-3 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-white/70 text-sm transition hover:bg-white/15 hover:text-white"
                        >
                            ←
                        </button>

                        {/* Next */}
                        <button
                            onClick={() => navigate(1)}
                            className="absolute right-3 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-white/70 text-sm transition hover:bg-white/15 hover:text-white"
                        >
                            →
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="mt-6 flex justify-center gap-2">
                        {projectsInfo.map((_, i) => (
                            <button
                                key={i}
                                ref={el => { if (el) dotsRef.current[i] = el }}
                                onClick={() => onDotClick(i)}
                                className="h-1.5 rounded-full transition-all duration-300"
                                style={{ width: '6px', background: 'rgba(255,255,255,0.2)' }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}