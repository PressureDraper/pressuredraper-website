import { createContext } from "react";
import { PropsUIContext } from "../interfaces/IUIContext";

export const UIContext = createContext<PropsUIContext>({
    activeSection: 'Selection',
    setActiveSection: () => { }
});