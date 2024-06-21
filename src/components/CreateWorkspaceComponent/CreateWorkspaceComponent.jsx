import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, TextField } from '@mui/material';

const steps = ['Company or Team', 'Profile', 'Channel'];

const CreateWorkspaceComponent = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [companyName, setCompanyName] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [firstChannel, setFirstChannel] = React.useState('');

    const [companyNameError, setCompanyNameError] = React.useState(false);
    const [firstNameError, setFirstNameError] = React.useState(false);
    const [firstChannelError, setFirstChannelError] = React.useState(false);

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        if (validateForm()) {
            let newSkipped = skipped;
            if (isStepSkipped(activeStep)) {
                newSkipped = new Set(newSkipped.values());
                newSkipped.delete(activeStep);
            }

            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setSkipped(newSkipped);

            if (activeStep === steps.length - 1) {
                location.href = 'login'
            }
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleCompanyNameChange = (event) => {
        setCompanyName(event.target.value);
        setCompanyNameError(false);
    };

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
        setFirstNameError(false);
    };

    const handleFirstChannelChange = (event) => {
        setFirstChannel(event.target.value);
        setFirstChannelError(false);
    };

    const validateForm = () => {
        let valid = true;
        if (activeStep === 0 && companyName.trim() === '') {
            setCompanyNameError(true);
            valid = false;
        }
        if (activeStep === 1 && firstName.trim() === '') {
            setFirstNameError(true);
            valid = false;
        }
        if (activeStep === 2 && firstChannel.trim() === '') {
            setFirstChannelError(true);
            valid = false;
        }
        return valid;
    };

    return (
        <Container>
            <Box sx={{ width: '100%', marginTop: '4em' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps} sx={{
                                '& .MuiStepIcon-root.Mui-completed': {
                                    color: '#611f69',
                                },
                                '& .MuiStepIcon-root.Mui-active': {
                                    color: '#611f69',
                                },
                                '& .MuiStepIcon-text': {
                                    fill: 'white',
                                },
                            }}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                
                <React.Fragment>
                    {activeStep === 0 && (
                        <Box sx={{ height: '20em', mt: '4em', width: '50%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant='h4' fontWeight='bold'>
                                    What’s the name of your company or team?
                                </Typography>
                                <Typography fontSize='1.25em' paddingTop='1rem' paddingBottom='1rem'>
                                    This will be the name of your Slack workspace – choose something that your team will recognise.
                                </Typography>
                                <TextField
                                    placeholder='Enter your company or team name'
                                    value={companyName}
                                    onChange={handleCompanyNameChange}
                                    error={companyNameError}
                                    helperText={companyNameError ? 'This field is required' : ''}
                                />
                            </Box>
                        </Box>
                    )}
                    {activeStep === 1 && (
                        <Box sx={{ height: '20em', mt: '4em', width: '50%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant='h4' fontWeight='bold'>
                                    What’s your name?
                                </Typography>
                                <Typography fontSize='1.25em' paddingTop='1rem' paddingBottom='1rem'>
                                    Adding your name and profile photo helps your teammates to recognise and connect with you more easily.
                                </Typography>
                                <TextField
                                    placeholder='Enter your name'
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                    error={firstNameError}
                                    helperText={firstNameError ? 'This field is required' : ''}
                                />
                            </Box>
                        </Box>
                    )}
                    {activeStep === 2 && (
                        <Box sx={{ height: '20em', mt: '4em', width: '50%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant='h4' fontWeight='bold'>
                                    What’s your team working on right now?
                                </Typography>
                                <Typography fontSize='1.25em' paddingTop='1rem' paddingBottom='1rem'>
                                    This could be anything: a project, campaign, event or the deal you’re trying to close.
                                </Typography>
                                <TextField
                                    placeholder='Enter your name'
                                    value={firstChannel}
                                    onChange={handleFirstChannelChange}
                                    error={firstChannelError}
                                    helperText={firstChannelError ? 'This field is required' : ''}
                                />
                            </Box>
                        </Box>
                    )}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
                
            </Box>
        </Container>
    );
}

export default CreateWorkspaceComponent;
