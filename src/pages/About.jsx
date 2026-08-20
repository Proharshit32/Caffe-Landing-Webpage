import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      
      {/* About Hero Section */}
      <section className="px-6 lg:px-24 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-6xl font-extrabold text-amber-950 mb-6">More Than Just Coffee</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Brew Haven, we believe every cup tells a story. From the farmers who grow our beans to the baristas who craft your drink, we are dedicated to community and quality.
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="px-6 lg:px-24 py-12 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <div className="w-full h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop" 
              alt="Cafe Interior" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" 
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h3 className="text-3xl font-bold text-amber-900 mb-4">Our Story</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Founded in 2026, Brew Haven started as a humble dream to bring ethically sourced, artisanal coffee to our local neighborhood. We traveled the world to find the perfect beans, establishing direct relationships with farmers in Colombia, Ethiopia, and Brazil.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Today, we are proud to be a gathering space for dreamers, thinkers, and coffee lovers alike. Every roast is carefully monitored, and every shot is pulled with precision to ensure your morning ritual is nothing short of perfect.
          </p>
        </motion.div>
      </section>

      {/* Our Values Section */}
      <section className="px-6 lg:px-24 py-16 bg-amber-900 text-amber-50">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
          <p className="text-amber-200">What drives us every single day.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Ethical Sourcing", desc: "We pay above fair-trade prices to ensure our farmers can thrive and invest in their communities." },
            { title: "Master Craftsmanship", desc: "Our baristas undergo rigorous training to understand the science and art of the perfect brew." },
            { title: "Community First", desc: "Our spaces are designed to foster connection, creativity, and a sense of belonging." }
          ].map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-amber-800 p-8 rounded-2xl text-center"
            >
              <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
              <p className="text-amber-100/80 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;