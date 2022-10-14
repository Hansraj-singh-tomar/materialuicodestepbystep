// use of check box
// import checkbox
// color of checkbox
// indeterminate property in checkbox
// onChange event on checkbox
// get value of multiple checkbox
// custom icon in checkbox

import React from 'react'

import Checkbox from "@mui/material/Checkbox"
// import {Checkbox} from "@mui/material"  // second way to import checkbox

import {Favorite} from "@mui/icons-material/Favorite"
import {FavoriteBorder} from "@mui/icons-material/FavoriteBorder"

import { useState } from 'react';

export const CheckBoxComponent = () => {
  
  const [name,setName] = useState([])
  function getValue(e){
    //   console.log(e.target.value);  // anil
      let data = name
      data.push(e.target.value)
      console.log(data);
      // console.log("function called");  // function called
  }
   return (
    <div>
        <h1>React Material UI | checkBox</h1>
        <Checkbox color="primary" value="anil" onChange={(e)=>{getValue(e)}}/>
        <Checkbox color="primary" value="sam" onChange={(e)=>{getValue(e)}}/>
        <Checkbox color="primary" value="peter" onChange={(e)=>{getValue(e)}}/>
        
        <Checkbox color="primary" value="peter" indeterminate onChange={(e)=>{getValue(e)}}/>
        <Checkbox 
        color="secondary" 
        value="peter" 
        onChange={(e)=>{getValue(e)}}
        icon={<FavoriteBorder/>}
        checkedIcon={<Favorite/>}
        />
    </div>
  )
}

// teeno checkbox ki value ek sath get karne ke liye hame useState ka use karna padega
// jis bhi checkbox ko check karunga uski value milegi
// ab me chahta hu ki kisi bhi checkbox ko check karu tab mujhe teeno ki value console me mil jaye  

