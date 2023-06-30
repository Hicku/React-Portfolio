import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../Utils/Images/LOGO2.png';

const Navbar = () => {
  return (
    <nav>
      <div className="titleDiv">
        <img className="logo" src={logoImage} alt="Logo" />
      </div>

      <ul className="ul-nav">
        <li>
          <NavLink
            exact
            to="/"
            className="nav-buttons"
            activeClassName="active-link"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/work"
            className="nav-buttons"
            activeClassName="active-link"
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="nav-buttons"
            activeClassName="active-link"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;