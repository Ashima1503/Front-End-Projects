import React ,{useState}from 'react'
import './Register.css'
import background from './Images/p3.jpg'
import c5 from './Images/c5.jpg'
import c6 from './Images/c6.jpg'
import c3 from './Images/c3.jpg'
import './Cards.css';
import './Footer.css';
export default function Register(){
  
  const [fname, setName] = useState('');
  const [place, setPlace] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [religion, setReligion] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const [name2, setName2] = useState('');
  const [email2, setEmail2] = useState('');
  const [mobno, setMobno] = useState('');
  const [rev, setRev] = useState('');
    
  function SubmitButton5(){
    if (fname && place && age && gender && religion && email && pwd){
      return (<button className="btn-outline-light" onClick={()=>{
        window.location.href="./Login"
      }}>Register </button>)
    } else {
      return (<button className="btn-outline-light" onClick={()=>alert("please enter your details")} >Register </button>)
    };
  };
  function SubmitButton6(){
    if (name2 && email2 && mobno && rev){
      return (<button onClick={() => alert("Submitted Successfully")}>Send</button>)
    } else {
      return (<button onClick={()=>alert("please enter the details")} >Send </button>)
    };
  };
  return (
    <>
      <header className="page-header header container-fluid"  style={{backgroundImage:`url(${background})`}}>
        <div className="overlay"></div>
        <div className="login">
            <div className="container1">
                <h1 className='register'>Register</h1>
                <label htmlFor="fnme"><b>Name</b></label><br/>
                <input type="text" placeholder="Enter Name" name="fnme" value={fname} onChange={e=>setName(e.target.value)} required/>
                <br/>
                <label htmlFor="place"><b>Place</b></label>
                <br/>
                <input type="text" placeholder="Enter Place" name="place"  value={place} onChange={e=>setPlace(e.target.value)} required/>
                <br/>
                <label htmlFor="age"><b>Age</b></label>
                <br/>
                <input type="number" placeholder="Enter Your age" name="age"  value={age} onChange={e=>setAge(e.target.value)} required/>
                <br/>
                <label htmlFor="Gender"><b>Gender</b></label><br/>
                <input type="text" placeholder="Enter Your Gender" name="Gender"  value={gender} onChange={e=>setGender(e.target.value)} required/>
                <br/>
                <label htmlFor="religion"><b>Religion</b></label>
                <br/>
                <input type="text" placeholder="Enter Religion" name="religion"  value={religion} onChange={e=>setReligion(e.target.value)} required/>
                <br/>
                <label htmlFor="eml"><b>Email</b></label>
                <br/>
                <input type="email" placeholder="Enter Your email" name="email"  value={email} onChange={e=>setEmail(e.target.value)} required/>
                <br/>
                <label htmlFor="password"><b>Password</b></label>
                <br/>
                <input type="password" placeholder="Enter Your password" name="password"  value={pwd} onChange={e=>setPwd(e.target.value)} required/>
                <br/>
                <br/>
                <SubmitButton5/>
                {/* <button className="btn-outline-light" onClick={()=>{
                  window.location.href="./Login"
                }}>Register</button> */}
                {/* <br/>
                <br/> */}
                <p>Already a member?<href onClick={()=>{
                  window.location.href="./Login"
                }}>Login</href></p>
               
            </div>
            </div>
            </header>
            <div className='meet'>
            <img src={require ('./Images/5.png')} alt=""/>
            </div>
            <h1 align="center" className='p4'>Success Stories</h1>
    <div className="card-deck">
  <div className="card">
    <img src={c5} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Ruchika & Himanshu</h5>
      <p className="card-text">We shared interest and accepted. I am maharastrian and my husband is Punjabi still we liked each other and got married. Thanks to ShubhVivaah.com because of which I got my life partner.
</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">"ShubhVivaah.com Team congratulates Ruchika & Himanshu. We wish you both a happy future."</small>
    </div>
  </div>
  <div className="card">
    <img src={c6} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Manya & Manujay</h5>
      <p className="card-text">We matched on ShubhVivaah and met in person, we instantly clicked and liked each other. We arranged a meeting with our Parents after their approval and blessings we agreed to tie the knot.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">"ShubhVivaah.com Team congratulates Manya & Manujay We wish you both a happy future."</small>
    </div>
  </div>
  <div className="card">
    <img src={c3} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Akanksha & Vikram</h5>
      <p className="card-text">We were recommended by a family friend and got matched on ShubhVivaah.com. When we talked, and our vibes matched. We decided to meet and then after spending time together we finally decided to be together for a lifetime. I am thankful to ShubhVivaah.com for helping me find the right one.
</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">"ShubhVivaah.com Team congratulates Akanksha & Vikram We wish you both a happy future."</small>
    </div>
  </div>
</div>
<section className="contact" id="contact">
     <div className="container">
        <div className="content">
            <div className="box form wow slideInLeft">
               <div>
                  <input type="text" placeholder="Enter Your Name" name="name2" value={name2} onChange={e=>setName2(e.target.value)} required/>
                  <input type="email" placeholder="Enter Your Email" name="email2"  value={email2} onChange={e=>setEmail2(e.target.value)} required/>
                  <input type="number" placeholder="Enter Your Mobile Number" name="mobno"  value={mobno} onChange={e=>setMobno(e.target.value)} required/>
                  <textarea placeholder="Enter Your Reviews" name="rev"  value={rev} onChange={e=>setRev(e.target.value)} required></textarea>
                  <SubmitButton6/>
                  
               </div>
            </div>
            <div className="box text wow slideInRight">
                 <h2>Stay connected with ShubhVivaah</h2>
                  <div className="info">
                      <ul>
                          <li><span className="fa fa-map-marker"></span> Plot No.222,St. no.2,Chandar Nagar, New Delhi.</li>
                          <li><span className="fa fa-phone"></span> 91 99XXXXXXXX</li>
                          <li><span className="fa fa-envelope"></span> ShubhVivaah@gamil.com</li>
                      </ul>
                  </div>
                  <div className="social">
                       <a href=""><span class="fa fa-facebook"></span></a>
                       <a href=""><span class="fa fa-linkedin"></span></a>
                       <a href=""><span class="fa fa-skype"></span></a>
                       <a href=""><span class="fa fa-youtube-play"></span></a>
                  </div>


            </div>
        </div>
     </div>
  </section>
      </>
    
  )
}