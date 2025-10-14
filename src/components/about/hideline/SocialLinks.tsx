import { Box, Grid, Link, Typography, useMediaQuery } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const SocialLinks = ({ link, index }: { link: any; index: number }) => {
    const [isHovering, setIsHovering] = useState(false);
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");

    return (
        <Grid
            component={motion.div}
            initial={{ x: 0, y: 50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: (0.1 * (index + 1)) }}
            viewport={{ once: true }}
            size={responsive ? 12 : 'auto'}
            sx={{
                height: '70px',
                borderRadius: 1,
                p: 1,
                boxShadow: '0px 5px 15px 0px rgba(249, 248, 252, 0.3)',
                background: 'rgba(249, 248, 252, 0.1)',
                outline: 'none',
                WebkitTapHighlightColor: 'transparent',
                userSelect: 'none'
            }}
        >
            <Link href={link.url} target="_blank" sx={{ textDecoration: 'none' }}>
                <Grid
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    sx={{
                        display: 'flex',
                        height: '100%',
                        ':hover': { cursor: 'pointer' }
                    }}
                >
                    <Box
                        sx={{
                            width: '50%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 3
                        }}>
                        <AnimatePresence mode="wait">
                            {isHovering ? (
                                <motion.div
                                    key="hoverIcon"
                                    initial={{ x: 0, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                        position: 'absolute',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    {link.hoverIcon}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="defaultIcon"
                                    initial={{ x: 0, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                        position: 'absolute',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    {link.icon}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '50%',
                        mr: index === 2 || index === 3 ? 2.5 : 2,
                        ml: 0.5
                    }}>
                        <Typography
                            letterSpacing={'.05rem'}
                            fontFamily={'Ubuntu, serif'}
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '18px',
                                color: 'red',
                                background: link.linearBackground,
                                backgroundSize: isHovering ? '100% 100%' : '0% 100%',
                                backgroundRepeat: 'no-repeat',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: isHovering ? 'transparent' : '#f9f8fc',
                                width: '120%',
                                transition: 'all 0.8s ease',
                                cursor: 'pointer',
                            }}
                        >
                            {link.name}
                        </Typography>
                    </Box>
                </Grid>
            </Link>
        </Grid>
    );
};