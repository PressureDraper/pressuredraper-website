import { AppBar, Box, Button, Container, Divider, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, NavigateFunction, useNavigate } from 'react-router-dom';

const navItem = [
    { name: 'Selection', pathTo: 'selection' },
    { name: 'About', pathTo: 'about' },
    { name: 'Career', pathTo: 'career' },
    { name: 'Contact', pathTo: 'contact' },
]

export const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    /* const { activeSection } = useSelector((state: ReduxJornadasSlidesSelector) => state.section); */ //replace for context API
    const [activeItem, setActiveItem] = useState<string>('Inicio');
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const navigate: NavigateFunction = useNavigate();

    /* useEffect(() => {

        setActiveItem(activeSection);

    }, [activeSection]) */

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const goToSection = (pathTo: string) => {
        setAnchorElNav(null);

        if (pathTo === 'register') {
            navigate(`/register`, { replace: true });
        } else {
            navigate(`/?section=${pathTo}`, { replace: true });
        }
    };

    return (
        <AppBar position="fixed" sx={{ display: 'flex', backgroundColor: 'background.default' }}>
            <Container maxWidth={'xl'}>
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: responsive ? 'none' : 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <NavLink to={'/'} style={{ marginBottom: -7 }}>
                            asdas
                        </NavLink>
                        <Divider orientation="vertical" variant='middle' flexItem sx={{ ml: 1.5, backgroundColor: 'primary.main' }} />
                        <NavLink to={'/'} style={{ textDecoration: 'none' }}>
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                sx={{
                                    mr: 1,
                                    ml: 1.5,
                                    fontFamily: 'sans-serif',
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    color: 'primary.main',
                                    textDecoration: 'none',
                                }}
                            >
                                Fullstack Dev
                            </Typography>
                        </NavLink>
                    </Box>
                    <Box sx={{ display: responsive ? 'none' : 'flex' }}>
                        {navItem.map((item) => (
                            <Button onClick={() => goToSection(item.pathTo)} key={item.name} sx={{ color: activeItem === item.name ? 'text.secondary' : '#ffffff', fontWeight: 600, textTransform: 'capitalize', fontSize: '16px', transition: 'all 0.5s ease' }}>
                                {item.name}
                            </Button>
                        ))}
                    </Box>

                    {/* responsive */}
                    <Box sx={{ flexGrow: 1, display: responsive ? 'flex' : 'none' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color='primary'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: responsive ? 'block' : 'none' }}
                        >
                            {navItem.map((page) => (
                                <MenuItem key={page.name} onClick={() => goToSection(page.pathTo)}>
                                    <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ display: responsive ? 'flex' : 'none', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <NavLink to={'/'} style={{ display: responsive ? 'flex' : 'none' }}>
                                sadasd
                            </NavLink>
                            <Divider orientation="vertical" variant='middle' flexItem sx={{ ml: 1.5, display: responsive ? 'flex' : 'none', backgroundColor: 'primary.main' }} />
                            <NavLink to={'/home'} style={{ textDecoration: 'none' }}>
                                <Typography
                                    variant="h5"
                                    noWrap
                                    sx={{
                                        mr: 2,
                                        ml: 1,
                                        display: responsive ? 'flex' : 'none',
                                        flexGrow: 1,
                                        fontFamily: 'sans-serif',
                                        fontWeight: 700,
                                        color: 'primary.main',
                                        fontSize: '20px',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Fullstack Dev
                                </Typography>
                            </NavLink>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
