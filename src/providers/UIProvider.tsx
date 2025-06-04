import { ReactNode, useState } from "react"
import { UIContext } from "../context/UIContext"


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
