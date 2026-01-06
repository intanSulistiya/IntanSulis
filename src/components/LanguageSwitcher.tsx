"use client";
import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en" as const, name: "English", flag: "🇬🇧" },
    { code: "id" as const, name: "Indonesia", flag: "🇮🇩" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: "en" | "id") => {
    setLanguage(langCode);
    setIsOpen(false);
  };
  
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="relative" ref={dropdownRef}>
        {/* Language button with current flag indicator */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 md:px-2 md:py-1 text-gray-700 hover:text-[#800000] font-medium transition-all duration-300 rounded-lg hover:bg-[#800000]/10 active:scale-95"
          aria-label="Change language"
          title={`Current: ${currentLanguage.name}`}
        >
          {/* Globe icon for desktop, flag for mobile */}
          <span className="text-lg md:hidden">{currentLanguage.flag}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="w-5 h-5 md:w-6 md:h-6 hidden md:block"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
          </svg>
          <svg 
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="fixed md:absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 bottom-20 md:bottom-auto md:right-0 md:top-full mt-0 md:mt-2 w-[calc(100vw-2rem)] max-w-xs md:w-48 bg-white border border-gray-200 rounded-xl md:rounded-lg shadow-2xl md:shadow-xl overflow-hidden z-50 backdrop-blur-sm">
            {/* Mobile header */}
            <div className="md:hidden px-4 py-3 border-b border-[#800000]/20 flex items-center justify-between">
              <span className="text-gray-900 font-semibold text-sm">Select Language</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Language options */}
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-3 md:py-2.5 text-left transition-all duration-200 active:scale-[0.98] ${
                    language === lang.code
                      ? "bg-[#800000]/20 text-[#800000] font-semibold"
                      : "text-gray-700 hover:bg-[#800000]/10 hover:text-gray-900 active:bg-[#800000]/20"
                  }`}
                >
                  <span className="text-2xl md:text-lg">{lang.flag}</span>
                  <span className="text-base md:text-sm flex-1">{lang.name}</span>
                  {language === lang.code && (
                    <svg className="w-5 h-5 md:w-4 md:h-4 text-[#800000]" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

