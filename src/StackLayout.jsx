import React from 'react'
import {Stack,Divider} from '@mui/material'
export const StackLayout = () => {
  return (

      <Stack 
        spacing={2}
        // spacing={{ xs: 1, sm: 2, md: 4 }} 
        // direction="row"
        direction={{ xs: 'column', sm: 'row' }}
        divider={<Divider orientation="vertical" flexItem />}
        justifyContent="center"
        alignItems="center"
        mt={2} // margin top 
        >
        <p>item 1</p>
        <p>item 2</p>
        <p>item 3</p>
      </Stack>
  
  )
}
