import { Box } from "@mui/material";
import { Grid } from '@mui/material';
import { Divider } from '@mui/material';
import UrlBarContainer from "./urlbarcontainer";
import ResponseContainer from "../responsepanel/responsecontainer";
import React from 'react';

function MainRequestPanel(props) {
console.log(props)
const { requestData,
        handleRequestDataChange,
        handleRequestMethodChange,
        handleRequestBodyChange
       } = props;
   const [code, setCode] = React.useState();
   const handleSendRequestFrmMain = (props)=>{
      console.log(props);
     // const {products} = props;
      setCode(props)
   }
    return ( 
        <Grid container columns={12}  >
           <Grid xs={6}>
           <UrlBarContainer 
             handleSendRequestFrmMain = {handleSendRequestFrmMain}
             handleRequestDataChange = { handleRequestDataChange }
             handleRequestMethodChange = { handleRequestMethodChange }
             handleRequestBodyChange = { handleRequestBodyChange }
             requestData = {requestData}
             sx={{borderRight: "8px solid blue"}}
             ></UrlBarContainer>
           </Grid>
           
           <Grid xs={6}>
           <ResponseContainer code = {code}></ResponseContainer>
           </Grid>
        </Grid>
     );
}

export default MainRequestPanel;
