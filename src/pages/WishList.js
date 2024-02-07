import React, { useContext } from 'react';
import products from '../components/Productsdb';
import CartItem from '../components/CartItem'; 
import { ShopContext } from '../context/ShopContext';
import ShopContextProvider from '../context/ShopContext';

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
      <div className='cart'>
        <div className="cartItems">
          {products.map((product) => {
            if (cartItems[product.id] !== 0) {
              console.log(cartItems[product.id]);
              return <CartItem key={product.id} data={product} />;
            }
            return null;
          })}
        </div>
      </div>
  );
}

export default Cart;
