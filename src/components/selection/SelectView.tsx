import { Avatar, Box, useMediaQuery } from "@mui/material";
import { navBarHeigth, navBarHeigthResponsive } from "../../pages/HomePage";
import 'animate.css';
import { useState } from "react";
import { motion } from "framer-motion";

export const SelectView = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const [gradient, setGradient] = useState('linear-gradient(135deg, #f5f4f1, #b6a98e, #7d6751)');
    const [hover, setHover] = useState<boolean>(true);

    const handleMouseEnter = () => {
        setHover(true);
        setGradient('linear-gradient(135deg, #7d6751, #b6a98e, #f5f4f1)');
    }

    const handleMouseLeave = () => {
        setHover(false);
        setGradient('linear-gradient(135deg, #f5f4f1, #b6a98e, #7d6751)')
    }

    return (
        <Box
            className="animate__animated animate__fadeIn"
            sx={{
                m: 0,
                mt: responsive ? `${navBarHeigthResponsive}px` : `${navBarHeigth}px`,
                p: 0,
                height: '70dvh',
                width: '100%',
                backgroundImage: 'url("/banner.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60%',
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                }
            }}
        >
            <motion.div
                style={{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    background: gradient,
                    height: 'auto',
                    width: 'auto',
                    padding: hover ? 14 : 12,
                    borderRadius: '50%',
                    cursor: 'pointer'
                }}
                animate={{
                    background: gradient,
                    padding: hover ? 14 : 12
                }}
                transition={{
                    background: { duration: 0.5, ease: 'easeOut' }, // Transición suave de 2 segundos
                    padding: { duration: 0.3, ease: 'easeOut' }, // Transición suave de 2 segundos
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Avatar
                    alt="Me"
                    src="/sahib.png"
                    sx={{
                        zIndex: 1,
                        mt: 'auto',
                        mb: 'auto',
                        width: 'auto',
                        height: '21.5dvh',
                        position: 'relative',
                        transition: 'all 1s ease',
                        filter: 'grayscale(15%)',
                        ':hover': {
                            filter: 'grayscale(0%)',
                        }
                    }}
                />
            </motion.div>
        </Box>
    )
}
