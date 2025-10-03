import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material"
import { motion } from 'framer-motion';
import { navBarHeigth, navBarHeigthResponsive } from "../../../pages/HomePage";
import { Star } from "./Star";

const links = [
    {
        name: 'YouTube',
        url: 'https://www.youtube.com/@hideline_music',
        icon: <svg fill="#c9c9c9" width="55px" height="55px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#c9c9c9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>youtube</title> <path d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-0.354-1.301-1.354-2.307-2.625-2.663l-0.027-0.006c-3.193-0.406-6.886-0.638-10.634-0.638-0.381 0-0.761 0.002-1.14 0.007l0.058-0.001c-0.322-0.004-0.701-0.007-1.082-0.007-3.748 0-7.443 0.232-11.070 0.681l0.434-0.044c-1.297 0.363-2.297 1.368-2.644 2.643l-0.006 0.026c-0.4 2.109-0.628 4.536-0.628 7.016 0 0.088 0 0.176 0.001 0.263l-0-0.014c-0 0.074-0.001 0.162-0.001 0.25 0 2.48 0.229 4.906 0.666 7.259l-0.038-0.244c0.354 1.301 1.354 2.307 2.625 2.663l0.027 0.006c3.193 0.406 6.886 0.638 10.634 0.638 0.38 0 0.76-0.002 1.14-0.007l-0.058 0.001c0.322 0.004 0.702 0.007 1.082 0.007 3.749 0 7.443-0.232 11.070-0.681l-0.434 0.044c1.298-0.362 2.298-1.368 2.646-2.643l0.006-0.026c0.399-2.109 0.627-4.536 0.627-7.015 0-0.088-0-0.176-0.001-0.263l0 0.013c0-0.074 0.001-0.162 0.001-0.25 0-2.48-0.229-4.906-0.666-7.259l0.038 0.244z"></path> </g></svg>
    },
    {
        name: 'Spotify',
        url: 'https://open.spotify.com/intl-es/artist/6rrDTHP1dvdR9VdWKgLvfz?si=Tflf1l0ES4m-ZXZQ03Cf6w',
        icon: <svg width="40px" height="40px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#c9c9c9" stroke="#c9c9c9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Spotify-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-200.000000, -460.000000)" fill="#c9c9c9"> <path d="M238.16,481.36 C230.48,476.8 217.64,476.32 210.32,478.6 C209.12,478.96 207.92,478.24 207.56,477.16 C207.2,475.96 207.92,474.76 209,474.4 C217.52,471.88 231.56,472.36 240.44,477.64 C241.52,478.24 241.88,479.68 241.28,480.76 C240.68,481.6 239.24,481.96 238.16,481.36 M237.92,488.08 C237.32,488.92 236.24,489.28 235.4,488.68 C228.92,484.72 219.08,483.52 211.52,485.92 C210.56,486.16 209.48,485.68 209.24,484.72 C209,483.76 209.48,482.68 210.44,482.44 C219.2,479.8 230,481.12 237.44,485.68 C238.16,486.04 238.52,487.24 237.92,488.08 M235.04,494.68 C234.56,495.4 233.72,495.64 233,495.16 C227.36,491.68 220.28,490.96 211.88,492.88 C211.04,493.12 210.32,492.52 210.08,491.8 C209.84,490.96 210.44,490.24 211.16,490 C220.28,487.96 228.2,488.8 234.44,492.64 C235.28,493 235.4,493.96 235.04,494.68 M224,460 C210.8,460 200,470.8 200,484 C200,497.2 210.8,508 224,508 C237.2,508 248,497.2 248,484 C248,470.8 237.32,460 224,460" id="Spotify"> </path> </g> </g> </g></svg>
    },
    {
        name: 'SoundCloud',
        url: 'https://soundcloud.com/hidelinemusic',
        icon: <svg width="64px" height="64px" viewBox="0 -10.5 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#c9c9c9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Soundcloud-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-301.000000, -469.000000)" fill="#c9c9c9"> <path d="M301,491.152608 C301,491.756664 301.215945,492.213396 301.647743,492.52299 C302.079587,492.832537 302.541182,492.941985 303.032573,492.851428 C303.494168,492.760824 303.81804,492.594702 304.004234,492.353108 C304.190336,492.111513 304.283433,491.711316 304.283433,491.152608 L304.283433,484.583839 C304.283433,484.115689 304.123374,483.719298 303.80321,483.394665 C303.483092,483.069986 303.092212,482.90767 302.630572,482.90767 C302.183852,482.90767 301.800433,483.069986 301.480269,483.394665 C301.160105,483.719298 301,484.115689 301,484.583839 L301,491.152608 L301,491.152608 Z M306.137273,493.961324 C306.137273,494.399303 306.289918,494.727695 306.595161,494.946685 C306.900449,495.165675 307.291329,495.275124 307.767799,495.275124 C308.25919,495.275124 308.657485,495.165629 308.962773,494.946685 C309.268016,494.727742 309.420661,494.399303 309.420661,493.961324 L309.420661,478.649296 C309.420661,478.196277 309.260556,477.807405 308.940437,477.482773 C308.620273,477.15814 308.229394,476.995778 307.767799,476.995778 C307.32108,476.995778 306.937615,477.15814 306.617497,477.482773 C306.297332,477.807452 306.137273,478.196277 306.137273,478.649296 L306.137273,493.961324 L306.137273,493.961324 Z M311.25221,494.686153 C311.25221,495.124087 311.408562,495.452525 311.721266,495.671515 C312.033969,495.890459 312.436017,495.999954 312.927454,495.999954 C313.403924,495.999954 313.794804,495.890459 314.100047,495.671515 C314.405335,495.452525 314.55798,495.124087 314.55798,494.686153 L314.55798,480.71053 C314.55798,480.242426 314.397875,479.842229 314.077756,479.510031 C313.757592,479.177833 313.374173,479.011757 312.927454,479.011757 C312.465813,479.011757 312.071226,479.177833 311.743647,479.510031 C311.416068,479.842229 311.252256,480.242426 311.252256,480.71053 L311.252256,494.686153 L311.25221,494.686153 Z M316.389483,494.754106 C316.389483,495.584671 316.940422,495.999954 318.042345,495.999954 C319.144223,495.999954 319.695161,495.584671 319.695161,494.754106 L319.695161,472.103177 C319.695161,470.834725 319.31545,470.117461 318.556027,469.951339 C318.064635,469.830519 317.580659,469.97399 317.104189,470.381707 C316.627673,470.789423 316.389438,471.363216 316.389438,472.103177 L316.389438,494.754106 L316.389483,494.754106 Z M321.616146,495.410983 L321.616146,470.766772 C321.616146,469.981556 321.846921,469.513452 322.308561,469.362415 C323.306219,469.12082 324.296463,469 325.279245,469 C327.557469,469 329.679432,469.543622 331.644951,470.630867 C333.610517,471.718111 335.200124,473.201747 336.413681,475.081774 C337.627284,476.961848 338.330867,479.034361 338.52443,481.299501 C339.432744,480.906869 340.400606,480.710577 341.42806,480.710577 C343.512766,480.710577 345.295936,481.458057 346.777525,482.953019 C348.25916,484.448026 349,486.244969 349,488.343986 C349,490.458088 348.25916,492.262597 346.777525,493.757558 C345.295936,495.252519 343.520227,496 341.450396,496 L322.018102,495.977349 C321.884041,495.932047 321.783529,495.848963 321.716521,495.728189 C321.649513,495.607415 321.616146,495.501587 321.616146,495.410983 L321.616146,495.410983 L321.616146,495.410983 Z" id="Soundcloud"> </path> </g> </g> </g></svg>
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/hideline_/',
        icon: <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#c9c9c9"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#c9c9c9"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#c9c9c9"></path> </g></svg>
    }
]

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
                                        backgroundColor: responsive ? 'secondary.200' : 'secondary.200', // line color
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
                            <Typography letterSpacing={'.03rem'} fontFamily={'Ubuntu, serif'} sx={{ textAlign: 'center', fontFamily: '' }}>I'm Sahib, just a 24 years old producer. I try to focus my heart on every song i make through the melody in my songs. Even knowing that i have to improve much more, i'll be trying my best to some day take my music where i want it to be. I'm mainly over Melodic Dubstep and Chillstep genres, but i could try some other EDM stuff on the way...</Typography>
                            <Divider orientation="horizontal" variant="fullWidth" flexItem sx={{ borderColor: 'secondary.300' }}>
                                <Typography>Some questions related to me</Typography>
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
            <Grid container spacing={3} sx={{ pl: responsive ? 3 : '18.5%', pr: responsive ? 3 : '18.5%', display: 'flex', justifyContent: 'center' }}>
                {
                    links.map((link, index) => (
                        <Grid size={responsive ? 12 : 'auto'} sx={{ height: '70px', borderRadius: 1, p: 1, boxShadow: '0px 5px 15px 0px rgba(249, 248, 252, 0.3)', background: 'rgba(249, 248, 252, 0.1)' }}>
                            <Grid sx={{ display: 'flex', height: '100%' }}>
                                <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}>
                                    {link.icon}
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%', mr: index === 2 || index === 3 ? 2.5 : 2, ml: 0.5 }}>
                                    <Typography letterSpacing={'.05rem'} fontFamily={'Ubuntu, serif'} sx={{ color: 'secondary.light', fontWeight: 'bold', fontSize: '20px' }}>{link.name}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
}
