import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material"
import { navBarHeigth, navBarHeigthResponsive } from "../../pages/HomePage";
import { motion } from 'framer-motion';
import { useContext } from "react";
import { UIContext } from "../../context/UIContext";
import AddTaskIcon from '@mui/icons-material/AddTask';
import { Curriculum } from "./Curriculum";

export const CareerView = () => {
    const { selectedUI } = useContext(UIContext);
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");

    return (
        <>
            <Grid sx={{
                backgroundColor: 'primary.100',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: `calc(auto - ${responsive ? navBarHeigthResponsive : navBarHeigth}px)`,
                transition: 'background 0.5s ease',
                flexDirection: 'row',
                overflow: 'visible',
            }}>
                <Grid container>
                    <Grid size={12} sx={{ pl: responsive ? 0 : '18.5%', pr: responsive ? 0 : '18.5%', height: 'auto', mb: '13vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            style={{ marginTop: responsive ? '5vh' : '7vh' }}
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
                                sx={{ transition: 'color 0.5s ease' }}
                            >
                                Career
                            </Typography>
                        </motion.div>
                        <Box sx={{
                            mt: 2,
                            mb: 3,
                            pt: responsive ? 3 : 4,
                            pb: 4,
                            pl: responsive ? 2 : 0,
                            pr: responsive ? 2 : 0,
                            height: 'auto',
                            width: '100%',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: responsive ? 'left' : 'left'
                        }}>
                            <Grid container spacing={1.5} sx={{ width: '100%', overflow: 'visible' }}>
                                <Grid size={12} sx={{ backgroundColor: 'primary.light', borderRadius: 5, width: 'fit-content', display: 'flex', flexDirection: 'row' }}>
                                    <Typography
                                        color={selectedUI === 'Sahib' ? "primary.dark" : "secondary.300"}
                                        fontFamily={'Ubuntu, serif'}
                                        fontWeight={'bold'}
                                        fontSize={responsive ? '18px' : '1.3vw'}
                                        fontStyle={'normal'}
                                        letterSpacing={'.1rem'}
                                        textAlign={responsive ? 'center' : 'left'}
                                        sx={{ transition: 'color 0.5s ease', pl: 2, pr: 2 }}
                                    >
                                        <AddTaskIcon sx={{ fontSize: responsive ? '5vw' : '1.2vw', mr: 0.8, mb: responsive ? -0.5 : -0.3, color: 'primary.dark' }} />
                                        Professional Background
                                    </Typography>
                                </Grid>
                                <Grid size={12} sx={{ width: '100%' }}>
                                    <Divider sx={{ backgroundColor: 'gray' }} />
                                </Grid>
                                <Curriculum />
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
