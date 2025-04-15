import { Button, Card, CardActions, CardContent, CardMedia, Typography, useMediaQuery } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import Masonry from '@mui/lab/Masonry';
import { projectsInfo } from '../../helpers/projects/data';

export const Projects = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");

    return (
        <Masonry columns={responsive ? 1 : 2} spacing={3} sx={{ pt: 2, pb: 1, width: '110%' }}>
            {
                projectsInfo.map((item) => (
                    <Card>
                        <CardMedia
                            sx={{ height: 'auto' }}
                            image={item.img}
                            title="Portfolio"
                            component={"img"}
                            loading="lazy"
                        />
                        <CardContent>
                            <Typography fontFamily={'Ubuntu, serif'} variant="h5" color="primary.dark">
                                {item.title}
                            </Typography>
                            <Typography fontFamily={'Ubuntu, serif'} gutterBottom variant="body1" color="gray">
                                {item.date}
                            </Typography>
                            <Typography fontFamily={'Ubuntu, serif'} variant="body2" color="gray">
                                {item.desc}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button startIcon={<GitHubIcon />} sx={{ width: '100%' }} size="small">Code</Button>
                            <Button startIcon={<FindInPageIcon />} sx={{ width: '100%' }} size="small">Documentation</Button>
                        </CardActions>
                    </Card>
                ))
            }
        </Masonry>
    )
}
