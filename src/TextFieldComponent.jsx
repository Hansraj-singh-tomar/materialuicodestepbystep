// use TextField
// import TextField
// add placeholder
// change look and feel
// change type of TextField
// get value of TextField with onChange event 


import React from 'react'
import {TextField} from '@mui/material'
export const TextFieldComponent = () => {
    const getValue = (e) => {
        console.log(e.target.value);
    }
  return (
    <div>
        <h1>TextField</h1>
        <TextField
            label="Enter Name"
            color='secondary'
            variant='outlined' // filled // standard // ye property look show karenge
            // type="password" // number // text
            onChange={getValue}
        />
    </div>
  )
}
