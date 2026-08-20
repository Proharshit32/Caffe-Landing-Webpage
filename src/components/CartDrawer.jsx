import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { cartItems, isCartOpen, toggleCart, removeFromCart, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Dark Background Overlay */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={toggleCart}
            className="fixed inset-0 bg-black/40 z-40"
          />
          
          {/* Sliding Drawer */}
          <motion.div 
            initial={{ x: '100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '100%' }} 
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-amber-950">Your Cart</h2>
              <button onClick={toggleCart} className="text-gray-500 hover:text-gray-800 text-2xl font-bold">
                &times;
              </button>
            </div>

            {/* Cart Items */}
            <div className="grow overflow-y-auto p-6 flex flex-col gap-4">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center bg-amber-50 p-4 rounded-xl">
                    <div>
                      <h4 className="font-bold text-gray-800">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.price} x {item.quantity}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.name)}
                      className="text-red-500 text-sm font-semibold hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <div className="flex justify-between items-center mb-4 text-xl font-bold text-gray-800">
                <span>Total:</span>
                <span>₹{cartTotal}</span>
              </div>
              <button 
                className={`w-full py-3 rounded-full font-bold text-lg transition ${cartItems.length === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-amber-800 text-white hover:bg-amber-900 shadow-lg'}`}
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;