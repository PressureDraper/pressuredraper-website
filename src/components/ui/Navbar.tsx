import { AppBar, Box, Button, Container, Divider, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, NavigateFunction, useNavigate } from 'react-router-dom';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { UIContext } from '../../context/UIContext';
import { PropsUIContext } from '../../interfaces/context/IUIContext';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const navItem = [
    { name: 'Selection', width: '81%' },
    { name: 'About', width: '72%' },
    { name: 'Career', width: '72%' },
    { name: 'Contact', width: '77%' },
]

export const Navbar = () => {
    const { selectedUI } = useContext(UIContext);
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const { activeSection, setActiveSection, setDynamic } = useContext<PropsUIContext>(UIContext);
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const navigate: NavigateFunction = useNavigate();
    const [animations, setAnimations] = useState({ headerTitle: 'animate__animated animate__fadeIn' });

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
        setDynamic(1);
    };

    useEffect(() => {
        selectedUI === 'Sahib' ? setAnimations({ headerTitle: 'animate__animated animate__fadeInDown' }) : setAnimations({ headerTitle: 'animate__animated animate__fadeInUp' });

    }, [selectedUI]);

    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'rgba(255,255,255,0)' }}>
            <motion.div
                style={{
                    background: 'linear-gradient(135deg, #f5f4f1, #927d60, #2b201d)',
                    opacity: 1
                }}
                animate={{
                    background: selectedUI === 'Sahib' ? 'linear-gradient(135deg, #f5f4f1, #927d60, #2b201d)' : 'linear-gradient(135deg, #f9f8fc, #9c83c9, #322249)'
                }}
                transition={{
                    background: { duration: 0.5, ease: 'easeOut' } // 0.5sec transition
                }}
            >
                <Container maxWidth={'xl'}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Box sx={{ display: responsive ? 'none' : 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <NavLink to={'/'} style={{ marginBottom: -7 }}>
                                {
                                    selectedUI === 'Sahib'
                                        ? <CodeOffIcon sx={{ color: 'primary.900', fontSize: '35px' }} className="animate__animated animate__fadeIn" />
                                        : <MusicNoteIcon sx={{ color: 'secondary.900', fontSize: '35px' }} className="animate__animated animate__fadeIn" />
                                }
                            </NavLink>
                            <Divider orientation="vertical" variant='middle' flexItem sx={{ ml: 1.5, mr: 0.6, backgroundColor: 'primary.main' }} />
                            <NavLink className={animations.headerTitle} to={'/'} style={{ textDecoration: 'none' }}>
                                <Typography
                                    variant="h5"
                                    noWrap
                                    sx={{
                                        mr: 1,
                                        ml: 1.5,
                                        fontSize: '28px',
                                        fontFamily: "Ubuntu, serif",
                                        fontWeight: 'bold',
                                        fontOpticalSizing: 'auto',
                                        fontStyle: 'normal',
                                        letterSpacing: '.2rem',
                                        color: selectedUI === 'Sahib' ? 'primary.light' : 'secondary.light',
                                        textDecoration: 'none',
                                        transition: 'all 0.5s ease'
                                    }}
                                >
                                    {
                                        selectedUI === 'Sahib'
                                            ? 'Software Engineer'
                                            : 'Music Producer'
                                    }
                                </Typography>
                            </NavLink>
                        </Box>
                        <Box sx={{ display: responsive ? 'none' : 'flex' }}>
                            {navItem.map((item) => (
                                <Button
                                    onClick={() => goToSection(item.name)}
                                    key={item.name}
                                    sx={{
                                        color: selectedUI === 'Sahib'
                                            ? activeSection === item.name ? 'primary.light' : 'primary.200'
                                            : activeSection === item.name ? 'secondary.light' : 'secondary.200',
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
                                            backgroundColor: selectedUI === 'Sahib' ? 'primary.light' : 'secondary.light', // line color
                                            transition: 'all 0.5s ease', // expand animation
                                        },
                                        '&:hover': {
                                            color: selectedUI === 'Sahib' ? 'primary.light' : 'secondary.light'
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
                        <Box sx={{ display: responsive ? 'flex' : 'none' }}>
                            <IconButton
                                size="small"
                                onClick={handleOpenNavMenu}
                                color='primary'
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorElNav}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: responsive ? 'flex' : 'none', width: '100%' }}
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
                                    {
                                        selectedUI === 'Sahib'
                                            ? <CodeOffIcon sx={{ color: 'primary.900', fontSize: '32px' }} className="animate__animated animate__swing" />
                                            : <MusicNoteIcon sx={{ color: 'secondary.900', fontSize: '32px' }} className="animate__animated animate__swing" />
                                    }
                                </NavLink>
                                <Divider orientation="vertical" variant='middle' flexItem sx={{ ml: 1.5, display: responsive ? 'flex' : 'none', backgroundColor: 'primary.main' }} />
                                <NavLink className={animations.headerTitle} to={'/'} style={{ textDecoration: 'none' }}>
                                    <Typography
                                        variant="h5"
                                        noWrap
                                        sx={{
                                            mr: 2,
                                            ml: 1.5,
                                            display: responsive ? 'flex' : 'none',
                                            flexGrow: 1,
                                            fontFamily: 'sans-serif',
                                            fontWeight: 700,
                                            color: selectedUI === 'Sahib' ? 'primary.100' : 'secondary.100',
                                            fontSize: '20px',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        {
                                            selectedUI === 'Sahib'
                                                ? 'Software Engineer'
                                                : 'Music Producer'
                                        }
                                    </Typography>
                                </NavLink>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </motion.div>
        </AppBar>
    )
}
