import { Box, Grid, Typography, useMediaQuery } from "@mui/material"
import { PlayerControls } from "./PlayerControls"
import { parseWebStream } from 'music-metadata';
import { useEffect, useRef, useState } from "react";
import { IAudioPlayerProps } from "../../../interfaces/tracks/ITrackList";
import { motion } from "framer-motion";

export const getTimeCodeFromNum = (num: number) => {
    const minutes = Math.floor(num / 60);
    const seconds = Math.floor(num % 60);

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export const AudioPlayer = ({ currentSong, setCurrentSong }: IAudioPlayerProps) => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    let audioRef = useRef<HTMLAudioElement | null>(null);
    const [isAudioEnding, setIsAudioEnding] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioData, setAudioData] = useState({
        artist: '',
        title: '',
        picture: '',
        currentTime: '0:00',
        audioLength: '0:00',
        audioProgress: '0',
        isAudioEnding: false
    });

    useEffect(() => {
        audioRef.current = new Audio(currentSong.url);

        audioRef.current.volume = 0.10;

        // Wait for metadata to load before reading duration
        audioRef.current.addEventListener('loadedmetadata', () => {
            setAudioData(prevState => ({
                ...prevState,
                audioLength: getTimeCodeFromNum(audioRef.current!.duration)
            }));
        });

        const audioProgressInterval = setInterval(() => {
            setAudioData(prevState => ({
                ...prevState,
                audioProgress: ((audioRef.current!.currentTime / audioRef.current!.duration) * 100).toString(),
                currentTime: getTimeCodeFromNum(audioRef.current!.currentTime)
            }));

            if (audioRef.current?.currentTime === audioRef.current?.duration) {
                setIsAudioEnding(true);
                setAudioData(prevState => ({
                    ...prevState,
                    audioProgress: '0',
                    currentTime: '0:00'
                }));
                audioRef.current!.currentTime = 0;
            }
        }, 500);

        // Cleanup function for removing event listener and interval
        return () => {
            if (audioRef.current) {
                audioRef.current.src = '';
                audioRef.current.removeEventListener('loadedmetadata', () => { });
                clearInterval(audioProgressInterval);
            }
        };
    }, [currentSong]);

    useEffect(() => {
        const getMetadata = async () => {
            const response = await fetch(currentSong.url);

            const metadata = await parseWebStream(response.body, {
                mimeType: response.headers.get('Content-Type') || 'audio/mpeg',
            });

            const picture = metadata.common.picture?.[0];
            const blob = picture?.data ? new Blob([picture.data], { type: picture.format }) : null;
            const imageUrl = URL.createObjectURL(blob !== null ? blob : new Blob());

            setAudioData({
                ...audioData,
                artist: metadata.common.artist || 'Unknown Artist',
                title: metadata.common.title || 'Unknown Title',
                picture: imageUrl
            });
        }

        getMetadata();
    }, [currentSong]);


    const handleTimeline = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = (e.target as HTMLDivElement).getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        audioRef.current!.currentTime = (offsetX / rect.width) * audioRef.current!.duration;
    }

    return (
        <Grid size={responsive ? 12 : 5.5} sx={{ display: 'flex', justifyContent: 'center', minHeight: responsive ? 'auto' : '65vh', verticalAlign: 'middle', alignItems: 'center' }}>
            <Box sx={{
                height: responsive ? '620px' : '550px',
                width: responsive ? '350px' : '330px',
                borderRadius: '15px',
                boxShadow: '0 8px 32px 0 rgba(100, 32, 135, 0.54)',
                backgroundColor: 'rgba(255,255,255,0.06)',
                WebkitBackdropFilter: 'blur( 10px )',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                flexDirection: 'column',
                pb: 0
            }}>
                <Box sx={{
                    width: '100%',
                    height: '63%',
                    overflow: 'hidden',
                    p: responsive ? 3 : 1.5,
                    display: 'flex',
                    justifyContent: 'center',
                    mb: -4
                }}>
                    <Box
                        key={currentSong.url}
                        component={motion.img}
                        initial={{ scale: 1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        alt="cover-art"
                        loading="lazy"
                        src={audioData.picture}
                        style={{
                            width: 'auto',
                            height: '95%',
                            objectFit: 'cover',
                            borderRadius: '15px',
                            marginTop: responsive ? '-7px' : 0,
                            padding: 2
                        }}
                    ></Box>
                </Box>
                <Box sx={{ marginTop: responsive ? '10px' : '15px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <Box>
                        <Typography
                            key={currentSong.url}
                            component={motion.div}
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            fontFamily={'Ubuntu, serif'}
                            fontWeight={'bold'}
                            fontSize={'20px'}
                            letterSpacing={'.05rem'}
                        >
                            {audioData.artist}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            key={currentSong.url}
                            component={motion.div}
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            fontFamily={'Ubuntu, serif'}
                            fontSize={'18px'}
                        >
                            {audioData.title}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ marginTop: '15px', display: 'flex', justifyContent: 'space-around' }}>
                    <PlayerControls
                        img="previous.png"
                        alt_text="previous-track"
                        heigth="27px"
                        mt="14px"
                        ml="13px"
                        currentSong={currentSong}
                        setCurrentSong={setCurrentSong}
                        setIsPlaying={setIsPlaying}
                    />
                    <PlayerControls
                        img="play.png"
                        alt_text="play-pause-track"
                        heigth="60px"
                        mt="-3px"
                        ml="0px"
                        audioRef={audioRef}
                        isAudioEnding={isAudioEnding}
                        setIsAudioEnding={setIsAudioEnding}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                    />
                    <PlayerControls
                        img="next.png"
                        alt_text="next-track"
                        heigth="27px"
                        mt="14px"
                        ml="13px"
                        currentSong={currentSong}
                        setCurrentSong={setCurrentSong}
                        setIsPlaying={setIsPlaying}
                    />
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
                                width: `${audioData.audioProgress}%`,
                                height: '100%',
                                transition: '0.6s'
                            }}>

                        </Box>
                    </Box>
                </Box>
                <Box sx={{ marginTop: responsive ? '25px' : '20px', display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <Typography className="current" fontSize={'17px'}>{audioData.currentTime}</Typography>
                    <Typography className="divider" fontSize={'17px'}>/</Typography>
                    <Typography className="length" fontSize={'17px'}>{audioData.audioLength}</Typography>
                </Box>
            </Box>
        </Grid>
    )
}
