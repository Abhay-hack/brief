import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Ensure `lucide-react` is installed or use your icon lib

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, scale: 0.9, y: -30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-11/12 md:w-3/4 mx-auto mt-6 mb-6 px-6 py-4 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 shadow-md rounded-2xl sticky"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-black">Portfolio</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-blue-900 font-medium">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-900 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2 text-blue-900 font-medium">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
