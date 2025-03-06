import { Grid2, useMediaQuery } from "@mui/material"
import { navBarHeigth, navBarHeigthResponsive } from "../../pages/HomePage";

export const CareerView = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");

    return (
        <>
            <Grid2 sx={{
                backgroundColor: 'primary.100',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: `calc(${responsive ? '200vh' : '100vh'} - ${responsive ? navBarHeigthResponsive : navBarHeigth}px)`,
                transition: 'background 0.5s ease',
                flexDirection: 'row'
            }}>
                

            </Grid2>
        </>
    )
}
