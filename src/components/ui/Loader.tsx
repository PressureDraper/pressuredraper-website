import { Grid, Typography, useMediaQuery } from "@mui/material";
import { motion } from 'framer-motion';

export const Loader = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");

    return (
        <Grid
            component={motion.div}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            container
            sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                position: 'fixed',
                backgroundColor: 'primary.light',
                flexDirection: 'column',
                gap: 5
            }}>
            <img width={responsive ? '120px' : '80px'} height={responsive ? '120px' : '80px'} alt="/spinner-double.svg" loading="lazy" src={`${import.meta.env.VITE_APP_BASE_ROUTE}/spinner-double.svg`} style={{ marginBottom: '-1px' }}></img>
            <Typography
                sx={{
                    color: 'primary.dark',
                    fontSize: '17px',
                    animation: 'breathingFade 3s ease-in-out infinite',
                }}>
                Getting everything ready...
            </Typography>
        </Grid>
    )
}
