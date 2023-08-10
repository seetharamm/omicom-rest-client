import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Divider } from '@mui/material';

export default function BodyDropDown() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value );
  };

  return (
    <Box sx={{ minWidth: 10 }}>
      <FormControl fullWidth>
       
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}

          onChange={handleChange}
          sx={{'.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' }}}
        >
          <MenuItem value={'JSON'}>JSON</MenuItem>
          <MenuItem value={'XML'}>XML</MenuItem>
          <MenuItem value={'YAML'}>YAML</MenuItem><Divider/>
          <MenuItem value={'Multipart Form'}>Multipart Form</MenuItem>
          <MenuItem value={'Form URL Encoded'}>Form URL Encoded</MenuItem>
          <MenuItem value={'GraphGL Query'}>GraphGL Query</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
