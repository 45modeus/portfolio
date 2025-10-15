import React, { useState } from "react";
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-lg font-semibold text-gray-900">
            Laurie's Portfolio
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-600 hover:text-gray-900 transition font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-600 hover:text-gray-900 transition font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-gray-600 hover:text-gray-900 transition font-medium"
            >
              Skills
            </button>
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-gray-900 transition font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 bg-white">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition"
            >
              Skills
            </button>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;