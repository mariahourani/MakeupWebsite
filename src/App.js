import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopContextProvider from './context/ShopContext'; // Correct import
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return (
    <ShopContextProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  </ShopContextProvider>
  );
};

export default App;
