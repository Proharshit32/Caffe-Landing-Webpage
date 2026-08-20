import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import About from './pages/About.jsx';
import { CartProvider, useCart } from './context/CartContext.jsx'; 
import CartDrawer from './components/CartDrawer.jsx'; 

const Navbar = () => {
  const { toggleCart, cartItems } = useCart();
  
  // Calculate total number of items
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-30 bg-amber-50/95 backdrop-blur-sm border-b border-amber-200/50 flex justify-between items-center p-6 lg:px-24">
      <Link to="/" className="text-2xl font-bold text-amber-900 tracking-wider">BREW HAVEN</Link>
      <div className="hidden md:flex gap-8 font-medium">
        <Link to="/" className="hover:text-amber-600 transition">Home</Link>
        <Link to="/menu" className="hover:text-amber-600 transition">Menu</Link>
        <Link to="/about" className="hover:text-amber-600 transition">About</Link>
      </div>
      
      <button 
        onClick={toggleCart}
        className="relative bg-amber-800 text-white px-5 py-2 rounded-full font-semibold hover:bg-amber-900 transition flex items-center gap-2"
      >
        <span>Cart</span>
        {itemCount > 0 && (
          <motion.span 
            key={itemCount} 
            initial={{ scale: 0, y: -15 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
            className="bg-white text-amber-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shadow-md"
          >
            {itemCount}
          </motion.span>
        )}
      </button>
    </nav>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-amber-50 text-gray-800 font-sans flex flex-col relative overflow-hidden">
          
          <Navbar />
          <CartDrawer /> 

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>

          <footer className="text-center py-8 text-sm text-gray-500">
            <p>© 2026 Brew Haven Cafe. All rights reserved.</p>
          </footer>
          
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;