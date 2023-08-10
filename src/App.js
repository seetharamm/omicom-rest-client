import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import PermanentDrawerLeft from './drawer'
import Appbar from './layout/Appbar'
import UrlBarContainer from './requestpanel/urlbarcontainer';
import MainRequestPanel from './requestpanel/mainrequestpanel';
import Dashboard from './layout/dashboard';
//import CustomizedAccordions from './accordians/accordianpanel';
import FolderDropdown from './accordians/folderdropdown';
import CustomizedAccordions from './accord'
import Test from './test';


export default function App() {
  

  return (
    <div>
      <Dashboard/>

    </div>
    

  );
}
