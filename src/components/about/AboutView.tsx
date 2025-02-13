import { Box, Grid2, Typography, useMediaQuery } from "@mui/material"
import { navBarHeigth, navBarHeigthResponsive } from "../../pages/HomePage";
import { HidelineUI, SahibUI } from "../../helpers/about/backgroundPatterns";
import { useContext } from "react";
import { UIContext } from "../../context/UIContext";

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
                    <Grid2 size={responsive ? 12 : 6}>
                        <Typography
                            color={selectedUI === 'Sahib' ? "primary.main" : "secondary.300"}
                            fontFamily={'Ubuntu, serif'}
                            fontWeight={'bold'}
                            fontSize={responsive ? '30px' : '3.1vw'}
                            fontStyle={'normal'}
                            letterSpacing={'.1rem'}
                            textAlign={'center'}
                            sx={{ transition: 'all 0.5s ease', mt: responsive ? 0 : -13 }}
                        >
                            About Me
                        </Typography>
                        <Box sx={{
                            ml: responsive ? 3 : 6, mr: responsive ? 3 : 6, mt: 3, mb: 3, backdropFilter: 'blur( 1px )', boxShadow: responsive ? '0px 15px 20px 0px rgba(101, 81, 67, 0.2)' : '-10px 8px 10px 0px rgba(101, 81, 67, 0.5)', borderRadius: 5, height: responsive ? '68vh' : '66vh', overflow: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                            '&::-webkit-scrollbar': {
                                height: '300px',
                                borderRadius: 5
                            },
                            '&::-webkit-scrollbar-track': {
                                background: 'rgba(255, 255, 255, 0.25)', // Color of the track
                                borderRadius: '40px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: '#927d60', // Color of the scrollbar thumb
                                borderRadius: 5,
                                '&:hover': {
                                    background: '#927d60', // Color on hover
                                },
                            },
                            gap: 3
                        }}>
                            <Typography sx={{ pl: 4, pr: 4, textAlign: 'justify' }}
                                fontFamily={'Ubuntu, serif'}
                                fontSize={responsive ? '15px' : '1.4vw'}
                                color="primary.dark"
                                letterSpacing={'.1rem'}
                            >
                                <b style={{ fontSize: responsive ? '20px' : '2.5vw' }}>S</b>ahib is a Computer Science graduate with 4+ years of experience within the field. He resides in Veracruz, Mexico and is currently working as a Full-Stack developer.
                            </Typography>
                            <Typography sx={{ pl: 4, pr: 4, textAlign: 'justify' }}
                                fontFamily={'Ubuntu, serif'}
                                fontSize={responsive ? '15px' : '1.4vw'}
                                color="primary.dark"
                                letterSpacing={'.1rem'}
                            >
                                <b style={{ fontSize: responsive ? '20px' : '2.5vw' }}>T</b>hanks to his ability as a fast learner, he is always active contributing with quality software solutions that could be scalable and maintainable through the time using emerging technologies.
                            </Typography>
                            <Typography sx={{ textAlign: 'justify', pl: 3, pr: 4 }}
                                fontFamily={'Ubuntu, serif'}
                                fontSize={responsive ? '15px' : '1.4vw'}
                                color="primary.dark"
                                letterSpacing={'.1rem'}
                            >
                                <b style={{ fontSize: responsive ? '20px' : '2.5vw' }}>H</b>is interests and experience spans over Cloud Computing, Database and Server Administration, Front-end and Back-end development and automation tasks.
                            </Typography>
                        </Box>
                    </Grid2>
                    <Grid2 size={responsive ? 12 : 6}>
                        <Typography
                            color={selectedUI === 'Sahib' ? "primary.500" : "secondary.300"}
                            fontFamily={'Ubuntu, serif'}
                            fontWeight={'bold'}
                            fontSize={responsive ? '25px' : '3.1vw'}
                            fontStyle={'normal'}
                            letterSpacing={'.1rem'}
                            textAlign={'center'}
                            sx={{ transition: 'all 0.5s ease', mt: responsive ? 0 : -13 }}
                        >
                            Social Media
                        </Typography>
                    </Grid2>
                </Grid2>
            </Grid2>
        </>
    )
}
