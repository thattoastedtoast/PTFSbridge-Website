import React from 'react';
import { X, Check, Sparkles, ArrowUpRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="compare" className="py-16 sm:py-24 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 border border-white/30 text-xs font-bold text-white mb-3 leading-none transition-transform duration-300 hover:scale-105 shadow-sm">
            {/* White sparkle icon as explicitly specified */}
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span className="tracking-[-0.03em]">discoveri™ format vs old links</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-[-0.07em] leading-[0.85]">
            clean embeds, zero spam bots.
          </h2>
          <p className="text-lg sm:text-xl text-white/90 font-normal mt-3 tracking-[-0.04em] leading-[1.22]">
            We don't use annoying bots, and we have no servers just yet — everything is coming soon! Here is why discoveri™ embeds will outshine traditional Discord link dumping.
          </p>
        </div>

        {/* Side-by-Side Comparison (Tabs removed per user request) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: Traditional Link Dumping (The Old Way) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0b1a0d]/35 border border-white/20 backdrop-blur-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-white/35 group cursor-default">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-bold uppercase tracking-[-0.03em] leading-none">
                  The Old Way
                </span>
                <span className="text-xs text-white/60 font-bold tracking-[-0.03em]">Unread & Ignored</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 tracking-[-0.06em] leading-[0.85]">
                Traditional Link Dumping
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3.5 group/item transition-transform duration-200 hover:translate-x-1.5">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 text-white/70 stroke-[2.5]" />
                  </div>
                  <span className="text-base sm:text-lg font-bold text-white tracking-[-0.04em] leading-tight">
                    Walls of emojis and plain text
                  </span>
                </div>

                <div className="flex items-center gap-3.5 group/item transition-transform duration-200 hover:translate-x-1.5">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 text-white/70 stroke-[2.5]" />
                  </div>
                  <span className="text-base sm:text-lg font-bold text-white tracking-[-0.04em] leading-tight">
                    Spam bots & risk
                  </span>
                </div>

                <div className="flex items-center gap-3.5 group/item transition-transform duration-200 hover:translate-x-1.5">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 text-white/70 stroke-[2.5]" />
                  </div>
                  <span className="text-base sm:text-lg font-bold text-white tracking-[-0.04em] leading-tight">
                    Zero real engagement
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 text-xs text-white/60 font-bold tracking-[-0.03em]">
              Outcome: Cluttered server channels with low conversion.
            </div>
          </div>

          {/* Card 2: PTFSbridge discoveri™ Embeds (The PTFSbridge Way) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white text-[#0b1a0d] shadow-2xl flex flex-col justify-between border border-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-white group cursor-default">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-[#8fe340]/25 text-[#0b1a0d] text-xs font-bold uppercase tracking-[-0.03em] leading-none">
                  The PTFSbridge Way
                </span>
                <span className="text-xs font-bold text-[#0b1a0d]/70 tracking-[-0.03em]">Coming Soon</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0b1a0d] mb-6 tracking-[-0.06em] leading-[0.85]">
                discoveri™ Embeds
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3.5 group/item transition-transform duration-200 hover:translate-x-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#8fe340] flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-110">
                    <Check className="w-3.5 h-3.5 text-[#0b1a0d] stroke-[3]" />
                  </div>
                  <span className="text-base sm:text-lg font-bold text-[#0b1a0d] tracking-[-0.04em] leading-tight">
                    We don't use bots
                  </span>
                </div>

                <div className="flex items-center gap-3.5 group/item transition-transform duration-200 hover:translate-x-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#8fe340] flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-110">
                    <Check className="w-3.5 h-3.5 text-[#0b1a0d] stroke-[3]" />
                  </div>
                  <span className="text-base sm:text-lg font-bold text-[#0b1a0d] tracking-[-0.04em] leading-tight">
                    Eye-catching visual cards
                  </span>
                </div>

                <div className="flex items-center gap-3.5 group/item transition-transform duration-200 hover:translate-x-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#8fe340] flex items-center justify-center shrink-0 transition-transform group-hover/item:scale-110">
                    <Check className="w-3.5 h-3.5 text-[#0b1a0d] stroke-[3]" />
                  </div>
                  <span className="text-base sm:text-lg font-bold text-[#0b1a0d] tracking-[-0.04em] leading-tight">
                    Catch partner flights
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0b1a0d]/10 flex items-center justify-between">
              <span className="text-xs font-bold text-[#0b1a0d]/80 tracking-[-0.03em]">
                Founding partner spots available now
              </span>
              <a
                href="https://ptfsbridge.fillout.com/partnership"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#0b1a0d] underline flex items-center gap-1 hover:opacity-75 tracking-[-0.03em] transition-transform hover:scale-105"
              >
                <span>Apply early</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
