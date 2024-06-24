import React, { useState } from 'react';
import { Container, TextField, IconButton, List, ListItem, ListItemText, Paper, Typography, Box, InputAdornment, Grid, Button } from '@mui/material';
import { VolumeUp, FileCopy, ThumbUp, ThumbDown, Replay, Send } from '@mui/icons-material';

function ChatTexts() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: 'question', text: input }]);
      setInput('');
      // Simulate an answer based on the input
      setTimeout(() => {
        if (input === 'Give me the course description for INFO 5001') {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              type: 'answer',
              text: 'Certainly! Below is the course description for INFO 5001\nINFO 5001. Application Modeling and Design. (4 Hours)\nPractices social-technical software engineering methods and tools to solve real-world problems......\n\nSource Links for this response:\nLink 1\nLink 2',
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

  const handleActionClick = (action, message) => {
    console.log(`${action} clicked for message: ${message.text}`);
  };

  const handlePromptClick = (prompt) => {
    setInput(prompt);
    handleSend();
  };

  return (
    <Container maxWidth="md" style={{ width: '600px' }}>
      <Typography variant="h4" gutterBottom>
        Chat Interface
      </Typography>
      <Paper
        style={{
          padding: '20px',
          marginBottom: '20px',
          height: '60vh',
          overflowY: 'auto',
          backgroundColor: '#f5f5f5',
        }}
      >
        {messages.length === 0 ? (
          <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '100%' }}>
            <Grid item>
              <Button
                variant="outlined"
                style={{ color: 'white', backgroundColor: 'red', borderColor: 'red' }}
                onClick={() => handlePromptClick('Search about a course')}
              >
                Search about a course
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                style={{ color: 'white', backgroundColor: 'red', borderColor: 'red' }}
                onClick={() => handlePromptClick('Check the recent events happening at the campus')}
              >
                Check the recent events happening at the campus
              </Button>
            </Grid>
          </Grid>
        ) : (
          <List>
            {messages.map((message, index) => (
              <ListItem key={index} style={{ justifyContent: message.type === 'question' ? 'flex-start' : 'flex-end' }}>
                <Box>
                  <Paper
                    style={{
                      padding: '10px',
                      borderRadius: '15px',
                      marginBottom: '5px',
                      backgroundColor: message.type === 'question' ? 'white' : 'white',
                      color: message.type === 'question' ? 'black' : 'red',
                    }}
                  >
                    <ListItemText primary={message.text} />
                  </Paper>
                  {message.type === 'answer' && (
                    <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <IconButton size="small" onClick={() => handleActionClick('Volume', message)} style={{ color: 'red' }}>
                        <VolumeUp fontSize="small" />
                      </IconButton>
                      <IconButton size="small" onClick={() => handleActionClick('Copy', message)} style={{ color: 'red' }}>
                        <FileCopy fontSize="small" />
                      </IconButton>
                      <IconButton size="small" onClick={() => handleActionClick('Like', message)} style={{ color: 'red' }}>
                        <ThumbUp fontSize="small" />
                      </IconButton>
                      <IconButton size="small" onClick={() => handleActionClick('Dislike', message)} style={{ color: 'red' }}>
                        <ThumbDown fontSize="small" />
                      </IconButton>
                      <IconButton size="small" onClick={() => handleActionClick('Reload', message)} style={{ color: 'red' }}>
                        <Replay fontSize="small" />
                      </IconButton>
                    </Box>
                  )}
                </Box>
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
      <TextField
        label="How may I help you?"
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleSend();
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton color="primary" onClick={handleSend} style={{ color: 'red' }}>
                <Send />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 2 }}
      />
    </Container>
  );
}

export default ChatTexts;