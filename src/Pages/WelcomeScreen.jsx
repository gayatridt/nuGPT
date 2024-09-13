import React from 'react';
import { Box, Typography } from '@mui/material';
import huskyChatbot from "../assets/huskyChatbot.jpeg"
import NeuLogo from "../assets/NeuLogo.png"
import Gptlogo from "../assets/Gptlogo.png"
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const WelcomeScreen = () => {
  const navigate = useNavigate();
 
    const handleWelcomeLoginClick = () => {
        navigate('/Login');
    };
  return (
    <Box
      sx={{
        width: '140vh',
        height: '90vh',
        backgroundColor: '#0a001f',
        backgroundImage: 'radial-gradient(circle at center, #1a0042 0%, #0a001f 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top left logos */}
      <Box sx={{ position: 'absolute', top: 20, left: 20, display: 'flex', alignItems: 'center' }}>
        <Box 
          component="img"
          src={NeuLogo}
          alt="University Logo"
          sx={{ width: 40, height: 40 }}
        />
      </Box>

      {/* Main content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1000px',
          padding: '20px',
        }}
      >
        {/* Husky image */}
        <Box
          component="img"
          src={huskyChatbot}
          alt="Husky Assistant"
          sx={{
            width: { xs: '200px', sm: '250px' },
            height: { xs: '200px', sm: '250px' },
            objectFit: 'cover',
            borderRadius: '10px',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
            mb: { xs: 4, sm: 0 },
            mr: { xs: 0, sm: 4 },
          }}
        />

        {/* Text content */}
        <Box
          sx={{
            width: { xs: '90%', sm: 'auto' },
            maxWidth: 500,
            backgroundColor: 'rgba(30, 0, 60, 0.4)',
            border: '2px solid #00ffff',
            borderRadius: '15px',
            padding: '30px',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -20,
              left: 20,
              backgroundColor: '#000',
              borderRadius: '50%',
              width: 40,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ color: '#fff', fontSize: '0.8rem' }}>NUGPT</Typography>
          </Box>
          <Typography variant="h2" sx={{ color: '#fff', mb: 2, fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>I'M PAWS</Typography>
          <Typography variant="h5" sx={{ color: '#fff', fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>Your digital assistant to guide you</Typography>
        </Box>

        <Button
                sx={{
                    color: 'white',
                    backgroundColor: '#C20F0F',
                    '&:hover': {
                        backgroundColor: '#990c0c',
                    },
                    position: 'absolute',
                    bottom: '200px',
                    left: '60%',
                }}
                size="large"
                onClick={handleWelcomeLoginClick}
            >
                Log In
        </Button>
      </Box>

      {/* Background effects */}
      {[...Array(20)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: '8px',
            height: '20%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            animation: `moveLight 8s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </Box>
  );
};

export default WelcomeScreen;