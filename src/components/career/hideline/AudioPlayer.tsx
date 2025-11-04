import { Box, Grid, Typography, useMediaQuery } from "@mui/material"
import { PlayerControls } from "./PlayerControls"
import { useEffect, useRef, useState } from "react";

const getTimeCodeFromNum = (num: number) => {
    const minutes = Math.floor(num / 60);
    const seconds = Math.floor(num % 60);

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export const AudioPlayer = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [currentTime, setCurrentTime] = useState<string>('0:00');
    const [audioLength, setAudioLength] = useState<string>('0:00');
    const [audioProgress, setAudioProgress] = useState<string>('0');
    const [isAudioEnding, setIsAudioEnding] = useState<boolean>(false);

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio('https://pub-4a4d714916ec400eb238be8047e509bf.r2.dev/wonders.mp3');
            audioRef.current.volume = 0.10;

            // Wait for metadata to load before reading duration
            audioRef.current.addEventListener('loadedmetadata', () => {
                getTimeCodeFromNum(audioRef.current!.duration);
                setAudioLength(getTimeCodeFromNum(audioRef.current?.duration !== undefined ? audioRef.current!.duration : 0));
            });
        }

        const audioProgressInterval = setInterval(() => {
            setAudioProgress((audioRef.current!.currentTime / audioRef.current!.duration * 100).toString());
            setCurrentTime(getTimeCodeFromNum(audioRef.current!.currentTime));

            if (audioRef.current?.currentTime === audioRef.current?.duration) {
                setIsAudioEnding(true);
                setAudioProgress('0');
                setCurrentTime('0:00');
                audioRef.current!.currentTime = 0;
            }
        }, 500);

        // Cleanup function for removing event listener and interval
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('loadedmetadata', () => { });
                clearInterval(audioProgressInterval);
            }
        };
    }, []);

    const handleTimeline = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = (e.target as HTMLDivElement).getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        audioRef.current!.currentTime = (offsetX / rect.width) * audioRef.current!.duration;
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
                    <PlayerControls img={'play.png'} alt_text={'play-pause-track'} heigth="60px" mt="-3px" ml="0px" audioRef={audioRef} isAudioEnding={isAudioEnding} setIsAudioEnding={setIsAudioEnding} />
                    <PlayerControls img={'next.png'} alt_text={'next-track'} heigth="27px" mt="14px" ml="13px" />
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
                        onClick={(e) => handleTimeline(e)}
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
                                width: `${audioProgress}%`,
                                height: '100%',
                                transition: '0.6s'
                            }}>

                        </Box>
                    </Box>
                </Box>
                <Box sx={{ marginTop: responsive ? '25px' : '20px', display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <Typography className="current" fontSize={'17px'}>{currentTime}</Typography>
                    <Typography className="divider" fontSize={'17px'}>/</Typography>
                    <Typography className="length" fontSize={'17px'}>{audioLength}</Typography>
                </Box>
            </Box>
        </Grid>
    )
}
