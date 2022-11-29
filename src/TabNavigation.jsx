// import Tabs,Tab and AppBar
// use Tabs and tab and get current value in state 
// make a tabPanel compnent and hide and show it with current tab

import React, { useState } from 'react'
import {Tab,Tabs, AppBar} from '@mui/material'
export const TabNavigation = () => {
    const [value,setValue] = useState(0)
    const handleTabs = (e,val) => {
        // console.log(val); // 0 // 1 // 2
        setValue(val);
    }
  return (
    <div>
    <AppBar position="static" color='warning'>
        <Tabs value={value} onChange={handleTabs}>
            <Tab label="Item 1"/>
            <Tab label="Item 2"/>
            <Tab label="Item 3"/>
        </Tabs>
    </AppBar>
    <TabPanel value={value} index={0}>Item One Detail</TabPanel>
    <TabPanel value={value} index={1}>Item Two Detail</TabPanel>
    <TabPanel value={value} index={2}>Item Three Detail</TabPanel>
    </div>
    )
}


function TabPanel(props){
    const {children,value,index} = props;
    return(
        <div>
        {
            value===index && (<h1>{children}</h1>)
        }
        </div>
    )
}
