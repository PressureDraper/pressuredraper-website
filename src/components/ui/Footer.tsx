import { Box, Grid, Typography, useMediaQuery } from "@mui/material"
import { sahibUIPalette } from "../../helpers/footerPalettes";

export const Footer = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");

    return (
        <Grid container sx={{ backgroundColor: 'primary.light', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 4, position: 'relative', flexDirection: 'column', zIndex: -1 }}>
            <Box sx={{ display: 'flex', width: 'fit-content' }}>
                <Box>
                    <Box sx={{
                        width: responsive ? '40px' : '80px',
                        height: responsive ? '40px' : '80px',
                        backgroundColor: 'primary.100',
                        borderRadius: '100%',
                        position: 'relative',
                        zIndex: 1,
                        '&::after': {
                            content: '""',
                            width: responsive ? '30px' : '70px', // Tamaño del círculo interno
                            height: responsive ? '30px' : '70px',
                            backgroundColor: 'primary.light', // Color del círculo interno
                            borderRadius: '100%',
                            position: 'absolute',
                            top: '50%', // Centrar verticalmente
                            left: '50%', // Centrar horizontalmente
                            transform: 'translate(-50%, -50%)', // Ajustar al centro
                        },
                    }} />
                </Box>
                {
                    sahibUIPalette.map((item: { color: string }) => (
                        <Box>
                            <Box sx={{
                                width: responsive ? '40px' : '80px',
                                height: responsive ? '40px' : '80px',
                                backgroundColor: 'primary.light',
                                marginLeft: responsive ? '-15px' : '-25px',
                                borderRadius: '100%',
                                position: 'relative',
                                zIndex: 1,
                                '&::after': {
                                    content: '""',
                                    width: responsive ? '30px' : '70px', // Tamaño del círculo interno
                                    height: responsive ? '30px' : '70px',
                                    backgroundColor: item.color, // Color del círculo interno
                                    borderRadius: '100%',
                                    position: 'absolute',
                                    top: '50%', // Centrar verticalmente
                                    left: '50%', // Centrar horizontalmente
                                    transform: 'translate(-50%, -50%)', // Ajustar al centro
                                },
                            }} />
                        </Box>
                    ))
                }
            </Box>
            <Box>
                <Typography sx={{ color: 'primary.600', textAlign: 'center', padding: '3vh 0', fontWeight: 'bold' }}>
                    © 2025. All rights reserved.
                </Typography>
            </Box>
        </Grid>
    )
}
