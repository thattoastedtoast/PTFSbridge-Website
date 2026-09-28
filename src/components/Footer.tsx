import React from 'react';
import { Logo } from './Logo';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08150a] text-white py-12 sm:py-16 border-t border-white/10 relative overflow-hidden">
      {/* Subtle ambient light gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8fe340]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <a href="#" className="inline-block group">
              <Logo size={46} withText={true} textSize="text-2xl" textColor="text-white" />
            </a>
            <p className="text-sm font-normal text-white/80 max-w-md tracking-[-0.035em] leading-[1.22]">
              We are PTFSbridge, the community hub for PTFS fans and server owners! Here, you can grow your community through discoveri™ embeds, catch partner flights, and connect with fellow avgeeks in a friendly space!
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white/90 leading-none">
              <span className="w-2 h-2 rounded-full bg-[#8fe340] animate-pulse" />
              <span className="tracking-[-0.03em]">everything launching soon</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[-0.03em] text-white/60 leading-[0.85]">
              Community Hub
            </h4>
            <ul className="space-y-2 text-sm font-bold tracking-[-0.04em] leading-tight">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#8fe340] transition-colors duration-200 inline-block hover:translate-x-1 transition-transform"
                >
                  about
                </a>
              </li>
              <li>
                <a
                  href="#compare"
                  className="hover:text-[#8fe340] transition-colors duration-200 inline-block hover:translate-x-1 transition-transform"
                >
                  comparison
                </a>
              </li>
              <li>
                <a
                  href="#join"
                  className="hover:text-[#8fe340] transition-colors duration-200 inline-block hover:translate-x-1 transition-transform"
                >
                  join community
                </a>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[-0.03em] text-white/60 leading-[0.85]">
              Connect & Apply
            </h4>
            <ul className="space-y-2 text-sm font-bold tracking-[-0.04em] leading-tight">
              <li>
                <a
                  href="https://discord.gg/9PjNZzHdT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8fe340] transition-colors duration-200 flex items-center gap-1.5 group inline-flex"
                >
                  <span>Discord Server</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#8fe340]" />
                </a>
              </li>
              <li>
                <a
                  href="https://ptfsbridge.fillout.com/partnership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8fe340] transition-colors duration-200 flex items-center gap-1.5 group inline-flex"
                >
                  <span>Partnership Application</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#8fe340]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with Terms & Safety removed as requested */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal text-white/60">
          <p className="tracking-[-0.03em]">
            © {new Date().getFullYear()} PTFSbridge. Built for Roblox Aeronautica & PTFS communities.
          </p>
          <div className="flex items-center gap-6 font-bold tracking-[-0.03em]">
            <a
              href="https://discord.gg/9PjNZzHdT"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8fe340] transition-colors flex items-center gap-1"
            >
              <span>Support</span>
              <ArrowUpRight className="w-3 h-3 text-[#8fe340]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
