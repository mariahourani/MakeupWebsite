import React, { useState } from 'react';
import { FaAddressBook, FaHome, FaSearch } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { RiUserFill } from 'react-icons/ri';
import { FaEnvelope } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';
import '../App.css';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
    <input
      className="search-input"
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleInputChange}
    />
    <button className="search-button" type="submit">
      <FaSearch />
    </button>
    <FaHeart className="heart" size={30}/>
    <RiUserFill className="person"size={30} />
    <FaCreditCard className="cardicon" size={30} />
  </form>
  );
};

export default SearchBar;
