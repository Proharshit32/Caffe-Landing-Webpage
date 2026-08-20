import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../components/card.jsx';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-24 py-16">
        
        {/* Animated Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-10 md:mt-0"
        >
          <h2 className="text-5xl lg:text-7xl font-extrabold leading-tight text-amber-950 mb-6">
            Artisanal Coffee, <br /> Brewed Daily.
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            Experience the rich, bold flavors of our ethically sourced beans. Your perfect morning starts right here.
          </p>
          <div className="flex gap-4">
            <Link to="/menu" className="bg-amber-800 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-amber-900 shadow-lg transition">
              View Menu
            </Link>
            <button className="border-2 border-amber-800 text-amber-800 px-8 py-3 rounded-full font-bold text-lg hover:bg-amber-100 transition">
              Find Us
            </button>
          </div>
        </motion.div>

        {/* Animated Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="w-72 h-72 lg:w-96 lg:h-96 bg-amber-200 rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
             <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop" alt="Pouring Coffee" className="object-cover w-full h-full" />
          </div>
        </motion.div>
      </header>

      <hr className="border-amber-200 my-8 mx-6 lg:px-24" />
      
      {/* Featured Menu Section */}
      <section className="px-6 lg:px-24 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-amber-950 mb-4">Featured Favorites</h2>
          <p className="text-gray-600">A small taste of what we offer.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card 
            name="Cappuccino" 
            price="₹180" 
            image="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop" 
          />
          <Card 
            name="Latte" 
            price="₹200" 
            image="https://images.unsplash.com/photo-1561882468-9110e03e0f78?q=80&w=600&auto=format&fit=crop" 
          />
          <Card 
            name="Espresso" 
            price="₹140" 
            image="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=600&auto=format&fit=crop" 
          />
        </div>

        {/* Seamless View All Button */}
        <div className="flex justify-center">
          <Link to="/menu" className="border-2 border-amber-800 text-amber-800 px-10 py-3 rounded-full font-bold text-lg hover:bg-amber-800 hover:text-white transition-colors duration-300">
            View All Menu Items
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;