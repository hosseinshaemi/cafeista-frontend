import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <ul className="navbar__links">
        <li><a href="#">Home</a></li>
        <li className="dropdown">
          <a href="#">Products</a>
          <div className="dropdown__menu">
            <a href="#">Product 1</a>
            <a href="#">Product 2</a>
            <a href="#">Product 3</a>
          </div>
        </li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;