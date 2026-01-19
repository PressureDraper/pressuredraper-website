import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { PropsViewData } from '../../interfaces/selection/IViewData';
import UIContext from '../../context/UIContext';
import { Avatar, /* Zoom */ } from '@mui/material';
/* import CustomTooltip from '../ui/CustomTooltip'; */

interface ChildProps {
    viewData: PropsViewData,
    setViewData: React.Dispatch<React.SetStateAction<PropsViewData>>;
}

export const UIProfileSelect: React.FC<ChildProps> = ({ viewData, setViewData }) => {
    const [hover, setHover] = useState<boolean>(false);
    const { selectedUI, setSelectedUI } = useContext(UIContext);
    const [img, setImg] = useState<string>(viewData.imageUser);
    const [gradient, setGradient] = useState(viewData.gradient);

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

    /* const handleSelectUI = () => {
        if (selectedUI === 'Sahib') {
            setSelectedUI('Hideline');
            setViewData({
                imageUser: `${import.meta.env.VITE_APP_BASE_ROUTE}/logo_500.webp`,
                gradient: 'linear-gradient(135deg, #8367b6, #d4c9e9, #f9f8fc)',
                imageAnimation: 'animate__animated animate__fadeIn',
                nameAnimation: 'animate__animated animate__fadeInUp animate__delay-1s',
                quoteAnimation: 'animate__animated animate__fadeInUp animate__delay-2s',
                videoSource: '1'
            });
            localStorage.setItem('selectedUI', 'Hideline');
        } else {
            setSelectedUI('Sahib');
            setViewData({
                imageUser: `${import.meta.env.VITE_APP_BASE_ROUTE}/sahib.webp`,
                gradient: 'linear-gradient(135deg, #7d6751, #b6a98e, #f5f4f1)',
                imageAnimation: 'animate__animated animate__fadeIn',
                nameAnimation: 'animate__animated animate__fadeInDown animate__delay-1s',
                quoteAnimation: 'animate__animated animate__fadeInDown animate__delay-2s',
                videoSource: '2'
            });
            localStorage.setItem('selectedUI', 'Sahib');
        }
    } */

    useEffect(() => {
        setSelectedUI(localStorage.getItem('selectedUI') || 'Sahib');
    }, []);

    useEffect(() => {
        if (selectedUI === 'Sahib') {
            setImg(`${import.meta.env.VITE_APP_BASE_ROUTE}/sahib.webp`);
            setGradient('linear-gradient(135deg, #f5f4f1, #b6a98e, #7d6751)');
        } else {
            setImg(`${import.meta.env.VITE_APP_BASE_ROUTE}/logo_500.webp`);
            setGradient('linear-gradient(135deg, #f9f8fc, #d4c9e9, #8367b6)');
        }
    }, [selectedUI]);


    return (
        <motion.div
            className="animate__animated animate__fadeInUp"
            style={{
                zIndex: 10,
                marginTop: 'auto',
                marginBottom: 'auto',
                background: gradient,
                height: 'auto',
                width: 'auto',
                padding: 12,
                borderRadius: '50%',
                cursor: 'pointer'
            }}
            animate={{
                background: gradient,
                padding: hover ? 14 : 12
            }}
            transition={{
                background: { duration: 0.5, ease: 'easeOut' }, // 0.5sec transition
                padding: { duration: 0.3, ease: 'easeOut' },
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            /* onClick={handleSelectUI} */
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
                <Avatar
                    alt="Me"
                    src={img}
                    sx={{
                        zIndex: 11,
                        mt: 'auto',
                        mb: 'auto',
                        width: 'auto',
                        height: '23.5vh',
                        transition: 'all 0.5s ease'
                    }}
                />
                {/* <CustomTooltip
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
                    
                </CustomTooltip> */}
            </motion.div>
        </motion.div>
    )
}
