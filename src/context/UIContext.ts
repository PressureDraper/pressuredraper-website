import { createContext } from "react";
import { PropsUIContext } from "../interfaces/context/IUIContext";

export const UIContext = createContext<PropsUIContext>({
    activeSection: 'Selection',
    setActiveSection: () => { },
    selectedUI: 'Sahib',
    setSelectedUI: () => { },
    pageLoading: true,
    setPageLoading: () => { },
    dynamic: 0,
    setDynamic: () => { }
});