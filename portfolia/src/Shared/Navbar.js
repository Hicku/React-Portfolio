import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImage from '../Utils/Images/LOGO2.png';

const Navbar = () => {
  return (
    <nav>
      <div className='titleDiv'>
        <img className='logo' src={logoImage} alt="Logo" />
      </div>

      <ul className="ul-nav">
        <li>
          <Link className="nav-buttons" to="/">About</Link>
        </li>
        <li>
          <Link className="nav-buttons" to="/work">Work</Link>
        </li>
        <li>
          <Link className="nav-buttons" to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;