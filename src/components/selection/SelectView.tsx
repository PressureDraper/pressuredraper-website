import { Avatar, Box, useMediaQuery } from "@mui/material";
import { navBarHeigth, navBarHeigthResponsive } from "../../pages/HomePage";

export const SelectView = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");

    return (
        <Box
            sx={{
                m: 0,
                mt: responsive ? `${navBarHeigthResponsive}px` : `${navBarHeigth}px`,
                p: 0,
                height: '70dvh',
                width: '100%',
                backgroundImage: 'url("/banner.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60%',  // Controla el tamaño del gradiente
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Sombra adicional
                },
                '&::before': {
                    zIndex: 2,
                    content: '"aaaa"',
                    position: 'absolute',
                    mt: '22.5dvh',
                    width: '20rem',
                    height: '25dvh',
                    backgroundColor: 'red'
                }
            }}
        >
            <Avatar
                alt="Me"
                src="/sahib.png"
                sx={{
                    zIndex: 1,
                    mt: 'auto',
                    mb: 'auto',
                    width: 'auto',
                    height: '25dvh'
                }}
            />
        </Box>
    )
}
