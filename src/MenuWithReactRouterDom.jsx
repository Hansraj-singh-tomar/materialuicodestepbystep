import React, { useState } from 'react'
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'
import {Menu,MenuItem,Button} from '@mui/material'

export const MenuWithReactRouterDom = () => {
    const [anchor,setAnchor] = useState(null);
    const openMenu = (event) => {
        setAnchor(event.currentTarget)
    }
    const closeMenu = (event) => {
        setAnchor(null)
    }
  return (
    <Router>
        <h1>React Material UI | Menu</h1>
        <Button onClick={openMenu}>Menu</Button>
        <Menu 
            open={anchor} // menu ko open karvane ke liye open property ka use kar rhe hai 
            onClose={closeMenu}
        > 
            <MenuItem onClick={closeMenu}><Link to="/">Home</Link></MenuItem>
            <MenuItem onClick={closeMenu}><Link to="/about">About</Link></MenuItem>
        </Menu>
        <Route path='/'><Home/></Route>
        <Route path='/about'><About/></Route>
    </Router>
  )
}

function Home(){
    return(
        <h1>Home Page</h1>
    )
}

function About(){
    return(
        <h1>About Page</h1>
    )
}