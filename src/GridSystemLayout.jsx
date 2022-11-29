// The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.
// Column widths are integer values between 1 and 12
// For example, xs={12} sizes a component to occupy the whole viewport width regardless of its size.
// ek grid ya ek block ke andar 12 block hote hai  xs=12

// xs - for mobile 
// sm - tablet,big screen
// md - for small moniter
// lg - for big screen size - lg 1280 tak kam karta hai screen isse choti hogi tab grid chota ho jayega 

import React from 'react'
import {Grid} from '@mui/material'
export const GridSystemLayout = () => {
  return (
    <Grid item xs={12} container spacing={4}>
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'red'}}>Block 1</h1></Grid>
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'red'}}>Block 1</h1></Grid>
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'red'}}>Block 1</h1></Grid>
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'red'}}>Block 1</h1></Grid>
    </Grid>
  )
}
