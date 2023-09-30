import React from 'react';
import SearchBar from './SearchBar';
import '../App.css';
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import '../App.css';

const Header = () => {
    const handleSearch = (searchQuery) => {
        // Perform search logic here
        console.log('Searching for:', searchQuery);
      };
  return (
    <div>
        <Link to="/">
        </Link>
        <SearchBar onSearch={handleSearch} />
        <NavBar/>
        <Header/>
    </div>

  )
}
export default Header;
