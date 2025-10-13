import { Box } from "@mui/material"

export const PlayerControls = ({ img, alt_text, heigth, mt, ml }: { img: string, alt_text: string, heigth: string, mt: string, ml: string }) => {
    return (
        <Box sx={{
            width: '55px',
            height: '55px',
            borderRadius: '100px',
            boxShadow: '0 2px 6px 0 rgba(100, 32, 135, 0.54)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            transition: 'all 0.5s ease',
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
                component={'img'}
                src={`${import.meta.env.VITE_APP_BASE_ROUTE}/${img}`}
                alt={alt_text}
                style={{ marginTop: mt, marginLeft: ml }}
                width="auto"
                height={heigth}
                sx={{
                    opacity: 0.5,
                    transition: 'opacity 0.3s ease'
                }}
            />
        </Box>
    )
}
