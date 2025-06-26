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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-purple-100/20' 
        : 'bg-white/70 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Nama dengan Gradient */}
          <div className="flex items-center group">
            <div className="relative">
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Intan Sulistiya
              </h1>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></div>
            </div>
            <div className="ml-3 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="relative group text-slate-700 hover:text-purple-600 font-medium transition-colors duration-300"
            >
              <span>Beranda</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a
              href="#about"
              className="relative group text-slate-700 hover:text-purple-600 font-medium transition-colors duration-300"
            >
              <span>Tentang</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a
              href="#portfolio"
              className="relative group text-slate-700 hover:text-purple-600 font-medium transition-colors duration-300"
            >
              <span>Portfolio</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            {/* CTA Button */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Kontak</span>
              <svg className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative group p-2 text-slate-700 hover:text-purple-600 focus:outline-none transition-colors duration-300"
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
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-md rounded-xl mx-2 mb-4 border border-purple-100/20 shadow-lg">
            <a
              href="#home"
              className="block px-4 py-3 text-slate-700 hover:text-purple-600 hover:bg-purple-50/50 font-medium transition-all duration-300 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </a>
            <a
              href="#about"
              className="block px-4 py-3 text-slate-700 hover:text-purple-600 hover:bg-purple-50/50 font-medium transition-all duration-300 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang
            </a>
            <a
              href="#portfolio"
              className="block px-4 py-3 text-slate-700 hover:text-purple-600 hover:bg-purple-50/50 font-medium transition-all duration-300 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="block mx-2 mt-3 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg text-center transition-all duration-300 hover:shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak Saya
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}