import React, { useContext } from 'react';
import '../Cart.css';
import { ShopContext } from '../context/ShopContext';

export default function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className='cartItem card'>
      <img src={productImage} className='card-img-top' alt={productName} />
      <div className='card-body'>
        <h5 className='card-title'>
          <b>{productName}</b>
        </h5>
        <p className='card-text'>
          ${price}
        </p>
        <div className='countHandler btn-group'>
          <button className='btn btn-outline-secondary' onClick={() => removeFromCart(id)}>
            -
          </button>
          <input
            className='form-control'
            type='number'
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <span className="quantity">{cartItems[id]}</span> {/* Display the quantity amount */}
          <button className='btn btn-outline-secondary' onClick={() => updateCartItemCount(cartItems[id] + 1, id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
