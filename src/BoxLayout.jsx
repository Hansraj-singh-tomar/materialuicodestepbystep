// import React from 'react'
// import Box from '@mui/material/Box'

// const BoxComponent = () => {
//   return (
//     <div>
//         <Box width={500} boxShadow={1} p={3}>
//             <h1>Get started</h1>
//             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ullam voluptatum error accusamus, atque sit consectetur optio assumenda enim sapiente quaerat quasi quibusdam consequatur nostrum officia commodi fuga eum possimus!</p>
//         </Box>
//     </div>
//   )
// }

// export default BoxComponent;

// <Box></Box> overall div tag hi hai inspect karne par  
// <Box component="section"></Box> inspect me hame section dikhega div/box ki jagah as a tag

// ------------------------------------------------------------------------------------------

// BY code step by step 

// Box in Material UI
// use of Box
// Import Box and Button 
// use element with Box
// use style with Box
// use margin with Box
// use - wrapper component for most of the CSS utility needs.
// material ui says use Box instead of Div


import React from 'react'
import {Box,Button} from '@mui/material'

const BoxLayout = () => {
  return (
    <div>
        <h1>React Material UI | Layout | Box</h1>
        <Box component="span" style={{color:'red',background:"black"}} p={10} m={20} clone> 
          <Button>Hello</Button>
        </Box>
    </div>
  )
}

export default BoxLayout;

// bydefault Box ek div hai 
// ab me chahta hu ki mera jo Box hai vo mera div na hokar span ban jaaye uske liye ham likhenge <Box component="span"> 

// agar mujhe iss button ki styling change ya stying karna hai to me iss <Box> ke andar kar sakta hu uske liye mujhe likhna hai <Box clone> ab me 
// jo bhi css box ke andar add karunga vo mujhe <button> ke andar dekhne ko milegi  
