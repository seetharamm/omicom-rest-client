import React from 'react'
function Test() {
    let [over,setOver]=React.useState(false);

    let buttonstyle={
     backgroundColor:''
   }
 
   if(over){
     buttonstyle.backgroundColor="green";
   }
   else{
     buttonstyle.backgroundColor='';
   }
 
   return (
     <div className="App"
     onMouseOver={()=>setOver(true)} 
     onMouseOut={()=>setOver(false)}>
       <button style={buttonstyle}
      
       >Hover over me!</button>
     </div>
   );
 }
export default Test 