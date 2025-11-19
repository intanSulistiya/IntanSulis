"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ScrollFloat from "./ScrollFloat";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showFunFacts, setShowFunFacts] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full py-1 px-1 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="max-w-9.5xl ml-0 md:ml-8 lg:ml-16 relative z-10">
        {/* Header */}
        <div className="text-left mb-4">
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            <ScrollFloat
            scrollContainerRef={scrollContainerRef}
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
          >
            About Me
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
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Teks Kanan */}
          <div className="space-y-3 md:-ml-4 lg:-ml-25">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">
              Intan Sulistiya
            </h3>

            <p className="text-[#800000] font-semibold text-lg">
              Laravel Developer
            </p>

            {/* Experience Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#800000]/10 border border-[#800000]/30 rounded-lg">
              <svg className="w-5 h-5 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white font-semibold">
                <span className="text-[#800000] font-bold">3</span> Tahun Pengalaman
              </span>
            </div>

            <p className="text-lg text-white/80 leading-relaxed">
              Halo! Saya <span className="font-bold text-[#800000]">Intan</span>,
              seorang web developer perempuan yang sangat mencintai dunia coding.
              Saya lebih fokus pada pengembangan{" "}
              <span className="font-bold text-[#800000]">frontend</span> dengan
              pendekatan bersih, rapi, dan efisien.
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              Saya selalu berusaha memberikan{" "}
              <span className="italic text-[#800000] font-semibold">
                sentuhan elegan dan feminim
              </span>{" "}
              pada setiap karya yang saya buat—baik dari UI/UX maupun kualitas
              code. Fokus saya adalah menciptakan antarmuka yang menarik, responsif, dan user-friendly.
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              Dengan pengalaman membangun berbagai project, saya siap membantu
              Anda menciptakan website yang{" "}
              <span className="font-bold text-[#800000]">
                modern, aman, dan nyaman digunakan.
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

        {/* Fun Facts */}
        <div className={`mt-6 transform transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Fun Facts Text Button */}
          <button
            onClick={() => setShowFunFacts(!showFunFacts)}
            className="inline-flex items-center gap-2 text-lg text-white hover:text-[#800000] 
              transition-colors duration-300 group"
          >
            <span className="font-semibold">Fun Facts</span>
            <svg
              className={`w-4 h-4 text-[#800000] transition-transform duration-300 ${
                showFunFacts ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Fun Facts Content */}
          <div
            className={`mt-4 space-y-3 overflow-hidden transition-all duration-500 ${
              showFunFacts ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
              {[
                {
                  icon: "🐱",
                  title: "Cat Enthusiast",
                  desc: "Saya adalah babu dari si majikan bernama Bubu. Hidup lama ya Bub, jangan bosan jadi temanku! ❤😸",
                },
                {
                  icon: "🍫",
                  title: "Chocolate Lover",
                  desc: "Cokelat adalah mood booster penting. Dark chocolate + coding = productivity naik 500%.",
                },
                {
                  icon: "☕",
                  title: "Coffee Addict",
                  desc: "Kopi itu wajib. Americano untuk fokus, kopi gula aren untuk ide kreatif.",
                },
                {
                  icon: "❤️‍🩹",
                  title: "Mood Swing Owner",
                  desc: "Mood saya naik turun, tetapi dari situ kreativitas muncul.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-white/80"
                >
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <span className="font-semibold text-[#800000]">{item.title}: </span>
                    <span>{item.desc}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
