import { Outlet } from "react-router-dom"
import { Navbar } from "../components/ui/Navbar"
import { Footer } from "../components/ui/Footer"
import { Box } from "@mui/material"

export const TemplateRoute = () => {
    return (
        <>
            <Navbar />
            <Box component='main'>
                <Outlet />
            </Box>
            <Footer />
        </>
    )
}
