import React, { useState } from "react";
import { projects, categories } from "./const";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section 
      id="portfolio" 
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
              Karya Terbaik
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto mb-6 leading-relaxed">
            Beberapa karya terbaik saya dalam pengembangan aplikasi web menggunakan <span className="font-semibold text-purple-600">Laravel</span> dan teknologi modern lainnya
          </p>
          
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                  : "bg-white/60 backdrop-blur-sm text-slate-700 hover:bg-white/80 border border-purple-200/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-100/50 hover:bg-white/80 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="h-40 md:h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-purple-700 font-medium text-sm md:text-base">Preview</p>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 md:px-3 py-1 text-xs font-medium bg-white/80 backdrop-blur-sm text-purple-700 rounded-full border border-purple-200/50">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 mb-3 md:mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-3 md:mb-4">
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 md:px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full border border-purple-200/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                {project.link && (
                  <a
                    href={project.link}
                    className="inline-flex items-center text-purple-700 hover:text-purple-900 font-medium text-sm transition-colors group-hover:gap-2"
                  >
                    Lihat Detail
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-8 md:py-12">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <svg className="w-8 h-8 md:w-12 md:h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-slate-700 mb-2">Tidak ada proyek</h3>
            <p className="text-slate-600 text-sm md:text-base">Belum ada proyek dalam kategori ini.</p>
          </div>
        )}
      </div>

      {/* Smooth Gradient to Bottom - Simplified */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
} 