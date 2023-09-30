import React, { useContext } from 'react';
import products from '../components/Productsdb';
import CartItem from '../components/CartItem'; // Updated import
import { ShopContext } from '../context/ShopContext';
import ShopContextProvider from '../context/ShopContext';

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <ShopContextProvider>
      <div className='cart'>
        <div>
          <button className="cart" style={{ color: '#fff' }} onClick={console.log(cartItems)}>Click </button>
          <h1>oh hi</h1>
        </div>
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
    </ShopContextProvider>
  );
}

export default Cart;
