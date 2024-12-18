import { Box, Stack } from "@mui/material"

export const HomePage = () => {
    return (
        <Stack sx={{ backgroundColor: 'primary.dark' }}>
            <Box component="section" id="selection">

            </Box>
            <Box component="section" id="about">
                
            </Box>
            <Box component="section" id="career">
                
            </Box>
            <Box component="section" id="contact">
                
            </Box>
            {/* <section id='carousel'>
                <Inicio />
            </section>
            <section id='program'>
                <Programa />
            </section>
            <section id='location'>
                <Sedes />
            </section>
            <section id='contact'>
                <Contacto />
            </section> */}
        </Stack>
    )
}
