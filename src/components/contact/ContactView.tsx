import { Alert, Box, Button, Grid, Snackbar, SnackbarCloseReason, TextField, Typography, useMediaQuery } from "@mui/material"
import { motion } from 'framer-motion';
import { useContext, useState } from "react";
import UIContext from "../../context/UIContext";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { defaultErrors, formValidator } from "../../helpers/contact/formValidator";
import ErrorIcon from '@mui/icons-material/Error';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { PropsContactForm } from "../../interfaces/contact/IForm";
import { sendMail } from "../../services/mailService";
import { AxiosError } from "axios";
import { SectionObserver } from "../ui/SectionObserver";

const defautlPayload = { name: '', email: '', topic: '', message: '' };

export const ContactView = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const { selectedUI } = useContext(UIContext);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [payload, setPayload] = useState<PropsContactForm>(defautlPayload);
    const [errors, setErrors] = useState(defaultErrors);
    const [snackbarOptions, setSnackbarOptions] = useState({ open: false, message: '', error: false });

    const handleSubmit = () => {
        const isOk = formValidator(payload, setErrors);

        if (isOk) {
            setIsLoading(true);

            sendMail(payload).then(res => {
                const successMessage = (res.data as { message: string })?.message;

                setSnackbarOptions({ open: true, message: successMessage, error: false });
                setPayload(defautlPayload);
                setErrors(defaultErrors);
                setIsLoading(false);
            }).catch((err: AxiosError) => {

                const errorMessage = (err.response?.data as { error: string })?.error;
                setSnackbarOptions({ open: true, message: errorMessage, error: true });
                setIsLoading(false);
            });
        }
    }

    const handleSnackbarClose = (
        _event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOptions({ ...snackbarOptions, open: false });
    };


    return (
        <>
            <Grid sx={{
                background: 'linear-gradient(180deg,rgba(231, 228, 218, 1) 0%, rgba(209, 201, 183, 1) 50%, rgba(182, 169, 142, 1) 100%)',
                height: `auto`,
                position: 'relative',
                zIndex: 0
            }}>
                <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img width={'95%'} height={'100%'} alt="background.svg" loading="lazy" src={`${import.meta.env.VITE_APP_BASE_ROUTE}/background.svg`} style={{ position: 'absolute', zIndex: -1, opacity: 0.5 }}></img>
                    <Grid size={12} sx={{ pl: responsive ? 0 : '18.5%', pr: responsive ? 0 : '18.5%', height: 'auto', mb: '7vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            style={{ marginTop: '4vh', position: 'relative', width: 'fit-content' }}
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
                            mt: responsive ? 2 : 0,
                            pt: responsive ? 3 : 4,
                            pl: responsive ? 2 : 0,
                            pr: responsive ? 2 : 0,
                            height: 'fit-content',
                            width: '100%',
                            overflow: 'visible',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}> {/* complete area box */}
                            <motion.div
                                initial={{ opacity: 0, z: 50 }}
                                whileInView={{ opacity: 1, z: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                                viewport={{ once: true }}
                                style={{ overflow: 'visible', height: responsive ? 'auto' : '100%' }}
                            >
                                <Box sx={{
                                    ml: responsive ? 0 : 5,
                                    mr: responsive ? 0 : 5,
                                    mb: '20px',
                                    height: responsive ? 'auto' : 'auto',
                                    borderRadius: 2,
                                    p: 5,
                                    boxShadow: responsive ? '0px 10px 10px 0px rgba(101, 81, 67, 0.2)' : '0px 10px 10px 0px rgba(101, 81, 67, 0.2)',
                                    width: responsive ? '100%' : '50%',
                                    m: 'auto',
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                    borderColor: 'primary.300',
                                    background: 'transparent',
                                    position: 'relative',
                                    zIndex: 0
                                }}> {/* form card box */}
                                    <Grid container columns={12} spacing={5} sx={{ height: '93%' }}>
                                        <Grid size={12} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
                                            <AutoAwesomeOutlinedIcon sx={{ fontSize: responsive ? '30px' : '1.7vw', color: '#887e6e', mr: 1.3 }} />
                                            <SectionObserver sectionId="Contact" />
                                            <Typography
                                                fontFamily={'Ubuntu, serif'}
                                                fontWeight={'bold'}
                                                fontSize={responsive ? '30px' : '1.7vw'}
                                                fontStyle={'normal'}
                                                letterSpacing={'.1rem'}
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
                                                value={payload.name}
                                                sx={{
                                                    width: '100%',
                                                    '& .MuiFilledInput-root.Mui-focused': {
                                                        backgroundColor: 'primary.200', // Cambia el color de fondo cuando está enfocado
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        color: 'primary.main', // Cambia el color del label cuando está enfocado
                                                    },
                                                }}
                                                onChange={(e) => setPayload({ ...payload, name: e.target.value })}
                                                error={payload.name === '' && errors.name.error}
                                                helperText={payload.name === '' && errors.name.error ? 'Please enter your name' : ''}
                                            /* onFocus={() => setErrors({ ...errors, name: false })} */
                                            />
                                        </Grid>
                                        <Grid size={12}>
                                            <TextField
                                                label="Email"
                                                variant="filled"
                                                value={payload.email}
                                                sx={{
                                                    width: '100%',
                                                    '& .MuiFilledInput-root.Mui-focused': {
                                                        backgroundColor: 'primary.200', // Cambia el color de fondo cuando está enfocado
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        color: 'primary.main', // Cambia el color del label cuando está enfocado
                                                    },
                                                }}
                                                onChange={(e) => setPayload({ ...payload, email: e.target.value })}
                                                error={(payload.email === '' || (payload.email === '' || !/\S+@\S+\.\S+/.test(payload.email))) && errors.email.error}
                                                helperText={(payload.email === '' || !/\S+@\S+\.\S+/.test(payload.email)) && errors.email.error ? errors.email.message : ''}
                                            />
                                        </Grid>
                                        <Grid size={12}>
                                            <TextField
                                                label="Topic"
                                                variant="filled"
                                                value={payload.topic}
                                                sx={{
                                                    width: '100%',
                                                    '& .MuiFilledInput-root.Mui-focused': {
                                                        backgroundColor: 'primary.200', // Cambia el color de fondo cuando está enfocado
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        color: 'primary.main', // Cambia el color del label cuando está enfocado
                                                    },
                                                }}
                                                onChange={(e) => setPayload({ ...payload, topic: e.target.value })}
                                                error={payload.topic === '' && errors.topic.error}
                                                helperText={payload.topic === '' && errors.topic.error ? errors.topic.message : ''}
                                            />
                                        </Grid>
                                        <Grid size={12}>
                                            <TextField
                                                label="message..."
                                                variant="filled"
                                                value={payload.message}
                                                multiline
                                                minRows={3}
                                                sx={{
                                                    width: '100%',
                                                    '& .MuiFilledInput-root.Mui-focused': {
                                                        backgroundColor: 'primary.200', // Cambia el color de fondo cuando está enfocado
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        color: 'primary.main', // Cambia el color del label cuando está enfocado
                                                    },
                                                }}
                                                onChange={(e) => setPayload({ ...payload, message: e.target.value })}
                                                error={payload.message === '' && errors.message.error}
                                                helperText={payload.message === '' && errors.message.error ? errors.message.message : ''}
                                            />
                                        </Grid>
                                        <Grid size={12}>
                                            <Button sx={{ width: '100%', borderStyle: 'solid', borderWidth: 1, borderColor: 'primary.400', transition: 'all 0.3s ease', ':hover': { transform: 'scale(1.05)', transition: 'all 0.3s ease' } }} startIcon={<SendOutlinedIcon />}
                                                onClick={handleSubmit}
                                                loading={isLoading}
                                            >
                                                Send
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </motion.div>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Box sx={{ position: 'relative', backgroundColor: 'primary.light', zIndex: 1 }}>
                <img width={'100%'} height={'50px'} alt="bottomTriangle.svg" loading="lazy" src={`${import.meta.env.VITE_APP_BASE_ROUTE}/bottomTriangle.svg`} style={{ bottom: -8, transform: 'rotate(180deg)', marginBottom: '-0.35%', marginTop: '-1px' }}></img>
            </Box>
            <Snackbar sx={{ zIndex: 10 }} transitionDuration={400} open={snackbarOptions.open} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert
                    onClose={handleSnackbarClose}
                    variant="filled"
                    icon={snackbarOptions.error ? <ErrorIcon /> : <TaskAltIcon />}
                    sx={{
                        width: '100%',
                        backgroundColor: 'transparent',
                        border: '1px solid #f5f4f1',
                        backdropFilter: 'blur(10px)',
                        color: 'primary.dark'
                    }}
                >
                    {snackbarOptions.message}
                </Alert>
            </Snackbar>
        </>
    )
}
