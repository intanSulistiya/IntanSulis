"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import RotatingText from './RotatingText'
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";


export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const fullText = t.hero.subtitle;
    let current = 0;
    setTypedText("");
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, current + 1));
      current++;
      if (current === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [language, t.hero.subtitle]);

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#800000]/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#800000]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center min-h-screen py-5">
          {/* Left Content Area */}
          <div className="flex flex-col justify-center space-y-5 lg:space-y-5">
            {/* Hello Badge with Animation */}
            <div className="inline-flex items-center gap-2 bg-[#800000]/10 backdrop-blur-sm border border-[#800000]/30 rounded-full px-10 py-3 w-fit shadow-lg hover:shadow-[#800000]/20 transition-all duration-300 hover:scale-105">
              <div className="w-2 h-2 bg-[#800000] rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm tracking-wide inline-flex items-baseline">
                {t.hero.hello}{' '}
                <RotatingText
                  texts={t.hero.rotatingTexts}
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  mainClassName="inline-flex items-baseline"
                  elementLevelClassName="inline-block align-baseline"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </span>
            </div>
            {/* Main Heading with Gradient Effect */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              <span className="block">Intan</span>
              <span className="block bg-gradient-to-r from-[#800000] via-[#A52A2A] to-[#800000] bg-clip-text text-transparent">
                Sulistiya
              </span>
            </h1>

            {/* Subtitle with Typing Effect */}
            <div className="min-h-[80px] flex items-center">
              <p className="text-xl sm:text-xl md:text-xl text-white leading-relaxed font-medium">
                {typedText}
                <span className="inline-block w-1 h-5 align-middle bg-[#800000] ml-2 animate-blink rounded-sm"></span>
              </p>
            </div>
            
            {/* CTA Buttons with Enhanced Design */}
            <div className="flex flex-col sm:flex-row  gap-4 mt-0.5">
              <a
                // 1. Arahkan ke file CV Anda (pastikan file ada di folder 'public')
                href="/pdf/CV-Intan-sulistiya.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 bg-[#800000] hover:bg-[#A52A2A] text-white px-8 py-2 rounded-lg font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-[#800000]/50 overflow-hidden"
              >
                <span className="relative z-10">{t.hero.downloadCV}</span>
                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-[#A52A2A] to-[#800000] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 hover:border-[#800000]/50 text-white px-8 py-2 rounded-lg font-bold text-base transition-all duration-300 transform hover:scale-105 hover:bg-white/5 backdrop-blur-sm"
              >
                <span>{t.hero.myWork}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content Area - Image with Enhanced Geometric Overlays */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Profile Image Container with Glow Effect */}
              <div className="relative z-10 group">
                <div className="absolute inset-0 bg-[#800000]/20 rounded-2xl blur-2xl group-hover:bg-[#800000]/30 transition-all duration-500"></div>
                <div className="relative w-full aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden border-2 border-[#800000]/20 group-hover:border-[#800000]/40 transition-all duration-500 shadow-2xl">
                  <Image 
                    src="/image/intan.JPG" 
                    alt="Intan Sulistiya" 
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs font-medium tracking-wider uppercase mb-1">{t.hero.scroll}</span>
          <div className="w-6 h-10 border-2 border-[#800000]/40 rounded-full flex justify-center p-2 backdrop-blur-sm bg-[#800000]/5">
            <div className="w-1.5 h-3 bg-[#800000] rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          to {
            opacity: 0;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
          }
        }
        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) translateX(-8px) rotate(-5deg);
          }
        }
        .animate-scroll-down {
          animation: scroll-down 2s ease-in-out infinite;
        }
        @keyframes scroll-down {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(8px);
            opacity: 0.5;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
