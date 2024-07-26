import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  IconButton,
  ListItemText,
  Paper,
  Box,
  InputAdornment,
  Grid,
  Button,
} from "@mui/material";
import {
  VolumeUp,
  FileCopy,
  ThumbUp,
  ThumbDown,
  Replay,
  Send,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

  useEffect(() => {
    if (chatInstance) {
      setThumbs({});
    }
  }, [chatInstance]);

  const handleSend = async (replayMessage = null, regenerated = false) => {
    const text = replayMessage || input;
    if (text.trim()) {
      const newMessage = { type: "question", text };
      const updatedMessages = [...chatInstance.messages, newMessage];
      updateChatInstance({ ...chatInstance, messages: updatedMessages });
      setInput("");

      try {
        // Call the API
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
        // Optionally, you can add error handling here, such as displaying an error message to the user
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
      <Container maxWidth="xl">
        <Paper
          sx={(theme) => ({
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "background.default",
            color: "text.primary",
            overflow: "auto",
            [theme.breakpoints.down("sm")]: {
              // Mobile phones
              width: "100%",
              height: "calc(100vh - 200px)",
              margin: 0,
              position: "static",
            },
            [theme.breakpoints.between("sm", "md")]: {
              // Tablets
              width: "100%",
              height: "calc(100vh - 200px)",
              margin: "0 auto",
              position: "static",
            },
            [theme.breakpoints.up("md")]: {
              // Desktops
              width: "calc(100% - 600px)",
              height: "calc(100vh - 250px)",
              marginLeft: "400px",
              marginRight: "200px",
              maxWidth: "1200px",
              position: "fixed",
              top: "150px",
              left: 0,
              right: 0,
            },
          })}
        >
          {chatInstance.messages.length === 0 ? (
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              style={{ height: "100%", marginTop: "20px" }}
            >
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "black",
                      borderRadius: "20px",
                      backgroundColor: "#C7D0EA",
                      borderColor: "grey",
                      width: "200px",
                      height: "80px",
                      fontSize: "small",
                      fontWeight: "600",
                      "&:hover": {
                        backgroundColor: "#3F465C",
                        color: "white",
                      },
                    }}
                    onClick={() => handlePromptClick("Search about a course")}
                  >
                    Search about a course
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "black",
                      borderRadius: "20px",
                      backgroundColor: "#C7D0EA",
                      borderColor: "grey",
                      width: "200px",
                      height: "80px",
                      fontWeight: "600",
                      "&:hover": {
                        backgroundColor: "#3F465C",
                        color: "white",
                      },
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
            </Grid>
          ) : (
            <Box
              sx={{
                flexGrow: 1,
                overflowY: "auto",
                height: isMobile ? "auto" : "calc(100% - 60px)", // Adjust based on your input field height
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
              display: "flex",
              alignItems: "center",
              marginTop: "15px",
              paddingTop: "10px",
              borderTop: "1px solid",
              borderTopColor: "divider",
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
                    <IconButton
                      edge="end"
                      aria-label="send"
                      onClick={() => handleSend()}
                      disabled={isLoading} // Disable button while loading
                    >
                      {isLoading ? <CircularProgress size={24} /> : <Send />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                backgroundColor: "background.paper",
                color: "text.primary",
              }}
            />
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default ChatTexts;
