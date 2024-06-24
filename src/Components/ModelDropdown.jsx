import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function ModelDropdown() {
  const [model, setModel] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setModel(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div style={{ marginBottom: 1000, marginRight: 1000, marginTop: 50 }}>
      <Button
        onClick={handleOpen}
        sx={{
          color: '#C20F0F',
          borderColor: 'black',
          '&:hover': {
            borderColor: 'black',
          },

        }}
      >

      </Button>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel
          id="demo-controlled-open-select-label"
          sx={{ color: '#C20F0F' }}
        >
          Model
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={model}
          onChange={handleChange}
          label="Model"
          sx={{
            '& .MuiSelect-root': {
              color: 'black',
              borderColor: 'black',
            },
          }}
        >
          <MenuItem value={10}>Model 1</MenuItem>
          <MenuItem value={20}>Model 2</MenuItem>
          <MenuItem value={30}>Model 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
