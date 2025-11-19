"use client";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl border-b border-[#800000]/20' 
        : 'bg-[#0a0a0a]/90 backdrop-blur-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo*/}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 focus:outline-none hover:opacity-80 transition-all"
          >
            {/* Monogram iS */}
            <div className="flex items-end leading-none">
              <span className="text-white text-5xl font-extrabold">i</span>
              <span className="text-[#800000] text-5xl font-extrabold -ml-1">S</span>
            </div>
            {/* Nama */}
            <div className="flex flex-col leading-tight">
              <span className="text-white text-x font-semibold">Intan</span>
              <span className="text-[#800000] text-x font-semibold -mt-1">Sulistiya</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="text-white/80 hover:text-[#800000] font-medium transition-colors duration-300"
            >
              About Me
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleNavClick(e, '#portfolio')}
              className="text-white/80 hover:text-[#800000] font-medium transition-colors duration-300"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-white/80 hover:text-[#800000] font-medium transition-colors duration-300"
            >
              Contact Us
            </a>
            {/* Hire Me Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-[#800000] hover:bg-[#A52A2A] text-white px-6 py-2.5 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#800000]/50"
            >
              Hire Me!
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative group p-2 text-white hover:text-[#800000] focus:outline-none transition-colors duration-300"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-2.5' : ''
                }`}></span>
                <span className={`absolute left-0 top-2.5 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`absolute left-0 top-4 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-2.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-4 space-y-1 bg-[#1a1a1a]/95 backdrop-blur-md rounded-xl mx-2 mb-4 border border-[#800000]/20 shadow-lg">
            <a
              href="#about"
              onClick={(e) => { handleNavClick(e, '#about'); }}
              className="block px-4 py-3 text-white hover:text-[#800000] hover:bg-[#800000]/10 font-medium transition-all duration-300 rounded-lg"
            >
              About Me
            </a>
            <a
              href="#services"
              onClick={(e) => { handleNavClick(e, '#services'); }}
              className="block px-4 py-3 text-white hover:text-[#800000] hover:bg-[#800000]/10 font-medium transition-all duration-300 rounded-lg"
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={(e) => { handleNavClick(e, '#portfolio'); }}
              className="block px-4 py-3 text-white hover:text-[#800000] hover:bg-[#800000]/10 font-medium transition-all duration-300 rounded-lg"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={(e) => { handleNavClick(e, '#contact'); }}
              className="block px-4 py-3 text-white hover:text-[#800000] hover:bg-[#800000]/10 font-medium transition-all duration-300 rounded-lg"
            >
              Contact Us
            </a>
            <a
              href="#contact"
              onClick={(e) => { handleNavClick(e, '#contact'); }}
              className="block mx-2 mt-3 px-4 py-3 bg-[#800000] hover:bg-[#A52A2A] text-white font-bold rounded-lg text-center transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Hire Me!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}