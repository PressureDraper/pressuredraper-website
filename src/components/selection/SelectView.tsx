import { Box, Grid2, Typography, useMediaQuery } from "@mui/material";
import { navBarHeigth, navBarHeigthResponsive } from "../../pages/HomePage";
import { useContext, useEffect, useState } from "react";
import { UIContext } from "../../context/UIContext";
import { PropsViewData } from "../../interfaces/selection/IViewData";
import { BannerVideos } from "./BannerVideos";
import 'animate.css';
import { UIProfileSelect } from "./UIProfileSelect";

export const SelectView = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const { selectedUI } = useContext(UIContext);
    const [viewData, setViewData] = useState<PropsViewData>({
        gradient: 'linear-gradient(135deg, #f5f4f1, #b6a98e, #7d6751)',
        imageUser: '/pressuredraper-website/sahib.webp',
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
                height: responsive ? '88vh' : '93vh',
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
                    <UIProfileSelect viewData={viewData} setViewData={setViewData} />
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
