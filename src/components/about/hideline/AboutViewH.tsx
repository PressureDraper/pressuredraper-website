import { Box, Grid, Typography, useMediaQuery } from "@mui/material"
import { motion } from 'framer-motion';
import { navBarHeigth, navBarHeigthResponsive } from "../../../pages/HomePage";
import { Star } from "./Star";

const generateStars = (count: number) => {
    const stars = [];

    for (let i = 0; i < count; i++) {
        stars.push({
            id: i,
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: Math.random() * 2 + 1, // 1px to 3px
            delay: Math.random() * 5, // 0s to 5s
            duration: Math.random() * 3 + 2 // 2s to 5s
        });
    }

    return stars;
};

export const AboutViewH = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const stars = generateStars(50);

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
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                {stars.map((star) => (
                    <Star
                        key={star.id}
                        top={star.top}
                        left={star.left}
                        size={star.size}
                        delay={star.delay}
                        duration={star.duration}
                    />
                ))}
            </Box>
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
