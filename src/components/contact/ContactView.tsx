import { Box, Button, Grid, TextField, Typography, useMediaQuery } from "@mui/material"
import { navBarHeigth, navBarHeigthResponsive } from "../../pages/HomePage";
import { motion, useInView } from 'framer-motion';
import { useContext, useEffect, useRef } from "react";
import { UIContext } from "../../context/UIContext";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { NavigateFunction, useNavigate } from "react-router-dom";
import { PropsUIContext } from "../../interfaces/context/IUIContext";

export const ContactView = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const { setActiveSection, setDynamic } = useContext<PropsUIContext>(UIContext);
    const { selectedUI } = useContext(UIContext);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (isInView) {
            setActiveSection('Contact');
            navigate(`/?section=Contact`, { replace: true });
            setDynamic(0);
        }
    }, [isInView]);

    return (
        <>
            <Grid sx={{
                background: 'linear-gradient(180deg,rgba(231, 228, 218, 1) 0%, rgba(209, 201, 183, 1) 50%, rgba(182, 169, 142, 1) 100%)',
                minHeight: `calc(100vh - ${responsive ? navBarHeigthResponsive : navBarHeigth}px)`
            }}>
                <Grid container>
                    <Grid size={12} sx={{ pl: responsive ? 0 : '18.5%', pr: responsive ? 0 : '18.5%', height: 'auto', mb: '13vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            style={{ marginTop: responsive ? '5vh' : '4vh', position: 'relative', width: 'fit-content' }}
                            viewport={{ once: true }}
                        >
                            <Typography
                                color={selectedUI === 'Sahib' ? "primary.dark" : "secondary.300"}
                                fontFamily={'Ubuntu, serif'}
                                fontWeight={'bold'}
                                fontSize={responsive ? '30px' : '2.5vw'}
                                fontStyle={'normal'}
                                letterSpacing={'.1rem'}
                                textAlign={responsive ? 'center' : 'center'}
                                sx={{
                                    transition: 'color 0.5s ease',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: responsive ? 0 : 3,
                                        left: 0,
                                        width: '17%',
                                        height: '5px',
                                        backgroundColor: 'primary.400', // line color
                                        transition: 'all 0.5s ease', // expand animation
                                    }
                                }}
                            >
                                Contact
                            </Typography>
                        </motion.div>
                        <Box sx={{
                            mt: 2,
                            pt: responsive ? 3 : 4,
                            pl: responsive ? 2 : 0,
                            pr: responsive ? 2 : 0,
                            height: '75vh',
                            width: '100%',
                            overflow: 'visible',
                            display: 'flex',
                            flexDirection: 'column',
                            /* alignItems: 'center', */
                            justifyContent: 'center',
                        }}> {/* complete area box */}
                            <Box sx={{ ml: responsive ? 0 : 5, mr: responsive ? 0 : 5, mb: '20px', height: '100%', borderRadius: 2, p: 5, boxShadow: responsive ? '0px 10px 10px 0px rgba(101, 81, 67, 0.2)' : '0px 10px 10px 0px rgba(101, 81, 67, 0.2)', width: responsive ? '100%' : '50%', m: 'auto', borderStyle: 'solid', borderWidth: 1, borderColor: 'primary.100' }}> {/* form card box */}
                                <Grid container columns={12} spacing={5} sx={{ height: '93%' }}>
                                    <Grid size={12} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <AutoAwesomeOutlinedIcon sx={{ fontSize: responsive ? '30px' : '1.7vw', color: '#887e6e', mr: 1.3 }} />
                                        <Typography
                                            fontFamily={'Ubuntu, serif'}
                                            fontWeight={'bold'}
                                            fontSize={responsive ? '30px' : '1.7vw'}
                                            fontStyle={'normal'}
                                            letterSpacing={'.1rem'}
                                            ref={ref}
                                            sx={{
                                                backgroundImage: 'linear-gradient(45deg, #d1c9b7, #655143)',
                                                backgroundClip: 'text',
                                                color: 'transparent',
                                            }}
                                        >
                                            Let's Talk!
                                        </Typography>
                                    </Grid>
                                    <Grid size={12}>
                                        <TextField
                                            label="Name"
                                            variant="filled"
                                            sx={{
                                                width: '100%'
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <TextField
                                            label="Email"
                                            variant="filled"
                                            sx={{
                                                width: '100%'
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <TextField
                                            label="Topic"
                                            variant="filled"
                                            sx={{
                                                width: '100%'
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <TextField
                                            label="message..."
                                            variant="filled"
                                            multiline
                                            minRows={3}
                                            sx={{
                                                width: '100%',
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <Button sx={{ width: '100%', borderStyle: 'solid', borderWidth: 1, borderColor: 'primary.400' }} startIcon={<SendOutlinedIcon />}>
                                            Send
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
