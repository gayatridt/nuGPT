import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Gptlogo from "../assets/Gptlogo.png";
import { useNavigate } from 'react-router-dom';
import { Container, Backdrop, CircularProgress, Snackbar } from '@mui/material';
 
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
 
export default function Login() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
 
  const navigate = useNavigate();
 
  const validateEmail = (email) => {
    if (!email) {
      setEmailError('Email is required');
      return false;
    }
    if (!EMAIL_REGEX.test(email)) {
      setEmailError('Invalid email. Must be a @northeastern.edu address');
      return false;
    }
    setEmailError('');
    return true;
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const isEmailValid = validateEmail(email);
 
    if (isEmailValid && password) {
      setOpen(true);
      // Simulating API call
      setTimeout(() => {
        setOpen(false);
        navigate('/Chat');
      }, 1000);
    } else {
      setSnackbarMessage('Please enter a valid Northeastern email and password');
      setSnackbarOpen(true);
    }
  };
 
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img src={Gptlogo} alt="Logo" style={{ width: 'clamp(40px, 15vw, 60px)', height: 'auto', marginBottom: '1rem' }} />
        <Typography component="h1" variant="h5" sx={{ mb: 3 }} style={{color:'black'}}>
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: '#C20F0F',
              '&:hover': {
                bgcolor: '#990c0c',
              },
            }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/Forgotpassword" variant="body2">
                Forgot Username/Password?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </Container>
  );
}