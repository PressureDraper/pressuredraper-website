import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material"
import { navBarHeigth, navBarHeigthResponsive } from "../../../pages/HomePage";
import { motion } from 'framer-motion';
import { SectionObserver } from "../../ui/SectionObserver";
import { PlayerControls } from "../../about/hideline/PlayerControls";

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
                zIndex: -1
            }
        }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                style={{ width: '100%', willChange: 'transform, opacity', display: 'flex', justifyContent: 'center', marginBottom: responsive ? '20px' : '25px' }}
            >
                <Box sx={{ width: 'fit-content', position: 'relative' }}>
                    <SectionObserver sectionId="Tracks" />
                    <Typography
                        color={'secondary.300'}
                        fontFamily={'Ubuntu, serif'}
                        fontWeight={'bold'}
                        fontSize={responsive ? '30px' : '2.5vw'}
                        fontStyle={'normal'}
                        letterSpacing={'.1rem'}
                        textAlign={responsive ? 'center' : 'center'}
                        sx={{
                            transition: 'color 0.5s ease',
                            mt: 2,
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: responsive ? 0 : 3,
                                left: 0,
                                width: '15%',
                                height: '5px',
                                backgroundColor: responsive ? 'secondary.200' : 'secondary.light', // line color
                                transition: 'background-color 0.5s ease',
                            }
                        }}
                    >
                        Tracks
                    </Typography>
                </Box>
            </motion.div>
            <Grid container sx={{ pl: responsive ? 3 : '18.5%', pr: responsive ? 3 : '18.5%', height: 'auto', mb: responsive ? '20px' : '25px', display: 'flex', flexDirection: 'row', alignItems: responsive ? 'center' : 'left' }}>
                <Grid size={responsive ? 12 : 5.5} sx={{ display: 'flex', justifyContent: 'center', minHeight: responsive ? 'auto' : '77vh', verticalAlign: 'middle', alignItems: 'center' }}>
                    <Box sx={{
                        height: responsive ? '620px' : '550px',
                        width: responsive ? '350px' : '330px',
                        borderRadius: '15px',
                        boxShadow: '0 8px 32px 0 rgba(100, 32, 135, 0.54)',
                        backdropFilter: 'blur( 6px )',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        flexDirection: 'column',
                        pb: 0
                    }}>
                        <Box sx={{
                            width: '100%', // o un ancho específico
                            height: '63%', // o lo que necesites
                            overflow: 'hidden',
                            p: responsive ? 3 : 1.5,
                            display: 'flex',
                            justifyContent: 'center',
                            mb: -4
                        }}>
                            <img
                                alt="wonders.webp"
                                loading="lazy"
                                src={`${import.meta.env.VITE_APP_BASE_ROUTE}/covers/wonders.webp`}
                                style={{
                                    width: 'auto',
                                    height: '95%',
                                    objectFit: 'cover',
                                    borderRadius: '15px',
                                    marginTop: responsive ? '-7px' : 0
                                }}
                            />
                        </Box>
                        <Box sx={{ marginTop: responsive ? '10px' : '15px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                            <Box>
                                <Typography
                                    fontFamily={'Ubuntu, serif'}
                                    fontWeight={'bold'}
                                    fontSize={'20px'}
                                    letterSpacing={'.05rem'}
                                >
                                    Hideline
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    fontFamily={'Ubuntu, serif'}
                                    fontSize={'18px'}
                                >
                                    Wonders
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ marginTop: '15px', display: 'flex', justifyContent: 'space-around' }}>
                            <PlayerControls img={'previous.png'} alt_text={'previous-track'} heigth="27px" mt="14px" ml="13px" />
                            <PlayerControls img={'play.png'} alt_text={'previous-track'} heigth="60px" mt="-3px" ml="0px" />
                            <PlayerControls img={'next.png'} alt_text={'previous-track'} heigth="27px" mt="14px" ml="13px" />
                        </Box>
                        <Box sx={{
                            marginTop: responsive ? '25px' : '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            ml: 4,
                            mr: 4
                        }}>
                            <Box sx={{ 
                                width: '100%',
                                height: '10px',
                                position: 'relative',
                                cursor: 'pointer',
                                boxShadow: '0 2px 10px 0 #0008',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '15px'
                             }}>
                                <Box sx={{ 
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    borderRadius: '15px',
                                    width: '50%',
                                    height: '100%',
                                    transition: '0.6s'
                                }}>
                                    
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ marginTop: responsive ? '25px' : '20px', display: 'flex', justifyContent: 'center' }}>
                            <Box>
                                asdsad
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                {
                    !responsive &&
                    <Grid size={1} sx={{ display: 'flex', justifyContent: 'center', verticalAlign: 'middle', alignItems: 'center' }}>
                        <Divider orientation="vertical" flexItem sx={{ height: '50%', width: '1px', backgroundColor: 'secondary.main', m: 'auto' }} />
                    </Grid>
                }
                {/* <Grid size={responsive ? 12 : 5.5} sx={{ display: 'flex', justifyContent: 'center', minHeight: '77vh', verticalAlign: 'middle', alignItems: 'center' }}>
                    <Box sx={{
                        height: responsive ? '70vh' : '55vh',
                        width: responsive ? '100%' : '18vw',
                        borderRadius: '15px',
                        boxShadow: '0 8px 32px 0 rgba(100, 32, 135, 0.54)',
                        backdropFilter: 'blur( 6px )',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        justifyContent: 'center'
                    }}>

                    </Box>
                </Grid> */}
            </Grid>
        </Grid>
    )
}
