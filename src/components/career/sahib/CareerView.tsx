import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material"
import { motion } from 'framer-motion';
import { useContext } from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import UIContext from "../../../context/UIContext";
import { navBarHeigth, navBarHeigthResponsive } from "../../../pages/HomePage";
import { Curriculum } from "./Curriculum";
import { Projects } from "./Projects";

export const CareerView = () => {
    const { selectedUI } = useContext(UIContext);
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");

    return (
        <>
            <Grid sx={{
                backgroundColor: 'primary.100',
                minHeight: `calc(100vh - ${responsive ? navBarHeigthResponsive : navBarHeigth}px)`,
                transition: 'background 0.5s ease',
                flexDirection: 'row',
                overflow: 'visible',
                position: 'relative',
                zIndex: 0
            }}>
                <Grid container sx={{ zIndex: 5, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto', position: 'relative' }}>
                    <img width={'95%'} height={'100%'} alt="background.svg" loading="lazy" src={`${import.meta.env.VITE_APP_BASE_ROUTE}/background.svg`} style={{ position: 'absolute', zIndex: -1, opacity: 0.5 }}></img>
                    <Grid size={12} sx={{ pl: responsive ? 0 : '18.5%', pr: responsive ? 0 : '18.5%', height: 'auto', mb: '7vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            style={{ marginTop: responsive ? '5vh' : '4vh', position: 'relative' }}
                            viewport={{ once: true }}
                        >
                            <Typography
                                color={selectedUI === 'Sahib' ? "primary.dark" : "secondary.300"}
                                fontFamily={'Ubuntu, serif'}
                                fontWeight={'bold'}
                                fontSize={responsive ? '30px' : '2.5vw'}
                                fontStyle={'normal'}
                                letterSpacing={'.1rem'}
                                textAlign={responsive ? 'center' : 'left'}
                                sx={{
                                    transition: 'color 0.5s ease',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: responsive ? 0 : 3,
                                        left: 0,
                                        width: '20%',
                                        height: '5px',
                                        backgroundColor: 'primary.300', // line color
                                        transition: 'all 0.5s ease', // expand animation
                                    }
                                }}
                            >
                                Career
                            </Typography>
                        </motion.div>
                        <Box sx={{
                            mt: 2,
                            pt: responsive ? 3 : 4,
                            pl: responsive ? 2 : 0,
                            pr: responsive ? 2 : 0,
                            height: 'auto',
                            width: '100%',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'left'
                        }}>
                            <Grid container size={12} spacing={1.5} sx={{ width: '100%', overflow: 'visible' }}>
                                <Grid size={12} sx={{ backgroundColor: 'primary.dark', borderRadius: 5, width: 'fit-content', display: 'flex', flexDirection: 'row' }}>
                                    <Typography
                                        color={selectedUI === 'Sahib' ? "primary.light" : "secondary.300"}
                                        fontFamily={'Ubuntu, serif'}
                                        fontWeight={'bold'}
                                        fontSize={responsive ? '18px' : '1.3vw'}
                                        fontStyle={'normal'}
                                        letterSpacing={'.1rem'}
                                        textAlign={responsive ? 'center' : 'left'}
                                        sx={{ transition: 'color 0.5s ease', pl: 2, pr: 2 }}
                                    >
                                        <AddTaskIcon sx={{ fontSize: responsive ? '5vw' : '1.2vw', mr: 0.8, mb: responsive ? -0.5 : -0.3, color: 'primary.light' }} />
                                        Professional Background
                                    </Typography>
                                </Grid>
                                <Grid size={12} sx={{ width: '100%' }}>
                                    <Divider sx={{ backgroundColor: 'gray' }} />
                                </Grid>
                                <Grid container sx={{ gap: 2 }} size={12}>
                                    <Curriculum />
                                </Grid>
                            </Grid>
                            <Grid container size={12} spacing={1.5} sx={{ width: '100%', overflow: 'visible', mt: 5 }}>
                                <Grid size={12} sx={{ backgroundColor: 'primary.dark', borderRadius: 5, width: 'fit-content', display: 'flex', flexDirection: 'row' }}>
                                    <Typography
                                        color={selectedUI === 'Sahib' ? "primary.light" : "secondary.300"}
                                        fontFamily={'Ubuntu, serif'}
                                        fontWeight={'bold'}
                                        fontSize={responsive ? '18px' : '1.3vw'}
                                        fontStyle={'normal'}
                                        letterSpacing={'.1rem'}
                                        textAlign={responsive ? 'center' : 'left'}
                                        sx={{ transition: 'color 0.5s ease', pl: 2, pr: 2 }}
                                    >
                                        <FolderSpecialIcon sx={{ fontSize: responsive ? '5vw' : '1.2vw', mr: 0.8, mb: responsive ? -0.5 : -0.3, color: 'primary.light' }} />
                                        Projects
                                    </Typography>
                                </Grid>
                                <Grid size={12} sx={{ width: '100%' }}>
                                    <Divider sx={{ backgroundColor: 'gray' }} />
                                </Grid>
                                <Grid container sx={{ minWidth: '100%' }}>
                                    <Projects />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
