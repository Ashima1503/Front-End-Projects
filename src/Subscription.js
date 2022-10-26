import React from 'react'
import './Subscription.css'
export default function Subscription() {
  return (
    <>
    <section className='body'>
      <h1 align="center">Select Your Package</h1>
    <div className="row">
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Default</h5>
              <p className="card-text">0 content information view.</p>
              <p className="card-text">Free</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Silver</h5>
              <p className="card-text">5 content information view.</p>
              <p className="card-text">500 RS</p>
              <button className='btn1' onClick={()=>{
                  window.location.href="./Gateway"
                  localStorage.setItem("profiles_to_show",5);
                  localStorage.setItem("profiles_to_show2",5);
                }}>ADD</button>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Gold</h5>
                <p className="card-text">10 content information view.</p>
                <p className="card-text">1000 RS</p>
                <button className='btn1' onClick={()=>{
                  window.location.href="./Gateway"
                  localStorage.setItem("profiles_to_show",10);
                  localStorage.setItem("profiles_to_show2",10);
                }}>ADD</button>
            </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Diamond</h5>
                <p className="card-text">15 content information view.</p>
                <p className="card-text">1500 RS</p>
                <button className='btn1' onClick={()=>{
                  window.location.href="./Gateway"
                  localStorage.setItem("profiles_to_show",15);
                  localStorage.setItem("profiles_to_show2",15);
                }}>ADD</button>
            </div>
            </div>
          </div>
      </div>
      </section>
    </>
  )
}
