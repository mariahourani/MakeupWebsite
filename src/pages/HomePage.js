import React from 'react';
import '../App.css';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import NewItems from '../components/NewItems';
import foundation from '../Assets/foundation.jpg';
import mascara from '../Assets/mascara.jpg';
import { ProductList } from '../components/ProductList';
import ShopContext from '../context/ShopContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Cart from './Cart';

const HomePage = () => {
  const slideshowImages = [foundation, mascara];

  return (
    <div className="App">
        <NavBar/>
        <NewItems />
        <ProductList />
    </div>
  );
};

export default HomePage;
