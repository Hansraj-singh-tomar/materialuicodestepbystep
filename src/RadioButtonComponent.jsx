// use of radio button 
// import radio button 
// color of radio button 
// onChange event on radio button 
// use state with radio button


import React from 'react'
import { useState } from 'react'
import Radio from '@mui/material/Radio'

export const RadioButtonComponent = () => {
    const [gender,setGender] = useState("male")
    function testFunction(e){
        // alert("function called")
        setGender(e.target.value);
    }
  return (
    <div>
        <h1>hii this is code of radio button</h1>
        <div>
            <Radio color="warning" value="male" checked={gender==="male"} onChange={testFunction}/>
            <span>Male</span>
        </div>
        <div>
            <Radio value="female" checked={gender==="female"} onChange={testFunction}/> 
            <span>Female</span>
        </div>
        <div>
            <Radio value="other" checked={gender==="other"} onChange={testFunction}/> 
            <span>Other</span>
        </div>
    </div>
  )
}


