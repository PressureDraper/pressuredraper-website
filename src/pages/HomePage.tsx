import { Box, Stack, useMediaQuery } from "@mui/material"
import { SelectView } from "../components/selection/SelectView"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CareerView } from "../components/career/CareerView";
import AboutView from "../components/about/AboutView";

export const navBarHeigth: number = 64;
export const navBarHeigthResponsive: number = 54;

export const HomePage = () => {
    const location = useLocation();
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");

    useEffect(() => {
        const hash: string | null = new URLSearchParams(location.search).get('section');

        if (hash) {
            const sectionElement: HTMLElement | null = document.getElementById(hash);
            if (sectionElement) {
                window.scrollTo({
                    top: sectionElement.offsetTop - (responsive ? navBarHeigthResponsive : navBarHeigth),
                    behavior: 'smooth'
                });
            }
        }
    }, [location.search, responsive]);

    return (
        <Stack sx={{ backgroundColor: 'primary.dark' }}>
            <Box component="section" id="Selection">
                <SelectView />
            </Box>
            <Box component="section" id="About">
                <AboutView />
            </Box>
            <Box component="section" id="Career">
                <CareerView />
            </Box>
            <Box component="section" id="Contact">

            </Box>
        </Stack>
    )
}
