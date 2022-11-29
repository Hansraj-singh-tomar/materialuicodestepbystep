// use of slider
// import slider
// color of slider
// default value
// maxValue
// show marks
// show label
// onChange event on Slider
// vertical slider
// slider bydefault 0 se 100 tak value maan kar chalta hai 


import React from 'react'
import {Slider} from '@mui/material'
export const SliderComponent = () => {
  const mark=[
    {
        value:0,
        label:'start'
    },
    {
        value:100,
        label:'middle'
    },
    {
        value:200,
        label:'stop'
    },
    {
        value:55,
        label:'custum 55'
    },
    
  ]
  const getValue = (e,value) => {
    console.log(value); //  10,40 jaise jaise slide karunga vaise vaise mujhe value milegi console me 
  }
    return (
    <div>
        <h1>Slider</h1>
        <div style={{width:300, height:300,margin:40}}>
            <Slider
                color='secondary'
                defaultValue={30}
                valueLabelDisplay="auto" // slide karne par value show karega ki kon se number par hai
                max={200} 
                step={20} // 20-20 ke alter par badega
                marks={mark} // slider me start,middle,stop likhne ke liye
                onChange={getValue}
                orientation="vertical" // vertical slider ke liye  // isme mujhe iss div ki height bhi dena padegi
            />
        </div>
    </div>
  )
}


// code for range slider
// import React, {useState} from 'react'
// import {Slider} from '@mui/material'
// export const SliderComponent = () => {
//   const [val,setVal] = useState([40,100])
//   const updateVal = (e,item) => {
//     setVal(item)
//   }
//   return (
//     <div>
//         <h1>Slider</h1>
//         <div style={{width:300, height:300,margin:40}}>
//             <Slider
//                 value={val}
//                 max={200}
//                 // move karvane ke liye mujhe onChange function ke upar setState change karvana padega
//                 onChange={updateVal}
//             />
//         </div>
//     </div>
//   )
// }

