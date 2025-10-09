import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material"
import { motion } from 'framer-motion';
import { navBarHeigth, navBarHeigthResponsive } from "../../../pages/HomePage";
import { Star } from "./Star";
import { SocialLinks } from "./SocialLinks";
import { links } from "../../../helpers/about/hideline/socialLinks";
import { SectionObserver } from "../../ui/SectionObserver";

const generateStars = (count: number) => {
    const stars = [];

    for (let i = 0; i < count; i++) {
        stars.push({
            id: i,
            top: Math.random() * 98,
            left: Math.random() * 98,
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
            <Box sx={{ position: 'static', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
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
                <Grid size={12} sx={{ pl: responsive ? 3 : '18.5%', pr: responsive ? 3 : '18.5%', height: 'auto', mb: responsive ? '20px' : '25px', display: 'flex', flexDirection: 'column', alignItems: responsive ? 'center' : 'left' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        viewport={{ once: true }}
                        style={{ width: '100%', willChange: 'transform, opacity', display: 'flex', justifyContent: 'center', marginBottom: responsive ? '20px' : '25px' }}
                    >
                        <Box sx={{ width: 'fit-content', position: 'relative' }}>
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
                                        backgroundColor: 'secondary.100', // line color
                                        transition: 'background-color 0.5s ease',
                                    }
                                }}
                            >
                                About Me
                            </Typography>
                        </Box>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Box
                            sx={{
                                mt: 0,
                                mb: 0,
                                p: 4,
                                boxShadow: '0px 15px 50px 0px rgba(249, 248, 252, 0.3)',
                                background: 'rgba(249, 248, 252, 0.25)',
                                borderRadius: 2,
                                height: 'auto',
                                width: 'auto',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                color: 'secondary.light',
                                flexDirection: 'column',
                                gap: 1
                            }}
                        >
                            <SectionObserver sectionId="About" />
                            <Typography letterSpacing={'.03rem'} fontFamily={'Ubuntu, serif'} sx={{ textAlign: 'center', fontFamily: '' }}>I'm Sahib, just a 24 years old producer. I try to focus my heart on every song i make through the melody in my songs. Even knowing that i have to improve much more, i'll be trying my best to some day take my music where i want it to be. I'm mainly over Melodic Dubstep and Chillstep genres, but i could try some other EDM stuff on the way...</Typography>
                            <Divider orientation="horizontal" variant="fullWidth" flexItem>
                                <Typography letterSpacing={'.03rem'} fontFamily={'Ubuntu, serif'} fontSize={18} fontWeight={'bold'}>Some FAQ</Typography>
                            </Divider>
                            <Typography letterSpacing={'.03rem'} fontFamily={'Ubuntu, serif'} sx={{ width: '100%', textAlign: 'center', fontWeight: 'bold' }}>
                                What does your logo mean ⁉️
                            </Typography>
                            <Typography letterSpacing={'.03rem'} fontFamily={'Ubuntu, serif'} sx={{ textAlign: 'center' }}>
                                When i was trying to design my logo, i wanted to reflect one of the most important aspects in my life on it, and yeah, it's a girl surrounded by two wings but, the main point here is that you can always see the life so different when you have someone who could be really good for you by your side. And i think there's nothing out there that could compare to this feeling. Money could buy happiness but, not an honest love.
                            </Typography>
                            <Typography letterSpacing={'.03rem'} fontFamily={'Ubuntu, serif'} sx={{ width: '100%', textAlign: 'center', fontWeight: 'bold' }}>
                                How did you start in this music production world ⁉️
                            </Typography>
                            <Typography letterSpacing={'.03rem'} fontFamily={'Ubuntu, serif'} sx={{ textAlign: 'center' }}>
                                I started to listen to EDM music so hard when i was just starting high school in 2015, i used to hear genres like Melodic Dubstep, Chillstep, Drum & Bass, Tropical House, Hardstyle, Future Bass, between others that i usually discovered from a YT channel formerly named "AirwavemusicTV". In company of one of my best friends (who by the way i met him there) we used to spend breaks listening to this music, looking at the sun wondering how would be our life in the future and thinking about the aspect I've described in the previous question. In that moments i knew that Melodic Dubstep was going to be one of my most favorite genres, until now. Some time later, when i get college in 2018 i started to learn music production with a desire of creating my own songs. 🎶
                            </Typography>
                            <Typography letterSpacing={'.03rem'} fontFamily={'Ubuntu, serif'} sx={{ textAlign: 'center' }}>
                                I began making trap beats, lo-fi songs and other genres not as hard to produce as electronic music just for getting experience and to be familiarized with the things i was doing there over the DAW i'm currently using. After some some time i decided to make my first Melodic Dubstep song that although it had a good melody, the song was really poorly talking about production, mixing and mastering stuff, i kept practicing until i got something that i knew finally was decent and here i am. I'm thinking about the possibility of make a rework of that song, using the main melody but with a total different ambience and, maybe i could show how it was at the beginning and after.
                            </Typography>
                            <Typography letterSpacing={'.03rem'} fontFamily={'Ubuntu, serif'} sx={{ width: '100%', textAlign: 'center', fontWeight: 'bold' }}>
                                Who were some of the artist that have inspired you and you like the most ⁉️
                            </Typography>
                            <Typography letterSpacing={'.03rem'} fontFamily={'Ubuntu, serif'} sx={{ textAlign: 'center' }}>
                                Avicii |
                                Mendum |
                                Skrux |
                                Dimatis |
                                Soar |
                                Krys Talk |
                                T-Mass |
                                Seven Lions |
                                Foria |
                                Sex Whales |
                                Beatcore |
                                Culture Code |
                                Adventure Club
                            </Typography>
                        </Box>
                    </motion.div>
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ pl: responsive ? 3 : '18.5%', pr: responsive ? 3 : '18.5%', display: 'flex', justifyContent: 'center', pb: responsive ? 3 : 0 }}>
                {
                    links.map((link, index) => (
                        <SocialLinks key={index} link={link} index={index} />
                    ))
                }
            </Grid>
        </Grid>
    )
}
