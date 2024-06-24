import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Gptlogo from "../assets/Gptlogo.png"

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (

    <div style={{ width: 400, height: 500, borderColor: 'black' }}>
      <Box component="form" onSubmit={handleSubmit} noValidate >
        <img src={Gptlogo} alt="Logo" style={{ width: '60px', height: '60px' }} />
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
       
        
        <Button
          type="submit"
          //   fullWidth
          variant="contained"
          style={{ color: 'white', backgroundColor: '#C20F0F' }}
        >
          Reset Password
        </Button>

        <Grid container>
          <Grid item xs>
            <br />
            <Link >
              Forgot Email? Contact IT department
            </Link>
          </Grid>

        </Grid>
        <br />
       
      </Box>


    </div>
  );
}