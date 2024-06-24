import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

export default function Textfield() {
  return (
    <Paper
      component="form"
      sx={{ display: 'flex', alignItems: 'center', width: 1000 }}
    >

      <InputBase
        sx={{ ml: 98 }}
        placeholder="How may I help you?"
      />

      <Divider sx={{ height: 30, m: 1 }} orientation="vertical" />
      <IconButton sx={{ color: '#C20F0F' }} >
        <SendIcon />
      </IconButton>
    </Paper>
  );
}