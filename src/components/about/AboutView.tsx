import { Box, Button, Grid, Link, Typography, useMediaQuery } from "@mui/material"
import { HidelineUI, SahibUI } from "../../helpers/about/backgroundPatterns";
import { useContext, useEffect, useRef, useState } from "react";
import { UIContext } from "../../context/UIContext";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import TranslateIcon from '@mui/icons-material/Translate';
import LanguageIcon from '@mui/icons-material/Language';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DownloadIcon from '@mui/icons-material/Download';
import 'animate.css';
import { motion, useInView } from 'framer-motion';
import { PropsUIContext } from "../../interfaces/context/IUIContext";
import { NavigateFunction, useNavigate } from "react-router-dom";

const performance = ['Enhancing loading times', 'Improving user experience', 'Applying SSR'];
const coding = ['Clean coding', 'Serving security', 'Troubleshooting'];
const learning = ['Digging new tools', 'Innovating', 'Cutting-edge Tech'];

const AboutView = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const { selectedUI } = useContext(UIContext);
    const [index, setIndex] = useState({ performance: 0, coding: 0, learning: 0 });
    const [focus, setFocus] = useState({ performance: 'Enhancing loading times', coding: 'Clean coding', learning: 'Digging new tech' });
    const { setActiveSection, setDynamic } = useContext<PropsUIContext>(UIContext);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const paragraph = useRef(null);
    const isInView = useInView(paragraph, { once: false });
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index) => ({ ...index, performance: (index.performance + 1) % performance.length }));
        }, 3000);

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index) => ({ ...index, coding: (index.coding + 1) % coding.length }));
        }, 4000);

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index) => ({ ...index, learning: (index.learning + 1) % learning.length }));
        }, 5000);

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);

    useEffect(() => {
        setFocus({ ...focus, performance: performance[index.performance] });
    }, [index.performance]);

    useEffect(() => {
        setFocus({ ...focus, coding: coding[index.coding] });
    }, [index.coding]);

    useEffect(() => {
        setFocus({ ...focus, learning: learning[index.learning] });
    }, [index.learning]);

    const onDownload = () => {
        setIsLoading(true);
        setTimeout(() => {
            const link = document.createElement("a");
            link.download = `CV_SAHIB_HERNANDEZ_EN.pdf`;
            link.href = 'https://www.dropbox.com/scl/fi/yjktjqdkimmmoyzqm48eg/CV_SAHIB_HERNANDEZ_EN.pdf?rlkey=xxynshf4ftbgmlvehunyx6cw2&st=bpwh5n10&dl=1';
            link.click();

            setIsLoading(false);
        }, 1500);
    };

    useEffect(() => {
        if (isInView) {
            setActiveSection('About');
            navigate(`/?section=About`, { replace: true });
            setDynamic(0);
        }
    }, [isInView]);

    return (
        <>
            <Grid sx={{
                backgroundImage: selectedUI === 'Sahib' ? SahibUI : HidelineUI,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: `auto`,
                transition: 'background 0.5s ease',
                flexDirection: 'row',
                position: 'relative'
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#010100"><path d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"></path></svg>
                <Grid container>
                    <Grid size={12} sx={{ pl: responsive ? 0 : '18.5%', pr: responsive ? 0 : '18.5%', height: 'auto', mb: '13vh', display: 'flex', flexDirection: 'column', alignItems: responsive ? 'center' : 'left' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            style={{ position: 'relative', width: 'fit-content' }}
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
                                    mt: responsive ? 2 : -3,
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: responsive ? 0 : 3,
                                        left: 0,
                                        width: '15%',
                                        height: '5px',
                                        backgroundColor: responsive ? 'primary.200' : 'primary.light', // line color
                                        transition: 'all 0.5s ease', // expand animation
                                    }
                                }}
                            >
                                About Me
                            </Typography>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{
                                ml: responsive ? 3 : 0,
                                mr: responsive ? 3 : 0,
                                mt: 2,
                                mb: 3,
                                pt: 4,
                                pb: 4,
                                boxShadow: responsive ? '0px 15px 20px 0px rgba(101, 81, 67, 0.2)' : '0px 15px 20px 0px rgba(101, 81, 67, 0.2)',
                                borderRadius: 5,
                                height: 'auto',
                                width: 'auto',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Grid container>
                                    <Grid size={responsive ? 12 : 8.5} sx={{ display: 'flex', flexDirection: 'column', gap: 3.7, textAlign: 'justify', pl: responsive ? 3 : 7, pr: responsive ? 3 : 7 }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                            <Typography
                                                fontFamily={'Ubuntu, serif'}
                                                fontSize={responsive ? '16px' : '1vw'}
                                                color="primary.dark"
                                                letterSpacing={'.05rem'}
                                            >
                                                <b style={{ fontSize: responsive ? '20px' : '1.5vw' }}>S</b>ahib is a Computer Science graduate with 4+ years of experience within the field. He resides in Veracruz, Mexico and is currently working as a Full-Stack developer.
                                            </Typography>
                                            <Typography
                                                ref={paragraph}
                                                fontFamily={'Ubuntu, serif'}
                                                fontSize={responsive ? '16px' : '1vw'}
                                                color="primary.dark"
                                                letterSpacing={'.05rem'}
                                            >
                                                <b style={{ fontSize: responsive ? '20px' : '1.5vw' }}>T</b>hanks to his ability as a fast learner, he is always active contributing with quality software solutions that could be scalable and maintainable through the time using emerging technologies.
                                            </Typography>
                                            <Typography
                                                fontFamily={'Ubuntu, serif'}
                                                fontSize={responsive ? '16px' : '1vw'}
                                                color="primary.dark"
                                                letterSpacing={'.05rem'}
                                            >
                                                <b style={{ fontSize: responsive ? '20px' : '1.5vw' }}>H</b>is interests and experience spans over Cloud Computing, Database and Server Administration, Front-end and Back-end development and automation tasks.
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                            <Typography
                                                color={selectedUI === 'Sahib' ? "primary.light" : "secondary.300"}
                                                fontFamily={'Ubuntu, serif'}
                                                fontWeight={'bold'}
                                                fontSize={responsive ? '25px' : '1.5vw'}
                                                fontStyle={'normal'}
                                                letterSpacing={'.1rem'}
                                                textAlign={responsive ? 'center' : 'left'}
                                                sx={{ transition: 'color 0.5s ease', textAlign: "left" }}
                                            >
                                                <TipsAndUpdatesIcon sx={{ fontSize: responsive ? '5vw' : '1.3vw', mr: 0.8, mb: -0.2, color: 'primary.dark' }} />
                                                Current Focus
                                            </Typography>
                                            <Grid container sx={{ display: 'flex', gap: 3 }}>
                                                <Box sx={{ display: 'flex' }}>
                                                    <Grid size={'auto'}>
                                                        <Box sx={{ height: 'auto', width: 'fit-content', background: 'linear-gradient(90deg, rgba(245,244,241,0.9) 0%, rgba(231,228,218,0.7) 48%, rgba(245,244,241,0.9) 100%)', borderRadius: '5px', display: 'flex', p: 0.8 }}>
                                                            <ElectricBoltIcon sx={{ color: 'primary.dark' }} />
                                                        </Box>
                                                    </Grid>
                                                    <Grid size={'auto'}>
                                                        <Box sx={{ height: '100%', width: 'fit-content' }}>
                                                            <Typography
                                                                fontWeight={'bold'}
                                                                fontFamily={'Ubuntu, serif'}
                                                                letterSpacing={'.05rem'}
                                                                sx={{ ml: 1, mt: -0.5 }}
                                                            >
                                                                Performance Optimization
                                                            </Typography>
                                                            <Typography
                                                                key={focus.performance}
                                                                className="animate__animated animate__fadeInUp"
                                                                fontFamily={'Ubuntu, serif'}
                                                                letterSpacing={'.05rem'}
                                                                color="primary.light"
                                                                sx={{
                                                                    ml: 1, mt: -0.5,
                                                                    transition: 'all 0.5s ease',
                                                                    textAlign: 'left'
                                                                }}
                                                            >
                                                                {focus.performance}
                                                            </Typography>
                                                        </Box>
                                                    </Grid>
                                                </Box>
                                                <Box sx={{ display: 'flex' }}>
                                                    <Grid size={'auto'}>
                                                        <Box sx={{ height: 'auto', width: 'fit-content', background: 'linear-gradient(90deg, rgba(245,244,241,0.9) 0%, rgba(231,228,218,0.7) 48%, rgba(245,244,241,0.9) 100%)', borderRadius: '5px', display: 'flex', p: 0.8 }}>
                                                            <VerifiedUserIcon sx={{ color: 'primary.dark' }} />
                                                        </Box>
                                                    </Grid>
                                                    <Grid size={'auto'}>
                                                        <Box sx={{ height: '100%', width: 'fit-content' }}>
                                                            <Typography
                                                                fontWeight={'bold'}
                                                                fontFamily={'Ubuntu, serif'}
                                                                letterSpacing={'.05rem'}
                                                                sx={{ ml: 1, mt: -0.5 }}
                                                            >
                                                                Quality Solutions
                                                            </Typography>
                                                            <Typography
                                                                key={focus.coding}
                                                                className="animate__animated animate__fadeInUp"
                                                                fontFamily={'Ubuntu, serif'}
                                                                letterSpacing={'.05rem'}
                                                                color="primary.light"
                                                                sx={{
                                                                    ml: 1, mt: -0.5,
                                                                    transition: 'all 0.5s ease',
                                                                    textAlign: 'left'
                                                                }}
                                                            >
                                                                {focus.coding}
                                                            </Typography>
                                                        </Box>
                                                    </Grid>
                                                </Box>
                                                <Box sx={{ display: 'flex' }}>
                                                    <Grid size={'auto'}>
                                                        <Box sx={{ height: 'auto', width: 'fit-content', background: 'linear-gradient(90deg, rgba(245,244,241,0.9) 0%, rgba(231,228,218,0.7) 48%, rgba(245,244,241,0.9) 100%)', borderRadius: '5px', display: 'flex', p: 0.8 }}>
                                                            <AutoStoriesIcon sx={{ color: 'primary.dark' }} />
                                                        </Box>
                                                    </Grid>
                                                    <Grid size={'auto'}>
                                                        <Box sx={{ height: '100%', width: 'fit-content' }}>
                                                            <Typography
                                                                fontWeight={'bold'}
                                                                fontFamily={'Ubuntu, serif'}
                                                                letterSpacing={'.05rem'}
                                                                sx={{ ml: 1, mt: -0.5 }}
                                                            >
                                                                Active Learning
                                                            </Typography>
                                                            <Typography
                                                                key={focus.learning}
                                                                className="animate__animated animate__fadeInUp"
                                                                fontFamily={'Ubuntu, serif'}
                                                                letterSpacing={'.05rem'}
                                                                color="primary.light"
                                                                sx={{
                                                                    ml: 1, mt: -0.5,
                                                                    transition: 'all 0.5s ease',
                                                                    textAlign: 'left'
                                                                }}
                                                            >
                                                                {focus.learning}
                                                            </Typography>
                                                        </Box>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                    <Grid size={responsive ? 12 : 3.5} sx={{ pl: responsive ? 3 : 2, pr: responsive ? 3 : 2, mt: responsive ? 3 : 1, display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'left' }}>
                                        <Typography
                                            color={selectedUI === 'Sahib' ? "primary.light" : "secondary.300"}
                                            fontFamily={'Ubuntu, serif'}
                                            fontWeight={'bold'}
                                            fontSize={responsive ? '25px' : '1.5vw'}
                                            fontStyle={'normal'}
                                            letterSpacing={'.1rem'}
                                            textAlign={responsive ? 'center' : 'left'}
                                            sx={{ transition: 'color 0.5s ease', textAlign: "left" }}
                                        >
                                            <AlternateEmailIcon sx={{ fontSize: responsive ? '5vw' : '1.3vw', mr: 0.8, mb: -0.2, color: 'primary.dark' }} />
                                            Social Media
                                        </Typography>
                                        <Box sx={{ display: 'flex' }}>
                                            <LinkedInIcon className='linkdin' sx={{ fontSize: responsive ? '7vw' : '1.3vw', mr: 1, color: 'primary.light' }} />
                                            <Link href="https://www.linkedin.com/in/pressuredraper/" target="_blank">
                                                <Typography
                                                    color={selectedUI === 'Sahib' ? "primary.dark" : "secondary.300"}
                                                    fontFamily={'Ubuntu, serif'}
                                                    fontWeight={'bold'}
                                                    fontSize={responsive ? '19px' : '1vw'}
                                                    fontStyle={'normal'}
                                                    letterSpacing={'.1rem'}
                                                    textAlign={responsive ? 'center' : 'left'}
                                                    sx={{
                                                        transition: 'color 0.5s ease', textAlign: "left", '&:hover': {
                                                            cursor: 'pointer', color: 'primary.main',
                                                        }, mt: responsive ? 0 : -0.3
                                                    }}
                                                >
                                                    in/pressuredraper
                                                </Typography>
                                            </Link>
                                        </Box>
                                        <Box sx={{ display: 'flex' }}>
                                            <GitHubIcon sx={{ fontSize: responsive ? '7vw' : '1.3vw', mr: 1, color: 'primary.light' }} />
                                            <Link href="https://github.com/PressureDraper" target="_blank">
                                                <Typography
                                                    color={selectedUI === 'Sahib' ? "primary.dark" : "secondary.300"}
                                                    fontFamily={'Ubuntu, serif'}
                                                    fontWeight={'bold'}
                                                    fontSize={responsive ? '19px' : '1vw'}
                                                    fontStyle={'normal'}
                                                    letterSpacing={'.1rem'}
                                                    textAlign={responsive ? 'center' : 'left'}
                                                    sx={{ transition: 'color 0.5s ease', textAlign: "left", '&:hover': { cursor: 'pointer', color: 'primary.main' }, mt: responsive ? 0 : -0.1 }}
                                                >
                                                    @pressuredraper
                                                </Typography>
                                            </Link>
                                        </Box>
                                        <Box sx={{ display: 'flex' }}>
                                            <InstagramIcon sx={{ fontSize: responsive ? '7vw' : '1.3vw', mr: 1, color: 'primary.light' }} />
                                            <Link href="https://www.instagram.com/pressure_draper/" target="_blank">
                                                <Typography
                                                    color={selectedUI === 'Sahib' ? "primary.dark" : "secondary.300"}
                                                    fontFamily={'Ubuntu, serif'}
                                                    fontWeight={'bold'}
                                                    fontSize={responsive ? '19px' : '1vw'}
                                                    fontStyle={'normal'}
                                                    letterSpacing={'.1rem'}
                                                    textAlign={responsive ? 'center' : 'left'}
                                                    sx={{ transition: 'color 0.5s ease', textAlign: "left", '&:hover': { cursor: 'pointer', color: 'primary.main' }, mt: responsive ? 0 : -0.3 }}
                                                >
                                                    pressure_draper
                                                </Typography>
                                            </Link>
                                        </Box>
                                        <Box sx={{ display: 'flex' }}>
                                            <FacebookIcon sx={{ fontSize: responsive ? '7vw' : '1.3vw', mr: 1, color: 'primary.light' }} />
                                            <Link href="https://www.facebook.com/PressureDraper/" target="_blank">
                                                <Typography
                                                    color={selectedUI === 'Sahib' ? "primary.dark" : "secondary.300"}
                                                    fontFamily={'Ubuntu, serif'}
                                                    fontWeight={'bold'}
                                                    fontSize={responsive ? '19px' : '1vw'}
                                                    fontStyle={'normal'}
                                                    letterSpacing={'.1rem'}
                                                    textAlign={responsive ? 'center' : 'left'}
                                                    sx={{ transition: 'color 0.5s ease', textAlign: "left", '&:hover': { cursor: 'pointer', color: 'primary.main' }, mt: responsive ? 0 : -0.1 }}
                                                >
                                                    pressuredraper
                                                </Typography>
                                            </Link>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                            <Typography
                                                color={selectedUI === 'Sahib' ? "primary.light" : "secondary.300"}
                                                fontFamily={'Ubuntu, serif'}
                                                fontWeight={'bold'}
                                                fontSize={responsive ? '25px' : '1.5vw'}
                                                fontStyle={'normal'}
                                                letterSpacing={'.1rem'}
                                                textAlign={responsive ? 'center' : 'left'}
                                                sx={{ transition: 'color 0.5s ease', textAlign: "left" }}
                                            >
                                                <TranslateIcon sx={{ fontSize: responsive ? '5vw' : '1.3vw', mr: 0.8, mb: -0.2, color: 'primary.dark' }} />
                                                Languages
                                            </Typography>
                                            <Typography
                                                color={selectedUI === 'Sahib' ? "primary.dark" : "secondary.300"}
                                                fontFamily={'Ubuntu, serif'}
                                                fontWeight={'bold'}
                                                fontSize={responsive ? '19px' : '1vw'}
                                                fontStyle={'normal'}
                                                letterSpacing={'.1rem'}
                                                textAlign={responsive ? 'center' : 'left'}
                                                sx={{ transition: 'color 0.5s ease', textAlign: "left" }}
                                            >
                                                <LanguageIcon sx={{ fontSize: responsive ? '6vw' : '1.2vw', mr: 0.8, mb: -0.6, color: 'primary.light' }} />
                                                Spanish - Native
                                            </Typography>
                                            <Typography
                                                color={selectedUI === 'Sahib' ? "primary.dark" : "secondary.300"}
                                                fontFamily={'Ubuntu, serif'}
                                                fontWeight={'bold'}
                                                fontSize={responsive ? '19px' : '1vw'}
                                                fontStyle={'normal'}
                                                letterSpacing={'.1rem'}
                                                textAlign={responsive ? 'center' : 'left'}
                                                sx={{ transition: 'color 0.5s ease', textAlign: "left" }}
                                            >
                                                <LanguageIcon sx={{ fontSize: responsive ? '6vw' : '1.2vw', mr: 0.8, mb: -0.6, color: 'primary.light' }} />
                                                English - Advanced
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                            <Button
                                                loading={isLoading}
                                                startIcon={<DownloadIcon />}
                                                onClick={onDownload}
                                                sx={{
                                                    fontFamily: 'Ubuntu, serif',
                                                    fontStyle: 'italic',
                                                    color: 'primary.700',
                                                    backgroundColor: 'primary.100',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                        backgroundColor: 'primary.200'
                                                    },
                                                    transition: 'all 0.4s ease',
                                                    width: responsive ? '100%' : '75%'
                                                }}>
                                                Download Resume
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid >
                <Grid sx={{ position: 'absolute', bottom: -8, width: '100%', mb: 0 }}>
                    <img loading="lazy" src="/pressuredraper-website/triangle2.svg" style={{ width: '100%', height: '50px' }}></img>
                </Grid>
            </Grid >
        </>
    )
}

export default AboutView;
