import React from 'react';
import NeuLogo from '../assets/NeuLogo.jpg';
import WelcomeScreenCard from '../Components/WelcomeScreenCard';
import { Box } from '@mui/material';

function WelcomeScreen() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            minHeight: '100vh',
            position: 'relative',
        }}>
            <Box sx={{
                position: 'absolute',
                top: { xs: '5px', sm: '10px' },
                left: { xs: '5px', sm: '10px' },
            }}>
                <img 
                    src={NeuLogo} 
                    alt="Neu Logo" 
                    style={{ 
                        width: 'clamp(30px, 5vw, 40px)',
                        height: 'auto',
                    }} 
                />
            </Box>
            <WelcomeScreenCard />
        </Box>
    );
}

export default WelcomeScreen;