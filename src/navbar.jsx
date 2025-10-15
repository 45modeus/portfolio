import React, { useState } from "react";
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#F5F5F5]/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-lg font-semibold text-[#0B3C5D]">
            Laurie's Portfolio
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-[#328CC1] hover:text-[#0B3C5D] transition font-medium"
            >Home</button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-[#328CC1] hover:text-[#0B3C5D] transition font-medium"
            >About</button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="text-[#328CC1] hover:text-[#0B3C5D] transition font-medium"
            >Skills</button>
            <Link 
              to="/contact" 
              className="text-[#328CC1] hover:text-[#0B3C5D] transition font-medium"
            >Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-[#0B3C5D]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 bg-[#D9E4F5] border-t border-[#328CC1]">
            {['home','about','skills'].map(id => (
              <button 
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left px-4 py-3 text-[#328CC1] hover:bg-[#F5F5F5] hover:text-[#0B3C5D] transition rounded"
              >{id.charAt(0).toUpperCase() + id.slice(1)}</button>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-4 py-3 text-[#328CC1] hover:bg-[#F5F5F5] hover:text-[#0B3C5D] transition rounded"
            >Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
