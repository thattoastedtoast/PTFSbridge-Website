import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { MessageSquareQuote, TrendingUp, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#151912] border-b border-[#42483a]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#42483a]/60 border border-[#7ED957]/30 text-xs font-bold text-[#7ED957] uppercase tracking-wider mb-2">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>RoAvgeek Community Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            How RoAvgeeks Grow With PTFSbridge
          </h2>
          <p className="text-sm text-[#b1bba8] mt-2">
            Real experiences from airline founders, ATC heads, and spotter community directors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#1f261b] p-6 sm:p-7 rounded-2xl border border-[#42483a] flex flex-col justify-between hover:border-[#7ED957]/50 transition-all group"
            >
              <div>
                <div className="flex items-center gap-1 text-[#7ED957] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#d0dacb] italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div>
                <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#7ED957]/15 text-[#7ED957] text-[11px] font-bold border border-[#7ED957]/30">
                  <TrendingUp className="w-3 h-3" />
                  <span>{t.growthStat}</span>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#42483a]">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-[#7ED957]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.author}</h4>
                    <p className="text-[11px] text-[#7ED957]">{t.role}</p>
                    <p className="text-[10px] text-[#8c9483]">{t.server}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
