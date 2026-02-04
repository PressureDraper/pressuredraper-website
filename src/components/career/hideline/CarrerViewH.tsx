import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery } from "@mui/material"
import { navBarHeigth, navBarHeigthResponsive } from "../../../pages/HomePage";
import { motion } from 'framer-motion';
import { SectionObserver } from "../../ui/SectionObserver";
import { AudioPlayer, getTimeCodeFromNum } from "./AudioPlayer";
import { useEffect, useState } from "react";
import trackList from "../../../helpers/tracks/trackList";
import { ITrackList } from "../../../interfaces/tracks/ITrackList";
import { parseWebStream } from "music-metadata";
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const getAudioDuration = async (url: string) => {
    const res = await fetch(url);
    const arrayBuffer = await res.arrayBuffer();

    const audioCtx = new AudioContext();
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

    return getTimeCodeFromNum(audioBuffer.duration);
}

export const CarrerViewH = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const [currentSong, setCurrentSong] = useState<ITrackList>(trackList[0]);
    const [trackInfo, setTracksInfo] = useState<any>([]);

    useEffect(() => {
        const fetchTracksInfo = async () => {
            const infoArray = await Promise.all(
                trackList.map(async (track) => {
                    try {
                        const response = await fetch(track.url);

                        const duration = await getAudioDuration(track.url);

                        const metadata = await parseWebStream(response.body!, {
                            mimeType: response.headers.get('Content-Type') || 'audio/mpeg',
                        });

                        const picture = metadata.common.picture?.[0];
                        const blob = picture?.data ? new Blob([picture.data], { type: picture.format }) : null;

                        return {
                            url: track.url,
                            duration,
                            title: metadata.common.title,
                            artist: metadata.common.artist,
                            picture: URL.createObjectURL(blob !== null ? blob : new Blob()),
                        };
                    } catch (err) {
                        console.error(err);
                        return null;
                    }
                })
            );

            setTracksInfo(infoArray);
        };

        fetchTracksInfo();
    }, []);


    return (
        <Grid sx={{
            backgroundImage: 'url(./landscape.webp)',
            backgroundColor: 'primary.100',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: `auto`,
            minHeight: `calc(100vh - ${responsive ? navBarHeigthResponsive : navBarHeigth}px)`,
            transition: 'background 0.5s ease',
            flexDirection: 'row',
            overflow: 'visible',
            position: 'relative',
            zIndex: 0,
            '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '15%',
                background: 'linear-gradient(to bottom, rgba(116, 88, 163, 1), rgba(116, 88, 163, 0.1))',
                boxShadow: '0 4px 10px rgba(118, 88, 162, 0.1)',
                zIndex: -1
            }
        }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                style={{ width: '100%', willChange: 'transform, opacity', display: 'flex', justifyContent: 'center', marginBottom: responsive ? '20px' : '0px' }}
            >
                <Box sx={{ width: 'fit-content', position: 'relative' }}>
                    <SectionObserver sectionId="Tracks" />
                    <Typography
                        color={'secondary.300'}
                        fontFamily={'Ubuntu, serif'}
                        fontWeight={'bold'}
                        fontSize={responsive ? '30px' : '2.5vw'}
                        fontStyle={'normal'}
                        letterSpacing={'.1rem'}
                        textAlign={responsive ? 'center' : 'center'}
                        sx={{
                            transition: 'color 0.5s ease',
                            mt: 2,
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: responsive ? 0 : 3,
                                left: 3,
                                width: '15%',
                                height: '5px',
                                backgroundColor: responsive ? 'secondary.200' : 'secondary.light', // line color
                                transition: 'background-color 0.5s ease',
                            },
                        }}
                    >
                        Tracks
                    </Typography>
                </Box>
            </motion.div>
            <Grid container sx={{ pl: responsive ? 3 : '18.5%', pr: responsive ? 3 : '18.5%', height: 'auto', display: 'flex', flexDirection: 'row', alignItems: responsive ? 'center' : 'left', mt: responsive ? 5 : 0, }}>
                <Grid size={responsive ? 12 : 5} sx={{ display: 'flex', justifyContent: 'center', verticalAlign: 'middle', alignItems: 'center' }}>
                    <AudioPlayer currentSong={currentSong} setCurrentSong={setCurrentSong} />
                </Grid>
                <Grid size={0.5} sx={{ display: { xs: "none", lg: "flex" }, justifyContent: 'left', verticalAlign: 'middle', alignItems: 'center' }}>
                    <Box
                        sx={{
                            width: "2px",
                            height: "24rem",
                            alignSelf: "center",
                            background: "linear-gradient(to bottom, transparent, rgba(13,15,62, 0.35), transparent)",
                        }}
                    />
                </Grid>
                <Grid size={responsive ? 12 : 6.5} sx={{ backgroundColor: 'transparent', display: 'flex', justifyContent: 'right', minHeight: responsive ? '70vh' : '77vh', verticalAlign: 'middle', alignItems: 'center' }}>
                    <TableContainer component={Paper} sx={{ backgroundColor: 'transparent', width: responsive ? '100%' : '95%' }}>
                        <Table aria-label="tracks table" stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{
                                        backgroundColor: 'transparent',
                                        color: 'secondary.light'
                                    }}>
                                        <Typography
                                            fontFamily={'Ubuntu, serif'}
                                            fontSize={24}
                                            fontWeight={'bold'}
                                            sx={{ color: 'secondary.light' }}
                                        >
                                            All Songs
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {trackInfo.map((track: any, index: number) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer', height: '20px', backgroundColor: 'rgba(249,248,252,0.1)', '&:hover': { backgroundColor: 'rgba(255,255,255,0.01)' } }}
                                        onClick={() => setCurrentSong(track)}
                                        selected={currentSong.url === track.url}
                                    >
                                        <TableCell component="th" scope="row">
                                            <Grid container>
                                                <Grid size={responsive ? 2 : 1.1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', p: 0.8 }}>
                                                    <Box
                                                        className="playOverlay"
                                                        key={track.url}
                                                        component={motion.img}
                                                        initial={{ scale: 1, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        transition={{ duration: 0.8 }}
                                                        alt="cover-art"
                                                        loading="lazy"
                                                        src={track.picture}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            position: 'relative'
                                                        }}
                                                    >
                                                        {/* <PlayArrowIcon
                                                        sx={{
                                                            fontSize: responsive ? 30 : 40,
                                                            color: 'rgba(255, 255, 255, 0.8)',
                                                            position: 'absolute'
                                                        }}
                                                        /> */}
                                                    </Box>
                                                </Grid>
                                                <Grid size={responsive ? 9 : 9.9} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', alignContent: 'center', }}>
                                                    <Typography
                                                        fontFamily={'Ubuntu, serif'}
                                                        fontSize={16}
                                                        fontWeight={'bold'}
                                                        color="secondary.500"
                                                    >
                                                        {track.title}
                                                    </Typography>
                                                    <Typography
                                                        fontFamily={'Ubuntu, serif'}
                                                        fontSize={14}
                                                        fontWeight={'bold'}
                                                        color="secondary.900"
                                                    >
                                                        {track.artist}
                                                    </Typography>
                                                </Grid>
                                                <Grid size={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Typography fontFamily={'Ubuntu, serif'}>{track.duration}</Typography>
                                                </Grid>
                                            </Grid>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Grid>
    )
}
