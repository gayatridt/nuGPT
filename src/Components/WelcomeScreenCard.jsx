import React from 'react';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Gptlogo from "../assets/Gptlogo.png"

export default function WelsomeScreenCard() {

    const navigate = useNavigate();

    const handleWelcomeLoginClick = () => {
        navigate('/Login');
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white'
            }}
        >
            <Card
                style={{
                    width: '600px',
                    height: '600px',
                    background: 'linear-gradient(to bottom, white, #999999)', 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
            >
                <CardContent style={{ textAlign: 'center' }}>
                    <img src={Gptlogo} alt="Logo" style={{ width: '60px', height: '60px' }} />
                    <Typography
                        style={{ color: '#C20F0F', fontSize: '38px', marginBottom: '10px' }}
                    >
                        Welcome to nuGPT
                    </Typography>
                    <br />
                    <Typography
                        style={{ color: '#C20F0F', fontSize: '26px', marginBottom: '10px' }}
                    >
                        Hi! I'm Paws
                    </Typography>
                    <Typography
                        style={{ color: '#C20F0F', fontSize: '26px', marginBottom: '20px' }}
                    >
                        Your digital assistant to guide you
                    </Typography>
                    <Button
                        style={{ color: 'white', backgroundColor: '#C20F0F' }}
                        size="large"
                        onClick={handleWelcomeLoginClick}
                    >
                        Log In
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
