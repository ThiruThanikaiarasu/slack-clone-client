import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import logo from '../assets/slack_logo.png'

const Landing = () => {

    const handleLogin = () => {
        location.href = '/login'
    }

    const handleSignup = () => {
        location.href = '/signup'
    }

    return (
        <div className="landing-container">
        <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
            <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Box
                component="img"
                sx={{
                    height: 40,
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                }}
                alt="Logo"
                src={logo}
                />
                <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'black',
                    textDecoration: 'none',
                }}
                >
                    Slack
                </Typography>

                <Box
                component="img"
                sx={{
                    height: 40,
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                }}
                alt="Logo"
                src={logo}
                />
                <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'black',
                    textDecoration: 'none',
                }}
                >
                Slack
                </Typography>

                <Box sx={{ flexGrow: 1 }} />  
                <Box sx={{ flexGrow: 0, pr: 2 }}>  
                    <Button variant="outlined" onClick={handleLogin}>
                        Login
                    </Button>
                </Box>
            </Toolbar>
            </Container>
        </AppBar>
        <Container>
            <Typography
                variant='h3'
                textAlign='center'
                marginTop='1em'
                fontWeight='bold'
            >
                Made for people. <span style={{color: '#5d1d63'}}>Built for productivity.</span>
            </Typography>
            <Box sx={{ flexGrow: 0, pr: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', mt:'1.25em' }}>
                <Button variant="contained" sx={{ backgroundColor: '#5d1d63', '&:hover': { backgroundColor: '#5d1d70'}, }} onClick={handleSignup}>
                    Get Started 
                </Button>
            </Box>
            <Typography
                variant='h6'
                textAlign='center'
                marginTop='1em'
            >
                <span style={{fontWeight: 'bold'}}>Slack is free to try</span> for as long as you like
            </Typography>
        </Container>
        </div>
    );
}

export default Landing;
