import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Retrieve cart from localStorage on initial load
  const loadCartFromLocalStorage = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    return savedCart || [];
  };

  const [cart, setCart] = useState(loadCartFromLocalStorage);

  // Update localStorage whenever cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
