import { createContext, ReactNode, useState } from "react";
import { PropsUIContext } from "../interfaces/context/IUIContext";

const UIContext = createContext<PropsUIContext>({
    activeSection: 'Selection',
    setActiveSection: () => { },
    selectedUI: 'Sahib',
    setSelectedUI: () => { },
    pageLoading: true,
    setPageLoading: () => { },
    dynamic: 0,
    setDynamic: () => { }
});

export const UIProvider = ({ children: Component }: { children: ReactNode }) => {
    const [activeSection, setActiveSection] = useState<string>('Selection');
    const [selectedUI, setSelectedUI] = useState<string>('Sahib');
    const [pageLoading, setPageLoading] = useState<boolean>(true);
    const [dynamic, setDynamic] = useState<number>(0);

    return (
        <UIContext.Provider value={{
            activeSection,
            setActiveSection,
            selectedUI,
            setSelectedUI,
            pageLoading,
            setPageLoading,
            dynamic,
            setDynamic
        }}>
            {Component}
        </UIContext.Provider>
    )
}

export default UIContext;