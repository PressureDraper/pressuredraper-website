export interface PropsProjectsButtons {
    name: string;
    active: boolean;
}

export interface PropsProjectsInfo {
    img: string;
    title: string;
    date: string;
    desc: string;
    buttons: PropsProjectsButtons[];
    icons: string[];
    code_url: string;
    demo_url: string;
}