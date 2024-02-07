import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';
import ProductDetails from './ProductDetails';

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  const [showProductDetails,setShowProductDetails]=useState(false)
  const handleClick = () => {
    setShowProductDetails(true);
  };

  return (
    <div className='product' onClick={handleClick}>
      <img className='product-image' src={productImage} alt={productName} />
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p className='product-price'>${price}</p>
      </div>
      <FaRegHeart className='icons' />
      <HiOutlineShoppingCart onClick={() => addToCart(id)} className='icons' />

      {showProductDetails &&(
        <ProductDetails
          id={id}
          productName ={productName}
          price={price}
          productImage={productImage}        />
      )}
    
    
    </div>
  );
};

export default Product;
