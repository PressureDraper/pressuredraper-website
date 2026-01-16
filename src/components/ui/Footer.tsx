import { Box, Grid, Typography, useMediaQuery } from "@mui/material"
import { hidelineUIPalette, sahibUIPalette } from "../../helpers/footerPalettes";
import { useContext } from "react";
import UIContext from "../../context/UIContext";

export const Footer = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const { selectedUI } = useContext(UIContext);

    return (
        <>
            <Grid container sx={{
                backgroundColor: selectedUI === 'Sahib' ? 'primary.light' : 'secondary.light', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 4, flexDirection: 'column', zIndex: 4, position: 'relative'
            }}>
                <Box sx={{ display: 'flex', width: 'fit-content' }}>
                    <Box
                        sx={{
                            width: responsive ? '40px' : '80px',
                            height: responsive ? '40px' : '80px',
                            backgroundColor: selectedUI === 'Sahib' ? 'primary.100' : 'secondary.100',
                            borderRadius: '100%',
                            position: 'relative',
                            zIndex: 1,
                            '&::after': {
                                content: '""', // Siempre está, pero se oculta visualmente
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'left',
                                width: responsive ? '30px' : '70px',
                                height: responsive ? '30px' : '70px',
                                backgroundColor: selectedUI === 'Sahib' ? 'primary.light' : 'secondary.light',
                                borderRadius: '100%',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '12px',
                                color: 'black',
                                opacity: 1,
                                transition: 'all 0.3s ease',
                                zIndex: -2,
                            }
                        }}
                    />
                    {
                        selectedUI === 'Sahib' ?
                        sahibUIPalette.map((item: { color: string }) => (
                            <Box key={item.color}>
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
                        :
                        hidelineUIPalette.map((item: { color: string }) => (
                            <Box key={item.color}>
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
                    <Typography sx={{ color: selectedUI === 'Sahib' ? 'primary.600' : 'secondary.600', textAlign: 'center', padding: '3vh 0', fontWeight: 'bold' }}>
                        © 2025. All rights reserved.
                    </Typography>
                </Box>
            </Grid>
        </>
    )
}
