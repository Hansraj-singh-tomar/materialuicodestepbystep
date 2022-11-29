// import switch
// color
// size
// onChange event
// get value


import React from 'react'
import {Switch} from '@mui/material';
export const SwitchComponent = () => {
    const getValue = (e,val) => {
        console.log("function called");
        console.log(val);  // true/false
    }
  return (
    <div>
        <h1>React Material UI | Switch</h1>
        <Switch 
            color='secondary' 
            size='small'  // small // medium
            onChange={getValue}
        />
    </div>
  )
}
