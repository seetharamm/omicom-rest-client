import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import { FormControl } from '@mui/material';
import { MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { get as Get } from '../network/axiosclient';
import { get as FetchGet, post as POST } from '../network/fetchclient'


function RequestSendDropDown(props) {
    const { handleRequestSendFrmUrl, requestData } = props;
    const [requestMethod, setRequestMethod] = useState('Send');
    let responseData;
    const handleClick = async function(event){
        
        let response ='';
        try {
            if(requestData.method == 'POST')
            {
                response = await POST(requestData);
                const data = await response;
                handleRequestSendFrmUrl(data);
              
            } else if(requestData.method == 'GET')
            {
                response = await FetchGet(requestData);
                const data = await response;
                handleRequestSendFrmUrl(data);

            }else if(requestData.method == 'PUT')
            {
                response = await FetchGet(requestData);
                const data = await response;
                handleRequestSendFrmUrl(data);

            }else if(requestData.method == 'DELETE')
            {
                response = await FetchGet(requestData);
                const data = await response;
                handleRequestSendFrmUrl(data);

            }else if(requestData.method == 'PATCH')
            {
                response = await FetchGet(requestData);
                const data = await response;
                handleRequestSendFrmUrl(data);

            }
            
        } catch (err) {
            console.error(err.stack);
        }
    }
    return (
        <Box>
            <FormControl fullWidth>
                <Button
                    variant="contained"
                    sx={{ minWidth: '76px', marginLeft: '6px',padding:"8px" }}
                    onClick={handleClick}
                ><Typography sx={{fontSize:"12px",padding:"2px"}}>Send</Typography></Button>
            </FormControl>
        </Box>

    );
}

export default RequestSendDropDown;