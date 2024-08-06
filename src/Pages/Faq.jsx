import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';

export default function Faq({ darkMode }) {
  return (
    <div style={{ 
      backgroundColor: darkMode ? '#121212' : '#ffffff', 
      color: darkMode ? '#e0e0e0' : '#000000', 
      padding: '16px',
      height: '100%',
      overflow: 'auto'
    }}>
      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: darkMode ? '#424242' : '#ffffff',
          color: darkMode ? '#e0e0e0' : '#000000',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography sx={{ fontWeight: 'bold' }}>What is nuGPT?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: 'left' }}>
            nuGPT is a platform for all Northeastern's current students and faculty....
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: darkMode ? '#424242' : '#ffffff',
          color: darkMode ? '#e0e0e0' : '#000000',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography sx={{ fontWeight: 'bold' }}>Who is nuGPT?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: 'left' }}>
            nuGPT is a platform for all Northeastern's current students and faculty....
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}