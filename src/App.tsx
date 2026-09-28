import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { HowItWorks } from './components/HowItWorks';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FadeInSection } from './components/FadeInSection';
import { BackToTop } from './components/BackToTop';
import { Chatbot } from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-[#0b1a0d] selection:text-[#a4f553] flex flex-col relative overflow-x-hidden">
      {/* Fixed Fullscreen Subtle Organic Grain Texture matching the uploaded image */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-40 grain-overlay"
        aria-hidden="true"
      />

      {/* Ambient background glows for luminous depth */}
      <div className="fixed -top-40 -left-40 w-[32rem] h-[32rem] bg-[#a4f553]/25 rounded-full blur-[110px] pointer-events-none animate-pulse duration-1000" />
      <div className="fixed top-1/2 -right-40 w-[36rem] h-[36rem] bg-[#166e2e]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-10 left-1/3 w-[28rem] h-[28rem] bg-[#0b1a0d]/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Brand Navigation */}
      <Navbar />

      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* 3 Core Pillars with scroll reveal */}
        <FadeInSection direction="up">
          <AboutSection />
        </FadeInSection>

        {/* Comparison with smooth height transition */}
        <FadeInSection direction="up" delayMs={80}>
          <HowItWorks />
        </FadeInSection>

        {/* Catchy Call to Action */}
        <FadeInSection direction="up" delayMs={80}>
          <CtaSection />
        </FadeInSection>
      </main>

      {/* Brand Footer */}
      <Footer />

      {/* bridgeChat AI Assistant */}
      <Chatbot />

      {/* Floating Back to Top button */}
      <BackToTop />
    </div>
  );
}
