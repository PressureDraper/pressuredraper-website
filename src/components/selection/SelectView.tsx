import { Avatar, Box, useMediaQuery } from "@mui/material";
import { navBarHeigth, navBarHeigthResponsive } from "../../pages/HomePage";
import { useEffect, useState } from "react";
import { primaryPaletteColors } from "../../helpers/selection/colors";

export const SelectView = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const [colors, setColors] = useState<{
        color1: string,
        color2: string,
        color3: string
    }>({ color1: '#f5f4f1', color2: '#927d60', color3: '#2b201d' });

    const changeColor = () => {
        return Math.floor(Math.random() * (10 - 0)) + 0;
    }

    useEffect(() => {
        setInterval(() => {
            setColors({ color1: primaryPaletteColors[changeColor()], color2: primaryPaletteColors[changeColor()], color3: primaryPaletteColors[changeColor()] });
            console.log('hello');
        }, 1000);
    }, []);

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
                    height: '60%',  // gradient's height
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Sombra adicional
                }
            }}
        >
            <Box sx={{
                mt: 'auto',
                mb: 'auto',
                /* background: `linear-gradient(135deg, ${colors.color1}, ${colors.color2}, ${colors.color3})`, */
                height: 'auto',
                width: 'auto',
                p: 2,
                borderRadius: '50%',
                transition: 'background 1s ease'
            }}
            >
                <Avatar
                    alt="Me"
                    src="https://static-00.iconduck.com/assets.00/person-icon-256x242-au2z2ine.png"
                    sx={{
                        zIndex: 1,
                        mt: 'auto',
                        mb: 'auto',
                        width: 'auto',
                        height: '23.5dvh'
                    }}
                />
            </Box>
        </Box>
    )
}
