import { Button, CardActions, CardContent, CardMedia, Chip, Typography, useMediaQuery } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import Masonry from '@mui/lab/Masonry';
import { projectsInfo } from '../../helpers/projects/data';
import { motion } from 'framer-motion';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Grid, keyframes } from '@mui/system';
import { useState } from "react";
import { PropsProjectsButtons, PropsProjectsInfo } from "../../interfaces/projects/IProjectsInfo";

export const Projects = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const [showAll, setShowAll] = useState<boolean>(false);
    const visibleProjects = projectsInfo.filter((_, index) => showAll || index < 4);
    const [renderKey, setRenderKey] = useState<number>(0);

    const fadeArrow = keyframes`
        0% {
            opacity: 0;
            transform: translateY(0);
        }
        50% {
            opacity: 1;
            transform: translateY(${showAll ? '-6px' : '6px'});
        }
        100% {
            opacity: 0;
            transform: translateY(${showAll ? '-12px' : '12px'});
        }
        `;

    const handleToggle = () => {
        setShowAll(prev => !prev);
        setRenderKey(prevKey => prevKey + 1);
    };

    return (
        <>
            <Masonry columns={responsive ? 1 : 2} spacing={3} sx={{ pt: 2, pb: 1, width: '110%' }}>
                {visibleProjects.map((item: PropsProjectsInfo, index) => (
                    <motion.div
                        key={`${renderKey}-${item.title}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        style={{ backgroundColor: '#ffffff', borderRadius: 10, boxShadow: '0 1px 0px 0 rgba(0, 0, 0, 0.4)' }}
                    >
                        <CardMedia
                            sx={{ height: 'auto', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                            image={item.img}
                            title="Portfolio"
                            component="img"
                            loading="lazy"
                        />
                        <CardContent>
                            <Typography fontFamily="Ubuntu, serif" variant="h5" color="primary.dark">
                                {item.title}
                            </Typography>
                            <Typography fontFamily="Ubuntu, serif" gutterBottom variant="body1" color="gray">
                                {item.date}
                            </Typography>
                            <Typography style={{ textAlign: 'justify' }} fontFamily="Ubuntu, serif" variant="body2" color="gray">
                                {item.desc}
                            </Typography>
                            <Box sx={{ pt: 2, display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <Grid container gap={1} sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                    {
                                        item.icons.map((tech: string) => {
                                            let techName: string[] = tech.split('-');
                                            let newTechName = techName.join(' ');
                                            return (
                                                <Grid>
                                                    <Chip
                                                        icon={
                                                            <img
                                                                loading="lazy"
                                                                src={`/pressuredraper-website/icons/${tech}.svg`}
                                                                alt={newTechName}
                                                                style={{ width: 23, height: 23, borderRadius: tech === 'typescript' ? 5 : 0 }}
                                                            />
                                                        }
                                                        sx={{ borderColor: 'primary.300', width: 'auto', p: 0.5 }}
                                                        label={newTechName}
                                                        variant="outlined"
                                                    />
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Box>
                        </CardContent>

                        <CardActions sx={{ mt: -1 }}>
                            {
                                item.buttons.map((buttonItem: PropsProjectsButtons) => {
                                    if (buttonItem.name === 'code' && buttonItem.active) {
                                        return <Button key={buttonItem.name} href={item.code_url} target="_blank" startIcon={<GitHubIcon />} sx={{ width: '100%' }} size="small">Code</Button>
                                    }

                                    if (buttonItem.name === 'docs' && buttonItem.active) {
                                        return <Button key={buttonItem.name} startIcon={<FindInPageIcon />} sx={{ width: '100%' }} size="small">{responsive ? 'Docs' : 'Documentation'}</Button>
                                    }

                                    if (buttonItem.name === 'demo' && buttonItem.active) {
                                        return <Button key={buttonItem.name} href={item.demo_url} target="_blank" startIcon={<VisibilityIcon />} sx={{ width: '100%' }} size="small">Demo</Button>
                                    }
                                })
                            }
                        </CardActions>
                    </motion.div>
                ))}
            </Masonry>

            {/* Show more / less button */}
            <Button
                startIcon={
                    showAll &&
                    <KeyboardDoubleArrowUpIcon
                        sx={{
                            width: 'auto',
                            height: '27px',
                            mr: '-15px',
                            mb: '-5px',
                            animation: `${fadeArrow} 1.5s ease-in-out infinite`,
                        }}
                    />
                }
                endIcon={
                    !showAll &&
                    <KeyboardDoubleArrowDownIcon
                        sx={{
                            width: 'auto',
                            height: '27px',
                            ml: '-13px',
                            animation: `${fadeArrow} 1.5s ease-in-out infinite`,
                        }}
                    />}
                onClick={handleToggle}
                sx={{
                    mt: 2,
                    mx: 'auto',
                    display: 'block',
                    backgroundColor: 'transparent',
                    color: 'primary.dark',
                    fontStyle: 'italic',
                    transition: 'color 0.4s ease',
                    '&:hover': {
                        color: 'primary.400',
                    },
                    width: '120px'
                }}
                variant="text"
            >
                {showAll ? 'Show Less' : 'Show More'}
            </Button>
        </>
    )
}
