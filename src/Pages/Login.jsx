import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Gptlogo from "../assets/Gptlogo.png";
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleLoginClick = () => {
    setOpen(true); 
    setTimeout(() => {
      setOpen(false); 
      navigate('/Chat');
    }, 1000); 
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleLoginClick}
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
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              bgcolor: '#C20F0F',
              '&:hover': {
                bgcolor: '#990c0c',
              },
            }}
          >
            Continue with Nu email
          </Button>
        </Box>
      </Box>
      
      {/* Backdrop */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
}