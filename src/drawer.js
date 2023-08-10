import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Folder';
import MailIcon from '@mui/icons-material/Mail';
//import CustomizedAccordions from './accordians/accordianpanel';
import CustomizedAccordions from './accord';

const drawerWidth = 240;


export default function Sidebar(props) {
  
  const { populateUrlBar } = props;
  const handleRequestItem = function(node)
  {
    console.log(node);
    //populateUrlBar(node);
  }
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 ,height:"48px"}}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{marginBottom:"14px"}}>
            Omicom RS
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          height:"100%",
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
       
        <Box sx={{ overflow: 'auto',height:"100%",marginTop:"52px"}}>
          <CustomizedAccordions populateUrlBar={populateUrlBar}/>
          
        </Box>
      </Drawer>
      
    </Box>
  );
}
