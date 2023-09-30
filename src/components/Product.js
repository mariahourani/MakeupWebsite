import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import "../Styles/Products.css";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import HeroSlider, { Slide } from 'hero-slider';
import {ShopContext} from '../context/ShopContext';
import { useContext } from 'react';

const Product = (props) =>{
  const {id, productName, price, productImage} = props.data;
  
  const {addToCart,cartItems} = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  
  return (
    <div className='product'>
      <img className='product-image' src={productImage}/>
      <div className='description'>
        <p>
          <b>
            {productName}
          </b>
        </p>

        <p className='product-price'>
          ${price}
        </p>
      </div>
      <FaRegHeart  className='icons'/>
      <HiOutlineShoppingCart onClick={() => addToCart(id)} />
        {cartItemAmount > 0 && <span className='cart-item-amount'>{cartItemAmount}</span>}
    </div>
  )
}
export default Product;
