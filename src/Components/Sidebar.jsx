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
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function Sidebar() {
  const [historyOpen, setHistoryOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleHistoryClick = () => {
    setHistoryOpen(!historyOpen);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const borderStyle = '1px solid #f5f5f5';
  const marginStyle = '1mm';

  const DrawerList = (
    <Box
      sx={{ width: 250, bgcolor: 'black', color: 'white', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      role="presentation"
    >
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: 'white' }}>
            <MenuIcon />
          </IconButton>
          <IconButton onClick={handleThemeToggle} sx={{ color: 'white' }}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
        <List>
          <ListItem disablePadding sx={{ border: borderStyle, marginBottom: marginStyle, marginRight: marginStyle }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'white' }}>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="New Chat" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ border: borderStyle, marginBottom: marginStyle, marginRight: marginStyle }} onClick={handleHistoryClick}>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'white' }}>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="History" />
              {historyOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={historyOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {['Course Syllabus Descrip', 'Course Syllabus Descrip', 'Course Syllabus Descrip'].map((text, index) => (
                <ListItem key={index} disablePadding sx={{ border: borderStyle, marginBottom: marginStyle, marginRight: marginStyle }}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon sx={{ color: 'white' }}>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
          <ListItem disablePadding sx={{ border: borderStyle, marginBottom: marginStyle, marginRight: marginStyle }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'white' }}>
                <LabelIcon />
              </ListItemIcon>
              <ListItemText primary="Pinned Chats" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <List>
        <ListItem disablePadding sx={{ border: borderStyle, marginBottom: marginStyle, marginRight: marginStyle }}>
          <ListItemButton>
            <ListItemIcon sx={{ color: 'white' }}>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="FAQ" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)} sx={{ color: drawerOpen ? 'white' : 'black', position: 'absolute', top: 16, left: 16 }}>
        <MenuIcon />
      </IconButton>
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
