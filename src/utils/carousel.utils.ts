import { SlotDef } from '@/interfaces/carousel.types';
import { projectsInfo } from './projects.utils';

export const GITHUB_SVG = `<svg viewBox="0 0 27 27" fill="none" stroke="var(--color-neutral-400)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;cursor:pointer;transition:stroke 0.3s" onmouseover="this.style.stroke='var(--color-neutral-200)'" onmouseout="this.style.stroke='var(--color-neutral-400)'"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`;

export const EXTERNAL_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27" fill="none" stroke="var(--color-neutral-400)" stroke-width="1.5" style="width:20px;height:20px;cursor:pointer;transition:stroke 0.3s" onmouseover="this.style.stroke='var(--color-neutral-200)'" onmouseout="this.style.stroke='var(--color-neutral-400)'"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

export const SLOT_DESKTOP: Record<number, SlotDef> = {
    [-2]: { x: -300, z: -320, rotateY: 50, scale: 0.82, opacity: 0.55, width: 180, height: 240 },
    [-1]: { x: -170, z: -160, rotateY: 50, scale: 1.05, opacity: 0.85, width: 210, height: 290 },
    [0]: { x: 0, z: 0, rotateY: 0, scale: 1.1, opacity: 1.0, width: 450, height: 550 },
    [1]: { x: 170, z: -160, rotateY: -50, scale: 1.05, opacity: 0.85, width: 210, height: 290 },
    [2]: { x: 300, z: -320, rotateY: -50, scale: 0.82, opacity: 0.55, width: 180, height: 240 },
};

export const SLOT_MOBILE: Record<number, SlotDef> = {
    [-1]: { x: -51, z: -160, rotateY: 28, scale: 0.72, opacity: 0.75, width: 350, height: 'auto' },
    [0]: { x: 0, z: 0, rotateY: 0, scale: 1.0, opacity: 1.0, width: 350, height: 'auto' },
    [1]: { x: 51, z: -160, rotateY: -28, scale: 0.72, opacity: 0.75, width: 350, height: 'auto' },
};

export const TOTAL_CARDS = projectsInfo.length;
export const AUTO_ADVANCE_SPEED = 0.0015;
export const LERP_FACTOR = 0.1;
