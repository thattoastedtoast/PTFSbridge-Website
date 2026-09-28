import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section id="join" className="py-16 sm:py-24 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-[#0b1a0d] p-8 sm:p-14 lg:p-20 text-white relative overflow-hidden border border-white/20 shadow-2xl group">
          {/* Subtle ambient animated glowing orbs */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#8fe340]/15 rounded-full blur-3xl pointer-events-none animate-float" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#2cb54a]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Super big text like hero saying "come join us" */}
            <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold text-white tracking-[-0.08em] leading-[0.85] mb-8 lowercase select-none transition-transform duration-500 hover:scale-[1.01] hover:tracking-[-0.085em] cursor-default">
              come join us
            </h2>

            <p className="text-xl sm:text-2xl text-white/90 font-bold max-w-2xl tracking-[-0.045em] leading-[1.22] mb-10">
              Be part of our founding community. Connect with other PTFS server owners, catch collaborative partner flights, and get early discoveri™ embeds.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://discord.gg/9PjNZzHdT"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#8fe340] to-[#2cb54a] hover:from-[#9ef54c] hover:to-[#35c755] text-[#08150a] font-bold text-base sm:text-lg tracking-[-0.04em] leading-none shadow-xl shadow-black/30 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-2.5 cursor-pointer border border-[#a4f553]/30 group/btn"
              >
                <svg
                  className="w-5 h-5 fill-current transition-transform duration-300 group-hover/btn:rotate-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                <span>Join our Discord</span>
              </a>

              <a
                href="https://ptfsbridge.fillout.com/partnership"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-white hover:bg-white/95 text-[#0b1a0d] font-bold text-base sm:text-lg tracking-[-0.04em] leading-none shadow-md transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer group/form"
              >
                <span>Partnership Form</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/form:translate-x-1 group-hover/form:-translate-y-1 text-[#166e2e]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
