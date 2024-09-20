// context/cartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]); // Clear the cart items
  };

  // Function to add items to the cart
  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      // Check if the product is already in the cart
      const existingProductIndex = prevItems.findIndex(item => item.title === product.title);
      if (existingProductIndex !== -1) {
        // Update quantity if the product already exists in the cart
        const updatedItems = [...prevItems];
        updatedItems[existingProductIndex].quantity += quantity;
        return updatedItems;
      } else {
        // Add new product to the cart
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
