import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Divider } from '@mui/material';

export default function RequestDropdown(props) {
  const [age, setAge] = React.useState('');
  const { getActive, nodes } = props;
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const menuItemHandler = function (evt) {
    console.log("menu handler");
    getActive(evt, nodes);
  }
  const rightIconClickHandler = function (evt) {
    console.log("menu handler");
  }


  return (

    
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        onChange={handleChange}
        onClick={rightIconClickHandler}
        sx={{ boxShadow: 'none', 
        '.MuiOutlinedInput-notchedOutline': { border: 'none' } ,
         height:"22px",
         marginTop:"5px"

       }}
      >
        <Paper sx={{ width: 320, maxWidth: '100%' }}>
          <MenuList sx={{ padding: 0 }}>
            <MenuItem onClick={menuItemHandler}>
              <ListItemIcon >
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Rename</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘X
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Delete</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘D
              </Typography>
            </MenuItem>
            <MenuItem onClick={menuItemHandler}>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Duplicate</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘D
              </Typography>
            </MenuItem>


            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Select>
    

  );
}
