import { Grid, Typography, useMediaQuery } from "@mui/material"
import { useContext, useEffect, useRef } from "react";
import { PropsUIContext } from "../../interfaces/context/IUIContext";
import { UIContext } from "../../context/UIContext";
import { motion, useInView } from 'framer-motion';
import { NavigateFunction, useNavigate } from "react-router-dom";
import { curriculumInfo } from "../../helpers/curriculum/data";

export const Curriculum = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const { setActiveSection, setDynamic } = useContext<PropsUIContext>(UIContext);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (isInView) {
            setActiveSection('Career');
            navigate(`/?section=Career`, { replace: true });
            setDynamic(0);
        }
    }, [isInView]);

    return (
        <>
            {
                curriculumInfo.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: (index + 1) * 0.3 }}
                        viewport={{ once: true }}
                        style={{ width: '100%' }}
                    >
                        <Grid size={12} sx={{ backgroundColor: 'primary.light', borderRadius: 5, width: '100%', display: 'flex', flexDirection: 'row', pb: 1, pt: 2 }}>
                            <Grid container sx={{ width: '100%' }} spacing={0.3}>
                                <Grid size={12} sx={{ pl: 2 }}>
                                    <Typography
                                        fontWeight={'bold'}
                                        fontSize={responsive ? '18px' : '20px'}
                                        fontFamily={'Ubuntu, serif'}
                                        color="primary.dark"
                                    >
                                        {item.charge}
                                    </Typography>
                                    <Typography
                                        fontSize={'17.5px'}
                                        fontFamily={'Ubuntu, serif'}
                                        color="gray"
                                    >
                                        {item.location}
                                    </Typography>
                                </Grid>
                                <Grid size={responsive ? 12 : 8} sx={{ pl: 2, display: 'flex', justifyContent: 'left' }}>
                                    <Typography
                                        fontSize={responsive ? '16px' : '18px'}
                                        fontFamily={'Ubuntu, serif'}
                                        fontStyle={'italic'}
                                        color="primary.dark"
                                    >
                                        {item.company}
                                    </Typography>
                                </Grid>
                                <Grid size={responsive ? 12 : 4} sx={{ pr: responsive ? 0 : 2, pl: responsive ? 2 : 0, display: 'flex', justifyContent: responsive ? 'left' : 'right' }}>
                                    <Typography
                                        fontSize={responsive ? '16px' : '18px'}
                                        fontFamily={'Ubuntu, serif'}
                                        fontStyle={'italic'}
                                    >
                                        {item.date}
                                    </Typography>
                                </Grid>
                                <Grid size={12} sx={{ pl: 1, display: 'flex', textJustify: 'justify', pr: 4 }}>
                                    <ul style={{ marginTop: 5, display: 'flex', flexDirection: 'column', gap: 5.5 }}>
                                        {item.responsabilities.map((item, index2) => (
                                            index === 0 && index2 === 4 ?
                                                <li key={index2}>
                                                    <Typography
                                                        fontFamily={'Ubuntu, serif'}
                                                        textAlign={'justify'}
                                                        ref={ref}
                                                    >
                                                        {item.desc}
                                                    </Typography>
                                                </li>
                                                :
                                                <li key={index2}>
                                                    <Typography
                                                        fontFamily={'Ubuntu, serif'}
                                                        textAlign={'justify'}
                                                    >
                                                        {item.desc}
                                                    </Typography>
                                                </li>
                                        ))}
                                    </ul>
                                </Grid>
                            </Grid>
                        </Grid>
                    </motion.div>
                ))
            }
        </>
    )
}
