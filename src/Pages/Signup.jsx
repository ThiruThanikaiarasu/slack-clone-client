import { Container, Box, Typography, Toolbar, FormControl, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

import logo from '../assets/slack_logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({ email: '', password: '' })

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        return passwordRegex.test(password)
    }

    const handleSubmit = (event) => {
        const emailError = validateEmail(email) ? '' : 'Invalid email address'
        const passwordError = validatePassword(password) ? '' : 'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character'
        
        setErrors({ email: emailError, password: passwordError })

        if (!emailError && !passwordError) {
            event.preventDefault()
            
            axios
                .post(
                    `http://localhost:3500/api/v1/user/signup`, 
                    {
                        email, password
                    },
                    {
                        withCredentials: true
                    }
                )
                .then((response) => {
                    console.log(response.data)
                    if(response.data.code === 201) {
                        alert(`${response.data.message} !`)
                        window.location.href = '/get-started'
                    }
                })
                .catch((error) => {
                    alert(`Status : ${error.response.data.message}`)
                })
        }
    }

    return (
        <Container
            sx={{
                paddingTop: '3em'
            }}
        >
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
            <Box>
                <Typography
                    variant='h4'
                    sx={{
                        width: '40%',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        margin: '0 auto',
                        mt: '1em',
                    }}
                >
                    First of all, enter your email address
                </Typography>
                <FormControl
                    sx={{
                        width: '100%',
                        mt: '1em',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <TextField
                        value={email}
                        onChange={handleEmailChange}
                        placeholder='Enter your Email'
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={{
                            width: '30%',
                            mt: '1em'
                        }}
                    />

                    <TextField
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder='Enter your Password'
                        type='password'
                        error={!!errors.password}
                        helperText={errors.password}
                        sx={{
                            width: '30%',
                            mt: '1em',
                        }}
                    />

                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#5d1d63', '&:hover': { backgroundColor: '#5d1d70' }, width: '30%',
                            mt: '1em',
                            fontSize: '1.25em'
                        }}
                        onClick={handleSubmit}
                    >
                        Continue
                    </Button>

                </FormControl>

                <Typography
                    sx={{
                        textAlign: 'center',
                        mt: '1em'
                    }}
                >
                    Already using Slack?
                </Typography>

                <Link
                    style={{
                        display: 'block',
                        textAlign: 'center',
                        margin: '0 auto',
                        textDecoration: 'none'
                    }}
                    to='/login'
                >
                    Sign in to an existing workspace
                </Link>
            </Box>
        </Container>
    )
}

export default Signup
