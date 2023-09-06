import "../styles/Navbar.css";
import React, { useEffect, useRef, useState } from 'react';
import logo from "../images/icons8-slice-50.png";

function Navbar() {
  const [hover , setHover] = useState(false);
  const [visible , setVisible] = useState(false)
  const [toggle , setToggle] = useState(false);


  function toggleHandler(){
    setToggle(prev => !prev)
  }
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo"  id="logo"/>
        </div>
        <div className="nav-container">
        <div class={toggle ? 'burger-btn change' : 'burger-btn'} onClick={toggleHandler}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
        <div className={toggle ? "nav-links" : "nav-links inactive"}>
          <div className="link1" onClick={toggleHandler}> <a href="#landingpage">Home</a></div>
          <div className="link2" onClick={toggleHandler}><a href="#services">Services</a></div>
          <div className="link3" onClick={toggleHandler}><a href="#about">About Us</a></div>
          <div className="link4" onClick={toggleHandler}><a href="#feedback">Contact</a></div>
        </div>
        </div>
    </div>
  )
}

export default Navbar
