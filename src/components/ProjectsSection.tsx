"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { getProjects, categories, Project } from "./const";
import ScrollFloat from './ScrollFloat';
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

export default function ProjectsSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [projects, setProjects] = useState<Project[]>(getProjects(language));
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLElement>(null);

  // Update projects when language changes
  useEffect(() => {
    setProjects(getProjects(language));
  }, [language]);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  // Reset showAll when category changes
  useEffect(() => {
    setShowAll(false);
  }, [selectedCategory]);

  // Handle modal open/close
  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  // Handle keyboard navigation
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft' && selectedProject.images) {
        setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images!.length) % selectedProject.images!.length);
      } else if (e.key === 'ArrowRight' && selectedProject.images) {
        setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images!.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, currentImageIndex]);

  // Image navigation
  const handleNextImage = () => {
    if (!selectedProject?.images) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images!.length);
  };

  const handlePrevImage = () => {
    if (!selectedProject?.images) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images!.length) % selectedProject.images!.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-[#fafafa] relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fafafa] to-[#f5f5f5]"></div>
        <div className="absolute inset-0 geometric-pattern opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#800000]/3 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A52A2A]/2 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <ScrollFloat
            scrollContainerRef={scrollContainerRef as React.RefObject<HTMLElement | null>}
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            containerClassName="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 font-plus-jakarta"
          >
            {t.projects.title}
          </ScrollFloat>

          <p className="text-base md:text-lg text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            {t.projects.subtitle} <span className="font-bold text-[#A52A2A]">{t.projects.subtitle2}</span> {t.projects.subtitle3}
          </p>
        </div>

        {/* Modern Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12 lg:mb-16 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 md:px-5 py-2 md:py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base relative overflow-hidden group ${selectedCategory === category
                ? "bg-gradient-to-r from-[#800000] to-[#A52A2A] text-white shadow-xl shadow-[#800000]/20"
                : "bg-white/80 backdrop-blur-sm text-gray-700 border border-[#800000]/30 hover:border-[#A52A2A]/60 hover:text-gray-900 hover:shadow-lg hover:shadow-[#800000]/10"
                }`}
            >
              <span className="relative z-10">{t.projects.categories[category as keyof typeof t.projects.categories] || category}</span>
              {selectedCategory === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#800000] to-[#A52A2A] opacity-100"></div>
              )}
            </button>
          ))}
        </div>

        {/* Modern Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 hover:border-[#A52A2A]/60 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#800000]/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/0 via-[#800000]/0 to-[#800000]/0 group-hover:from-[#800000]/10 group-hover:via-[#800000]/5 group-hover:to-[#800000]/10 transition-all duration-500 rounded-xl blur-xl -z-10"></div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

              {/* Project Content */}
              <div className="p-6 md:p-7 lg:p-8 relative">
                {/* Category and Status Badges */}
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 text-xs font-bold bg-white/80 backdrop-blur-sm text-[#800000] rounded-full border border-[#800000]/40 group-hover:border-[#800000]/60 group-hover:bg-[#800000]/10 transition-all duration-300">
                    {project.category}
                  </span>
                  {/* Status Badge with Pulse for Online */}
                  <span className={`px-3 py-1 text-xs font-bold rounded-full border backdrop-blur-sm transition-all duration-300 ${project.status === "online"
                    ? "bg-green-500/20 text-green-400 border-green-500/40 group-hover:bg-green-500/30 group-hover:shadow-lg group-hover:shadow-green-500/20"
                    : "bg-gray-500/20 text-gray-400 border-gray-500/40"
                    }`}>
                    <span className="flex items-center gap-1.5">
                      {project.status === "online" && (
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      )}
                      {project.status === "online" ? t.projects.online : t.projects.offline}
                    </span>
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold mb-4 text-gray-900 leading-tight group-hover:text-[#A52A2A] transition-colors duration-300 font-plus-jakarta">
                  {project.title}
                </h3>

                <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Technologies Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 text-xs font-bold bg-white/80 backdrop-blur-sm text-[#A52A2A] rounded-lg border border-[#800000]/30 hover:border-[#A52A2A]/60 hover:bg-[#800000]/10 hover:scale-110 hover:shadow-md hover:shadow-[#800000]/20 transition-all duration-300 cursor-default"
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.status === "online" && project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center gap-2 bg-gradient-to-r from-[#800000] to-[#A52A2A] hover:from-[#A52A2A] hover:to-[#800000] text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:shadow-[#800000]/40 hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                      <svg className="w-4 h-4 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="relative z-10">{t.projects.visitWebsite}</span>
                    </a>
                  )}
                  <button
                    onClick={() => openModal(project)}
                    className="group/btn inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-[#800000]/50 hover:border-[#A52A2A] text-[#A52A2A] hover:bg-[#800000]/10 hover:text-[#800000] px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#800000]/20"
                  >
                    <span>{t.projects.viewDetails}</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 3 && (
          <div className="flex justify-center mt-10 md:mt-12 lg:mt-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#800000] to-[#A52A2A] hover:from-[#A52A2A] hover:to-[#800000] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl hover:shadow-2xl hover:shadow-[#800000]/40 hover:scale-105 transition-all duration-300"
            >
              <span>{showAll ? t.projects.showLess : `${t.projects.showMore} (${filteredProjects.length})`}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 md:py-20 lg:py-24">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#800000]/10 border-2 border-[#800000]/20 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-10 h-10 md:w-12 md:h-12 text-[#800000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{t.projects.noProjects}</h3>
            <p className="text-gray-600 text-base max-w-md mx-auto">{t.projects.noProjectsDesc}</p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-[#800000]/20 hover:bg-[#800000]/40 text-gray-900 rounded-full border border-[#800000]/40 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Slider */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="relative w-full h-72 md:h-[28rem] lg:h-[32rem] bg-white">
                <div className="relative w-full h-full">
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[#800000]/80 hover:bg-[#800000] text-white rounded-full border border-[#800000] transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[#800000]/80 hover:bg-[#800000] text-white rounded-full border border-[#800000] transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                          ? 'bg-[#800000] w-8'
                          : 'bg-white/40 hover:bg-white/60'
                          }`}
                      />
                    ))}
                  </div>
                )}

                {/* Image Counter */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-full border border-[#800000]/40">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                )}
              </div>
            )}

            {/* Project Details */}
            <div className="p-8 md:p-10 lg:p-12">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-3 py-1 text-xs font-bold bg-[#800000]/20 text-[#800000] rounded-full border border-[#800000]/40">
                      {selectedProject.category}
                    </span>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full border ${selectedProject.status === "online"
                      ? "bg-green-500/20 text-green-400 border-green-500/40"
                      : "bg-gray-500/20 text-gray-400 border-gray-500/40"
                      }`}>
                      <span className="flex items-center gap-1.5">
                        {selectedProject.status === "online" && (
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                        )}
                        {selectedProject.status === "online" ? "Online" : "Offline"}
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-8 text-base md:text-lg leading-relaxed">
                {selectedProject.detailDescription || selectedProject.description}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t.projects.technologiesUsed}</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm font-bold bg-gradient-to-r from-[#800000]/20 to-[#800000]/10 text-[#800000] rounded-lg border border-[#800000]/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                {selectedProject.status === "online" && selectedProject.url && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#800000] to-[#A52A2A] hover:from-[#A52A2A] hover:to-[#800000] text-white px-6 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:shadow-[#800000]/40 hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>{t.projects.visitWebsite}</span>
                  </a>
                )}
                <button
                  onClick={closeModal}
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-[#800000]/50 hover:border-[#800000] text-[#800000] hover:bg-[#800000]/10 hover:text-[#800000] px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300"
                >
                  {t.projects.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
} 