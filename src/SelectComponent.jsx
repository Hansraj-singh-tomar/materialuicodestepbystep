// select Box or Select 
// Use Select
// use MenuItem to make dropdown
// placeholder
// use state with value
// onChange event 

import React from 'react'
import { Select,MenuItem } from '@mui/material'
import { useState } from 'react'
export const SelectComponent = () => {
    const [course,setCourse] = useState("")
    // const [course,setCourse] = useState(2)  // bydefault js show karega 
    const updateVal = (e,val) =>{
        console.log(val);  // {$$typeof: Symbol(react.element), type: {…}, key: '.2', ref: null, props: {…}, …}
        console.log(e);  // PointerEvent {isTrusted: false, target: {…}, pointerId: 1, width: 1, height: 1, …}
        console.log(e.target.value); // 2
        setCourse(e.target.value)
    }
  return (
    <div>
        <h1>Select</h1>
        <Select value={course} displayEmpty onChange={updateVal}>  
            <MenuItem value=''>Select Course</MenuItem>
            <MenuItem value={1}>Node</MenuItem>
            <MenuItem value={2}>Js</MenuItem>
            <MenuItem value={3}>React</MenuItem>
        </Select>
    </div>
  )
}

// displayEmpty means jo value display ho rhi hai vo nhi dikhegi refresh par 