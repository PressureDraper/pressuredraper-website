import { Box, Grid2, Typography, useMediaQuery } from "@mui/material"
import { navBarHeigth, navBarHeigthResponsive } from "../../pages/HomePage";
import { motion } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from "react";
import { UIContext } from "../../context/UIContext";
import AddTaskIcon from '@mui/icons-material/AddTask';

export const CareerView = () => {
    const { selectedUI } = useContext(UIContext);
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const [isVisible, setIsVisible] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 } // Se dispara cuando el 10% del elemento es visible
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);

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
                <Grid2 container>
                    <Grid2 size={12} sx={{ pl: responsive ? 0 : '18.5%', pr: responsive ? 0 : '18.5%', height: 'auto', mb: '13vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <motion.div
                            ref={titleRef}
                            className={`animate__animated ${isVisible ? 'animate__fadeInUp' : ''}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVisible ? 1 : 0 }}
                            transition={{ duration: 1 }}
                            style={{ marginTop: responsive ? '5vh' : '7vh' }}
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
                            <Grid2 container>
                                <Grid2 size={12} sx={{ backgroundColor: 'primary.light', borderRadius: 5, m: 'auto' }}>
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
                                        <AddTaskIcon sx={{ fontSize: responsive ? '5vw' : '1.2vw', mr: 0.8, mb: responsive ? -0.5 : -0.3, color: 'primary.dark' }}/>
                                        Professional Background
                                    </Typography>
                                </Grid2>
                                {/* <Grid2 size={12}>
                                    asdas
                                </Grid2> */}
                            </Grid2>
                        </Box>
                    </Grid2>
                </Grid2>
            </Grid2>
        </>
    )
}
