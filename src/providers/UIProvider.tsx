import { ReactNode, useState } from "react"
import { UIContext } from "../context/UIContext"


export const UIProvider = ({ children: Component }: { children: ReactNode }) => {
    const [activeSection, setActiveSection] = useState<string>('Selection');

    return (
        <UIContext.Provider value={{ activeSection, setActiveSection }}>
            {Component}
        </UIContext.Provider>
    )
}
