import { Box } from "@mui/material"
import { IStars } from "../../../interfaces/about/hideline/IStars"

export const Star = ({ top, left, size, delay, duration }: IStars) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '50%',
                backgroundColor: 'white',
                filter: 'blur(1px)',
                opacity: 0.8,
                animation: `blink ${duration}s ease-in-out ${delay}s infinite`,
                '@keyframes blink': {
                    '0%': { opacity: 0.2, transform: 'scale(1)' },
                    '50%': { opacity: 1, transform: 'scale(1.3)' },
                    '100%': { opacity: 0.2, transform: 'scale(1)' },
                },
            }}
        />
    )
}
