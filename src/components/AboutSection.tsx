"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ScrollFloat from "./ScrollFloat";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import Carousel from './Carousel'

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [carouselWidth, setCarouselWidth] = useState(350);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateCarouselWidth = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCarouselWidth(Math.min(width - 60, 350));
      } else if (width < 768) {
        setCarouselWidth(Math.min(width - 80, 450));
      } else if (width < 1024) {
        setCarouselWidth(Math.min(width - 100, 500));
      } else {
        setCarouselWidth(550);
      }
    };

    updateCarouselWidth();
    window.addEventListener('resize', updateCarouselWidth);
    return () => window.removeEventListener('resize', updateCarouselWidth);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full py-1 px-1 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-left mb-4">
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            <ScrollFloat
            scrollContainerRef={scrollContainerRef as React.RefObject<HTMLElement | null>}
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
          >
            {t.about.title}
          </ScrollFloat>
            </span>
          </div>

        {/* Layout 2 Kolom */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 items-start 
            transform transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }
          `}
        >
          {/* Foto Kiri */}
          <div className="flex justify-start">
            <div className="absolute inset-0 bg-[#800000]/20 rounded-2xl blur-2xl group-hover:bg-[#800000]/30 transition-all duration-500"></div>
            <div className="relative w-full aspect-square max-w-sm rounded-2xl overflow-hidden border-2 border-[#800000]/20 group-hover:border-[#800000]/40 transition-all duration-500 shadow-2xl">
              <Image
                src="/image/in.JPG"
                alt="Intan Sulistiya"
                fill
                className="object-cover "
                priority
              />
            </div>
          </div>

          {/* Teks Kanan */}
          <div className="space-y-3">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">
              Intan Sulistiya
            </h3>

            <p className="text-[#800000] font-semibold text-lg">
              {t.about.role}
            </p>

            {/* Experience Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#800000]/10 border border-[#800000]/30 rounded-lg">
              <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white font-semibold">
                <span className="text-[#800000] font-bold">3</span> {t.about.experience}
              </span>
            </div>

            <p className="text-lg text-white/80 leading-relaxed">
              {t.about.description1} <span className="font-bold text-[#800000]">{t.about.description2}</span>
              {t.about.description3}{" "}
              <span className="font-bold text-[#800000]">{t.about.description4}</span> {t.about.description5}
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              {t.about.description6}{" "}
              <span className="italic text-[#800000] font-semibold">
                {t.about.description7}
              </span>{" "}
              {t.about.description8}
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              {t.about.description9}{" "}
              <span className="font-bold text-[#800000]">
                {t.about.description10}
              </span>
            </p>

            {/* Badge Keahlian */}
            <div className="flex justify-start gap-3 pt-2">
              {[
                { label: "Laravel", short: "L" },
                { label: "JavaScript", short: "JS" },
                { label: "Bootstrap", short: "BS" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-16 h-16 bg-gradient-to-br from-[#800000]/20 to-[#A52A2A]/10 
                    border-2 border-[#800000]/30 rounded-xl flex flex-col items-center justify-center
                    hover:scale-110 hover:border-[#800000]/50 transition-all duration-300"
                >
                  <span className="text-[#800000] font-extrabold text-lg">
                    {item.short}
                  </span>
                  <span className="text-white/70 text-xs">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts & Services - Layout 2 Kolom */}
        <div className={`mt-4 transform transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Fun Facts - Kiri */}
            <div className="w-full">
              <h3 className="text-lg font-semibold text-white mb-3">{t.about.funFacts}</h3>
              <div className="w-full flex justify-center lg:justify-start">
                <Carousel
                  items={t.about.funFactsItems.map((item, index) => ({
                    id: index + 1,
                    title: item.title,
                    description: item.desc,
                    icon: <span className="text-xl">{item.icon}</span>
                  }))}
                  baseWidth={carouselWidth}
                  autoplay={true}
                  autoplayDelay={3000}
                  pauseOnHover={true}
                  loop={true}
                  round={false}
                />
              </div>
            </div>

            {/* Services - Kanan */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">{t.about.services}</h3>
              <div className="space-y-2">
                {t.about.servicesItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-[#222] to-[#1a1a1a] border-l-4 border-[#800000] rounded-r-lg p-3 hover:border-[#A52A2A] hover:shadow-lg hover:shadow-[#800000]/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="bg-[#800000]/10 rounded-lg p-2 group-hover:bg-[#800000]/20 transition-colors duration-300">
                        <div className="text-lg group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-sm mb-1 group-hover:text-[#800000] transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-white/60 text-xs leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
