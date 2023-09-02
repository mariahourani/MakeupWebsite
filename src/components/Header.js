import React from 'react';
import '../App.css';

const Header=()=> {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="Home">Home</a>
          </li>
          <li className="navbar-item">
            <a href="SkinCare">SkinCare</a>
          </li>
          <li className="navbar-item">
            <a href="Face">Face</a>
          </li>
          <li className="navbar-item">
            <a href="Eyes">Eyes</a>
          </li>
          <li className="navbar-item">
            <a href="Lips">Lips</a>
          </li>
          <li className="navbar-item">
            <a href="Nails">Nails</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header
