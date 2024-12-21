import { AppBar, Box, Button, Container, Divider, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery } from '@mui/material'
import React, { useContext, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, NavigateFunction, useNavigate } from 'react-router-dom';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { UIContext } from '../../context/UIContext';
import { PropsUIContext } from '../../interfaces/IUIContext';

const navItem = [
    { name: 'Selection', width: '79%' },
    { name: 'About', width: '70%' },
    { name: 'Career', width: '72%' },
    { name: 'Contact', width: '75%' },
]

export const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const { activeSection, setActiveSection } = useContext<PropsUIContext>(UIContext);
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const navigate: NavigateFunction = useNavigate();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const goToSection = (pathTo: string) => {
        setAnchorElNav(null);
        setActiveSection(pathTo);
        navigate(`/?section=${pathTo}`, { replace: true });
    };

    return (
        <AppBar position="fixed" sx={{ background: 'linear-gradient(135deg, #f5f4f1, #927d60, #2b201d)' }}>
            <Container maxWidth={'xl'}>
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: responsive ? 'none' : 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <NavLink to={'/'} style={{ marginBottom: -7 }}>
                            <CodeOffIcon sx={{ color: 'primary.500', fontSize: '35px' }} />
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
                                    fontSize: '28px',
                                    fontFamily: "Ubuntu, serif",
                                    fontWeight: 'bold',
                                    fontOpticalSizing: 'auto',
                                    fontStyle: 'normal',
                                    letterSpacing: '.4rem',
                                    color: 'primary.dark',
                                    textDecoration: 'none',
                                }}
                            >
                                Fullstack Dev
                            </Typography>
                        </NavLink>
                    </Box>
                    <Box sx={{ display: responsive ? 'none' : 'flex' }}>
                        {navItem.map((item) => (
                            <Button
                                onClick={() => goToSection(item.name)}
                                key={item.name}
                                sx={{
                                    color: activeSection === item.name ? 'primary.light' : 'primary.200',
                                    fontWeight: 600,
                                    letterSpacing: '.2rem',
                                    fontFamily: "Ubuntu, serif",
                                    textTransform: 'capitalize',
                                    fontSize: '16px',
                                    transition: 'all 0.5s ease',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: 6,
                                        left: 10,
                                        width: activeSection === item.name ? item.width : '0px',
                                        height: '2px',
                                        backgroundColor: 'primary.light', // line color
                                        transition: 'all 0.5s ease', // expand animation
                                    },
                                    '&:hover': {
                                        color: 'primary.light'
                                    },
                                    '&:hover::after': {
                                        width: item.width // expands to 100% on hover
                                    }
                                }}
                            >
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
                                <MenuItem key={page.name} onClick={() => goToSection(page.name)}>
                                    <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ display: responsive ? 'flex' : 'none', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <NavLink to={'/'} style={{ display: responsive ? 'flex' : 'none' }}>
                                <CodeOffIcon sx={{ color: 'primary.900', fontSize: '32px' }} />
                            </NavLink>
                            <Divider orientation="vertical" variant='middle' flexItem sx={{ ml: 1.5, display: responsive ? 'flex' : 'none', backgroundColor: 'primary.main' }} />
                            <NavLink to={'/'} style={{ textDecoration: 'none' }}>
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
                                        color: 'primary.100',
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
