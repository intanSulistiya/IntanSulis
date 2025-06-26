import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="w-full py-16 px-4 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30 relative overflow-hidden"
    >
      {/* Background Decorative Elements - Reduced complexity */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-xl opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-xl opacity-60"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200/50 rounded-full px-4 py-2 mb-4 shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Mari Berkenalan
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Tentang Saya
            </span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
        </div>

        {/* Profile Card - Centered & Proportional */}
        <div className="mx-auto w-full max-w-md bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-lg flex flex-col items-center mb-8">
          {/* Fixed Profile Image - Proper Aspect Ratio */}
          <div className="w-32 h-32 md:w-36 md:h-36 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mb-4 flex items-center justify-center shadow-md overflow-hidden">
            <Image 
              src="/image/master.png" 
              alt="Intan Sulistiya" 
              width={144}
              height={144}
              className="w-full h-full object-cover rounded-full"
              priority
              loading="eager"
              sizes="(max-width: 768px) 128px, 144px"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Intan Sulistiya
          </h3>
          <p className="text-purple-700 font-medium mb-4 text-sm md:text-base">Laravel Developer</p>
          {/* Personal Interests - Vertical Layout */}
          <div className="flex flex-col gap-2 mb-4 w-full">
            <div className="flex items-center justify-center gap-2 bg-orange-50 rounded-full px-4 py-2 border border-orange-200 w-full">
              <span className="text-orange-600 text-sm">🐱</span>
              <span className="text-orange-700 text-sm font-medium">Cat Lover</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-amber-50 rounded-full px-4 py-2 border border-amber-200 w-full">
              <span className="text-amber-600 text-sm">🍫</span>
              <span className="text-amber-700 text-sm font-medium">Chocoholic</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-amber-100 rounded-full px-4 py-2 border border-amber-300 w-full">
              <span className="text-amber-800 text-sm">☕</span>
              <span className="text-amber-900 text-sm font-medium">Coffee Addict</span>
            </div>
          </div>
          {/* Tech Stack Icons */}
          <div className="flex justify-center gap-2 mb-4 w-full">
            <div className="w-1/3 flex justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-base shadow-sm">L</div>
            </div>
            <div className="w-1/3 flex justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center text-white font-bold text-base shadow-sm">JS</div>
            </div>
            <div className="w-1/3 flex justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-base shadow-sm">BS</div>
            </div>
          </div>
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3 text-center w-full">
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600">1+</div>
              <div className="text-xs text-purple-700">Tahun</div>
            </div>
            <div className="bg-pink-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-pink-600">10+</div>
              <div className="text-xs text-pink-700">Project</div>
            </div>
          </div>
        </div>

        {/* Content Sections - Vertical Layout */}
        <div className="space-y-6">
          {/* Main Description */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-purple-100/50 shadow-sm">
            <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-4 md:mb-6">
              Halo! Saya <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Intan Sulistiya</span>, 
              seorang web developer perempuan yang memiliki passion di dunia teknologi, khususnya pengembangan aplikasi web menggunakan 
              <span className="font-semibold text-red-600"> Laravel</span>. 
            </p>
            
            <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-4 md:mb-6">
              Saya percaya bahwa teknologi dapat menjadi sarana untuk menciptakan perubahan positif, dan saya selalu berusaha memberikan 
              <span className="italic text-purple-600"> sentuhan elegan dan feminim </span>
              pada setiap karya yang saya buat.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed text-slate-700">
              Dengan pengalaman di berbagai proyek, saya siap membantu Anda membangun website yang 
              <span className="font-semibold text-blue-600"> modern, aman, dan mudah digunakan</span>. 
              Mari berkolaborasi untuk mewujudkan ide Anda menjadi kenyataan!
            </p>
          </div>

          {/* Personal Touch Section */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200/50">
            <h4 className="font-bold text-orange-800 mb-4 text-lg text-center">✨ Fun Facts About Me</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🐱</span>
                <div>
                  <p className="text-orange-800 font-medium text-sm md:text-base">Cat Enthusiast</p>
                  <p className="text-orange-700 text-sm">Saya suka menghabiskan waktu dengan kucing sambil coding. Mereka adalah teman terbaik untuk debugging! 😸</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍫</span>
                <div>
                  <p className="text-amber-800 font-medium text-sm md:text-base">Chocolate Lover</p>
                  <p className="text-amber-700 text-sm">Cokelat adalah bahan bakar kreativitas saya. Dark chocolate + coding = productivity boost! 🚀</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">☕</span>
                <div>
                  <p className="text-amber-900 font-medium text-sm md:text-base">Coffee Addict</p>
                  <p className="text-amber-800 text-sm">Kopi adalah ritual pagi yang wajib! Espresso untuk fokus, latte untuk ide-ide kreatif. ☕✨</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Strengths */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 md:p-6 border border-purple-200/50">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 className="font-bold text-purple-800 mb-2 text-sm md:text-base">Clean Code</h4>
              <p className="text-xs md:text-sm text-purple-700">Code yang rapi dan mudah dipahami</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-4 md:p-6 border border-pink-200/50">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-bold text-pink-800 mb-2 text-sm md:text-base">Fast Learner</h4>
              <p className="text-xs md:text-sm text-pink-700">Mudah beradaptasi dengan teknologi baru</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 md:p-6 border border-blue-200/50">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-bold text-blue-800 mb-2 text-sm md:text-base">Detail Oriented</h4>
              <p className="text-xs md:text-sm text-blue-700">Perhatian pada setiap detail UI/UX</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 md:p-6 border border-green-200/50">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-bold text-green-800 mb-2 text-sm md:text-base">Reliable</h4>
              <p className="text-xs md:text-sm text-green-700">Selalu tepat waktu dan komunikatif</p>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth Gradient to Bottom - Simplified */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
}