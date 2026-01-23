import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import trackList from "../../../helpers/tracks/trackList";

export const PlayerControls = ({ img, alt_text, heigth, mt, ml, audioRef, isAudioEnding, setIsAudioEnding, currentSong, setCurrentSong, isPlaying, setIsPlaying }: { img: string, alt_text: string, heigth: string, mt: string, ml: string, audioRef?: any, isAudioEnding?: boolean, setIsAudioEnding?: any, currentSong?: any, setCurrentSong?: any, isPlaying?: any, setIsPlaying: any }) => {
    const [icon, setIcon] = useState(img);
    const [iconPosition, setIconPosition] = useState({ heigth, mt, ml });

    const onClick = () => {
        if (icon === 'play.png') {
            setIcon('pause.png');
            setIsPlaying(true);
            setIconPosition({ heigth: '54px', mt: '0px', ml: '0px' });
            audioRef.current.play();
        }

        if (icon === 'pause.png') {
            setIcon('play.png');
            setIsPlaying(false);
            setIconPosition({ heigth: '60px', mt: '-3px', ml: '0px' });
            audioRef.current.pause();
        }

        if (icon === 'next.png') {
            const currentIndex = trackList.indexOf(currentSong);
            const nextIndex = (currentIndex + 1) % trackList.length;
            setCurrentSong(trackList[nextIndex]);
            setIsPlaying(false);
        }

        if (icon === 'previous.png') {
            const currentIndex = trackList.indexOf(currentSong);
            const prevIndex = (currentIndex - 1 + trackList.length) % trackList.length;
            setCurrentSong(trackList[prevIndex]);
            setIsPlaying(false);
        }
    }

    useEffect(() => {
        if (isAudioEnding) {
            setIcon('play.png');
            setIsAudioEnding(false);
        }
    }, [isAudioEnding]);

    useEffect(() => {
        if (!isPlaying && icon === 'pause.png') {
            setIcon('play.png');
            setIconPosition({ heigth: '60px', mt: '-3px', ml: '0px' });
        }
    }, [isPlaying])
    

    return (
        <Box
            onClick={onClick}
            sx={{
                width: '55px',
                height: '55px',
                borderRadius: '100px',
                boxShadow: '0 2px 6px 0 rgba(100, 32, 135, 0.54)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                transition: 'all 0.5s ease',
                outline: 'none',
                WebkitTapHighlightColor: 'transparent',
                userSelect: 'none',
                ':hover': {
                    backgroundColor: 'rgba(100, 32, 135, 0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.5s ease',
                    '.playerImage': {
                        opacity: 0.8
                    }
                }
            }}>
            <Box
                className="playerImage"
                loading="lazy"
                component={'img'}
                src={`${import.meta.env.VITE_APP_BASE_ROUTE}/${icon}`}
                alt={alt_text}
                style={{ marginTop: iconPosition.mt, marginLeft: iconPosition.ml }}
                width="auto"
                height={iconPosition.heigth}
                sx={{
                    opacity: 0.5,
                    transition: 'all 0.3s ease'
                }}
            />
        </Box>
    )
}
