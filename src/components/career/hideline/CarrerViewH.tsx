import { Grid, useMediaQuery } from "@mui/material"
import { navBarHeigth, navBarHeigthResponsive } from "../../../pages/HomePage";

export const CarrerViewH = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");

    return (
        <Grid sx={{
            backgroundImage: 'url(./landscape.webp)',
            backgroundColor: 'primary.100',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: `auto`,
            minHeight: `calc(100vh - ${responsive ? navBarHeigthResponsive : navBarHeigth}px)`,
            transition: 'background 0.5s ease',
            flexDirection: 'row',
            overflow: 'visible',
            position: 'relative',
            zIndex: 0,
            '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '15%',
                background: 'linear-gradient(to bottom, rgba(116, 88, 163, 1), rgba(116, 88, 163, 0.1))',
                boxShadow: '0 4px 10px rgba(118, 88, 162, 0.1)',
            }
        }}>

        </Grid>
    )
}
