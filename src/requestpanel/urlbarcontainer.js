import { Grid } from '@mui/material'
import UrlBar from './urlbar';
import RequestMethodDropDown from './requestdropdown';
import RequestSendDropDown from './requestsenddropdown';
import Box from '@mui/material/Box'
import RequestTabPanel from './requesttabpanel';
import React from 'react'

function UrlBarContainer(props) {
  const { requestData ,
          handleRequestDataChange,
          handleRequestMethodChange,
          handleSendRequestFrmMain,
          handleRequestBodyChange
        } = props;

  
  const handleRequestSendFrmUrl = (data) => {
     handleSendRequestFrmMain(data);
    console.log("handle request send");
    console.log(data);
  }
  
  return (
    <Box sx={{ display: 'flex',
               flexDirection: 'column',
                paddingLeft: 1 ,
               
                }}>
      <Grid
        container
        columns={16}
        sx={{

          marginTop: "5px",
          border: '1px solid grey',

        }}>
        <Grid xs={1} sx={{ 
          border: 'none', 
          marginRight: '9px',
          marginLeft: "5px"
           }}>
          <RequestMethodDropDown 
            
            handleRequestDataChange = { handleRequestDataChange }
            handleRequestMethodChange = { handleRequestMethodChange }
            requestData = { requestData }
           
          /></Grid>
        <Grid xs={12}><UrlBar 
        
        handleRequestDataChange = { handleRequestDataChange }
        requestData = { requestData }
       
         /></Grid>
        <Grid xs={1}><RequestSendDropDown
          handleRequestSendFrmUrl={handleRequestSendFrmUrl}
          requestData = { requestData }

        /></Grid>
      </Grid>
      <Grid container spacing={1} columns={16} >
        <Grid xs={16} sx={{ border: 'none' }}><RequestTabPanel  
                                               handleRequestBodyChange={handleRequestBodyChange}
        /></Grid>

      </Grid>


    </Box>
  );
}

export default UrlBarContainer;