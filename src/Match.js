import React, { useState } from 'react'
import './Match.css'
import background from './Images/match2.png'
export default function Match() {
  const [gender,setGender]=useState("male")
  

  return (
    <>
        <header className="page-header header container-fluid"  style={{backgroundImage:`url(${background})`}}>
        <div className="overlay"></div>
        <div className="login1">
            <div className="container3">
                <h1 className='login'>Search your Partner!</h1>
                <h6 className='login'>(Take subscription, Ignore if already taken)</h6>
                <label htmlFor="fnme"><b>I am looking for</b></label><br/>
                <select onChange={(e)=>setGender(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                </select>
                <br/>
                <label htmlFor="password"><b>Age</b></label>
                <br/>
                <select>
                <option>20-30</option>
                </select>
                <br/>
                <label htmlFor="password"><b>Religion</b></label>
                <br/>
                <select>
                <option>Hinduism</option>
                <option>Jainism</option>
                <option>Sikhisim</option>
                <option>Islam</option>
                </select>
                <br/>
                <br/>
                <br/>
                <button type="submit" className="btn-outline-light" onClick={()=>{
                  if (gender==="female") 
                  window.location.href="./Girlsprofile"
                  else
                  window.location.href="./Boysprofile"
                }}>Search</button>
            </div>
            </div>
            </header>
    </>
  )
}