import { ThemeProvider } from "@emotion/react"
import { AppRouter } from "./routes/AppRouter"
import { theme } from "./themes/theme"
import { UIProvider } from "./providers/UIProvider"
import './App.css';
import { Loader } from "./components/ui/Loader";
import { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';

export const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <UIProvider>
            <ThemeProvider theme={theme}>
                <AnimatePresence mode="wait">
                    {isLoading && <Loader key="loader" />}
                </AnimatePresence>
                <AppRouter />
            </ThemeProvider>
        </UIProvider>
    )
}
