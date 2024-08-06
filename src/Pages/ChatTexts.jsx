import React, { useState, useEffect } from "react";
import {
  TextField,
  IconButton,
  ListItemText,
  Paper,
  Box,
  InputAdornment,
  Grid,
  Button,
  useMediaQuery,
} from "@mui/material";
import {
  VolumeUp,
  FileCopy,
  ThumbUp,
  ThumbDown,
  Replay,
  Send,
} from "@mui/icons-material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";
import useApi from "../Services/api";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f7f4ef",
      paper: "white",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#424242",
      paper: "#616161",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bbbbbb",
    },
  },
});

function ChatTexts({
  isSidebarOpen,
  darkMode,
  chatInstance,
  updateChatInstance,
  isMobile,
}) {
  const [input, setInput] = useState("");
  const [thumbs, setThumbs] = useState({});
  const { fetchAnswer, isLoading } = useApi();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  useEffect(() => {
    if (chatInstance) {
      setThumbs({});
    }
  }, [chatInstance]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };
  
  const handleSend = async (replayMessage = null, regenerated = false) => {
    const text = replayMessage || input;
    if (text.trim()) {
      const newMessage = { type: "question", text };
      const updatedMessages = [...chatInstance.messages, newMessage];
      updateChatInstance({ ...chatInstance, messages: updatedMessages });
      setInput("");

      try {
        const response = await fetchAnswer(text);
        if (response) {
          const answerMessage = {
            type: "answer",
            text: `${response.answer}\n\n`,
            regenerated,
          };
          const finalMessages = [...updatedMessages, answerMessage];
          updateChatInstance({ ...chatInstance, messages: finalMessages });
        }
      } catch (error) {
        console.error("Error fetching answer:", error);
      }
    }
  };

  const handlePromptClick = (prompt) => {
    setInput(prompt);
    handleSend(prompt);
  };

  const handleVolumeUp = (message) => {
    const utterance = new SpeechSynthesisUtterance(message.text);
    speechSynthesis.speak(utterance);
  };

  const handleFileCopy = (message) => {
    navigator.clipboard.writeText(message.text);
  };

  const handleThumbUp = (index) => {
    setThumbs((prevThumbs) => ({
      ...prevThumbs,
      [index]: prevThumbs[index] === "up" ? null : "up",
    }));
  };

  const handleThumbDown = (index) => {
    setThumbs((prevThumbs) => ({
      ...prevThumbs,
      [index]: prevThumbs[index] === "down" ? null : "down",
    }));
  };

  const handleReplay = (message) => {
    handleSend(message.text, true);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.default',
          color: 'text.primary',
          overflow: 'hidden',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          margin: 0,
          padding: 0,
          borderRadius: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(45deg, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
            opacity: 0.7,
            zIndex: -1,
          },
        })}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: '20px',
            maxWidth: '800px',
            margin: '0 auto',
            width: '100%',
            [theme.breakpoints.down("sm")]: {
              height: 'calc(100vh - 80px)', // Adjusted for header
              padding: '10px',
              marginTop: '80px', // Space for header
            },
            [theme.breakpoints.between("sm", "md")]: {
              height: 'calc(100vh - 100px)', // Adjusted for header
              padding: '15px',
              marginTop: '100px', // Space for header
            },
            [theme.breakpoints.up("md")]: {
              height: 'calc(100vh - 120px)', // Adjusted for header
              marginTop: '70px', // Space for header
            },
          })}
        >
          {chatInstance.messages.length === 0 ? (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                  padding: isSmallScreen ? '20px 0' : '0',
                }}
              >
                <Grid
                  container
                  spacing={isSmallScreen ? 2 : 3}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  style={{ width: '100%' }}
                >
                  <Grid item xs={12} style={{ width: '100%', maxWidth: '400px' }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      sx={{
                        color: "black",
                        borderRadius: "20px",
                        backgroundColor: "#C7D0EA",
                        borderColor: "grey",
                        height: "60px",
                        fontSize: isSmallScreen ? "12px" : "14px",
                        fontWeight: "600",
                        "&:hover": {
                          backgroundColor: "#3F465C",
                          color: "white",
                        },
                        width: isSmallScreen ? "95%" : "100%",
                      }}
                      onClick={() => handlePromptClick("Search about a course")}
                    >
                      Search about a course
                    </Button>
                  </Grid>
                  <Grid item xs={12} style={{ width: '100%', maxWidth: '400px' }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      sx={{
                        color: "black",
                        borderRadius: "20px",
                        backgroundColor: "#C7D0EA",
                        borderColor: "grey",
                        height: "60px",
                        fontSize: isSmallScreen ? "12px" : "14px",
                        fontWeight: "600",
                        "&:hover": {
                          backgroundColor: "#3F465C",
                          color: "white",
                        },
                        width: isSmallScreen ? "95%" : "100%",
                      }}
                      onClick={() =>
                        handlePromptClick(
                          "Check the recent events happening at the campus"
                        )
                      }
                    >
                      Check the recent events happening at the campus
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            ) : (
            <Box
              sx={{
                flexGrow: 1,
                overflowY: 'auto',
                marginBottom: '15px',
              }}
            >
              {chatInstance.messages.map((message, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent:
                      message.type === "question" ? "flex-end" : "flex-start",
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: "70%",
                      p: 2,
                      borderRadius: 2,
                      backgroundColor:
                        message.type === "question"
                          ? darkMode
                            ? "#1C202C"
                            : "#000A68"
                          : darkMode
                          ? "#7A8195"
                          : "#C9C7C7",
                      color:
                        message.type === "question"
                          ? darkMode
                            ? "white"
                            : "white"
                          : darkMode
                          ? "white"
                          : "black",
                    }}
                  >
                    <ListItemText
                      primary={message.text}
                      secondary={message.regenerated ? "Regenerated" : null}
                      sx={{
                        '& .MuiListItemText-primary': {
                          textAlign: 'left',
                        },
                        '& .MuiListItemText-secondary': {
                          textAlign: 'left',
                        },
                      }}
                    />
                    {message.type === "answer" && (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          mt: 1,
                        }}
                      >
                        <IconButton
                          size="small"
                          onClick={() => handleVolumeUp(message)}
                        >
                          <VolumeUp />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleFileCopy(message)}
                        >
                          <FileCopy />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleThumbUp(index)}
                          sx={{
                            color: thumbs[index] === "up" ? "green" : "#616161",
                          }}
                        >
                          <ThumbUp />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleThumbDown(index)}
                          sx={{
                            color: thumbs[index] === "down" ? "red" : "#616161",
                          }}
                        >
                          <ThumbDown />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleReplay(message)}
                        >
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
              paddingTop: '10px',
              borderTop: '1px solid',
              borderTopColor: 'divider',
              width: '100%',
            }}
          >
            <TextField
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              fullWidth
              placeholder="Type your message here"
              multiline
              maxRows={3}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="send"
                      onClick={() => handleSend()}
                      disabled={isLoading}
                    >
                      {isLoading ? <CircularProgress size={24} /> : <Send />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                backgroundColor: "background.paper",
                color: "text.primary",
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.23)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.23)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                  },
                },
                '& .MuiInputBase-input': {
                  overflow: 'auto',
                  maxHeight: isSmallScreen ? '40px' : '60px',
                  fontSize: isSmallScreen ? '14px' : '16px',
                },
                width: isSmallScreen ? "95%" : "100%",
              }}
            />
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default ChatTexts;