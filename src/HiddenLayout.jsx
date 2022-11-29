// ye ek input component nhi hai it's an a layout component
// Layout component - jo hamari display,hight,width or device ke andar kaisi layout chahiye 
// this is relate to grid system 
// Hidden was deprecated in Material UI v5.

import React from 'react'
import {Grid,Hidden} from '@mui/material'

export const HiddenLayout = () => {
  return (
    <Grid container item xs={12} spacing={2}>
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'red'}}>Block 1</h1></Grid>
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'red'}}>Block 2</h1></Grid>
      {/* <Hidden only='sm'><h1 style={{backgroundColor:'red', flex:1}}>Block 3</h1></Hidden>  */}
      <Hidden only={['sm','xs']}><h1 style={{backgroundColor:'red', flex:1}}>Block 3</h1></Hidden> 
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'red'}}>Block 4</h1></Grid>
    </Grid>
  )
}


// flex:1 - jitni bhi bachi hui space milegi vo le lega