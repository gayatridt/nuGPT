import React, { useState } from 'react';
import { Container, TextField, IconButton, List, ListItem, ListItemText, Paper, Box, InputAdornment, Grid, Button } from '@mui/material';
import { VolumeUp, FileCopy, ThumbUp, ThumbDown, Replay, Send } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f7f4ef',
      paper: 'white',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#424242',
      paper: '#616161',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
    },
  },
});


function ChatTexts({ isSidebarOpen, darkMode }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: 'question', text: input }]);
      setInput('');
      setTimeout(() => {
        if (input === 'Give me the course description for INFO 5001') {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              type: 'answer',
              text: 'Certainly! Below is the course description for INFO 5001.\nINFO 5001. Application Modeling and Design. (4 Hours)\nPractices social-technical software engineering methods and tools to solve real-world problems......\n\nSource Links for this response:\nLink 1\nLink 2',
            },
          ]);
        } else if (input === 'On what day and time is this course taught?') {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              type: 'answer',
              text: 'INFO 5001. Application Modeling and Design is taught on Saturdays 9:00 AM PST',
            },
          ]);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            { type: 'answer', text: 'This is a simulated answer.' },
          ]);
        }
      }, 1000);
    }
  };

  const handlePromptClick = (prompt) => {
    setInput(prompt);
    handleSend();
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper
        sx={{
          padding: '20px',
          minHeight: 'calc(100vh - 200px)',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.default',
          color: 'text.primary',
        }}
      >
        {messages.length === 0 ? (
          <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '100%', marginTop: '200px' }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item>
                <Button
                  variant="outlined"
                  sx={{
                    color: 'black',
                    borderRadius: '20px',
                    backgroundColor: 'white',
                    borderColor: 'grey',
                    width: '200px',
                    height: '80px',
                    fontWeight: '600',
                    '&:hover': {
                      backgroundColor: '#168aad',
                      color: 'white',
                    },
                  }}
                  onClick={() => handlePromptClick('Search about a course')}
                >
                  Search about a course
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  sx={{
                    color: 'black',
                    borderRadius: '20px',
                    backgroundColor: 'white',
                    borderColor: 'grey',
                    width: '200px',
                    height: '80px',
                    fontWeight: '600',
                    '&:hover': {
                      backgroundColor: '#168aad',
                      color: 'white',
                    },
                  }}
                  onClick={() => handlePromptClick('Check the recent events happening at the campus')}
                >
                  Check the recent events happening at the campus
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Box sx={{ flexGrow: 1 }}>
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: message.type === 'question' ? 'flex-end' : 'flex-start',
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    maxWidth: '70%',
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: message.type === 'question' ? (darkMode ? '#1C202C' : '#000A68') : (darkMode ? '#7A8195' : '#C9C7C7'),//'#',
                    color: message.type === 'question' ? (darkMode ? 'white' : 'white'): (darkMode ? 'white' : 'black'),
                  }}
                >
                  <ListItemText primary={message.text} />
                  {message.type === 'answer' && (
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                      <IconButton size="small">
                        <VolumeUp />
                      </IconButton>
                      <IconButton size="small">
                        <FileCopy />
                      </IconButton>
                      <IconButton size="small">
                        <ThumbUp />
                      </IconButton>
                      <IconButton size="small">
                        <ThumbDown />
                      </IconButton>
                      <IconButton size="small">
                        <Replay />
                      </IconButton>
                    </Box>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        )}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 'auto',
            paddingTop: '10px',
            borderTop: '1px solid',
            borderTopColor: 'divider',
          }}
        >
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            fullWidth
            placeholder="Type your message here"
            multiline
            maxRows={3}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" aria-label="send" onClick={handleSend}>
                    <Send />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ backgroundColor: 'background.paper', color: 'text.primary' }}
          />
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default ChatTexts;
