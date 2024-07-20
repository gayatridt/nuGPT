import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputBase from '@mui/material/InputBase';
import NeuLogo from "../assets/NeuLogo.jpg"
import Gptlogo from "../assets/Gptlogo.png"
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header({ isSidebarOpen, setIsSidebarOpen, isMobile }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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