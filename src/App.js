import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import NewItems from './components/NewItems';
import foundation from './Assets/foundation.jpg';
import mascara from './Assets/mascara.jpg';
import {ProductList} from './components/ProductList';
import ShopContext from './context/ShopContext';

const App=()=> {
  const handleSearch = (searchQuery) => {
    // Perform search logic here
    console.log('Searching for:', searchQuery);
  };
  const slideshowImages = [
    foundation,
    mascara,
  ];
  return (
    <div className="App">
      <ShopContext>
      <SearchBar onSearch={handleSearch} />
      <Header/>
      <NewItems props={slideshowImages}/>
      <ProductList/>
      </ShopContext>

    
    </div>
  );
}


export default App;
/*
import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => (
  <div className="product-item">
    <h3>{product.name}</h3>
    <p>${product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
);

const Cart = ({ cartItems }) => (
  <div className="cart">
    <h2>Shopping Cart</h2>
    <ul>
      {cartItems.map(item => (
        <li key={item.id}>
          {item.name} - ${item.price} x {item.quantity}
        </li>
      ))}
    </ul>
  </div>
);

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      setCartItems(prevCartItems =>
        prevCartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems(prevCartItems => [
        ...prevCartItems,
        { ...product, quantity: 1 }
      ]);
    }
  };

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    // Add more products
  ];

  return (
    <div className="app">
      <div className="product-list">
        {products.map(product => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;*/
