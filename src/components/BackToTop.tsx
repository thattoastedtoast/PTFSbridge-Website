import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const percent = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(Math.round(percent));
        // Show after scrolling past 15%
        setVisible(percent > 15);
      } else {
        setVisible(scrollTop > 200);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      id="back-to-top-btn"
      onClick={scrollToTop}
      aria-label="Back to top"
      title={`Back to top (${scrollProgress}%)`}
      className="fixed bottom-6 right-6 z-50 p-3 sm:px-4 sm:py-3 rounded-2xl bg-[#0b1a0d] hover:bg-[#102413] text-white font-bold text-xs tracking-[-0.04em] leading-none shadow-2xl border border-white/20 hover:border-[#8fe340]/40 flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer animate-in fade-in zoom-in-95 group"
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        <ArrowUp className="w-4 h-4 stroke-[2.5] text-[#8fe340] transition-transform duration-300 group-hover:-translate-y-0.5" />
      </div>
      <span className="hidden sm:inline">top</span>
      <span className="text-[10px] text-white/60 font-mono hidden md:inline">{scrollProgress}%</span>
    </button>
  );
};
