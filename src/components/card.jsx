import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

const Card = ({ name, price, image }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false); // Track if the item was just added

  const handleAddToCart = () => {
    addToCart({ name, price });
    setIsAdded(true);
    
    // Change the button back to normal after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100"
    >    
      <div className="h-48 w-full bg-amber-100 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full hover:scale-110 transition-transform duration-500" 
        />
      </div>
        
      <div className="p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <span className="text-lg font-semibold text-amber-700">{price}</span>
        </div>
        
        <div className="flex flex-col gap-3 mt-2">
          {/* Dynamic Button that changes color and text */}
          <button 
            onClick={handleAddToCart}
            className={`w-full py-2.5 rounded-lg font-medium transition-all duration-300 ${
              isAdded 
                ? 'bg-green-600 text-white hover:bg-green-700 scale-95' 
                : 'bg-amber-800 text-white hover:bg-amber-900'
            }`}
          >
            {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
          </button>
          
          <button className="w-full bg-amber-50 text-amber-900 py-2.5 rounded-lg font-medium hover:bg-amber-100 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;