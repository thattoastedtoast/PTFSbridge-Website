import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 py-1.5 ${
        scrolled
          ? 'bg-[#08150a]/40 backdrop-blur-md'
          : 'bg-transparent backdrop-blur-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo without border */}
        <a
          href="#"
          className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.03] active:scale-98"
          aria-label="PTFSbridge Home"
        >
          <Logo size={46} withText={true} textSize="text-2xl" textColor="text-white" />
        </a>

        {/* Desktop Navigation Links with enhanced readability against transparent gradient */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-extrabold text-white tracking-[-0.03em] leading-none drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.75)]">
          <a
            href="#about"
            className="relative px-3 py-2 rounded-xl hover:bg-black/20 backdrop-blur-xs transition-all duration-200 group"
          >
            <span className="group-hover:text-[#a4f553] transition-colors">about</span>
            <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#8fe340] opacity-0 transition-all duration-300 group-hover:opacity-100 rounded-full" />
          </a>

          <a
            href="#compare"
            className="relative px-3 py-2 rounded-xl hover:bg-black/20 backdrop-blur-xs transition-all duration-200 group"
          >
            <span className="group-hover:text-[#a4f553] transition-colors">comparison</span>
            <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#8fe340] opacity-0 transition-all duration-300 group-hover:opacity-100 rounded-full" />
          </a>

          <a
            href="https://ptfsbridge.fillout.com/partnership"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-3 py-2 rounded-xl hover:bg-black/20 backdrop-blur-xs transition-all duration-200 flex items-center gap-1.5 group"
          >
            <span className="group-hover:text-[#a4f553] transition-colors">partnership form</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#8fe340]" />
            <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#8fe340] opacity-0 transition-all duration-300 group-hover:opacity-100 rounded-full" />
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://ptfsbridge.fillout.com/partnership"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-black/30 hover:bg-black/45 text-white font-extrabold text-xs tracking-[-0.025em] leading-none transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm transform hover:-translate-y-0.5 active:translate-y-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
          >
            Partner Application
          </a>

          <a
            href="https://discord.gg/9PjNZzHdT"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#8fe340] to-[#2cb54a] hover:from-[#9ef54c] hover:to-[#35c755] text-[#08150a] font-extrabold text-xs tracking-[-0.025em] leading-none transition-all duration-300 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 hover:scale-[1.02] active:scale-98 group"
          >
            <svg
              className="w-4 h-4 fill-current transition-transform duration-300 group-hover:rotate-12"
              viewBox="0 0 24 24"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <span>Join Discord</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-black/40 text-white border border-white/20 transition-transform active:scale-95"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#08150a]/95 backdrop-blur-xl px-4 py-5 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-extrabold text-white py-1 tracking-tight hover:text-[#8fe340] hover:translate-x-1 transition-all"
          >
            about
          </a>
          <a
            href="#compare"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-extrabold text-white py-1 tracking-tight hover:text-[#8fe340] hover:translate-x-1 transition-all"
          >
            comparison
          </a>
          <a
            href="https://ptfsbridge.fillout.com/partnership"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-base font-extrabold text-white py-1 tracking-tight hover:text-[#8fe340] hover:translate-x-1 transition-all"
          >
            <span>partnership form</span>
            <ArrowUpRight className="w-4 h-4 text-[#8fe340]" />
          </a>

          <div className="pt-3 space-y-2">
            <a
              href="https://ptfsbridge.fillout.com/partnership"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2.5 rounded-xl bg-black/40 text-white font-extrabold text-sm tracking-tight border border-white/20"
            >
              Partner Application
            </a>
            <a
              href="https://discord.gg/9PjNZzHdT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#8fe340] to-[#2cb54a] text-[#08150a] font-extrabold text-sm tracking-tight"
            >
              <span>Join Discord</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
