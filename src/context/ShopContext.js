import React from 'react';
import { useState, createContext } from 'react';
import products from '../components/Productsdb';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setcartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    console.log('Adding item to cart. ItemId:', itemId);
    setcartItems((prev) => {
      console.log('Previous cart:', prev);
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
  };
  
  const removeFromCart = (itemId) => {
    if (cartItems[itemId] !== 0) {
      setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    } else {
      console.log('Item quantity is already 0.');
    }
  };
  
  const updateCartItemCount = (newAmount, itemId)=>{
    setcartItems((prev) => ({ ...prev, [itemId]: newAmount}));
  } 

  
  const contextValue = { cartItems, addToCart, removeFromCart , updateCartItemCount };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
