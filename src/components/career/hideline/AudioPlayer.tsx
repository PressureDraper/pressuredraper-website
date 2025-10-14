import { Box, Grid, Typography, useMediaQuery } from "@mui/material"
import { PlayerControls } from "./PlayerControls"
import { useRef } from "react";

const getTimeCodeFromNum = (num: string) => {
    let seconds: number = parseInt(num);
    let minutes = seconds / 60;
    seconds -= minutes * 60;
    const hours = minutes / 60;
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, '0')}`;
    return `${String(hours).padStart(2, '0')}:${minutes}:${String(seconds % 60).padStart(2, '0')}`;
}

export const AudioPlayer = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const audioRef = useRef<HTMLAudioElement | null>(null);
    if (!audioRef.current) {
        audioRef.current = new Audio(`${import.meta.env.VITE_APP_BASE_ROUTE}/tracks/wonders.mp3`);
    }

    const handleTimeline = () => {

    }

    return (
        <Grid size={responsive ? 12 : 5.5} sx={{ display: 'flex', justifyContent: 'center', minHeight: responsive ? 'auto' : '77vh', verticalAlign: 'middle', alignItems: 'center' }}>
            <Box sx={{
                height: responsive ? '620px' : '550px',
                width: responsive ? '350px' : '330px',
                borderRadius: '15px',
                boxShadow: '0 8px 32px 0 rgba(100, 32, 135, 0.54)',
                backdropFilter: 'blur( 6px )',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                flexDirection: 'column',
                pb: 0
            }}>
                <Box sx={{
                    width: '100%', // o un ancho específico
                    height: '63%', // o lo que necesites
                    overflow: 'hidden',
                    p: responsive ? 3 : 1.5,
                    display: 'flex',
                    justifyContent: 'center',
                    mb: -4
                }}>
                    <img
                        alt="wonders.webp"
                        loading="lazy"
                        src={`${import.meta.env.VITE_APP_BASE_ROUTE}/covers/wonders.webp`}
                        style={{
                            width: 'auto',
                            height: '95%',
                            objectFit: 'cover',
                            borderRadius: '15px',
                            marginTop: responsive ? '-7px' : 0,
                            border: '5px solid rgba(4, 117, 210, 0.2)',
                            boxShadow: '0 0 15px 5px rgba(4, 117, 210, 0.3)'
                        }}
                    />
                </Box>
                <Box sx={{ marginTop: responsive ? '10px' : '15px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <Box>
                        <Typography
                            fontFamily={'Ubuntu, serif'}
                            fontWeight={'bold'}
                            fontSize={'20px'}
                            letterSpacing={'.05rem'}
                        >
                            Hideline
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            fontFamily={'Ubuntu, serif'}
                            fontSize={'18px'}
                        >
                            Wonders
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ marginTop: '15px', display: 'flex', justifyContent: 'space-around' }}>
                    <PlayerControls img={'previous.png'} alt_text={'previous-track'} heigth="27px" mt="14px" ml="13px" />
                    <PlayerControls img={'play.png'} alt_text={'previous-track'} heigth="60px" mt="-3px" ml="0px" audioRef={audioRef} />
                    <PlayerControls img={'next.png'} alt_text={'previous-track'} heigth="27px" mt="14px" ml="13px" />
                </Box>
                <Box
                    className='audio-player'
                    sx={{
                        marginTop: responsive ? '25px' : '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        ml: 4,
                        mr: 4
                    }}>
                    <Box
                        onClick={handleTimeline}
                        className='timeline'
                        sx={{
                            width: '100%',
                            height: '12px',
                            position: 'relative',
                            cursor: 'pointer',
                            boxShadow: '0 2px 10px 0 #0008',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '15px',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)'
                        }}>
                        <Box
                            className='progress'
                            sx={{
                                background: 'rgba(255, 255, 255, 0.9)',
                                borderRadius: '15px',
                                width: '50%',
                                height: '100%',
                                transition: '0.6s'
                            }}>

                        </Box>
                    </Box>
                </Box>
                <Box sx={{ marginTop: responsive ? '25px' : '20px', display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <Typography className="current" fontSize={'17px'}>0:00</Typography>
                    <Typography className="divider" fontSize={'17px'}>/</Typography>
                    <Typography className="length" fontSize={'17px'}>0:00</Typography>
                </Box>
            </Box>
        </Grid>
    )
}
