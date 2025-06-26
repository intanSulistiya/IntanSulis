import React, { useEffect, useState } from "react";

export default function HeroSection() {
  // Typing effect state
  const fullText = "Web developer yang percaya detail kecil bisa membuat website jadi luar biasa.";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, current + 1));
      current++;
      if (current === fullText.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Optimized Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-100/30 via-transparent to-blue-100/30"></div>
        
        {/* Reduced Floating Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-lg opacity-60"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-md opacity-60"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-br from-pink-200/40 to-blue-200/40 rounded-full blur-md opacity-60"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-lg opacity-60"></div>
        
        {/* Simplified large screen elements */}
        <div className="hidden lg:block absolute top-1/4 left-1/3 w-12 h-12 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-md opacity-60"></div>
        <div className="hidden lg:block absolute bottom-1/3 right-1/4 w-8 h-8 bg-gradient-to-br from-pink-200/30 to-blue-200/30 rounded-full blur-sm opacity-60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Elegant Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200/50 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 shadow-sm">
          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ✨ Laravel Developer
          </span>
        </div>

        {/* Main Heading with Animated Gradient Text */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="animated-gradient bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-[length:200%_200%] bg-clip-text text-transparent inline-block">
            Intan Sulistiya
          </span>
        </h1>

        {/* Typing Effect Subtitle - Fixed Height, Separate Div */}
        <div className="mb-8 sm:mb-12 min-h-[56px] flex items-center justify-center">
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            <span className="font-medium text-purple-700">
              {typedText}
              <span className="inline-block w-2 h-5 align-middle bg-purple-400 ml-1 animate-blink rounded-sm" style={{verticalAlign:'-0.1em'}}></span>
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16">
          <a
            href="#contact"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>Mari Berkolaborasi</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          
          <a
            href="#portfolio"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm text-purple-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold border border-purple-200/50 hover:bg-white hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>Lihat Portfolio</span>
          </a>
        </div>

        {/* Social Media - Ikuti style ContactSection */}
        <div className="flex justify-center gap-4 md:gap-6 mt-4">
          {/* Instagram */}
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group w-12 h-12 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-200 hover:to-blue-200 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            <svg className="w-6 h-6 text-pink-600 group-hover:text-pink-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          {/* GitHub */}
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="group w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-200 hover:to-purple-200 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          {/* TikTok */}
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="group w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-200 hover:to-pink-200 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            <svg className="w-6 h-6 text-purple-600 group-hover:text-purple-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      
      {/* Simplified Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mt-2"></div>
        </div>
      </div>
      {/* Animated Gradient CSS & Typing Cursor */}
      <style jsx>{`
        .animated-gradient {
          animation: gradient-move 3s ease-in-out infinite;
          background-size: 200% 200%;
        }
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          to {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}