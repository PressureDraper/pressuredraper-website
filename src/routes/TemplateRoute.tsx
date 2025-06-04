import { Outlet } from "react-router-dom"
import { Navbar } from "../components/ui/Navbar"
import { Footer } from "../components/ui/Footer"
import { Box } from "@mui/material"
import { Suspense } from "react"
import { Loader } from "../components/ui/Loader"
import { AnimatePresence } from "framer-motion"

export const TemplateRoute = () => {
    return (
        <>
            <Navbar />
            <Box component='main'>
                <AnimatePresence mode="wait">
                    <Suspense fallback={<Loader key="loader" />}>
                        <Outlet />
                    </Suspense>
                </AnimatePresence>
            </Box>
            <Footer />
        </>
    )
}
