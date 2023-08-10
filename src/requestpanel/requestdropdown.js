import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import { FormControl } from '@mui/material';
import { MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';


function RequestMethodDropDown(props) {
    const { requestData ,handleRequestMethodChange} = props;
    const [requestMethod, setRequestMethod] = useState('GET');

    const handleChange = (event) =>
    {
        handleRequestMethodChange({method:event.target.value});
    }

    return ( 
          <Box> 
            <Select
            id='requestMethod'
            labelId=''
            value = {(requestData.method && requestData.method ) ? requestData.method: ""}
            onChange={handleChange}
            sx={{ 
                '.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' },
                height: 32,
                marginTop:"5px",
                marginRight:"11px",
                "&:hover": { color: "blue" , textShadow:'0 0 .65px #333, 0 0 .65px #333'} 
             }}
            >
            <MenuItem value="GET"><Typography sx={{fontSize:"12px"}}>GET</Typography></MenuItem>
            <MenuItem value="PUT"><Typography sx={{fontSize:"12px"}}>PUT</Typography></MenuItem>
            <MenuItem value="POST"><Typography sx={{fontSize:"12px"}}>POST</Typography></MenuItem>
            <MenuItem value="PATCH"><Typography sx={{fontSize:"12px"}}>PATCH</Typography></MenuItem>
            <MenuItem value="DELETE"><Typography sx={{fontSize:"12px"}}>DELETE</Typography></MenuItem>
            </Select>
            </Box>
        
     );
}

export default RequestMethodDropDown;