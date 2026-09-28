import React, { useState } from 'react';
import { PTFS_AIRPORTS } from '../data/mockData';
import { PtfsAirport } from '../types';
import { Radio, Plane, Wind, Compass, AlertCircle, CheckCircle } from 'lucide-react';

export const PtfsRadar: React.FC = () => {
  const [selectedAirport, setSelectedAirport] = useState<PtfsAirport>(PTFS_AIRPORTS[0]);

  return (
    <section id="radar" className="py-20 bg-[#191e16] border-b border-[#42483a]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#42483a]/60 border border-[#7ED957]/30 text-xs font-bold text-[#7ED957] uppercase tracking-wider mb-2">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>Aviation Radar & Operations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              PTFS Flight Hub Telemetry
            </h2>
            <p className="text-sm text-[#b1bba8] mt-1 max-w-xl">
              Track active Roblox PTFS airport frequencies, controllers on duty, and inbound flight volumes.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 bg-[#151912] px-3.5 py-2 rounded-xl border border-[#42483a] text-xs font-semibold text-[#7ED957]">
            <span className="w-2 h-2 rounded-full bg-[#7ED957] animate-ping"></span>
            <span>Live Server Tracking: 178 Active PTFS Flights</span>
          </div>
        </div>

        {/* Radar Board Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Airport Selector List (Left) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#8c9483] px-1">
              Select PTFS Airspace
            </h3>
            {PTFS_AIRPORTS.map((apt) => {
              const isSelected = selectedAirport.id === apt.id;
              return (
                <button
                  key={apt.id}
                  onClick={() => setSelectedAirport(apt)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#272e22] border-[#7ED957] shadow-lg shadow-[#7ED957]/10'
                      : 'bg-[#20261b] border-[#42483a] hover:border-[#7ED957]/40 text-[#a4ad9c]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center font-mono font-black text-xs ${
                        isSelected ? 'bg-[#7ED957] text-[#151912]' : 'bg-[#151912] text-white'
                      }`}
                    >
                      {apt.icao}
                    </div>
                    <div>
                      <div className={`font-bold text-sm ${isSelected ? 'text-white' : 'text-[#d4ddce]'}`}>
                        {apt.name}
                      </div>
                      <div className="text-[11px] text-[#8c9483]">{apt.region}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-[#7ED957]">{apt.activeTraffic} Flights</div>
                    <div className="text-[10px] text-[#727a6c]">In Sector</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Radar Details & Virtual Scope (Right) */}
          <div className="lg:col-span-8 bg-[#20261b] rounded-2xl border border-[#42483a] p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#42483a] gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-black text-white font-mono tracking-tight">
                    {selectedAirport.icao}
                  </span>
                  <span className="text-sm font-bold text-[#7ED957] px-2 py-0.5 rounded bg-[#42483a]/60 border border-[#7ED957]/30">
                    {selectedAirport.region}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mt-1">{selectedAirport.name}</h4>
              </div>

              <div className="text-left sm:text-right bg-[#151912] p-3 rounded-xl border border-[#42483a]">
                <div className="text-[10px] uppercase font-bold text-[#8c9483]">Airspace Status</div>
                <div className="text-sm font-bold text-[#7ED957] flex items-center gap-1.5 sm:justify-end">
                  <span className="w-2 h-2 rounded-full bg-[#7ED957] animate-pulse"></span>
                  <span>{selectedAirport.currentAtc}</span>
                </div>
              </div>
            </div>

            {/* Radar Telemetry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-6">
              <div className="bg-[#151912] p-4 rounded-xl border border-[#42483a]">
                <div className="flex items-center gap-2 text-[#8c9483] font-bold uppercase text-[10px] mb-1">
                  <Radio className="w-3.5 h-3.5 text-[#7ED957]" />
                  <span>Radio Frequencies</span>
                </div>
                <div className="text-white font-mono font-bold text-sm">
                  {selectedAirport.atcFrequency}
                </div>
                <p className="text-[11px] text-[#727a6c] mt-1">Available on PTFSbridge allied ATC voice channels</p>
              </div>

              <div className="bg-[#151912] p-4 rounded-xl border border-[#42483a]">
                <div className="flex items-center gap-2 text-[#8c9483] font-bold uppercase text-[10px] mb-1">
                  <Wind className="w-3.5 h-3.5 text-[#7ED957]" />
                  <span>METAR / Weather Status</span>
                </div>
                <div className="text-white font-mono font-bold text-sm">
                  {selectedAirport.weather}
                </div>
                <p className="text-[11px] text-[#727a6c] mt-1">Real-time PTFS wind simulation</p>
              </div>

              <div className="bg-[#151912] p-4 rounded-xl border border-[#42483a]">
                <div className="flex items-center gap-2 text-[#8c9483] font-bold uppercase text-[10px] mb-1">
                  <Compass className="w-3.5 h-3.5 text-[#7ED957]" />
                  <span>Active Runways</span>
                </div>
                <div className="text-white font-medium text-sm">
                  {selectedAirport.runways.join(' • ')}
                </div>
                <p className="text-[11px] text-[#727a6c] mt-1">Instrument Landing System (ILS) aligned</p>
              </div>

              <div className="bg-[#151912] p-4 rounded-xl border border-[#42483a]">
                <div className="flex items-center gap-2 text-[#8c9483] font-bold uppercase text-[10px] mb-1">
                  <Plane className="w-3.5 h-3.5 text-[#7ED957]" />
                  <span>Typical Operations</span>
                </div>
                <div className="text-white font-medium text-sm">
                  {selectedAirport.popularFor}
                </div>
                <p className="text-[11px] text-[#727a6c] mt-1">Preferred hub for partner virtual airlines</p>
              </div>
            </div>

            {/* Radar Scope Simulation Visual */}
            <div className="relative h-48 rounded-xl bg-[#11160e] border border-[#7ED957]/30 overflow-hidden flex items-center justify-center p-4">
              <div className="absolute inset-0 aviation-grid opacity-30"></div>
              {/* Radar Rings */}
              <div className="w-36 h-36 rounded-full border border-[#7ED957]/20 absolute"></div>
              <div className="w-24 h-24 rounded-full border border-[#7ED957]/30 absolute"></div>
              <div className="w-12 h-12 rounded-full border border-[#7ED957]/40 absolute flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7ED957]"></span>
              </div>
              <div className="absolute inset-0 radar-sweep opacity-30"></div>

              {/* Simulated Aircraft Targets */}
              <div className="absolute top-10 left-1/4 flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#7ED957] animate-pulse"></div>
                <span className="text-[9px] font-mono text-[#7ED957] bg-[#151912]/80 px-1 rounded border border-[#7ED957]/20">
                  AP702 • FL310 • A320
                </span>
              </div>
              <div className="absolute bottom-8 right-1/3 flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#7ED957] animate-pulse"></div>
                <span className="text-[9px] font-mono text-[#7ED957] bg-[#151912]/80 px-1 rounded border border-[#7ED957]/20">
                  SK441 • FL180 • B777
                </span>
              </div>
              <div className="absolute top-16 right-16 flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#7ED957]"></div>
                <span className="text-[9px] font-mono text-[#7ED957] bg-[#151912]/80 px-1 rounded border border-[#7ED957]/20">
                  RF012 • 4,500ft • C172
                </span>
              </div>

              <div className="absolute bottom-2 left-3 text-[10px] font-mono text-[#8c9483]">
                RADAR SCOPE: {selectedAirport.icao} VOR/DME 114.50
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
