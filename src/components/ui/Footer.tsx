import { Grid } from "@mui/material"

export const Footer = () => {
    return (
        <Grid container sx={{ backgroundColor: 'primary.light', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2vh 0', position: 'relative' }}>
            footer
           {/*  <Grid sx={{ position: 'absolute', bottom: -8, width: '100%', mb: 0 }}>
                <img loading="lazy" src="/pressuredraper-website/triangle2.svg" style={{ width: '100%', height: '50px' }}></img>
            </Grid> */}
        </Grid>
    )
}
