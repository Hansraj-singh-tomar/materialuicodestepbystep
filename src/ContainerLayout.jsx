// The container centers your content horizontally. It's the most basic layout element.
// While containers can be nested, most layouts do not require a nested container.

import React from 'react'
import {Container} from '@mui/material'
export const ContainerLayout = () => {
  return (
    <div>
        {/* COntainer max width 1200(lg) 900(md) 600(sm) 444(xs) fixed(1200) le rha hai  */}
        <Container maxWidth="lg" style={{backgroundColor:'skyblue'}}>
            <h1>React Material UI | Layout | Container</h1>
        </Container>
        <Container maxWidth="md" style={{backgroundColor:'skyblue'}}>
            <h1>React Material UI | Layout | Container</h1>
        </Container>
        <Container maxWidth="sm" style={{backgroundColor:'skyblue'}}>
            <h1>React Material UI | Layout | Container</h1>
        </Container>
        <Container maxWidth="xs" style={{backgroundColor:'skyblue'}}>
            <h1>React Material UI | Layout | Container</h1>
        </Container>
        <Container fixed style={{backgroundColor:'skyblue'}}>
            <h1>React Material UI | Layout | Container</h1>
        </Container>
    </div>
  )
}


// If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, 
// you can set the fixed prop. The max-width matches the min-width of the current breakpoint.