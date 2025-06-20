import { Box, Stack, useMediaQuery } from "@mui/material"
import { SelectView } from "../components/selection/SelectView"
import { useContext, useEffect } from "react";
import { CareerView } from "../components/career/CareerView";
import AboutView from "../components/about/AboutView";
import { PropsUIContext } from "../interfaces/context/IUIContext";
import UIContext from "../context/UIContext";
import { ContactView } from "../components/contact/ContactView";

export const navBarHeigth: number = 64;
export const navBarHeigthResponsive: number = 54;

const HomePage = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const { dynamic, activeSection } = useContext<PropsUIContext>(UIContext);

    useEffect(() => {
        if (activeSection) {
            const sectionElement: HTMLElement | null = document.getElementById(activeSection);

            if (sectionElement && dynamic === 1) {
                window.scrollTo({
                    top: sectionElement.offsetTop - (responsive ? navBarHeigthResponsive : navBarHeigth),
                    behavior: 'smooth'
                });
            }
        }
    }, [activeSection, responsive, dynamic]);

    return (
        <Stack>
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
                <ContactView />
            </Box>
        </Stack>
    )
}

export default HomePage;
