import React from 'react'
import Typography from '@mui/material/Typography'

const TypographyComponent = () => {
  return (
    <div>
        <Typography variant='h1'>Heading 1</Typography>
        <Typography variant='h2' color="primary" gutterBottom>Heading 2</Typography>
        <Typography variant='h3' align='center'>Heading 2</Typography>
        <Typography variant='subtitle1' align='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident sunt dignissimos ab, voluptatum nesciunt quis inventore molestiae modi aspernatur. Quia, sed omnis odit recusandae rem earum! Doloremque, consequatur in.</Typography>
        
    </div>
  )
}

export default TypographyComponent;

// <Typography variant='h1'> means h1 tag
// <Typography variant='body1'> means body tag
// <Typography variant='body2'> means body tag but thoda small size me 
// gutterButtom se hame margin mil jata hai 