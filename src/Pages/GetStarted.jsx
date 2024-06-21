import { Container, Box, Typography, Toolbar, FormControl, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

import logo from '../assets/slack_logo.png'
import { Link } from 'react-router-dom'

const GetStarted = () => {
    

    const handleSubmit = () => {
        location.href = '/new-workspace'
    }

    return (
        <Container>
            <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box
                    component="img"
                    sx={{
                        height: 40,
                        mr: 2,
                        display: { xs: 'flex', md: 'flex' },
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
                    slack
                </Typography>
            </Toolbar>
            <Box
                sx={{
                    display: 'flex',
                    mt: '2em',
                    backgroundColor: '#f9f6f1'
                }}
            >
                <Box
                    sx={{
                        width: '50%',
                        p: '2em',
                        ml:  '3em'
                    }}
                >
                    <Typography
                        variant='h4'
                        fontWeight='bold'
                    >
                        Get started on Slack
                    </Typography>

                    <Typography
                        variant='p'
                        fontSize='1.25em'
                        sx={{
                            marginTop: '1em'
                        }}
                    >
                        It’s a new way to communicate with everyone that you work with. It’s faster, better organised and more secure than email – and it’s free to try.
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            width: '100%',
                            backgroundColor: '#5d1d63', 
                            '&:hover': { backgroundColor: '#5d1d70' }, 
                            mt: '1em',
                            fontSize: '1.15em',
                            fontWeight: 'bold',
                            textTransform: 'none'
                        }}
                        onClick={handleSubmit}
                    >
                        Create Workspace
                    </Button>
                </Box>
                <Box
                    sx={{
                        width: '50%',
                        p: '2em'
                    }}
                >
                    <Typography>
                        hello
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default GetStarted
