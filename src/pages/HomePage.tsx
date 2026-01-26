import { Box, Stack, useMediaQuery } from "@mui/material"
import { SelectView } from "../components/selection/SelectView"
import { useContext, useEffect } from "react";
import AboutView from "../components/about/sahib/AboutView";
import { PropsUIContext } from "../interfaces/context/IUIContext";
import UIContext from "../context/UIContext";
import { ContactView } from "../components/contact/ContactView";
import { AboutViewH } from "../components/about/hideline/AboutViewH";
import { CarrerViewH } from "../components/career/hideline/CarrerViewH";
import { CareerView } from "../components/career/sahib/CareerView";

export const navBarHeigth: number = 64;
export const navBarHeigthResponsive: number = 54;

const HomePage = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const { dynamic, activeSection } = useContext<PropsUIContext>(UIContext);
    const { selectedUI } = useContext(UIContext);

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
                {
                    selectedUI === 'Sahib' ? <AboutView /> : <AboutViewH />
                }
            </Box>
            <Box component="section" id={selectedUI === 'Sahib' ? "Career" : "Tracks"}>
                {
                    selectedUI === 'Sahib' ? <CareerView /> : <CarrerViewH />
                }
            </Box>
            <Box component="section" id="Contact">
                {
                    selectedUI === 'Sahib' && <ContactView />
                }
            </Box>
        </Stack>
    )
}

export default HomePage;
