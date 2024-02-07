import React from 'react';
import SearchBar from './SearchBar';
import '../App.css';
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import '../App.css';
import { FaAddressBook, FaHome, FaSearch } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { RiUserFill } from 'react-icons/ri';
import { FaEnvelope } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';

const Header = () => {
    const handleSearch = (searchQuery) => {
        console.log('Searching for:', searchQuery);
      };
  return (
    <div>
        <Link to="/">
        </Link>
        <FaHeart className="heart" size={30}/>
        <RiUserFill className="person"size={30} />
        <Link to="/Cart">
          <FaCreditCard className="cardicon" size={30} />
        </Link> 
        <SearchBar onSearch={handleSearch} />
        <NavBar/>
    </div>

  )
}
export default Header;
