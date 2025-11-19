"use client";
import React, { useEffect, useRef, useState } from "react";
import ScrollFloat from './ScrollFloat';


export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="w-full py-1 px-2 bg-[#0a0a0a] relative overflow-hidden"
    >
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
          <ScrollFloat
            scrollContainerRef={scrollContainerRef}
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
          >
            Hubungi Saya
          </ScrollFloat>
          </h2>
          
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto mb-6 leading-relaxed">
            Mari berdiskusi tentang proyek Anda. Saya siap membantu mewujudkan ide-ide kreatif Anda menjadi kenyataan!
          </p>
          
          <div className="w-20 h-1 bg-[#800000] rounded-full mx-auto"></div>
        </div>

        {/* Enhanced Contact Content */}
        <div className={`max-w-4xl mx-auto transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-[#1a1a1a] rounded-3xl p-6 md:p-10 border border-[#800000]/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#800000]">
                Mari Berkolaborasi
              </h3>
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
                Saya selalu terbuka untuk proyek-proyek menarik dan kolaborasi baru. 
                Jangan ragu untuk menghubungi saya untuk membicarakan ide atau pertanyaan Anda.
              </p>
            </div>

            {/* Enhanced Contact Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="text-center group transform hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 md:w-18 md:h-18 bg-[#800000]/20 border border-[#800000]/30 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-5 shadow-xl group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm md:text-base">Email</h4>
                <a 
                  href="mailto:intansulistiyaja@gmail.com" 
                  className="text-[#800000] hover:text-[#A52A2A] transition-colors text-sm md:text-base"
                >
                  intansulistiyaja@gmail.com
                </a>
              </div>

              <div className="text-center group transform hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 md:w-18 md:h-18 bg-[#800000]/20 border border-[#800000]/30 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-5 shadow-xl group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm md:text-base">Lokasi</h4>
                <p className="text-white/70 text-sm md:text-base">Makassar, Indonesia</p>
              </div>

              <div className="text-center group transform hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 md:w-18 md:h-18 bg-[#800000]/20 border border-[#800000]/30 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-5 shadow-xl group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm md:text-base">WhatsApp</h4>
                <a 
                  href="https://wa.me/6281352556195" 
                  className="text-[#800000] hover:text-[#A52A2A] transition-colors text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +62 813-5255-6195
                </a>
              </div>
            </div>

            {/* Enhanced Social Media */}
            <div className="text-center">
              <h4 className="font-bold text-xl md:text-2xl text-[#800000] mb-6 md:mb-8">Ikuti Saya</h4>
              <div className="flex justify-center gap-4 md:gap-6">
                <a
                  href="https://www.tiktok.com/@intannsulis?_t=ZS-8xWyYOijh28&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-16 h-16 bg-[#1a1a1a] border border-[#800000]/30 rounded-2xl flex items-center justify-center hover:border-[#800000]/60 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-110"
                  title="TikTok"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#800000] group-hover:text-[#A52A2A] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/Thv.sulis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-16 h-16 bg-[#1a1a1a] border border-[#800000]/30 rounded-2xl flex items-center justify-center hover:border-[#800000]/60 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-110"
                  title="Instagram"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#800000] group-hover:text-[#A52A2A] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/intansulistiya"
                  className="group relative w-16 h-16 bg-[#1a1a1a] border border-[#800000]/30 rounded-2xl flex items-center justify-center hover:border-[#800000]/60 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-110"
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#800000] group-hover:text-[#A52A2A] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth Gradient to Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
      
      {/* Animation Styles */}
      <style jsx>{`
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </section>
  );
} 