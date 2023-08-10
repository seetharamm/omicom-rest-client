import { Grid } from '@mui/material'
import ResponseStatusBar from './responsestatusbar';
import Box from '@mui/material/Box'
import ResponseTabPanel from './responsetabpanel';


function ResponseContainer(props) {
  console.log(props);
    return ( <Box sx={{ display: 'flex',
                        flexDirection: 'column' ,
                        

                        }}>
    <Grid 
      container 
      columns={16} 
      sx={{
           marginTop:1,
           border:'1px solid grey',
           borderLeft:'none'
           

          }}>
    <Grid xs={16} sx={{border:'none', marginRight:'36px'}}><ResponseStatusBar/></Grid>
    
    </Grid>
    <Grid container spacing= {1} columns={16} >
    <Grid xs={16} sx={{border:'none', marginTop:1}}><ResponseTabPanel code={props.code}/></Grid>
    
    </Grid>


  </Box>   );
}

export default ResponseContainer;