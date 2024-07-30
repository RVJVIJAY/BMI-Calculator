import { useState } from 'react'

import './App.css'

function App() {
  const [height,setHeight]=useState("")
  const [Weight,setWeight]=useState("")
 const [error,setError]=useState("")
 const [bmival,setBmival]=useState("")
 const [bmistatus,setBmistatus]=useState("")
const getbmi=()=>{
  if(height && Weight){
    const heighttometer= height /100;
    const bmi = (Weight) / (heighttometer* heighttometer)
    console.log(bmi)
    setBmival(bmi.toFixed(2))
    if(bmival<18.5){
      setBmistatus("UnderWeight")
    }
    else if(bmival>=18.5 && bmival <24.9){
      setBmistatus("NormalWeight")
    }
    else if(bmival >= 25 && bmival <29.9){
      setBmistatus("OverWeight")
    }
    else{
      setBmistatus("Obese")
    }
    setError("")
    console.log(bmi)
    console.log(heighttometer)
  }else{
    setError("Plese Enter the valid numberic value")
  }
}

function cleardata(){
  setBmistatus("")
  setHeight("")
  setBmival("")
  setError("")
  setWeight("")
}
  return (
    <>
      <div className='container'>
        <div className='imgg'></div>
        <div className="data">
          <h1>BMI CALCULATOR</h1>
          <p className='err'>{error}</p>
          <div className="input-container">
            <label htmlFor='inp'>Height</label>
            <input type='text' id='inp' value={height} onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div className="input-container">
            <label htmlFor='inp1'>Weight</label>
            <input type='text' id='inp1' value={Weight} onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <div className='btngrp'>
            <div className='get'>
              <button onClick={getbmi}>Calculate BMI</button>
            </div>
            <div className='clear'>
              <button onClick={cleardata}>Clear</button>
            </div>
          </div>
          {
            bmival && bmistatus && 
          <div className='result'>
        <p>Your BMI IS : <b>{bmival}</b></p>
        <p>Status : <b>{bmistatus}</b></p>
        </div>
}
        </div>
       
      </div>
    </>
  )
}

export default App
