export interface PoolItem {
    el: HTMLDivElement;
    content: HTMLDivElement;
    off: number;
}

export interface PoolNode extends PoolItem {
    renderedIndex: number | null;
}

export interface SlotDef {
    x: number;
    z: number;
    rotateY: number;
    scale: number;
    opacity: number;
    width: number;
    height: number | 'auto';
}
