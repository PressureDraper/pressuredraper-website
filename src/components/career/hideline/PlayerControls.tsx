import { Box } from "@mui/material"
import { useState } from "react"

export const PlayerControls = ({ img, alt_text, heigth, mt, ml, audioRef }: { img: string, alt_text: string, heigth: string, mt: string, ml: string, audioRef?: any }) => {
    const [icon, setIcon] = useState(img);
    const [iconPosition, setIconPosition] = useState({ heigth, mt, ml });

    const onClick = () => {
        if (!audioRef.current) return;

        if (icon === 'play.png') {
            setIcon('pause.png');
            setIconPosition({ heigth: '54px', mt: '0px', ml: '0px' });
            audioRef.current.play();
        }

        if (icon === 'pause.png') {
            setIcon('play.png');
            setIconPosition({ heigth: '60px', mt: '-3px', ml: '0px' });
            audioRef.current.pause();
        }
    }

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
