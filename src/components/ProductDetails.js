import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import '../App.css';
import { ShopContext } from '../context/ShopContext'; // Import ShopContext

const ProductDetails = (props) => {
  const { id, productName, price, productImage } = props; // Added id prop
  const [showModal, setShowModal] = useState(true);
  const { addToCart } = useContext(ShopContext); // Access addToCart function from ShopContext

  const handleClose = () => {
    setShowModal(false);
  };

  // Function to handle adding item to cart
  const handleAddToCart = () => {
    addToCart(id); // Call addToCart function with item id
    handleClose(); // Close the modal after adding to cart
  };

  return (
    <Modal show={showModal} backdrop="dynamic" keyboard={false} onHide={handleClose} dialogClassName="custom-modal-width">
      <Modal.Header closeButton>
        <Modal.Title>{productName}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="custom-modal-body">
        <img src={productImage} alt={productName} className="img-fluid mb-3 custom-image" />
        <div className="details">
          <p>Price: ${price}</p>
          <p>In Stock</p>
          <div className="btn-group">
            <button className="btn btn-outline-secondary">-</button>
            <button className="btn btn-outline-secondary">+</button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {/* Call handleAddToCart function when "Add To Bag" button is clicked */}
        <Button variant="primary" onClick={handleAddToCart}>Add To Bag</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductDetails;
