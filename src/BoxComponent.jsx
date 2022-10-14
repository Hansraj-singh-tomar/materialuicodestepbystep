import React from 'react'
import Box from '@mui/material/Box'

const BoxComponent = () => {
  return (
    <div>
        <Box width={500} boxShadow={1} p={3}>
            <h1>Get started</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ullam voluptatum error accusamus, atque sit consectetur optio assumenda enim sapiente quaerat quasi quibusdam consequatur nostrum officia commodi fuga eum possimus!</p>
        </Box>
    </div>
  )
}

export default BoxComponent;

// <Box></Box> overall div tag hi hai inspect karne par  
// <Box component="section"></Box> inspect me hame section dikhega div/box ki jagah as a tag