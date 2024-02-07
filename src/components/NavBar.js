import React from 'react';
import '../App.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list text-center container">
        <li className="navbar-item">
          <Link to="/Home">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/SkinCare">SkinCare</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Face">Face</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Eyes">Eyes</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Lips">Lips</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Nails">Nails</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
