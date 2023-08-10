import { TextareaAutosize, Typography } from "@mui/material";
import { Box , TextField, FormControl} from '@mui/material'
import React from 'react';


function UrlBar(props) {
    const {requestData, handleRequestDataChange} = props;
    const { url } = requestData;
    const [urlBar, setUrlBar] = React.useState('');
    const handleChange = (event)=>
    {
        handleRequestDataChange({url : event.target.value});
    }

    return (
       <Box sx={{marginLeft:"12px"}}>
            <TextField
                aria-label="empty textarea"
                //placeholder=<Typography>Enter Url here</Typography>
                onChange={handleChange}
                value = {url}
                sx={{
                    '.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' },
                    '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': { padding:'2px'},
                   
                     height: 32,
                     padding: '0px',
                     width: '100%',
                     marginTop:"5px",
                     marginLeft:"5px"
                    }}
                
            />
            </Box>
           
        


    );
}

export default UrlBar;