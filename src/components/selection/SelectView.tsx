import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { navBarHeigth, navBarHeigthResponsive } from "../../pages/HomePage";
import { useContext, useEffect, useState } from "react";
import UIContext from "../../context/UIContext";
import { PropsViewData } from "../../interfaces/selection/IViewData";
import { BannerVideos } from "./BannerVideos";
import 'animate.css';
import { UIProfileSelect } from "./UIProfileSelect";
import { SectionObserver } from "../ui/SectionObserver";

export const SelectView = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const { selectedUI } = useContext(UIContext);
    const [viewData, setViewData] = useState<PropsViewData>({
        gradient: 'linear-gradient(135deg, #f5f4f1, #b6a98e, #7d6751)',
        imageUser: `${import.meta.env.VITE_APP_BASE_ROUTE}/sahib.webp`,
        imageAnimation: '',
        nameAnimation: '',
        quoteAnimation: '',
        videoSource: '2'
    });

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
                height: responsive ? '80vh' : '93vh',
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
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                }
            }}
        >
            <BannerVideos {...viewData} />
            <Grid container columns={12} direction={'column'}>
                <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto', height: '30%', position: 'relative' }}>
                    <SectionObserver sectionId="Selection" />
                    <Typography
                        color={selectedUI === 'Sahib' ? "primary.light" : "secondary.light"}
                        fontFamily={'Ubuntu, serif'}
                        fontWeight={'bold'}
                        fontSize={responsive ? '16vw' : '5vw'}
                        fontStyle={'oblique'}
                        letterSpacing={'.3rem'}
                        sx={{ transition: 'all 0.5s ease' }}
                    >
                        Who is...
                    </Typography>
                </Grid>
                <Grid sx={{ display: 'flex', justifyContent: 'center', height: '35%' }}>
                    <UIProfileSelect viewData={viewData} setViewData={setViewData} />
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'column', height: '35%', justifyContent: 'space-evenly' }}>
                    <Grid className={viewData.nameAnimation} sx={{ zIndex: 11, display: 'flex', justifyContent: 'center' }}>
                        <Typography
                            color={selectedUI === 'Sahib' ? "primary.200" : "secondary.200"}
                            className="animate__animated animate__fadeIn"
                            fontFamily={'Ubuntu, serif'}
                            fontWeight={'bold'}
                            fontSize={responsive ? '5vw' : '2vw'}
                            fontStyle={'normal'}
                            letterSpacing={'.15rem'}
                            textAlign={'center'}
                            sx={{
                                transition: 'all 0.5s ease'
                            }}
                        >
                            {selectedUI === 'Sahib' ? "Omar Sahib Mirón Hernández" : "Hideline"}
                        </Typography>
                    </Grid>
                    <Grid className={viewData.quoteAnimation} sx={{ zIndex: 11, display: 'flex', justifyContent: 'center' }}>
                        <Typography
                            color={selectedUI === 'Sahib' ? "primary.300" : "secondary.300"}
                            fontFamily={'Ubuntu, serif'}
                            fontWeight={'bold'}
                            fontSize={responsive ? '4vw' : '1.3vw'}
                            fontStyle={'normal'}
                            letterSpacing={'.05rem'}
                            textAlign={'center'}
                            sx={{ transition: 'all 0.5s ease' }}
                        >
                            «Perpetual Optism is A Forceful Multiplier»
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
