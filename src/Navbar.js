import React from 'react'
import {Link}from "react-router-dom"
import './Navbar.css'
export default function login() {
  return ( 
    <>
    <nav className="navbar navbar-expand-md">
    <img src={require('./Images/logo.png')} alt="Logo" />
        <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navigation">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link"  to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="./Login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="./Subscription">Subscription</Link>
                </li>
            </ul>
        </div> 
    </nav>
    </>
    
  )
}
