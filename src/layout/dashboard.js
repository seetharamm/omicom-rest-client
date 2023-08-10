
import Appbar from "./Appbar";
import MainRequestPanel from "../requestpanel/mainrequestpanel";
import PermanentDrawerLeft from "../drawer";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Sidebar from "../drawer";
import { useState } from 'react';
import TreeViewPanel from "../sidebar/treeview";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {

  const [ requestData, setRequestData ] = useState("");
  const populateUrlBar = function(props)
  {
    setRequestData(props)
    console.log(props);
  }
  const handleUrlChange = function(Data)
  { const { url } = Data;
    console.log("ddd")
    
    setRequestData({ ...requestData, url});
  }
  const handleRequestMethodChange = function(Data)
  { const { method } = Data;
    console.log("ddd")
    setRequestData({...requestData, method});
  }
  const handleRequestBodyChange = function(Data)
  {
    const { body } = Data;
    console.log("ddd")
    setRequestData({...requestData, body });
  }
  return ( 
    <Box sx={{ flexGrow: 1 }}>
        
      <Grid container  >
        
        <Grid item xs={2} >
          <Item><Sidebar populateUrlBar={populateUrlBar}/></Item>
        </Grid>
        <Grid item xs={10} sx={{marginTop:"44px"}}>
          <Item><MainRequestPanel 
                requestData={requestData} 
                handleRequestDataChange={handleUrlChange}
                handleRequestMethodChange={handleRequestMethodChange}
                handleRequestBodyChange={handleRequestBodyChange}
                /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
