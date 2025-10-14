import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material"
import { navBarHeigth, navBarHeigthResponsive } from "../../../pages/HomePage";
import { motion } from 'framer-motion';
import { SectionObserver } from "../../ui/SectionObserver";
import { AudioPlayer } from "./AudioPlayer";

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
                <AudioPlayer />
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
