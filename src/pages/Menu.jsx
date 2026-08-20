import React from 'react';
import Card from '../components/card.jsx';

const Menu = () => {
  return (
    <div className="px-6 lg:px-24 py-12 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-amber-950 mb-4">Our Full Menu</h2>
        <p className="text-gray-600">Carefully crafted drinks to brighten your day.</p>
      </div>
      
      {/* Hot Coffees */}
      <h3 className="text-2xl font-bold text-amber-900 mb-6 border-b border-amber-200 pb-2">Hot Coffees</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card name="Cappuccino" price="₹180" image="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop" />
        <Card name="Latte" price="₹200" image="https://images.unsplash.com/photo-1561882468-9110e03e0f78?q=80&w=600&auto=format&fit=crop" />
        <Card name="Espresso" price="₹140" image="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=600&auto=format&fit=crop" />
        <Card name="Americano" price="₹150" image="https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=600&auto=format&fit=crop" />
        <Card name="Macchiato" price="₹170" image="https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=600&auto=format&fit=crop" />
        <Card name="Mocha" price="₹220" image="https://images.unsplash.com/photo-1556881286-fc6915169721?w=600&auto=format&fit=crop&q=80" />
      </div>

      {/* Cold Beverages */}
      <h3 className="text-2xl font-bold text-amber-900 mb-6 border-b border-amber-200 pb-2">Cold Beverages</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card name="Iced Latte" price="₹210" image="https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop" />
        <Card name="Cold Brew" price="₹190" image="https://images.unsplash.com/photo-1719852691686-1dac6a5da92d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card name="Frappuccino" price="₹250" image="https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </div>
  );
};

export default Menu;