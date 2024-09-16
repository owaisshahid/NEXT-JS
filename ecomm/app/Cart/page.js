'use client';  // Add this to indicate that it's a client-side component in Next.js 13+

import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/cartContext'; // Adjust the path as needed
import { Modal, Button, Form, Alert } from 'react-bootstrap';

const CartPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  // State for managing modal visibility
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
  });

  // Calculate the total number of items in the cart
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Calculate the total cost of items in the cart
  const totalCost = cartItems.reduce((acc, item) => acc + (parseFloat(item.price.replace('PKR', '').trim()) * item.quantity), 0);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., sending data to a server)
    console.log('Form Data Submitted:', formData);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      setShowCheckoutModal(false);
      clearCart(); // Clear the cart items
    }, 2000); // Show success message for 2 seconds
  };

  return (
    <div className="container">
      <h1>Your Cart</h1>
      <div className="cart-summary" style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}>Total Items: <span style={{ fontWeight: 'bold' }}>{totalItems}</span></p>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}>Total Cost: <span style={{ fontWeight: 'bold' }}>{totalCost.toFixed(2)} PKR</span></p>
      </div>

      {/* Checkout Button */}
      <div className="text-center" style={{ marginBottom: '20px' }}>
        <Button variant="primary" onClick={() => setShowCheckoutModal(true)}>
          Checkout
        </Button>
      </div>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item" style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
              <h5>{item.title}</h5>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              {item.imgSrc && (
                <img src={item.imgSrc} alt={item.title} style={{ width: '100px', display: 'block', marginTop: '10px' }} />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Checkout Modal */}
      <Modal show={showCheckoutModal} onHide={() => setShowCheckoutModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formContact">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ marginTop: '20px' }}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Success Message */}
      <Modal show={showSuccessMessage} onHide={() => setShowSuccessMessage(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order Placed Successfully!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for your purchase. Your order has been placed successfully.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSuccessMessage(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartPage;
