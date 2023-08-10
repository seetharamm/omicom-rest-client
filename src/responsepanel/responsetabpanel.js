import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BodyDropDown from '../requestpanel/bodydropdown';
import ResponseEditor from '../codemirror/responseeditor';


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography sx={{
           textAlign:"left",
           fontSize:"12px", 
           fontFamily:"sans-serif",
           backgroundColor:"black",
           background:"black"}}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ResponseTabPanel(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Response" sx={{width:"11px",fontSize:"12px"}} {...a11yProps(0)}></Tab>
          <Tab sx={{width:"11px",fontSize:"12px"}} label="Headers" {...a11yProps(1)} />
          <Tab sx={{width:"11px",fontSize:"12px"}} label="Cookies" {...a11yProps(2)} />
          <Tab sx={{width:"11px",fontSize:"12px"}} label="Logs" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ResponseEditor code={props.code}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
      
    </Box>
  );
}
