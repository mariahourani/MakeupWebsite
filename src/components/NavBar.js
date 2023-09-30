import React from 'react';
import '../App.css';
import SearchBar from './SearchBar';
import { FaAddressBook, FaHome, FaSearch } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { RiUserFill } from 'react-icons/ri';
import { FaEnvelope } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar=()=> {
  return (
    <div>
     <SearchBar />
     <FaHeart className="heart" size={30}/>
     <RiUserFill className="person"size={30} />
     <Link to="/Cart">
        <FaCreditCard className="cardicon" size={30} />
     </Link>  

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

export default NavBar
/*     <Link to="\Cart">
     <FaCreditCard className="cardicon" size={30} />
     </Link>   */