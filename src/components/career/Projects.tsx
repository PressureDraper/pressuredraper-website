import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';

export const Projects = () => {
    return (
        <Grid container spacing={2} size={12} sx={{ width: '100%', display: 'flex', flexDirection: 'row', pb: 1, pt: 2 }}>
            <Grid size={6}>
                <Card>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                        component={"img"}
                        loading="lazy"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Personal Website
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button startIcon={<GitHubIcon/>} sx={{ width: '100%' }} size="small">Code</Button>
                    <Button sx={{ width: '100%' }} size="small">Documentation</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid size={6}>
                <Card>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                        component={"img"}
                        loading="lazy"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Medical Days
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button sx={{ width: '100%' }} size="small">Code</Button>
                        <Button sx={{ width: '100%' }} size="small">Documentation</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}
