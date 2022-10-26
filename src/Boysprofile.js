import React from 'react'
import './Boysprofile.css'
import Sachin from "./Images/b1.jpg"
import Vivek from "./Images/b2.jpg"
import Karan from "./Images/b3.jpg"
import Sourav from "./Images/b4.jpg"
import Danish from "./Images/b5.jpg"
import Ajay from "./Images/b6.jpg"
import Gaurav from "./Images/b7.jpg"
import Manunjay from "./Images/b8.jpg"
import Keshav from "./Images/b9.jpg"
import Faisal from "./Images/b10.jpg"
import Ahmed from "./Images/b11.jpg"
import Abhay from "./Images/b12.jpg"
import Puneet from "./Images/b13.jpg"
import Paras from "./Images/b14.jpg"
import Pratik from "./Images/b15.jpg"
const boys=[{name:"Sachin Sharma",age:"29",image:Sachin},
{name:"Vivek  Goyal",age:"27",image:Vivek},
{name:"Karan Mehra",age:"29",image:Karan},
{name:"Sourav Kotia",age:"27",image:Sourav},
{name:"Danish Malhotra",age:"28",image:Danish},
{name:"Ajay Verma",age:"25",image:Ajay},
{name:"Gaurav Mishra",age:"28",image:Gaurav},
{name:"Manunjay Bansal",age:"28",image:Manunjay},
{name:"Keshav Goyal",age:"26",image:Keshav},
{name:"Faisal Ansari",age:"28",image:Faisal},
{name:"Ahmed Khan",age:"28",image:Ahmed},
{name:"Abhay Singla",age:"28",image:Abhay},
{name:"Puneet Srivastav",age:"28",image:Puneet},
{name:"Paras Chabbra",age:"26",image:Paras},
{name:"Pratik Sehgal",age:"25",image:Pratik}]
const profiles_to_show= localStorage.getItem("profiles_to_show") || 100
export default function Boysprofile() {
  return (
    <>
    <center>
        <h1 className='profile'>Boys Profile</h1>
    </center>
      <section className="vendor" id="vendor">
<div className="box-container">
{boys.filter((e,i)=>i<profiles_to_show).map((e)=>{
    return(<div className="box">
        <img src={e.image} alt=""/>
        <div className="info">
            <h3>{e.name}</h3>
            <p>{e.age}</p>
            <button className="button" onClick={()=>{
                  window.location.href="./BProfile"
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

