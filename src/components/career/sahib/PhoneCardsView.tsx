import { Box, Button, CardActions, CardContent, CardMedia, Chip, Grid, Typography, useMediaQuery } from '@mui/material';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { PropsProjectsButtons, PropsProjectsInfo } from '../../../interfaces/projects/IProjectsInfo';

export const PhoneCardsView = ({ visibleProjects, renderKey }: { visibleProjects: PropsProjectsInfo[], renderKey: number }) => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");

    return (
        <>
            {
                visibleProjects.map((item: PropsProjectsInfo, index) => (
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
                                            const [techName, desc] = tech.split(':');
                                            return (
                                                <Grid key={tech}>
                                                    <Chip
                                                        icon={
                                                            <img
                                                                loading="lazy"
                                                                src={`${import.meta.env.VITE_APP_BASE_ROUTE}/icons/${techName}.svg`}
                                                                alt={techName}
                                                                style={{ width: 23, height: 23, borderRadius: tech === 'typescript' ? 5 : 0 }}
                                                            />
                                                        }
                                                        sx={{ borderColor: 'primary.300', width: 'auto', p: 0.5 }}
                                                        label={desc ? desc : techName}
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
                ))
            }
        </>
    )
}
