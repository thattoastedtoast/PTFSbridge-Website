import React, { useState } from 'react';
import { PARTNER_SERVERS } from '../data/mockData';
import { PartnerServer, ServerCategory } from '../types';
import { Search, Plane, Radio, ShieldCheck, Users, ExternalLink, Filter, Sparkles, CheckCircle2 } from 'lucide-react';

export const ServerDirectory: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedServer, setSelectedServer] = useState<PartnerServer | null>(null);

  const categories = [
    { id: 'all', label: 'All Partners (148+)' },
    { id: 'virtual_airline', label: 'Virtual Airlines' },
    { id: 'atc', label: 'Air Traffic Control' },
    { id: 'flight_school', label: 'Flight Academies' },
    { id: 'general_aviation', label: 'General Aviation' },
    { id: 'spotting_media', label: 'Spotting & Media' },
  ];

  const filteredServers = PARTNER_SERVERS.filter((server) => {
    const matchesCategory = activeCategory === 'all' || server.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      server.name.toLowerCase().includes(q) ||
      server.hubAirport.toLowerCase().includes(q) ||
      server.fleetSummary.toLowerCase().includes(q) ||
      server.description.toLowerCase().includes(q) ||
      server.tags.some((t) => t.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="partner-directory" className="py-20 bg-[#191e16] border-b border-[#42483a]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#42483a]/60 border border-[#7ED957]/30 text-xs font-bold text-[#7ED957] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified RoAvgeek Network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Explore 148+ Partner Communities
            </h2>
            <p className="text-sm text-[#b1bba8] mt-1 max-w-xl">
              Connect with active Roblox Pilot Training flight crews, air traffic controllers, and livery designers.
            </p>
          </div>

          {/* Search Box */}
          <div className="mt-4 md:mt-0 relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8c9483] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search airports, airlines, aircraft..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#151912] border border-[#42483a] text-white text-sm focus:border-[#7ED957] focus:outline-none placeholder:text-[#6a7364]"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#7ED957] text-[#151912] shadow-md shadow-[#7ED957]/20'
                  : 'bg-[#20261b] text-[#b4beae] hover:bg-[#42483a] border border-[#42483a]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Server Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServers.map((server) => (
            <div
              key={server.id}
              className="bg-[#20261b] rounded-2xl border border-[#42483a] hover:border-[#7ED957]/50 p-6 flex flex-col justify-between transition-all group hover:shadow-xl hover:shadow-black/40"
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#42483a] text-[#7ED957] border border-[#7ED957]/30">
                    {server.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white bg-[#151912] px-2.5 py-1 rounded-full border border-[#42483a]">
                    <span className="w-2 h-2 rounded-full bg-[#7ED957] animate-pulse"></span>
                    <span>{server.members.toLocaleString()} Aviators</span>
                  </div>
                </div>

                {/* Server Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#7ED957] transition-colors flex items-center gap-1.5">
                  <span>{server.name}</span>
                  {server.verified && (
                    <CheckCircle2 className="w-4 h-4 text-[#7ED957] inline shrink-0" />
                  )}
                </h3>
                <p className="text-xs text-[#a4ad9c] mt-1 line-clamp-2 leading-relaxed">
                  {server.tagline}
                </p>

                {/* Details Breakdown */}
                <div className="mt-4 space-y-2 text-xs border-t border-[#42483a]/70 pt-3">
                  <div className="flex items-center justify-between text-[#8c9483]">
                    <span>Hub Airport:</span>
                    <span className="text-white font-medium">{server.hubAirport}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#8c9483]">
                    <span>Fleet / Operations:</span>
                    <span className="text-white font-medium truncate max-w-[180px]">
                      {server.fleetSummary}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#8c9483]">
                    <span>Featured Operation:</span>
                    <span className="text-[#7ED957] font-semibold">{server.featuredRoute}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-2">
                  {server.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] bg-[#151912] text-[#b1bba8] border border-[#42483a]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-[#42483a] flex items-center gap-2">
                <a
                  href={`https://discord.gg/${server.inviteCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-[#7ED957] hover:bg-[#8fe56b] text-[#151912] font-black text-xs text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Join Server</span>
                </a>
                <button
                  onClick={() => setSelectedServer(server)}
                  className="px-3.5 py-2.5 rounded-xl bg-[#42483a] hover:bg-[#525a48] text-white text-xs font-bold border border-[#7ED957]/30 transition-colors cursor-pointer"
                >
                  View Embed
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredServers.length === 0 && (
          <div className="text-center py-16 bg-[#20261b] rounded-2xl border border-[#42483a]">
            <Plane className="w-10 h-10 text-[#7ED957] mx-auto mb-3 opacity-50" />
            <h4 className="text-white font-bold text-base">No partner communities matched your filter</h4>
            <p className="text-xs text-[#8c9483] mt-1">Try clearing your search query or choosing "All Partners".</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#7ED957] text-[#151912] text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Server Embed Modal */}
        {selectedServer && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#20261b] border border-[#7ED957]/50 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl">
              <button
                onClick={() => setSelectedServer(null)}
                className="absolute top-4 right-4 text-[#8c9483] hover:text-white text-lg font-bold"
              >
                ✕
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#7ED957]"></span>
                <span className="text-xs uppercase font-bold text-[#7ED957]">
                  PTFSbridge Live Embed Record
                </span>
              </div>

              <h3 className="text-xl font-black text-white">{selectedServer.name}</h3>
              <p className="text-xs text-[#a4ad9c] mt-1">{selectedServer.description}</p>

              {/* Simulated Discord Embed Inside Modal */}
              <div className="mt-4 p-4 rounded-xl bg-[#2b3124] border-l-4 border-[#7ED957] space-y-2 text-xs">
                <div className="flex justify-between text-[#8c9483] text-[11px]">
                  <span className="font-bold text-[#7ED957]">{selectedServer.categoryLabel}</span>
                  <span>{selectedServer.members} Aviators</span>
                </div>
                <div className="font-bold text-white text-sm">{selectedServer.name}</div>
                <div className="text-[#cad3c3]">{selectedServer.tagline}</div>
                <div className="grid grid-cols-2 gap-2 pt-2 text-[11px]">
                  <div>
                    <span className="text-[#8c9483] block">Hub Airport:</span>
                    <span className="text-white font-medium">{selectedServer.hubAirport}</span>
                  </div>
                  <div>
                    <span className="text-[#8c9483] block">Fleet:</span>
                    <span className="text-white font-medium">{selectedServer.fleetSummary}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={`https://discord.gg/${selectedServer.inviteCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-[#7ED957] hover:bg-[#8fe56b] text-[#151912] font-black text-xs text-center transition-colors"
                >
                  Join {selectedServer.name}
                </a>
                <button
                  onClick={() => setSelectedServer(null)}
                  className="px-4 py-3 rounded-xl bg-[#42483a] text-white text-xs font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
