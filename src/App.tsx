import { AppRouter } from "./routes/AppRouter"
import './App.css';
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { PropsUIContext } from "./interfaces/context/IUIContext";
import UIContext from "./context/UIContext";
import { Loader } from "./components/ui/Loader";

export const App = () => {
    const { pageLoading } = useContext<PropsUIContext>(UIContext);

    return (
        <>
            <AnimatePresence mode="wait">
                {pageLoading && <Loader key="loader" />}
            </AnimatePresence>
            <AppRouter />
        </>
    )
}
