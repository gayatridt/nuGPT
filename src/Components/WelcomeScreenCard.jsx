import React from 'react';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Gptlogo from "../assets/Gptlogo.png"
import { Box } from '@mui/material';

export default function WelcomeScreenCard() {
    const navigate = useNavigate();

    const handleWelcomeLoginClick = () => {
        navigate('/Login');
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: { xs: '16px', sm: '24px' },
        }}>
            <Card sx={{
                width: '100%',
                maxWidth: '600px',
                minHeight: { xs: '400px', sm: '600px' },
                background: 'linear-gradient(to bottom, white, #999999)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <img src={Gptlogo} alt="Logo" style={{ width: 'clamp(40px, 10vw, 60px)', height: 'auto' }} />
                    <Typography sx={{
                        color: '#C20F0F',
                        fontSize: { xs: '24px', sm: '38px' },
                        marginBottom: '10px'
                    }}>
                        Welcome to nuGPT
                    </Typography>
                    <Typography sx={{
                        color: '#C20F0F',
                        fontSize: { xs: '18px', sm: '26px' },
                        marginBottom: '10px'
                    }}>
                        Hi! I'm Paws
                    </Typography>
                    <Typography sx={{
                        color: '#C20F0F',
                        fontSize: { xs: '18px', sm: '26px' },
                        marginBottom: '20px'
                    }}>
                        Your digital assistant to guide you
                    </Typography>
                    <Button
                        sx={{
                            color: 'white',
                            backgroundColor: '#C20F0F',
                            '&:hover': {
                                backgroundColor: '#990c0c',
                            },
                            padding: { xs: '8px 16px', sm: '10px 20px' },
                            fontSize: { xs: '14px', sm: '16px' },
                        }}
                        size="large"
                        onClick={handleWelcomeLoginClick}
                    >
                        Log In
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}