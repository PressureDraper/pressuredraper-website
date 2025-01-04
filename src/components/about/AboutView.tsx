import { Grid2, useMediaQuery } from "@mui/material"
import { navBarHeigth, navBarHeigthResponsive } from "../../pages/HomePage";
import { HidelineUI, SahibUI } from "../../helpers/about/backgroundPatterns";
import { useContext } from "react";
import { UIContext } from "../../context/UIContext";

export const AboutView = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const { selectedUI } = useContext(UIContext);

    return (
        <Grid2 sx={{
            backgroundImage: selectedUI === 'Sahib' ? SahibUI : HidelineUI,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: `calc(100vh - ${responsive ? navBarHeigthResponsive : navBarHeigth}px)`,
            transition: 'all 0.5s ease'
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#010100"><path d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"></path></svg>
            <Grid2 container>
                <Grid2>
                    asdasd
                </Grid2>
                <Grid2>
                    asdasd
                </Grid2>
            </Grid2>
        </Grid2>
    )
}
