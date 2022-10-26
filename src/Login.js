import React ,{useState}from 'react'
import './Login.css'
import background from './Images/1.jpg'
export default function Login() {

  const [fname, setName] = useState('');
  const [pwd, setPwd] = useState('');
    
  function SubmitButton(){
    if (fname && pwd){
      return (<button className="btn-outline-light" onClick={()=>{
        window.location.href="./Match"
      }}>Login </button>)
    } else {
      return (<button className="btn-outline-light" onClick={() => alert("Please Enter Details")}>Login </button>)
    };
  };
  return (
    <>
        <header className="page-header header container-fluid"  style={{backgroundImage:`url(${background})`}}>
        <div className="overlay"></div>
        <div className="login">
            <div className="container2">
                <h1 className='login'>Login</h1>
                <label htmlFor="fnme"><b>Name</b></label><br/>
                <input type="text" placeholder="Enter Name" name="fnme" value={fname} onChange={ e => setName(e.target.value)} required/>
                <br/>
                <label htmlFor="password"><b>Password</b></label>
                <br/>
                <input type="password" placeholder="Enter Your password" name="password" value={pwd} onChange={ e => setPwd(e.target.value)} required/>
                <br/>
                <br/>
                <SubmitButton/>
                {/* <button type="submit" className="btn-outline-light" onClick={()=>{
                  window.location.href="./Match"
                }}>Login</button> */}
            </div>
            </div>
            </header>
    </>
  )
}
