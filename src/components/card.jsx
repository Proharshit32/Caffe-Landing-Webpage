import React from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext"; // Import the custom hook

const Card = ({ name, price, image }) => {
  const { addToCart } = useCart(); // Destructure the function from context

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
          {/* Wire up the onClick event to the addToCart function */}
          <button 
            onClick={() => addToCart({ name, price })}
            className="w-full bg-amber-800 text-white py-2.5 rounded-lg font-medium hover:bg-amber-900 transition-colors"
          >
            Add to Cart
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