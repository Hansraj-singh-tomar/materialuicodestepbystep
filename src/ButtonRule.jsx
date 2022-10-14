// use of button 
// add color to button 
// add border to button 
// click on button 
// change color on button click 
// button size
// icon with button 


import React from 'react'

import {Button} from '@mui/material'; 
import DeleteIcon from '@mui/icons-material/Delete';

import { useState } from 'react';

const ButtonRule = () => {
    const [color,setColor] = useState("primary");
    // const [disableBtn,setDisableBtn] = useState(false);
    
    function customMe(){
        alert("hii this is calling from onclick button")
        setColor("secondary")
        // setDisableBtn("true")
    }
  
    return (
        <>
    <Button
        // color="primary"
        color={color}
        
        variant="outlined"
        
        // disabled  // ab ye button ko click karne par kuch bhi functionality work nhi karegi
        // disabled={disableBtn}
        
        // size="large" // medium,small
        
        fullWidth size="large"  // puri row ko cover karega ye 

        // onClick={() => alert("hii this is onclick function")}
        onClick={() => customMe()}

        // to add icon inside button 
        // startIcon={<DeleteIcon/>}
        endIcon={<DeleteIcon onClick={()=>alert("item deleted")}/>}
    
    >click me </Button>
    </>
  )
}
export default ButtonRule;

// variant (background) => 
// outlined - border
// contained - box with blue color
// text - simple text with blue color 




// use of ButtonGroup
// properties of ButtonGroup
// orientation of ButtonGroup
// import React from 'react';
// import {Button,ButtonGroup} from '@mui/material';


// const ButtonGroupRule = () => {
//     return(
//         <div>
//             <Button>one</Button>
//             <Button>two</Button>
//             <Button>three</Button><br/>
//             <ButtonGroup 
//             // disabled 
//             color="primary" 
//             variant="contained"
//             orientation="vertical"
//             >
//                 <Button>one</Button>
//                 <Button>two</Button>
//                 <Button>three</Button> 
//             </ButtonGroup>
//         </div>
//     )
// }    
// export default ButtonGroupRule;