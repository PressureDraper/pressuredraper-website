import { Grid, Typography, useMediaQuery } from "@mui/material"
import { useContext, useEffect, useRef } from "react";
import { PropsUIContext } from "../../interfaces/context/IUIContext";
import { UIContext } from "../../context/UIContext";
import { useInView } from "framer-motion";

export const Curriculum = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const { setActiveSection } = useContext<PropsUIContext>(UIContext);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    useEffect(() => {
        if (isInView) {
            setActiveSection('Career');
        }
    }, [isInView]);

    return (
        <>
            <Grid ref={ref} size={12} sx={{ backgroundColor: 'primary.light', borderRadius: 5, width: '100%', display: 'flex', flexDirection: 'row', pb: 1, pt: 2 }}>
                <Grid container sx={{ width: '100%' }} spacing={0.3}>
                    <Grid size={12} sx={{ pl: 2 }}>
                        <Typography
                            fontWeight={'bold'}
                            fontSize={responsive ? '18px' : '20px'}
                            fontFamily={'Ubuntu, serif'}
                            color="primary.dark"
                        >
                            Software Engineer
                        </Typography>
                        <Typography
                            fontSize={'17.5px'}
                            fontFamily={'Ubuntu, serif'}
                            color="gray"
                        >
                            Xalapa, Veracruz
                        </Typography>
                    </Grid>
                    <Grid size={responsive ? 12 : 8} sx={{ pl: 2, display: 'flex', justifyContent: 'left' }}>
                        <Typography
                            fontSize={responsive ? '16px' : '18px'}
                            fontFamily={'Ubuntu, serif'}
                            fontStyle={'italic'}
                            color="primary.dark"
                        >
                            High Specialty Medical Center Dr. Rafael Lucio
                        </Typography>
                    </Grid>
                    <Grid size={responsive ? 12 : 4} sx={{ pr: responsive ? 0 : 2, pl: responsive ? 2 : 0, display: 'flex', justifyContent: responsive ? 'left' : 'right' }}>
                        <Typography
                            fontSize={responsive ? '16px' : '18px'}
                            fontFamily={'Ubuntu, serif'}
                            fontStyle={'italic'}
                        >
                            Apr 2023 — Present
                        </Typography>
                    </Grid>
                    <Grid size={12} sx={{ pl: 1, display: 'flex', textJustify: 'justify', pr: 4 }}>
                        <ul style={{ marginTop: 5 }}>
                            <Grid sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                <li>
                                    <Typography
                                        fontFamily={'Ubuntu, serif'}
                                        textAlign={'justify'}
                                    >
                                        Developed and deployed a landing page for the hospital annual congress hosting 6000 people in 2023 and
                                        2024 editions through a serverless solution using Firebase and MySQL for data transactions, GitHub Pages,
                                        AWS for hosting purposes and Google Domains (Squarespace) for DNS services.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        fontFamily={'Ubuntu, serif'}
                                        textAlign={'justify'}
                                    >
                                        Created back-end side application over the same landing page using NodeJS and Google SMTP services for
                                        email sending, containing QR codes for assistance registration based on assistants’ preferences.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        fontFamily={'Ubuntu, serif'}
                                        textAlign={'justify'}
                                    >
                                        Designed attendance certificates for every assistant using Python and Canvas and distributed over the same
                                        SMTP service.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        fontFamily={'Ubuntu, serif'}
                                        textAlign={'justify'}
                                    >
                                        Developed and maintained many modules for different departments (Human Resources, Teaching, Financial
                                        Resources) over the main Administrative Clinical Integral System using NodeJS, Express, React, Redux, MUI
                                        Material, Socket IO, Prisma ORM and MySQL.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        fontFamily={'Ubuntu, serif'}
                                        textAlign={'justify'}
                                    >
                                        Restructuring, entity relationship diagraming and obsolete database migrations using Python to improve the
                                        implementation of new modules.
                                    </Typography>
                                </li>
                            </Grid>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={12} sx={{ backgroundColor: 'primary.light', borderRadius: 5, width: '100%', display: 'flex', flexDirection: 'row', pb: 1, pt: 2 }}>
                <Grid container sx={{ width: '100%' }} spacing={0.3}>
                    <Grid size={12} sx={{ pl: 2 }}>
                        <Typography
                            fontWeight={'bold'}
                            fontSize={responsive ? '18px' : '20px'}
                            fontFamily={'Ubuntu, serif'}
                            color="primary.dark"
                        >
                            Cloud Engineer
                        </Typography>
                        <Typography
                            fontSize={'17.5px'}
                            fontFamily={'Ubuntu, serif'}
                            color="gray"
                        >
                            Xalapa, Veracruz
                        </Typography>
                    </Grid>
                    <Grid size={responsive ? 12 : 8} sx={{ pl: 2, display: 'flex', justifyContent: 'left' }}>
                        <Typography
                            fontSize={responsive ? '16px' : '18px'}
                            fontFamily={'Ubuntu, serif'}
                            fontStyle={'italic'}
                            color="primary.dark"
                        >
                            National Laboratory of Advanced Informatics
                        </Typography>
                    </Grid>
                    <Grid size={responsive ? 12 : 4} sx={{ pr: responsive ? 0 : 2, pl: responsive ? 2 : 0, display: 'flex', justifyContent: responsive ? 'left' : 'right' }}>
                        <Typography
                            fontSize={responsive ? '16px' : '18px'}
                            fontFamily={'Ubuntu, serif'}
                            fontStyle={'italic'}
                        >
                            Feb 2022 — Dec 2022
                        </Typography>
                    </Grid>
                    <Grid size={12} sx={{ pl: 1, display: 'flex', textJustify: 'justify', pr: 4 }}>
                        <ul style={{ marginTop: 5 }}>
                            <Grid sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                <li>
                                    <Typography
                                        fontFamily={'Ubuntu, serif'}
                                        textAlign={'justify'}
                                    >
                                        Deployed academic applications in cloud platforms (AWS, Azure, Heroku).
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        fontFamily={'Ubuntu, serif'}
                                        textAlign={'justify'}
                                    >
                                        Analyzed and refactored code of applications built on different frameworks.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        fontFamily={'Ubuntu, serif'}
                                        textAlign={'justify'}
                                    >
                                        Managed and implemented JBoss (WildFly) server for hosting Java applications on AWS.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        fontFamily={'Ubuntu, serif'}
                                        textAlign={'justify'}
                                    >
                                        Tested and debugged applications code through SonarQube static code analyzer.
                                    </Typography>
                                </li>
                            </Grid>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={12} sx={{ backgroundColor: 'primary.light', borderRadius: 5, width: '100%', display: 'flex', flexDirection: 'row', pb: 1, pt: 2 }}>
                <Grid container sx={{ width: '100%' }} spacing={0.3}>
                    <Grid size={12} sx={{ pl: 2 }}>
                        <Typography
                            fontWeight={'bold'}
                            fontSize={responsive ? '18px' : '20px'}
                            fontFamily={'Ubuntu, serif'}
                            color="primary.dark"
                        >
                            Network Engineer
                        </Typography>
                        <Typography
                            fontSize={'17.5px'}
                            fontFamily={'Ubuntu, serif'}
                            color="gray"
                        >
                            Xalapa, Veracruz
                        </Typography>
                    </Grid>
                    <Grid size={responsive ? 12 : 8} sx={{ pl: 2, display: 'flex', justifyContent: 'left' }}>
                        <Typography
                            fontSize={responsive ? '16px' : '18px'}
                            fontFamily={'Ubuntu, serif'}
                            fontStyle={'italic'}
                            color="primary.dark"
                        >
                            Veracruzana University
                        </Typography>
                    </Grid>
                    <Grid size={responsive ? 12 : 4} sx={{ pr: responsive ? 0 : 2, pl: responsive ? 2 : 0, display: 'flex', justifyContent: responsive ? 'left' : 'right' }}>
                        <Typography
                            fontSize={responsive ? '16px' : '18px'}
                            fontFamily={'Ubuntu, serif'}
                            fontStyle={'italic'}
                        >
                            Jul 2021 — Dec 2021
                        </Typography>
                    </Grid>
                    <Grid size={12} sx={{ pl: 1, display: 'flex', textJustify: 'justify', pr: 4 }}>
                        <ul style={{ marginTop: 5 }}>
                            <Grid sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                <li>
                                    <Typography
                                        fontFamily={'Ubuntu, serif'}
                                        textAlign={'justify'}
                                    >
                                        Maintained, managed and organized intermediary devices (routers, switches, VoIP phones, etc.).
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        fontFamily={'Ubuntu, serif'}
                                        textAlign={'justify'}
                                    >
                                        Analyzed and monitored the faculty network using basic sniffing techniques.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        fontFamily={'Ubuntu, serif'}
                                        textAlign={'justify'}
                                    >
                                        Managed and updated the Faculty of Networks Laboratory Inventory system.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography
                                        fontFamily={'Ubuntu, serif'}
                                        textAlign={'justify'}
                                    >
                                        Created a network practices manual and proposal letter for device management.
                                    </Typography>
                                </li>
                            </Grid>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
