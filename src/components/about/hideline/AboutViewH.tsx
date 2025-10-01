import { Grid, Typography, useMediaQuery } from "@mui/material"
import { motion } from 'framer-motion';
import { navBarHeigth, navBarHeigthResponsive } from "../../../pages/HomePage";

export const AboutViewH = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");

    return (
        <Grid sx={{
            // backgroundImage: selectedUI === 'Sahib' ? 'url("./sahibUI.svg")' : 'url("./hidelineUI.svg")',
            background: 'linear-gradient(180deg, rgba(8, 11, 18, 1) 0%, rgba(28, 30, 87, 1) 50%, rgba(116, 88, 163, 1) 100%)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            minHeight: `calc(100vh - ${responsive ? navBarHeigthResponsive : navBarHeigth}px)`,
            transition: 'background 0.5s ease',
            flexDirection: 'row',
            position: 'relative'
        }}>
            <Grid container>
                <Grid size={12} sx={{ pl: responsive ? 0 : '18.5%', pr: responsive ? 0 : '18.5%', height: 'auto', mb: '13vh', display: 'flex', flexDirection: 'column', alignItems: responsive ? 'center' : 'left' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        viewport={{ once: true }}
                        style={{ position: 'relative', width: 'fit-content', willChange: 'transform, opacity', }}
                    >
                        <Typography
                            color={'secondary.300'}
                            fontFamily={'Ubuntu, serif'}
                            fontWeight={'bold'}
                            fontSize={responsive ? '30px' : '2.5vw'}
                            fontStyle={'normal'}
                            letterSpacing={'.1rem'}
                            textAlign={responsive ? 'center' : 'left'}
                            sx={{
                                transition: 'color 0.5s ease',
                                mt: responsive ? 2 : 2,
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
                            About Me
                        </Typography>
                    </motion.div>
                </Grid>
            </Grid>
        </Grid>
    )
}
