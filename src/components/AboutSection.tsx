import React from 'react';
import { Layers, Plane, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[-0.03em] text-[#0b1a0d] bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full mb-3 inline-block leading-none shadow-sm transition-transform hover:scale-105">
            What is PTFSbridge?
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-[-0.07em] leading-[0.85]">
            the hub for PTFS fans & server owners.
          </h2>
          <p className="text-lg sm:text-xl text-white/90 font-normal mt-3 tracking-[-0.04em] leading-[1.22]">
            Whether you run a regional airline, organize ATC sessions, or simply love flying Roblox skies with friends, PTFSbridge is built for you.
          </p>
        </div>

        {/* 3 Bold Pillar Cards without footer texts as requested */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Pillar 1: Grow Your Server */}
          <div className="bg-[#0b1a0d] p-8 sm:p-10 rounded-3xl text-white border border-white/15 flex flex-col justify-start shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-3 hover:shadow-2xl hover:border-[#8fe340]/40 cursor-pointer group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8fe340] to-[#2cb54a] text-[#0b1a0d] flex items-center justify-center font-bold mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg shadow-[#8fe340]/25">
              <Layers className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-bold mb-2.5 tracking-[-0.06em] leading-[0.85] group-hover:text-[#a4f553] transition-colors">
              Grow Your Server
            </h3>
            <p className="text-sm font-normal text-white/80 tracking-[-0.035em] leading-[1.22]">
              Say goodbye to messy walls of text. discoveri™ spotlights what makes your community special.
            </p>
          </div>

          {/* Pillar 2: Catch Partner Flights */}
          <div className="bg-[#0b1a0d] p-8 sm:p-10 rounded-3xl text-white border border-white/15 flex flex-col justify-start shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-3 hover:shadow-2xl hover:border-[#8fe340]/40 cursor-pointer group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8fe340] to-[#2cb54a] text-[#0b1a0d] flex items-center justify-center font-bold mb-6 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-lg shadow-[#8fe340]/25">
              <Plane className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-bold mb-2.5 tracking-[-0.06em] leading-[0.85] group-hover:text-[#a4f553] transition-colors">
              Catch Partner Flights
            </h3>
            <p className="text-sm font-normal text-white/80 tracking-[-0.035em] leading-[1.22]">
              Team up to never fly an empty sky again. Connect with allied airlines, flight academies, and air traffic controllers for massive co-op flights.
            </p>
          </div>

          {/* Pillar 3: Connect with RoAvgeeks */}
          <div className="bg-[#0b1a0d] p-8 sm:p-10 rounded-3xl text-white border border-white/15 flex flex-col justify-start shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-3 hover:shadow-2xl hover:border-[#8fe340]/40 cursor-pointer group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8fe340] to-[#2cb54a] text-[#0b1a0d] flex items-center justify-center font-bold mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg shadow-[#8fe340]/25">
              <Users className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-bold mb-2.5 tracking-[-0.06em] leading-[0.85] group-hover:text-[#a4f553] transition-colors">
              Connect with RoAvgeeks
            </h3>
            <p className="text-sm font-normal text-white/80 tracking-[-0.035em] leading-[1.22]">
              A welcoming hub built specifically for PTFS fans, creators, and server owners to hang out and collaborate.
            </p>
          </div>
        </div>

        {/* Founding Partner Callout Banner */}
        <div className="mt-10 p-8 sm:p-10 rounded-3xl bg-white text-[#0b1a0d] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border border-white/60 group">
          <div>
            <span className="text-xs font-bold uppercase tracking-[-0.03em] text-[#8fe340] bg-[#0b1a0d] px-3 py-1 rounded-md mb-2.5 inline-block leading-none">
              Founding Partners
            </span>
            <h4 className="text-2xl sm:text-3xl font-bold tracking-[-0.06em] leading-[0.85] mb-2">
              Want your server featured at launch?
            </h4>
            <p className="text-sm sm:text-base font-normal text-[#0b1a0d]/80 tracking-[-0.035em] leading-[1.22] max-w-xl">
              We have no servers just yet — everything is coming soon. Fill out our quick partnership form to claim your spot in our day-one showcase.
            </p>
          </div>
          <a
            href="https://ptfsbridge.fillout.com/partnership"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#0b1a0d] hover:bg-[#153119] text-white font-bold text-sm tracking-[-0.04em] leading-none flex items-center gap-2 shrink-0 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-md group-hover:shadow-lg"
          >
            <span>Apply Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};
