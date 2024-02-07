import React from 'react';
import { useState, createContext } from 'react';
import products from '../components/Productsdb';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0; //initial of each item in the db
  }
  return cart;
};
const getDefaultWishList = () =>{
  let wishlist = {};
  for(let i = 1; i < products.length + 1 ;i++){
    wishlist[i]=0;
  }
  return wishlist;
};
const ShopContextProvider = (props) => {
  const [cartItems, setcartItems] = useState(getDefaultCart());
  //cartItems is an object where each key represents an item ID and its value represents the quantity
  //of that particular product in the user's shopping cart

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
    console.log(newAmount);
    setcartItems((prev) => ({ ...prev, [itemId]: newAmount}));
  } 



  const addToWishlist = (itemId) => {
    console.log('Adding item to Wishlist . ItemId:', itemId);
    setcartItems((prev) => {
      console.log('Previous Wishlist :', prev);
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
  };
  
  const removeFromWishlist  = (itemId) => {
    if (cartItems[itemId] !== 0) {
      setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    } else {
      console.log('Item quantity is already 0.');
    }
  };
  
  const updateWishlistItemCount = (newAmount, itemId)=>{
    console.log(newAmount);
    setcartItems((prev) => ({ ...prev, [itemId]: newAmount}));
  } 
  
  const contextValue = { cartItems,addToWishlist,removeFromWishlist,updateWishlistItemCount,addToCart, removeFromCart , updateCartItemCount };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
