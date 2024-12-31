import { Avatar, Box, Grid2, Typography, Zoom, useMediaQuery } from "@mui/material";
import { navBarHeigth, navBarHeigthResponsive } from "../../pages/HomePage";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UIContext } from "../../context/UIContext";
import { PropsViewData } from "../../interfaces/selection/IViewData";
import { BannerVideos } from "./BannerVideos";
import CustomTooltip from "../ui/CustomTooltip";
import 'animate.css';

export const SelectView = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const [hover, setHover] = useState<boolean>(false);
    const { selectedUI, setSelectedUI } = useContext(UIContext);
    const [viewData, setViewData] = useState<PropsViewData>({
        gradient: 'linear-gradient(135deg, #f5f4f1, #b6a98e, #7d6751)',
        imageUser: '/sahib.png',
        imageAnimation: '',
        nameAnimation: '',
        quoteAnimation: '',
        videoSource: '2'
    });

    const handleMouseEnter = () => {
        setHover(true);
        setViewData(selectedUI === 'Sahib'
            ? { ...viewData, gradient: 'linear-gradient(135deg, #7d6751, #b6a98e, #f5f4f1)' }
            : { ...viewData, gradient: 'linear-gradient(135deg, #8367b6, #d4c9e9, #f9f8fc)' }
        );
    }

    const handleMouseLeave = () => {
        setHover(false);
        setViewData(selectedUI === 'Sahib'
            ? { ...viewData, gradient: 'linear-gradient(135deg, #f5f4f1, #b6a98e, #7d6751)' }
            : { ...viewData, gradient: 'linear-gradient(135deg, #f9f8fc, #d4c9e9, #8367b6)' }
        );
    }

    const handleSelectUI = () => {
        if (selectedUI === 'Sahib') {
            setSelectedUI('Hideline');
            setViewData({
                imageUser: '/logo.jpg',
                gradient: 'linear-gradient(135deg, #8367b6, #d4c9e9, #f9f8fc)',
                imageAnimation: 'animate__animated animate__fadeIn',
                nameAnimation: 'animate__animated animate__fadeInUp animate__delay-1s',
                quoteAnimation: 'animate__animated animate__fadeInUp animate__delay-2s',
                videoSource: '1'
            });
        } else {
            setSelectedUI('Sahib');
            setViewData({
                imageUser: '/sahib.png',
                gradient: 'linear-gradient(135deg, #7d6751, #b6a98e, #f5f4f1)',
                imageAnimation: 'animate__animated animate__fadeIn',
                nameAnimation: 'animate__animated animate__fadeInDown animate__delay-1s',
                quoteAnimation: 'animate__animated animate__fadeInDown animate__delay-2s',
                videoSource: '2'
            });
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setViewData({ ...viewData, imageAnimation: '' });
        }, 1000);

        //clear Timeout on component unmount
        return () => clearTimeout(timer);
    }, [selectedUI]);

    return (
        <Box
            className="animate__animated animate__fadeIn"
            sx={{
                m: 0,
                mt: responsive ? `${navBarHeigthResponsive}px` : `${navBarHeigth}px`,
                p: 0,
                height: '70dvh',
                width: '100%',
                objectFit: 'cover',
                backgroundColor: '#ffffff',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                overflow: 'hidden',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                }
            }}
        >
            <BannerVideos {...viewData} />
            <Grid2 container columns={12} direction={'column'}>
                <Grid2 sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto', height: '30%' }}>
                    <Typography
                        color={selectedUI === 'Sahib' ? "primary.light" : "secondary.light"}
                        fontFamily={'Ubuntu, serif'}
                        fontWeight={'bold'}
                        fontSize={responsive ? '60px' : '85px'}
                        fontStyle={'oblique'}
                        letterSpacing={'.3rem'}
                        sx={{ transition: 'all 0.5s ease' }}
                    >
                        Who is...
                    </Typography>
                </Grid2>
                <Grid2 sx={{ display: 'flex', justifyContent: 'center', height: '40%' }}>
                    <motion.div
                        className="animate__animated animate__fadeInUp"
                        style={{
                            zIndex: 10,
                            marginTop: 'auto',
                            marginBottom: 'auto',
                            background: viewData.gradient,
                            height: 'auto',
                            width: 'auto',
                            padding: 12,
                            borderRadius: '50%',
                            cursor: 'pointer'
                        }}
                        animate={{
                            background: viewData.gradient,
                            padding: hover ? 14 : 12
                        }}
                        transition={{
                            background: { duration: 0.5, ease: 'easeOut' }, // 0.5sec transition
                            padding: { duration: 0.3, ease: 'easeOut' },
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleSelectUI}
                    >
                        <motion.div
                            className={viewData.imageAnimation}
                            style={{
                                borderRadius: '50%'
                            }}
                            animate={{ opacity: 1 }}
                            transition={{
                                default: { duration: 1 }
                            }}
                        >
                            <CustomTooltip
                                title="Click Me!"
                                arrow
                                placement="left"
                                sx={{
                                    "& .MuiTooltip-tooltip": {
                                        backgroundColor: selectedUI === 'Sahib' ? "primary.400" : "secondary.400",
                                        color: selectedUI === 'Sahib' ? "primary.dark" : "secondary.dark",
                                        fontSize: '13.5px',
                                        fontWeight: 'bold',
                                        fontFamily: "Ubuntu, serif",
                                        letterSpacing: '1px'
                                    },
                                    "& .MuiTooltip-arrow": {
                                        color: selectedUI === 'Sahib' ? 'primary.800' : 'secondary.800'
                                    }
                                }}
                                slots={{
                                    transition: Zoom,
                                }}
                            >
                                <Avatar
                                    alt="Me"
                                    src={viewData.imageUser}
                                    sx={{
                                        zIndex: 11,
                                        mt: 'auto',
                                        mb: 'auto',
                                        width: 'auto',
                                        height: '21.5dvh',
                                        transition: 'all 1s ease'
                                    }}
                                />
                            </CustomTooltip>
                        </motion.div>
                    </motion.div>
                </Grid2>
                <Grid2 sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '30%' }}>
                    <Grid2 className={viewData.nameAnimation} sx={{ zIndex: 11, display: 'flex', justifyContent: 'center' }}>
                        <Typography
                            color={selectedUI === 'Sahib' ? "primary.200" : "secondary.200"}
                            className="animate__animated animate__fadeIn"
                            fontFamily={'Ubuntu, serif'}
                            fontWeight={'bold'}
                            fontSize={responsive ? '20px' : '35px'}
                            fontStyle={'normal'}
                            letterSpacing={'.2rem'}
                            textAlign={'center'}
                            sx={{
                                transition: 'all 0.5s ease'
                            }}
                        >
                            {selectedUI === 'Sahib' ? "Omar Sahib Mirón Hernández" : "Hideline"}
                        </Typography>
                    </Grid2>
                    <Grid2 className={viewData.quoteAnimation} sx={{ zIndex: 11, display: 'flex', justifyContent: 'center' }}>
                        <Typography
                            color={selectedUI === 'Sahib' ? "primary.300" : "secondary.300"}
                            fontFamily={'Ubuntu, serif'}
                            fontWeight={'bold'}
                            fontSize={responsive ? '13px' : '22.5px'}
                            fontStyle={'normal'}
                            letterSpacing={'.1rem'}
                            textAlign={'center'}
                            sx={{ transition: 'all 0.5s ease' }}
                        >
                            «Perpetual Optism is A Forceful Multiplier»
                        </Typography>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Box>
    )
}
