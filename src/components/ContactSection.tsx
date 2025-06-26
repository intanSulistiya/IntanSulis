import React from "react";

export default function ContactSection() {
  return (
    <section 
      id="contact" 
      className="w-full py-16 px-4 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30 relative overflow-hidden"
    >
      {/* Background Decorative Elements - Reduced complexity */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-xl opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-xl opacity-60"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200/50 rounded-full px-4 py-2 mb-4 shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Mari Berkolaborasi
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Hubungi Saya
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto mb-6 leading-relaxed">
            Mari berdiskusi tentang proyek Anda. Saya siap membantu mewujudkan ide-ide kreatif Anda menjadi kenyataan!
          </p>
          
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
        </div>

        {/* Contact Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-100/50 shadow-lg">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mari Berkolaborasi
              </h3>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
                Saya selalu terbuka untuk proyek-proyek menarik dan kolaborasi baru. 
                Jangan ragu untuk menghubungi saya untuk membicarakan ide atau pertanyaan Anda.
              </p>
            </div>

            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-700 mb-2 text-sm md:text-base">Email</h4>
                <a 
                  href="mailto:intan.sulistia@email.com" 
                  className="text-purple-600 hover:text-purple-800 transition-colors text-sm md:text-base"
                >
                  intan.sulistia@email.com
                </a>
              </div>

              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-700 mb-2 text-sm md:text-base">Lokasi</h4>
                <p className="text-slate-600 text-sm md:text-base">Makassar, Indonesia</p>
              </div>

              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-700 mb-2 text-sm md:text-base">WhatsApp</h4>
                <a 
                  href="https://wa.me/6281234567890" 
                  className="text-purple-600 hover:text-purple-800 transition-colors text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +62 812-3456-7890
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h4 className="font-semibold text-slate-700 mb-4 md:mb-6 text-sm md:text-base">Ikuti Saya</h4>
              <div className="flex justify-center space-x-4 md:space-x-6">
                <a
                  href="#"
                  className="group w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-200 hover:to-pink-200 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  title="TikTok"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-600 group-hover:text-purple-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="group w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-200 hover:to-blue-200 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  title="Instagram"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-pink-600 group-hover:text-pink-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/intansulistiya"
                  className="group w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-200 hover:to-purple-200 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600 group-hover:text-blue-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth Gradient to Bottom - Simplified */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
} 