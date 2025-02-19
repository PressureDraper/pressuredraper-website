import { Box, Grid2, Link, Typography, useMediaQuery } from "@mui/material"
import { navBarHeigth, navBarHeigthResponsive } from "../../pages/HomePage";
import { HidelineUI, SahibUI } from "../../helpers/about/backgroundPatterns";
import { useContext } from "react";
import { UIContext } from "../../context/UIContext";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import TranslateIcon from '@mui/icons-material/Translate';

export const AboutView = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const { selectedUI } = useContext(UIContext);

    return (
        <>
            <Grid2 sx={{
                backgroundImage: selectedUI === 'Sahib' ? SahibUI : HidelineUI,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: `calc(${responsive ? '200vh' : '100vh'} - ${responsive ? navBarHeigthResponsive : navBarHeigth}px)`,
                transition: 'background 0.5s ease',
                flexDirection: 'row'
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#010100"><path d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"></path></svg>
                <Grid2 container>
                    <Grid2 size={12} sx={{ pl: responsive ? 0 : '18.5%', pr: responsive ? 0 : '18.5%', height: '60vh' }}>
                        <Typography
                            color={selectedUI === 'Sahib' ? "primary.dark" : "secondary.300"}
                            fontFamily={'Ubuntu, serif'}
                            fontWeight={'bold'}
                            fontSize={responsive ? '30px' : '2.5vw'}
                            fontStyle={'normal'}
                            letterSpacing={'.1rem'}
                            textAlign={responsive ? 'center' : 'left'}
                            sx={{ transition: 'color 0.5s ease', mt: responsive ? 0 : -8 }}
                        >
                            About Me
                        </Typography>
                        <Box sx={{
                            ml: responsive ? 4 : 0,
                            mr: responsive ? 4 : 0,
                            mt: 2,
                            mb: 3,
                            pt: 4,
                            pb: 4,
                            boxShadow: responsive ? '0px 15px 20px 0px rgba(101, 81, 67, 0.2)' : '0px 15px 20px 0px rgba(101, 81, 67, 0.2)',
                            borderRadius: 5,
                            height: responsive ? 'auto' : '100%',
                            width: 'auto',
                            overflow: 'auto',
                        }}>
                            <Grid2 container>
                                <Grid2 size={responsive ? 12 : 8.5} sx={{ display: 'flex', flexDirection: 'column', gap: 3, textAlign: 'justify', pl: responsive ? 3 : 7, pr: responsive ? 3 : 7 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: responsive ? 3 : 2 }}>
                                        <Typography
                                            fontFamily={'Ubuntu, serif'}
                                            fontSize={responsive ? '16px' : '1vw'}
                                            color="primary.dark"
                                            letterSpacing={'.1rem'}
                                        >
                                            <b style={{ fontSize: responsive ? '20px' : '1.5vw' }}>S</b>ahib is a Computer Science graduate with 4+ years of experience within the field. He resides in Veracruz, Mexico and is currently working as a Full-Stack developer.
                                        </Typography>
                                        <Typography
                                            fontFamily={'Ubuntu, serif'}
                                            fontSize={responsive ? '16px' : '1vw'}
                                            color="primary.dark"
                                            letterSpacing={'.1rem'}
                                        >
                                            <b style={{ fontSize: responsive ? '20px' : '1.5vw' }}>T</b>hanks to his ability as a fast learner, he is always active contributing with quality software solutions that could be scalable and maintainable through the time using emerging technologies.
                                        </Typography>
                                        <Typography
                                            fontFamily={'Ubuntu, serif'}
                                            fontSize={responsive ? '16px' : '1vw'}
                                            color="primary.dark"
                                            letterSpacing={'.1rem'}
                                        >
                                            <b style={{ fontSize: responsive ? '20px' : '1.5vw' }}>H</b>is interests and experience spans over Cloud Computing, Database and Server Administration, Front-end and Back-end development and automation tasks.
                                        </Typography>
                                    </Box>
                                    <Box>
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
                                    </Box>
                                </Grid2>
                                <Grid2 size={responsive ? 12 : 3.5} sx={{ pl: responsive ? 3 : 2, pr: responsive ? 3 : 2, mt: responsive ? 3 : 1, display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'left' }}>
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
                                </Grid2>
                            </Grid2>
                        </Box>
                    </Grid2>
                </Grid2>
            </Grid2>
        </>
    )
}
