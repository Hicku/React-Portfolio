import React from 'react'
import "./Navbar.css"
import logoImage from '../Utils/Images/LOGO2.png';

const Navbar = () => {
  return (
    <>
      <nav>
          <div className='titleDiv'>
            <img className='logo' src={logoImage}></img>
          </div>
          
          <ul className="ul-nav">
            <li><a className="nav-buttons" href="#about">About</a></li>
            <li><a className="nav-buttons" href="#work">Work</a></li>
            <li><a className="nav-buttons" href="#contact">Contact</a></li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar
