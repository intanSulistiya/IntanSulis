import React, { useState } from "react";

export default function Footer() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <footer className="w-full text-center py-5 px-2 sm:px-6 text-sm sm:text-base bg-[#0a0a0a] border-t border-[#800000]/20 mt-16 relative">
      <span className="inline-flex flex-wrap items-center gap-1 justify-center font-medium text-white">
        Made with
        <button
          className="text-[#800000] font-bold hover:animate-pulse focus:outline-none transition-all duration-300"
          aria-label="Show love dialog"
          onClick={() => setShowDialog(true)}
          type="button"
        >
          ♥
        </button>,
        lots of
        <span className="text-[#800000] font-bold hover:text-[#A52A2A] transition-colors duration-200">coffee</span>
        &amp; a little
        <span className="text-[#800000] font-bold hover:text-[#A52A2A] transition-colors duration-200">mood swing</span>
        <span className="ml-1 text-2xl hover:animate-bounce transition-all duration-300">☕</span>
      </span>

      {/* Custom Dialog */}
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none">
          <div
            className="mb-16 bg-[#1a1a1a] border border-[#800000]/30 rounded-xl shadow-xl px-4 py-3 sm:px-6 sm:py-4 flex items-center gap-3 animate-fade-in pointer-events-auto max-w-[90vw] sm:max-w-md w-full"
            style={{ backdropFilter: 'blur(4px)' }}
          >
            <span className="text-[#800000] text-xl">♥</span>
            <button
              className="ml-2 text-white/60 hover:text-[#800000] text-lg font-bold focus:outline-none w-8 h-8 flex items-center justify-center"
              aria-label="Close dialog"
              onClick={() => setShowDialog(false)}
              type="button"
            >
              ×
            </button>
          </div>
          {/* Overlay untuk klik di luar dialog */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setShowDialog(false)}
          />
        </div>
      )}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </footer>
  );
} 