
import React from 'react'
import './Girlsprofile.css'
import Tanya from "./Images/g1.jpg"
import Kamiya from "./Images/g2.jpg"
import Divya from "./Images/g3.jpg"
import Anshika from "./Images/g4.jpg"
import Jashanpreet from "./Images/g5.jpg"
import Nivedita from "./Images/g6.jpg"
import Priya from "./Images/g7.jpg"
import Kavya from "./Images/g8.jpg"
import Sukhmanpreet from "./Images/g9.jpg"
import Himadri from "./Images/g10.jpg"
import Aleena from "./Images/g11.jpg"
import Tanpreet from "./Images/g12.jpg"
import Shabnam from "./Images/g13.jpg"
import Sukhmeen from "./Images/g14.jpg"
import Jasmine from "./Images/g15.jpg"
const girls=[{name:"Tanya Gupta",age:"26",image:Tanya},
{name:"Kamiya  Jain",age:"27",image:Kamiya},
{name:"Divya Singla",age:"29",image:Divya},
{name:"Anshika Kansal",age:"27",image:Anshika},
{name:"Jashanpreet Chhabra",age:"28",image:Jashanpreet},
{name:"Nivedita Bansal",age:"25",image:Nivedita},
{name:"Priya Mishra",age:"28",image:Priya},
{name:"Kavya Goyal",age:"28",image:Kavya},
{name:"Sukhmanpreet Kaur",age:"26",image:Sukhmanpreet},
{name:"Himadri Goyal",age:"28",image:Himadri},
{name:"Aleena Khan",age:"28",image:Aleena},
{name:"Tanpreet Kaur",age:"28",image:Tanpreet},
{name:"Shabnam ",age:"28",image:Shabnam},
{name:"Sukhmeen Kaur",age:"26",image:Sukhmeen},
{name:"Jasmine Kaur",age:"25",image:Jasmine}]
const profiles_to_show2= localStorage.getItem("profiles_to_show2") || 100
export default function Girlsprofile() {
  return (
    <>
    <center>
        <h1 className='profile'>Girls Profile</h1>
    </center>
      <section className="vendor" id="vendor">
<div className="box-container">
{girls.filter((e,i)=>i<profiles_to_show2).map((e)=>{
    return(<div className="box">
        <img src={e.image} alt=""/>
        <div className="info">
            <h3>{e.name}</h3>
            <p>{e.age}</p>
            <button className="button" onClick={()=>{
                  window.location.href="./GProfile"
                }}>learm more</button>
        </div>
    </div>)
}
)
}
</div>
</section>
    </>
  )
}
