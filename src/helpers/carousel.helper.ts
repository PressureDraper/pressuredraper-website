import { SlotDef } from '@/interfaces/carousel.types';
import {
    EXTERNAL_SVG,
    GITHUB_SVG,
    SLOT_DESKTOP,
    SLOT_MOBILE,
    TOTAL_CARDS,
} from '@/utils/carousel.utils';
import en from '@/locales/en.json';
import { useLocale } from 'next-intl';

export const wrapIndex = (rawIndex: number) => {
    return ((rawIndex % TOTAL_CARDS) + TOTAL_CARDS) % TOTAL_CARDS;
};

export const lerp = (from: number, to: number, factor: number) => {
    return from + (to - from) * factor;
};

export const lerpSlot = (slotA: SlotDef, slotB: SlotDef, factor: number): SlotDef => {
    return {
        x: lerp(slotA.x, slotB.x, factor),
        z: lerp(slotA.z, slotB.z, factor),
        rotateY: lerp(slotA.rotateY, slotB.rotateY, factor),
        scale: lerp(slotA.scale, slotB.scale, factor),
        opacity: lerp(slotA.opacity, slotB.opacity, factor),
        width: lerp(slotA.width, slotB.width, factor),
        height:
            typeof slotA.height === 'number' && typeof slotB.height === 'number'
                ? lerp(slotA.height, slotB.height, factor)
                : slotA.height,
    };
};

export const resolveSlotAtOffset = (
    fractionalOffset: number,
    isMobile: boolean,
): SlotDef | null => {
    const slotMap = isMobile ? SLOT_MOBILE : SLOT_DESKTOP;
    const lowerSlot = Math.floor(fractionalOffset);
    const upperSlot = Math.ceil(fractionalOffset);
    const blendT = fractionalOffset - lowerSlot;
    const slotLow = slotMap[lowerSlot] ?? null;
    const slotHigh = slotMap[upperSlot] ?? null;

    if (!slotLow && !slotHigh) return null;
    if (!slotLow) return slotHigh!;
    if (!slotHigh) return slotLow;
    return lerpSlot(slotLow, slotHigh, blendT);
};

type Project = (typeof en.projects.cards)[number];

// ─── Pure DOM card renderer ───────────────────────────────────────────────────
// No React, no async scheduling — innerHTML is set synchronously for avoiding flickering on item change
// paints the correct content in the exact same frame the index changes.

export const renderCardHTML = (project: Project, index: number, isMobile: boolean): string => {
    const locale = document.documentElement.lang;
    
    const bullets = project.desc.map((b) => `<li>${b}</li>`).join('');

    const icons = project.icons
        .map((tech) => {
            const [techName, desc] = tech.split(':');
            return `
                <span style="display:flex;align-items:center;gap:6px;padding:3px 12px;font-size:14px;border-bottom:1px solid var(--color-primary-700);background:rgba(212,212,212,0.25);border-radius:9999px;">
                    <img loading="lazy" src="/icons/${techName}.svg" style="width:16px;height:16px;" alt="${techName}" />
                    <span style="color:var(--color-neutral-300);">${desc ?? techName}</span>
                </span>`;
        })
        .join('');

    const codeBtn = project.buttons[0].active
        ? `<a href="${project.code_url}" target="_blank" rel="noopener noreferrer" aria-label="View Code">${GITHUB_SVG}</a>`
        : '';

    const demoBtn = project.buttons[2]?.active
        ? `<a href="${project.demo_url}" target="_blank" rel="noopener noreferrer" aria-label="View Demo">${EXTERNAL_SVG}</a>`
        : '';

    return `
        <div style="width:100%;height:fit-content;display:flex;flex-direction:column;">
            <div style="position:relative;width:100%;overflow:hidden;">
                <img
                    loading="lazy"
                    src="${project.img}"
                    alt="cover"
                    style="width:100%;height:auto;object-fit:cover;aspect-ratio: 16/9;"
                />
            </div>
            <div style="
                border:1px solid var(--color-neutral-800);
                border-top:none;
                background:rgba(10,10,10,0.2);
                padding:16px;
                display:flex;
                flex-direction:column;
                gap:12px;
                flex:1;
                border-radius:0 0 14px 14px;
                overflow-x:hidden;
                overflow-y:auto;
                ${isMobile ? '' : 'max-height:295px;'}
            ">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="color:var(--color-neutral-100);letter-spacing:0.2em;font-size:11px;font-family:var(--font-body);font-weight:bold;opacity:0.6;">
                        ${(index + 1).toString().padStart(2, '0')}
                    </span>
                    <div style="display:flex;gap:16px;">${codeBtn}${demoBtn}</div>
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-size:20px;font-family:var(--font-display);font-weight:700;color:var(--color-neutral-300);">${project.title}</span>
                    <span style="font-size:13px;font-family:var(--font-body);font-weight:100;color:var(--color-neutral-400);">${project.date}</span>
                </div>
                <ul style="
                    margin:0;padding-left:16px;
                    list-style:disc;
                    color:var(--color-neutral-300);
                    font-size:14px;
                    font-family:var(--font-body);
                    line-height:1.6;
                    display:flex;flex-direction:column;gap:4px;
                ">
                    ${bullets}
                </ul>
                <div style="display:grid;grid-template-columns:1;gap:12px;">
                    <div style="display:flex;flex-direction:column;gap:6px;">
                        <span style="color:var(--color-accent-400);font-size:12px;font-family:var(--font-display);letter-spacing:0.1em;">
                            ${locale === 'en' ? 'PROBLEM' : 'PROBLEMA'}
                        </span>
                        <span style="color:var(--color-neutral-300);font-size:14px;font-family:var(--font-body);">${project.problem}</span>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:6px;">
                        <span style="color:var(--color-accent-400);font-size:12px;font-family:var(--font-display);letter-spacing:0.1em;">
                            ${locale === 'en' ? 'SOLUTION' : 'SOLUCIÓN'}
                        </span>
                        <span style="color:var(--color-neutral-300);font-size:14px;font-family:var(--font-body);">${project.solution}</span>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:6px;">
                        <span style="color:var(--color-accent-400);font-size:12px;font-family:var(--font-display);letter-spacing:0.1em;">
                            ${locale === 'en' ? 'KEY DECISIONS' : 'DECISIONES CLAVE'}
                        </span>
                        <span style="color:var(--color-neutral-300);font-size:14px;font-family:var(--font-body);">${project.key_decisions}</span>
                    </div>
                </div>
                <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:6px;">
                    ${icons}
                </div>
            </div>
        </div>`;
};
