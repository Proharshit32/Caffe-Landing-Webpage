# Brew Haven Cafe ☕

A modern, responsive, and fully functional Single Page Application (SPA) built for a boutique cafe. This project demonstrates modern web development practices including client-side routing, global state management, and fluid UI animations.

## 🚀 Features

*   **Seamless Navigation:** Lightning-fast page transitions without browser reloads using React Router.
*   **Functional Shopping Cart:** Global cart state managed via React Context API, complete with a slide-out drawer, real-time item counting, and total price calculation.
*   **Fluid Animations:** Premium scroll and hover animations powered by Framer Motion.
*   **Fully Responsive:** A mobile-first design built with Tailwind CSS that looks perfect on phones, tablets, and desktop monitors.
*   **Modern Build Tooling:** Scaffolded and bundled using Vite for instantaneous server starts and fast hot-module replacement (HMR).

## 🛠️ Tech Stack

*   **Framework:** React 18
*   **Styling:** Tailwind CSS v4
*   **Routing:** React Router v6
*   **Animations:** Framer Motion
*   **Build Tool:** Vite

## 📁 Project Structure

```text
cafe-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Card.jsx          # Reusable menu item component
│   │   └── CartDrawer.jsx    # Slide-out shopping cart UI
│   ├── context/
│   │   └── CartContext.jsx   # Global state for cart functionality
│   ├── pages/
│   │   ├── Home.jsx          # Landing page with hero & featured items
│   │   ├── Menu.jsx          # Full menu grid
│   │   └── About.jsx         # Cafe history and values
│   ├── App.jsx               # Main layout and route definitions
│   ├── index.css             # Tailwind imports
│   └── main.jsx              # React entry point
├── package.json
└── vite.config.js
