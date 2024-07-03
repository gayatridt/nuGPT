import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import MenuIcon from '@mui/icons-material/Menu';
import ChatIcon from '@mui/icons-material/Chat';
import HistoryIcon from '@mui/icons-material/History';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import LabelIcon from '@mui/icons-material/Label';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen, darkMode, setDarkMode }) {
  const [historyOpen, setHistoryOpen] = useState(false);
  //const [darkMode, setDarkMode] = useState(true);
  const handleHistoryClick = () => {
    setHistoryOpen(!historyOpen);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const toggleDrawer = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const borderStyle = '1px solid #f5f5f5';
  const marginStyle = '1mm';

  const DrawerList = (
    <Box
      sx={{
        width: 300,
        bgcolor: darkMode ? 'background.default' : '#f7f4ef',
        color: 'text.primary',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      role="presentation"
    >
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}>
          <IconButton onClick={toggleDrawer} sx={{ color: 'text.primary' }}>
            <MenuIcon />
          </IconButton>
          <IconButton onClick={handleThemeToggle} sx={{ color: 'text.primary' }}>
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
        <List>
          <ListItem disablePadding sx={{ border: borderStyle, marginBottom: marginStyle, marginRight: marginStyle, bgcolor: darkMode ? 'background.default' : 'white', }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'text.primary' }}>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="New Chat" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ border: borderStyle, marginBottom: marginStyle, marginRight: marginStyle, bgcolor: darkMode ? 'background.default' : 'white', }} onClick={handleHistoryClick}>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'text.primary' }}>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="History" />
              {historyOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={historyOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {['Course Syllabus Descrip', 'Course Syllabus Descrip', 'Course Syllabus Descrip'].map((text, index) => (
                <ListItem key={index} disablePadding sx={{ border: borderStyle, marginBottom: marginStyle, marginRight: marginStyle, bgcolor: darkMode ? 'background.default' : 'white', }}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon sx={{ color: 'text.primary' }}>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
          <ListItem disablePadding sx={{ border: borderStyle, marginBottom: marginStyle, marginRight: marginStyle, bgcolor: darkMode ? 'background.default' : 'white', }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'text.primary' }}>
                <LabelIcon />
              </ListItemIcon>
              <ListItemText primary="Pinned Chats" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <List>
        <ListItem disablePadding sx={{ border: borderStyle, marginBottom: marginStyle, marginRight: marginStyle, bgcolor: darkMode ? 'background.default' : 'white', }}>
          <ListItemButton>
            <ListItemIcon sx={{ color: 'text.primary' }}>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="FAQ" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div>
        <Drawer variant="persistent" open={isSidebarOpen}>
          {DrawerList}
        </Drawer>
        {!isSidebarOpen && (
          <IconButton onClick={toggleDrawer} sx={{ color: darkMode ? 'black' : 'black', position: 'absolute', top: 16, left: 60, zIndex: 1300 }}>
          <MenuIcon />
        </IconButton>
        )}
      </div>
    </ThemeProvider>
  );
}

