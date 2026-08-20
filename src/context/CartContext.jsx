import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);
      if (existingItem) {
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (name) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== name));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  // Calculate total price (removing the ₹ symbol for math)
  const cartTotal = cartItems.reduce((total, item) => {
    const numericPrice = parseInt(item.price.replace('₹', ''), 10);
    return total + (numericPrice * item.quantity);
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isCartOpen, toggleCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};