import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NeuLogo from "../assets/NeuLogo.png";
import Gptlogo from "../assets/Gptlogo.png";
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Dialog, Typography, TextField, Button, Avatar } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';

export default function Header({ isSidebarOpen, setIsSidebarOpen, isMobile }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [profilePic, setProfilePic] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const navigate = useNavigate();

  const handleWelcomeLoginClick = () => {
    navigate('/Login');
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (event) => {
    setProfilePic(URL.createObjectURL(event.target.files[0]));
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleClickOpen}>Profile</MenuItem>
      <BootstrapDialog
        open={open}
        onClose={handleClose}
        style={{ width: '100%' }}
      >
        <DialogTitle>My Profile</DialogTitle>
        <DialogContent dividers>
          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Avatar
                  alt="Profile Picture"
                  src={profilePic}
                  sx={{ width: 100, height: 100, mb: 2 }}
                />
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="profile-pic-upload"
                  type="file"
                  onChange={handleFileChange}
                />
                <label htmlFor="profile-pic-upload">
                  <Button variant="contained" component="span" size="small">
                    Upload
                  </Button>
                </label>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  defaultValue="Harry"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  defaultValue="Potter"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  defaultValue="harryPotter@hogwatrs.com"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Save changes</Button>
        </DialogActions>
      </BootstrapDialog>
      <MenuItem onClick={handleWelcomeLoginClick}>Logout</MenuItem>
    </Menu>
  );

  return (
    <Box>
      <AppBar style={{ backgroundColor: "white" }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              sx={{ mr: 2, color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <img
            src={NeuLogo}
            alt="Logo"
            style={{
              width: '40px',
              height: '35px',
              marginLeft: isSidebarOpen && !isMobile ? '300px' : '0',
              transition: 'margin-left 0.3s'
            }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <img src={Gptlogo} alt="Logo" style={{ width: '60px', height: '60px' }} />
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
          >
            <AccountCircle style={{ color: '#C20F0F', width: '50px', height: '50px' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}