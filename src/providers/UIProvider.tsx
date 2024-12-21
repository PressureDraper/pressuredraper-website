import { ReactNode, useState } from "react"
import { UIContext } from "../context/UIContext"


export const UIProvider = ({ children: Component }: { children: ReactNode }) => {
    const [activeSection, setActiveSection] = useState<string>('Selection');
    const [selectedUI, setSelectedUI] = useState<string>('Sahib');

    return (
        <UIContext.Provider value={{
            activeSection,
            setActiveSection,
            selectedUI,
            setSelectedUI
        }}>
            {Component}
        </UIContext.Provider>
    )
}
