/**
 * Generates a complete, zero-dependency, self-contained HTML file for PTFSbridge
 * optimized specifically for InfinityFree hosting (htdocs/index.html).
 */
export function generateInfinityFreeHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PTFSbridge — Discord RoAvgeek Network & Server Embeds</title>
  <meta name="description" content="PTFSbridge connects Roblox Aviators (RoAvgeeks) and helps flight simulator communities grow through synchronized Discord embeds and alliances." />
  <meta property="og:title" content="PTFSbridge — Roblox Aviation Discord Network" />
  <meta property="og:description" content="Grow your Roblox PTFS Discord server through automated embeds and ally with top Virtual Airlines & ATC centers." />
  <meta property="og:type" content="website" />
  
  <!-- Elms Sans Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Elms+Sans:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
  
  <!-- Tailwind CSS via CDN for pure standalone InfinityFree hosting -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              primary: '#7ED957',
              'primary-hover': '#91e56d',
              'primary-dark': '#61b33e',
              dark: '#42483a',
              'dark-light': '#555d4b',
              surface: '#262d21',
              card: '#1e241a',
              bg: '#151912'
            }
          },
          fontFamily: {
            sans: ['"Elms Sans"', 'system-ui', '-apple-system', 'sans-serif']
          }
        }
      }
    }
  </script>

  <style>
    body {
      font-family: 'Elms Sans', system-ui, -apple-system, sans-serif;
      background-color: #151912;
      color: #f1f5ee;
      overflow-x: hidden;
    }
    .aviation-grid {
      background-size: 36px 36px;
      background-image: 
        linear-gradient(to right, rgba(126, 217, 87, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(126, 217, 87, 0.05) 1px, transparent 1px);
    }
    .radar-sweep {
      background: conic-gradient(from 0deg, rgba(126, 217, 87, 0.15) 0deg, rgba(126, 217, 87, 0.01) 60deg, transparent 90deg);
      animation: sweep 6s linear infinite;
    }
    @keyframes sweep {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .discord-blurple {
      background-color: #5865F2;
    }
    .discord-blurple:hover {
      background-color: #4752C4;
    }
    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #151912;
    }
    ::-webkit-scrollbar-thumb {
      background: #42483a;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #7ED957;
    }
  </style>
</head>
<body class="aviation-grid min-h-screen flex flex-col selection:bg-[#7ED957] selection:text-[#151912]">

  <!-- Top Announcement Banner -->
  <div class="bg-[#42483a] text-xs py-2 px-4 border-b border-[#7ED957]/20 flex items-center justify-between">
    <div class="max-w-7xl mx-auto w-full flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="inline-block w-2 h-2 rounded-full bg-[#7ED957] animate-pulse"></span>
        <span class="font-medium text-emerald-100">PTFSbridge Network: 148+ Roblox PTFS Servers Synced & Online</span>
      </div>
      <div class="hidden sm:flex items-center gap-4 text-[#7ED957] font-semibold text-xs">
        <span>✈ Perth (YPPH) Center: ACTIVE</span>
        <span>•</span>
        <span>✈ Rockford (KRFD) Tower: 118.100 MHz</span>
      </div>
    </div>
  </div>

  <!-- Navigation Bar -->
  <nav class="sticky top-0 z-40 bg-[#151912]/90 backdrop-blur-md border-b border-[#42483a]/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3 group">
        <div class="w-11 h-11 rounded-xl bg-[#42483a] border border-[#7ED957]/50 flex items-center justify-center text-[#7ED957] shadow-lg shadow-[#7ED957]/10 group-hover:scale-105 transition-transform">
          <svg class="w-6 h-6 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="font-black text-2xl tracking-tight text-white">PTFS<span class="text-[#7ED957]">bridge</span></span>
            <span class="px-1.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-[#7ED957]/10 text-[#7ED957] border border-[#7ED957]/30">RoAvgeek</span>
          </div>
          <p class="text-[11px] text-[#9da595] tracking-wide">Discord Embed & Alliance Ecosystem</p>
        </div>
      </a>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-8 text-sm font-medium text-[#cdd4c7]">
        <a href="#about" class="hover:text-[#7ED957] transition-colors">How It Works</a>
        <a href="#embed-builder" class="hover:text-[#7ED957] transition-colors flex items-center gap-1.5">
          <span>Embed Studio</span>
          <span class="w-1.5 h-1.5 rounded-full bg-[#7ED957]"></span>
        </a>
        <a href="#servers" class="hover:text-[#7ED957] transition-colors">Partner Directory</a>
        <a href="#radar" class="hover:text-[#7ED957] transition-colors">PTFS Hub Radar</a>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-3">
        <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 rounded-xl bg-[#7ED957] hover:bg-[#8fe56b] text-[#151912] font-bold text-sm flex items-center gap-2 shadow-lg shadow-[#7ED957]/20 transition-all hover:translate-y-[-1px]">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
          <span>Join PTFSbridge</span>
        </a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="relative pt-12 pb-20 overflow-hidden border-b border-[#42483a]/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Left Column: Copy -->
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#42483a]/80 border border-[#7ED957]/40 text-xs font-semibold text-[#7ED957]">
            <span class="w-2 h-2 rounded-full bg-[#7ED957] animate-ping"></span>
            <span>Roblox Flight Simulator Server Expansion System</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Grow Your Server Thru <span class="text-[#7ED957] underline decoration-[#7ED957]/40 decoration-4">Embeds</span> & Connect With RoAvgeeks
          </h1>

          <p class="text-lg text-[#b8c2b0] leading-relaxed max-w-2xl">
            PTFSbridge bridges Roblox Pilot Training Flight Simulator communities. Broadcast your Virtual Airline flights, ATC towers, and recruitment bulletins across hundreds of verified partner channels with rich, interactive Discord embeds.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a href="#embed-builder" class="px-6 py-3.5 rounded-xl bg-[#7ED957] hover:bg-[#8fe56b] text-[#151912] font-black text-base shadow-xl shadow-[#7ED957]/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <span>Build Your Server Embed</span>
            </a>
            <a href="#servers" class="px-6 py-3.5 rounded-xl bg-[#42483a] hover:bg-[#525a48] text-white font-bold text-base border border-[#7ED957]/30 transition-all flex items-center gap-2">
              <svg class="w-5 h-5 text-[#7ED957]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              <span>Browse 140+ Partner Servers</span>
            </a>
          </div>

          <!-- Quick Metrics -->
          <div class="grid grid-cols-3 gap-4 pt-6 border-t border-[#42483a]/60">
            <div class="bg-[#1e241a] p-4 rounded-xl border border-[#42483a]">
              <div class="text-2xl font-black text-[#7ED957]">148+</div>
              <div class="text-xs text-[#9da595]">Partner Servers</div>
            </div>
            <div class="bg-[#1e241a] p-4 rounded-xl border border-[#42483a]">
              <div class="text-2xl font-black text-white">42.5K+</div>
              <div class="text-xs text-[#9da595]">RoAvgeeks Connected</div>
            </div>
            <div class="bg-[#1e241a] p-4 rounded-xl border border-[#42483a]">
              <div class="text-2xl font-black text-[#7ED957]">1.2M+</div>
              <div class="text-xs text-[#9da595]">Monthly Embed Views</div>
            </div>
          </div>
        </div>

        <!-- Right Column: Interactive Mini Preview -->
        <div class="lg:col-span-5">
          <div class="relative rounded-2xl bg-[#1e241a] border border-[#7ED957]/30 p-5 shadow-2xl shadow-black/60">
            <!-- Header bar of mock discord -->
            <div class="flex items-center justify-between pb-3 mb-3 border-b border-[#42483a] text-xs text-[#9da595]">
              <div class="flex items-center gap-2">
                <span class="text-base text-[#7ED957]">#</span>
                <span class="font-bold text-white">ptfs-partner-bridge</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-[#42483a] text-[#7ED957]">BOT</span>
              </div>
              <span>Today at 18:42 UTC</span>
            </div>

            <!-- Discord Embed Body -->
            <div class="rounded-lg bg-[#2b3124] border-l-4 border-[#7ED957] p-4 space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded-full bg-[#7ED957] text-[#151912] font-black flex items-center justify-center text-xs">
                    PTFS
                  </div>
                  <div>
                    <h4 class="font-bold text-white text-sm">SkyWings Virtual Airline [PTFS]</h4>
                    <p class="text-[11px] text-[#7ED957]">Official PTFSbridge Partner Server</p>
                  </div>
                </div>
              </div>

              <p class="text-xs text-[#dbe2d4] leading-relaxed">
                Calling all Roblox pilots! SkyWings is hosting a 50-player heavy flight formation departing Perth (YPPH) to Tokyo (RJTT) this Friday at 19:00 UTC. Join now to claim your captain seat!
              </p>

              <div class="grid grid-cols-2 gap-2 text-[11px] pt-1">
                <div class="bg-[#1e241a] p-2 rounded border border-[#42483a]">
                  <span class="text-[#8c9483] block text-[10px] uppercase font-bold">Main Hub</span>
                  <span class="text-white font-medium">Perth Intl (YPPH)</span>
                </div>
                <div class="bg-[#1e241a] p-2 rounded border border-[#42483a]">
                  <span class="text-[#8c9483] block text-[10px] uppercase font-bold">Pilots Needed</span>
                  <span class="text-[#7ED957] font-semibold">First Officers (A320/B777)</span>
                </div>
              </div>

              <div class="pt-2">
                <a href="#embed-builder" class="w-full block text-center py-2 rounded-lg bg-[#7ED957] hover:bg-[#8fe56b] text-[#151912] font-bold text-xs shadow-md transition-colors">
                  ✈ Join Server Via PTFSbridge
                </a>
              </div>
            </div>

            <div class="mt-3 flex items-center justify-between text-[11px] text-[#8c9483]">
              <span class="flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-[#7ED957]"></span>
                Live Cross-Embed Broadcast
              </span>
              <span>Delivered to 148 Partner Channels</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- How It Works Section -->
  <section id="about" class="py-20 bg-[#191e16] border-b border-[#42483a]/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-xs font-black uppercase tracking-widest text-[#7ED957] px-3 py-1 rounded bg-[#42483a]/60 border border-[#7ED957]/30">The Bridge Protocol</span>
        <h2 class="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
          How PTFSbridge Grows Your Roblox Aviation Community
        </h2>
        <p class="text-[#b1bba8]">
          Traditional Discord advertising channels are cluttered with spam and dead links. PTFSbridge replaces link dumping with automated, rich interactive embeds synced across allied flight communities.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Step 1 -->
        <div class="bg-[#1f261b] p-8 rounded-2xl border border-[#42483a] hover:border-[#7ED957]/50 transition-all group">
          <div class="w-12 h-12 rounded-xl bg-[#42483a] text-[#7ED957] flex items-center justify-center font-black text-xl mb-6 group-hover:scale-110 transition-transform">
            01
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Build Your Custom Embed</h3>
          <p class="text-sm text-[#a4ad9c] leading-relaxed">
            Use our built-in Embed Studio to configure your server's flight operations, hub airports (Perth, Tokyo, Rockford), recruitment status, and custom livery banners with the signature <span class="text-[#7ED957] font-semibold">#7ED957</span> accent.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="bg-[#1f261b] p-8 rounded-2xl border border-[#42483a] hover:border-[#7ED957]/50 transition-all group">
          <div class="w-12 h-12 rounded-xl bg-[#42483a] text-[#7ED957] flex items-center justify-center font-black text-xl mb-6 group-hover:scale-110 transition-transform">
            02
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Synchronized Cross-Broadcasting</h3>
          <p class="text-sm text-[#a4ad9c] leading-relaxed">
            Our Discord bridge bot syncs your embed automatically to the <code class="text-xs bg-[#151912] px-1.5 py-0.5 rounded text-[#7ED957]">#ptfs-partner-bridge</code> channels of all 148+ verified servers, reaching over 42,000 active Roblox pilots.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="bg-[#1f261b] p-8 rounded-2xl border border-[#42483a] hover:border-[#7ED957]/50 transition-all group">
          <div class="w-12 h-12 rounded-xl bg-[#42483a] text-[#7ED957] flex items-center justify-center font-black text-xl mb-6 group-hover:scale-110 transition-transform">
            03
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Attract Real RoAvgeeks</h3>
          <p class="text-sm text-[#a4ad9c] leading-relaxed">
            Gain actual Roblox aviators, type-rated pilots, and certified ATC controllers who actively participate in your group flights, checkrides, and virtual airline schedules.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Interactive Discord Embed Studio -->
  <section id="embed-builder" class="py-20 bg-[#151912] border-b border-[#42483a]/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span class="text-xs font-black uppercase tracking-widest text-[#7ED957] px-3 py-1 rounded bg-[#42483a]/60 border border-[#7ED957]/30">Live Embed Studio</span>
          <h2 class="text-3xl sm:text-4xl font-black text-white mt-3">
            Design Your PTFS Discord Embed
          </h2>
          <p class="text-[#b1bba8] text-sm mt-1">
            Test and customize exactly how your server looks when broadcasted across the PTFSbridge partner network.
          </p>
        </div>
        <div class="mt-4 md:mt-0 flex gap-2">
          <button id="copy-json-btn" class="px-4 py-2 rounded-xl bg-[#42483a] hover:bg-[#525a48] text-white text-xs font-bold border border-[#7ED957]/30 transition-all flex items-center gap-1.5">
            <svg class="w-4 h-4 text-[#7ED957]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            <span>Copy Webhook JSON</span>
          </button>
          <button id="copy-bot-cmd-btn" class="px-4 py-2 rounded-xl bg-[#7ED957] hover:bg-[#8fe56b] text-[#151912] text-xs font-black transition-all flex items-center gap-1.5 shadow-md">
            <span>Copy /bridge Command</span>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Form Controls (Left) -->
        <div class="lg:col-span-6 bg-[#1f261b] p-6 rounded-2xl border border-[#42483a] space-y-4">
          <h3 class="text-base font-bold text-white flex items-center gap-2 border-b border-[#42483a] pb-3">
            <span class="w-2.5 h-2.5 rounded-full bg-[#7ED957]"></span>
            <span>Server Embed Parameters</span>
          </h3>

          <div>
            <label class="block text-xs font-bold text-[#a4ad9c] mb-1">Server Name</label>
            <input type="text" id="embed-title-input" value="AeroPacific Virtual [PTFS]" class="w-full px-3.5 py-2.5 rounded-xl bg-[#151912] border border-[#42483a] text-white text-sm focus:border-[#7ED957] focus:outline-none" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-[#a4ad9c] mb-1">Category</label>
              <select id="embed-category-input" class="w-full px-3.5 py-2.5 rounded-xl bg-[#151912] border border-[#42483a] text-white text-sm focus:border-[#7ED957] focus:outline-none">
                <option value="Virtual Airline">Virtual Airline</option>
                <option value="Air Traffic Control (ATC)">Air Traffic Control (ATC)</option>
                <option value="Flight School / Academy">Flight School / Academy</option>
                <option value="General Aviation & STOL">General Aviation & STOL</option>
                <option value="Media & Spotting Squad">Media & Spotting Squad</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-[#a4ad9c] mb-1">Hub Airport (PTFS)</label>
              <input type="text" id="embed-hub-input" value="Perth Intl (YPPH)" class="w-full px-3.5 py-2.5 rounded-xl bg-[#151912] border border-[#42483a] text-white text-sm focus:border-[#7ED957] focus:outline-none" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-[#a4ad9c] mb-1">Embed Description / Pitch</label>
            <textarea id="embed-desc-input" rows="3" class="w-full px-3.5 py-2.5 rounded-xl bg-[#151912] border border-[#42483a] text-white text-sm focus:border-[#7ED957] focus:outline-none leading-relaxed">Official Roblox PTFS Virtual Airline hosting scheduled daily flights from Perth to Tokyo, pilot checkrides, custom ACARS bot, and active ranks. Recruiting First Officers!</textarea>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-[#a4ad9c] mb-1">Featured Aircraft / Fleet</label>
              <input type="text" id="embed-fleet-input" value="A320neo, B777-300ER, A350" class="w-full px-3.5 py-2.5 rounded-xl bg-[#151912] border border-[#42483a] text-white text-sm focus:border-[#7ED957] focus:outline-none" />
            </div>
            <div>
              <label class="block text-xs font-bold text-[#a4ad9c] mb-1">Upcoming Flight Event</label>
              <input type="text" id="embed-event-input" value="Saturday Perth Fly-In @ 19:00 UTC" class="w-full px-3.5 py-2.5 rounded-xl bg-[#151912] border border-[#42483a] text-white text-sm focus:border-[#7ED957] focus:outline-none" />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 pt-2">
            <div>
              <label class="block text-xs font-bold text-[#a4ad9c] mb-1">Accent Border Color</label>
              <div class="flex items-center gap-2">
                <input type="color" id="embed-color-picker" value="#7ED957" class="w-9 h-9 rounded cursor-pointer bg-transparent border border-[#42483a]" />
                <span class="text-xs font-mono text-[#7ED957]" id="embed-color-label">#7ED957</span>
              </div>
            </div>
            <div>
              <label class="block text-xs font-bold text-[#a4ad9c] mb-1">Active Member Count</label>
              <input type="text" id="embed-members-input" value="3,420 Aviators" class="w-full px-3.5 py-2 rounded-xl bg-[#151912] border border-[#42483a] text-white text-sm focus:border-[#7ED957] focus:outline-none" />
            </div>
          </div>
        </div>

        <!-- Live Discord Replica (Right) -->
        <div class="lg:col-span-6 flex flex-col">
          <div class="bg-[#2f3136] rounded-2xl p-6 border border-[#202225] shadow-2xl flex-1 flex flex-col justify-between">
            <div>
              <!-- Discord channel bar -->
              <div class="flex items-center justify-between pb-3 mb-4 border-b border-[#36393f] text-xs text-[#b9bbbe]">
                <div class="flex items-center gap-2">
                  <span class="text-base text-[#7ED957]">#</span>
                  <span class="font-bold text-white">ptfs-partner-bridge</span>
                  <span class="text-[10px] px-1.5 py-0.5 rounded bg-[#202225] text-[#b9bbbe]">SERVER BROADCAST</span>
                </div>
                <span>Channel Uptime: 99.9%</span>
              </div>

              <!-- Discord Message with Embed -->
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-full bg-[#42483a] border border-[#7ED957] flex items-center justify-center text-[#7ED957] font-black text-sm shrink-0">
                  PB
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-baseline gap-2 mb-1">
                    <span class="font-bold text-white text-sm hover:underline cursor-pointer">PTFSbridge Bot</span>
                    <span class="text-[10px] uppercase font-bold bg-[#5865F2] text-white px-1 rounded">BOT</span>
                    <span class="text-[11px] text-[#72767d]">Today at 18:45</span>
                  </div>

                  <!-- The Dynamic Embed Card -->
                  <div id="discord-embed-card" class="rounded bg-[#2f3136] border-l-4 border-[#7ED957] p-4 space-y-3 shadow-md max-w-xl">
                    <div class="flex items-center justify-between">
                      <div class="text-[11px] font-semibold uppercase tracking-wider text-[#7ED957]" id="preview-category">
                        Virtual Airline
                      </div>
                      <span class="text-[10px] text-[#72767d]">PTFSbridge Verified</span>
                    </div>

                    <h4 class="text-base font-bold text-white hover:underline cursor-pointer" id="preview-title">
                      AeroPacific Virtual [PTFS]
                    </h4>

                    <p class="text-xs text-[#dcddde] leading-relaxed" id="preview-desc">
                      Official Roblox PTFS Virtual Airline hosting scheduled daily flights from Perth to Tokyo, pilot checkrides, custom ACARS bot, and active ranks. Recruiting First Officers!
                    </p>

                    <!-- Embed Fields -->
                    <div class="grid grid-cols-2 gap-3 pt-2 text-xs">
                      <div>
                        <div class="text-[10px] font-bold text-[#b9bbbe] uppercase">Operating Hub</div>
                        <div class="text-white font-medium mt-0.5" id="preview-hub">Perth Intl (YPPH)</div>
                      </div>
                      <div>
                        <div class="text-[10px] font-bold text-[#b9bbbe] uppercase">Fleet Aircraft</div>
                        <div class="text-white font-medium mt-0.5" id="preview-fleet">A320neo, B777-300ER, A350</div>
                      </div>
                      <div>
                        <div class="text-[10px] font-bold text-[#b9bbbe] uppercase">Upcoming Group Flight</div>
                        <div class="text-[#7ED957] font-medium mt-0.5" id="preview-event">Saturday Perth Fly-In @ 19:00 UTC</div>
                      </div>
                      <div>
                        <div class="text-[10px] font-bold text-[#b9bbbe] uppercase">Community Size</div>
                        <div class="text-white font-medium mt-0.5" id="preview-members">3,420 Aviators</div>
                      </div>
                    </div>

                    <!-- Footer -->
                    <div class="pt-3 border-t border-[#36393f] flex items-center justify-between text-[10px] text-[#72767d]">
                      <span class="flex items-center gap-1.5">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#7ED957]"></span>
                        PTFSbridge Live Partner Bridge
                      </span>
                      <span>Roblox Pilot Training Community</span>
                    </div>
                  </div>

                  <!-- Discord Interactive Buttons below embed -->
                  <div class="flex items-center gap-2 mt-2">
                    <button class="px-3.5 py-1.5 rounded bg-[#4f545c] hover:bg-[#5d6269] text-white text-xs font-medium flex items-center gap-1.5 transition-colors">
                      <svg class="w-3.5 h-3.5 text-[#7ED957]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      <span>Join Discord Server</span>
                    </button>
                    <button class="px-3.5 py-1.5 rounded bg-[#4f545c] hover:bg-[#5d6269] text-white text-xs font-medium flex items-center gap-1.5 transition-colors">
                      <span>Roblox Group Link</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 pt-3 border-t border-[#36393f] text-xs text-[#b9bbbe] flex items-center justify-between">
              <span>Preview matches Discord v14 Embed Specification</span>
              <span class="text-[#7ED957] font-semibold">Active Sync: Enabled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Partner Server Directory -->
  <section id="servers" class="py-20 bg-[#191e16] border-b border-[#42483a]/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span class="text-xs font-black uppercase tracking-widest text-[#7ED957] px-3 py-1 rounded bg-[#42483a]/60 border border-[#7ED957]/30">The RoAvgeek Alliance</span>
          <h2 class="text-3xl sm:text-4xl font-black text-white mt-3">
            Featured PTFS Partner Communities
          </h2>
          <p class="text-[#b1bba8] text-sm mt-1">
            Discover active virtual airlines, air traffic control towers, flight academies, and screenshot crews.
          </p>
        </div>
        <div class="mt-4 md:mt-0">
          <input type="text" id="server-search-input" placeholder="Search servers, airports, routes..." class="w-full md:w-64 px-4 py-2 rounded-xl bg-[#151912] border border-[#42483a] text-sm text-white focus:border-[#7ED957] focus:outline-none" />
        </div>
      </div>

      <!-- Category Filter Pills -->
      <div class="flex flex-wrap gap-2 mb-8" id="category-pills">
        <button class="cat-pill active px-4 py-2 rounded-xl text-xs font-bold bg-[#7ED957] text-[#151912]" data-cat="all">All Servers (148+)</button>
        <button class="cat-pill px-4 py-2 rounded-xl text-xs font-bold bg-[#1f261b] text-[#c0c9b9] hover:bg-[#42483a] border border-[#42483a]" data-cat="virtual_airline">Virtual Airlines</button>
        <button class="cat-pill px-4 py-2 rounded-xl text-xs font-bold bg-[#1f261b] text-[#c0c9b9] hover:bg-[#42483a] border border-[#42483a]" data-cat="atc">Air Traffic Control</button>
        <button class="cat-pill px-4 py-2 rounded-xl text-xs font-bold bg-[#1f261b] text-[#c0c9b9] hover:bg-[#42483a] border border-[#42483a]" data-cat="flight_school">Flight Academies</button>
        <button class="cat-pill px-4 py-2 rounded-xl text-xs font-bold bg-[#1f261b] text-[#c0c9b9] hover:bg-[#42483a] border border-[#42483a]" data-cat="general_aviation">General Aviation</button>
        <button class="cat-pill px-4 py-2 rounded-xl text-xs font-bold bg-[#1f261b] text-[#c0c9b9] hover:bg-[#42483a] border border-[#42483a]" data-cat="spotting_media">Spotting & Media</button>
      </div>

      <!-- Server Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="server-cards-container">
        <!-- Card 1 -->
        <div class="server-card bg-[#1f261b] rounded-2xl border border-[#42483a] hover:border-[#7ED957]/50 p-6 flex flex-col justify-between transition-all group" data-category="virtual_airline">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="px-2.5 py-1 rounded text-[11px] font-bold bg-[#42483a] text-[#7ED957] border border-[#7ED957]/30">Virtual Airline</span>
              <span class="text-xs font-bold text-white bg-[#151912] px-2.5 py-1 rounded-full border border-[#42483a] flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-[#7ED957]"></span>
                3,420 Members
              </span>
            </div>
            <h3 class="text-xl font-bold text-white group-hover:text-[#7ED957] transition-colors">AeroPacific Virtual</h3>
            <p class="text-xs text-[#a4ad9c] mt-1 line-clamp-2">Leading Roblox Virtual Airline operating across Perth, Tokyo & Rockford with rank progressions and scheduled flights.</p>
            
            <div class="mt-4 space-y-2 text-xs border-t border-[#42483a] pt-3">
              <div class="flex items-center justify-between text-[#a4ad9c]">
                <span>Hub Airport:</span>
                <span class="text-white font-medium">Perth Intl (YPPH)</span>
              </div>
              <div class="flex items-center justify-between text-[#a4ad9c]">
                <span>Fleet:</span>
                <span class="text-white font-medium">A320neo, B777, A350</span>
              </div>
              <div class="flex items-center justify-between text-[#a4ad9c]">
                <span>Featured Route:</span>
                <span class="text-[#7ED957] font-semibold">Perth ✈ Tokyo (RJTT)</span>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-[#42483a] flex items-center gap-2">
            <a href="https://discord.gg" target="_blank" class="flex-1 py-2.5 rounded-xl bg-[#7ED957] hover:bg-[#8fe56b] text-[#151912] font-bold text-xs text-center transition-colors">
              Join Server
            </a>
            <button onclick="alert('Viewing PTFSbridge verified server record: AeroPacific Virtual. Embed active across 148 channels.')" class="px-3 py-2.5 rounded-xl bg-[#42483a] hover:bg-[#525a48] text-white text-xs font-bold border border-[#7ED957]/30">
              Details
            </button>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="server-card bg-[#1f261b] rounded-2xl border border-[#42483a] hover:border-[#7ED957]/50 p-6 flex flex-col justify-between transition-all group" data-category="atc">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="px-2.5 py-1 rounded text-[11px] font-bold bg-[#42483a] text-[#7ED957] border border-[#7ED957]/30">Air Traffic Control</span>
              <span class="text-xs font-bold text-white bg-[#151912] px-2.5 py-1 rounded-full border border-[#42483a] flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-[#7ED957] animate-pulse"></span>
                5,120 Members
              </span>
            </div>
            <h3 class="text-xl font-bold text-white group-hover:text-[#7ED957] transition-colors">PTFS Regional ATC Network</h3>
            <p class="text-xs text-[#a4ad9c] mt-1 line-clamp-2">Realistic Air Traffic Control operations for all Roblox PTFS airspaces with standardized ICAO phraseology and radar following.</p>
            
            <div class="mt-4 space-y-2 text-xs border-t border-[#42483a] pt-3">
              <div class="flex items-center justify-between text-[#a4ad9c]">
                <span>Active Frequency:</span>
                <span class="text-[#7ED957] font-semibold">Perth Ground 121.700</span>
              </div>
              <div class="flex items-center justify-between text-[#a4ad9c]">
                <span>Towers Covered:</span>
                <span class="text-white font-medium">Perth, Rockford, Tokyo</span>
              </div>
              <div class="flex items-center justify-between text-[#a4ad9c]">
                <span>Status:</span>
                <span class="text-[#7ED957] font-semibold">Radar Scope ONLINE</span>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-[#42483a] flex items-center gap-2">
            <a href="https://discord.gg" target="_blank" class="flex-1 py-2.5 rounded-xl bg-[#7ED957] hover:bg-[#8fe56b] text-[#151912] font-bold text-xs text-center transition-colors">
              Tune In Comms
            </a>
            <button onclick="alert('Viewing PTFS Regional ATC Network frequency logs.')" class="px-3 py-2.5 rounded-xl bg-[#42483a] hover:bg-[#525a48] text-white text-xs font-bold border border-[#7ED957]/30">
              Details
            </button>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="server-card bg-[#1f261b] rounded-2xl border border-[#42483a] hover:border-[#7ED957]/50 p-6 flex flex-col justify-between transition-all group" data-category="flight_school">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="px-2.5 py-1 rounded text-[11px] font-bold bg-[#42483a] text-[#7ED957] border border-[#7ED957]/30">Flight Academy</span>
              <span class="text-xs font-bold text-white bg-[#151912] px-2.5 py-1 rounded-full border border-[#42483a] flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-[#7ED957]"></span>
                2,190 Cadets
              </span>
            </div>
            <h3 class="text-xl font-bold text-white group-hover:text-[#7ED957] transition-colors">Rockford Flight Academy</h3>
            <p class="text-xs text-[#a4ad9c] mt-1 line-clamp-2">PPL, IFR, and Multi-Engine flight certifications for Roblox aviators with checkride examiners and theoretical classes.</p>
            
            <div class="mt-4 space-y-2 text-xs border-t border-[#42483a] pt-3">
              <div class="flex items-center justify-between text-[#a4ad9c]">
                <span>Home Base:</span>
                <span class="text-white font-medium">Greater Rockford (KRFD)</span>
              </div>
              <div class="flex items-center justify-between text-[#a4ad9c]">
                <span>Trainer Aircraft:</span>
                <span class="text-white font-medium">Cessna 172, Baron 58</span>
              </div>
              <div class="flex items-center justify-between text-[#a4ad9c]">
                <span>Program:</span>
                <span class="text-[#7ED957] font-semibold">Free Pilot License (PPL)</span>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-[#42483a] flex items-center gap-2">
            <a href="https://discord.gg" target="_blank" class="flex-1 py-2.5 rounded-xl bg-[#7ED957] hover:bg-[#8fe56b] text-[#151912] font-bold text-xs text-center transition-colors">
              Enroll Cadet
            </a>
            <button onclick="alert('Viewing Rockford Flight Academy syllabus.')" class="px-3 py-2.5 rounded-xl bg-[#42483a] hover:bg-[#525a48] text-white text-xs font-bold border border-[#7ED957]/30">
              Details
            </button>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="server-card bg-[#1f261b] rounded-2xl border border-[#42483a] hover:border-[#7ED957]/50 p-6 flex flex-col justify-between transition-all group" data-category="general_aviation">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="px-2.5 py-1 rounded text-[11px] font-bold bg-[#42483a] text-[#7ED957] border border-[#7ED957]/30">General Aviation</span>
              <span class="text-xs font-bold text-white bg-[#151912] px-2.5 py-1 rounded-full border border-[#42483a] flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-[#7ED957]"></span>
                1,480 Pilots
              </span>
            </div>
            <h3 class="text-xl font-bold text-white group-hover:text-[#7ED957] transition-colors">Gustaf III Island Hoppers</h3>
            <p class="text-xs text-[#a4ad9c] mt-1 line-clamp-2">Challenging short-field operations, hillside dives, and scenic Caribbean island hopping in turboprops and twin engines.</p>
            
            <div class="mt-4 space-y-2 text-xs border-t border-[#42483a] pt-3">
              <div class="flex items-center justify-between text-[#a4ad9c]">
                <span>Favorite Strip:</span>
                <span class="text-white font-medium">St. Barth Gustaf III (TFFJ)</span>
              </div>
              <div class="flex items-center justify-between text-[#a4ad9c]">
                <span>Fleet:</span>
                <span class="text-white font-medium">DHC-6 Twin Otter, Caravan</span>
              </div>
              <div class="flex items-center justify-between text-[#a4ad9c]">
                <span>Challenge:</span>
                <span class="text-[#7ED957] font-semibold">STOL Short Hill Approach</span>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-[#42483a] flex items-center gap-2">
            <a href="https://discord.gg" target="_blank" class="flex-1 py-2.5 rounded-xl bg-[#7ED957] hover:bg-[#8fe56b] text-[#151912] font-bold text-xs text-center transition-colors">
              Fly Islands
            </a>
            <button onclick="alert('Viewing Gustaf III flight schedules.')" class="px-3 py-2.5 rounded-xl bg-[#42483a] hover:bg-[#525a48] text-white text-xs font-bold border border-[#7ED957]/30">
              Details
            </button>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="server-card bg-[#1f261b] rounded-2xl border border-[#42483a] hover:border-[#7ED957]/50 p-6 flex flex-col justify-between transition-all group" data-category="spotting_media">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="px-2.5 py-1 rounded text-[11px] font-bold bg-[#42483a] text-[#7ED957] border border-[#7ED957]/30">Media & Spotting</span>
              <span class="text-xs font-bold text-white bg-[#151912] px-2.5 py-1 rounded-full border border-[#42483a] flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-[#7ED957]"></span>
                3,840 Spotters
              </span>
            </div>
            <h3 class="text-xl font-bold text-white group-hover:text-[#7ED957] transition-colors">Roblox Aviation Spotters & Media</h3>
            <p class="text-xs text-[#a4ad9c] mt-1 line-clamp-2">Aviation photography, 4K PTFS cinematics, custom plane liveries, and weekly screenshot contests for RoAvgeeks.</p>
            
            <div class="mt-4 space-y-2 text-xs border-t border-[#42483a] pt-3">
              <div class="flex items-center justify-between text-[#a4ad9c]">
                <span>Perimeter:</span>
                <span class="text-white font-medium">Tokyo Haneda (RJTT)</span>
              </div>
              <div class="flex items-center justify-between text-[#a4ad9c]">
                <span>Content:</span>
                <span class="text-white font-medium">4K Replays, Livery Packs</span>
              </div>
              <div class="flex items-center justify-between text-[#a4ad9c]">
                <span>Contest:</span>
                <span class="text-[#7ED957] font-semibold">Weekly Best Sunset Touchdown</span>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-[#42483a] flex items-center gap-2">
            <a href="https://discord.gg" target="_blank" class="flex-1 py-2.5 rounded-xl bg-[#7ED957] hover:bg-[#8fe56b] text-[#151912] font-bold text-xs text-center transition-colors">
              Submit Shots
            </a>
            <button onclick="alert('Viewing Spotters Gallery.')" class="px-3 py-2.5 rounded-xl bg-[#42483a] hover:bg-[#525a48] text-white text-xs font-bold border border-[#7ED957]/30">
              Details
            </button>
          </div>
        </div>

        <!-- Card 6 -->
        <div class="server-card bg-[#1f261b] rounded-2xl border border-[#42483a] hover:border-[#7ED957]/50 p-6 flex flex-col justify-between transition-all group" data-category="virtual_airline">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="px-2.5 py-1 rounded text-[11px] font-bold bg-[#42483a] text-[#7ED957] border border-[#7ED957]/30">Heavy Cargo VA</span>
              <span class="text-xs font-bold text-white bg-[#151912] px-2.5 py-1 rounded-full border border-[#42483a] flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-[#7ED957]"></span>
                1,950 Pilots
              </span>
            </div>
            <h3 class="text-xl font-bold text-white group-hover:text-[#7ED957] transition-colors">TransPolar Heavy Cargo</h3>
            <p class="text-xs text-[#a4ad9c] mt-1 line-clamp-2">Heavy freight, midnight hauls, and military logistics in Roblox PTFS. Operates B747-8F and C-17 Globemaster.</p>
            
            <div class="mt-4 space-y-2 text-xs border-t border-[#42483a] pt-3">
              <div class="flex items-center justify-between text-[#a4ad9c]">
                <span>Base Hub:</span>
                <span class="text-white font-medium">Air Base (EDW)</span>
              </div>
              <div class="flex items-center justify-between text-[#a4ad9c]">
                <span>Fleet:</span>
                <span class="text-white font-medium">B747-8F, C-17, An-124</span>
              </div>
              <div class="flex items-center justify-between text-[#a4ad9c]">
                <span>Logistics:</span>
                <span class="text-[#7ED957] font-semibold">Extreme High Altitude Drops</span>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-[#42483a] flex items-center gap-2">
            <a href="https://discord.gg" target="_blank" class="flex-1 py-2.5 rounded-xl bg-[#7ED957] hover:bg-[#8fe56b] text-[#151912] font-bold text-xs text-center transition-colors">
              Haul Cargo
            </a>
            <button onclick="alert('Viewing TransPolar dispatch desk.')" class="px-3 py-2.5 rounded-xl bg-[#42483a] hover:bg-[#525a48] text-white text-xs font-bold border border-[#7ED957]/30">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PTFS Live Airport Radar & Comms Board -->
  <section id="radar" class="py-20 bg-[#151912] border-b border-[#42483a]/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span class="text-xs font-black uppercase tracking-widest text-[#7ED957] px-3 py-1 rounded bg-[#42483a]/60 border border-[#7ED957]/30">Aviation Telemetry</span>
          <h2 class="text-3xl sm:text-4xl font-black text-white mt-3">
            PTFS Airport Radar & Operations Status
          </h2>
          <p class="text-[#b1bba8] text-sm mt-1">
            Real-time operational status for major Roblox flight hubs coordinated through PTFSbridge.
          </p>
        </div>
        <div class="mt-4 md:mt-0 flex items-center gap-2 text-xs text-[#7ED957] font-semibold">
          <span class="w-2.5 h-2.5 rounded-full bg-[#7ED957] animate-ping"></span>
          <span>Live Scope Feed • 6 Airspaces Tracked</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Airport 1: Perth -->
        <div class="bg-[#1f261b] p-6 rounded-2xl border border-[#42483a] relative overflow-hidden">
          <div class="flex items-center justify-between mb-4">
            <div>
              <span class="text-2xl font-black text-white">YPPH</span>
              <span class="text-xs text-[#7ED957] ml-2 font-bold">PERTH INTL</span>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#7ED957]/20 text-[#7ED957] border border-[#7ED957]/40">42 In-Bound</span>
          </div>
          <div class="space-y-2 text-xs">
            <div class="text-[#a4ad9c] flex justify-between">
              <span>Tower Frequency:</span>
              <span class="text-white font-mono font-bold">120.500 MHz</span>
            </div>
            <div class="text-[#a4ad9c] flex justify-between">
              <span>Active Runways:</span>
              <span class="text-white">RWY 03 / 21 (ILS Active)</span>
            </div>
            <div class="text-[#a4ad9c] flex justify-between">
              <span>METAR / Weather:</span>
              <span class="text-[#7ED957] font-mono">CAVOK 220@11KT</span>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-[#42483a] text-[11px] text-[#9da595]">
            Popular For: Long-haul widebody flights, major international hub
          </div>
        </div>

        <!-- Airport 2: Rockford -->
        <div class="bg-[#1f261b] p-6 rounded-2xl border border-[#42483a] relative overflow-hidden">
          <div class="flex items-center justify-between mb-4">
            <div>
              <span class="text-2xl font-black text-white">KRFD</span>
              <span class="text-xs text-[#7ED957] ml-2 font-bold">GREATER ROCKFORD</span>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#7ED957]/20 text-[#7ED957] border border-[#7ED957]/40">35 In-Bound</span>
          </div>
          <div class="space-y-2 text-xs">
            <div class="text-[#a4ad9c] flex justify-between">
              <span>Approach Frequency:</span>
              <span class="text-white font-mono font-bold">118.100 MHz</span>
            </div>
            <div class="text-[#a4ad9c] flex justify-between">
              <span>Active Runways:</span>
              <span class="text-white">RWY 07 / 25</span>
            </div>
            <div class="text-[#a4ad9c] flex justify-between">
              <span>METAR / Weather:</span>
              <span class="text-[#7ED957] font-mono">FEW035 260@14KT</span>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-[#42483a] text-[11px] text-[#9da595]">
            Popular For: Flight schools, cargo transfers, regional hops
          </div>
        </div>

        <!-- Airport 3: Tokyo -->
        <div class="bg-[#1f261b] p-6 rounded-2xl border border-[#42483a] relative overflow-hidden">
          <div class="flex items-center justify-between mb-4">
            <div>
              <span class="text-2xl font-black text-white">RJTT</span>
              <span class="text-xs text-[#7ED957] ml-2 font-bold">TOKYO HANEDA</span>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#7ED957]/20 text-[#7ED957] border border-[#7ED957]/40">58 In-Bound</span>
          </div>
          <div class="space-y-2 text-xs">
            <div class="text-[#a4ad9c] flex justify-between">
              <span>Radar Frequency:</span>
              <span class="text-white font-mono font-bold">118.720 MHz</span>
            </div>
            <div class="text-[#a4ad9c] flex justify-between">
              <span>Active Runways:</span>
              <span class="text-white">RWY 16L/34R, 04/22</span>
            </div>
            <div class="text-[#a4ad9c] flex justify-between">
              <span>METAR / Weather:</span>
              <span class="text-[#7ED957] font-mono">CLEAR 040@08KT</span>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-[#42483a] text-[11px] text-[#9da595]">
            Popular For: Heavy widebody flights (A380, B747, A350), spotter fly-ins
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Community Testimonials -->
  <section class="py-20 bg-[#191e16] border-b border-[#42483a]/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="text-xs font-black uppercase tracking-widest text-[#7ED957] px-3 py-1 rounded bg-[#42483a]/60 border border-[#7ED957]/30">RoAvgeek Voices</span>
        <h2 class="text-3xl font-black text-white mt-3">Trusted by Top Roblox Aviation Leaders</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-[#1f261b] p-6 rounded-2xl border border-[#42483a] flex flex-col justify-between">
          <p class="text-sm text-[#d4ddce] italic leading-relaxed mb-6">
            "Before PTFSbridge, getting Roblox players to join our VA was a struggle. With the synchronized embeds in the partner network, our pilot roster jumped from 300 to over 3,400 active members in 60 days."
          </p>
          <div class="flex items-center gap-3 pt-4 border-t border-[#42483a]">
            <div class="w-10 h-10 rounded-full bg-[#42483a] text-[#7ED957] font-black flex items-center justify-center text-sm">CA</div>
            <div>
              <div class="font-bold text-white text-sm">Captain_Aero</div>
              <div class="text-xs text-[#7ED957]">CEO, AeroPacific Virtual</div>
            </div>
          </div>
        </div>

        <div class="bg-[#1f261b] p-6 rounded-2xl border border-[#42483a] flex flex-col justify-between">
          <p class="text-sm text-[#d4ddce] italic leading-relaxed mb-6">
            "The automated embed broadcast lets us announce whenever Perth Tower opens. Pilots instantly see the radar frequencies and jump into the server. We have packed flight queues every single weekend."
          </p>
          <div class="flex items-center gap-3 pt-4 border-t border-[#42483a]">
            <div class="w-10 h-10 rounded-full bg-[#42483a] text-[#7ED957] font-black flex items-center justify-center text-sm">RM</div>
            <div>
              <div class="font-bold text-white text-sm">RadarControl_Max</div>
              <div class="text-xs text-[#7ED957]">Head Controller, PTFS ATC Network</div>
            </div>
          </div>
        </div>

        <div class="bg-[#1f261b] p-6 rounded-2xl border border-[#42483a] flex flex-col justify-between">
          <p class="text-sm text-[#d4ddce] italic leading-relaxed mb-6">
            "PTFSbridge is the backbone of the Roblox aviation Discord scene. Being able to share embeds across ally servers without spamming has built genuine friendships between competing airlines."
          </p>
          <div class="flex items-center gap-3 pt-4 border-t border-[#42483a]">
            <div class="w-10 h-10 rounded-full bg-[#42483a] text-[#7ED957] font-black flex items-center justify-center text-sm">AS</div>
            <div>
              <div class="font-bold text-white text-sm">AviationSierra</div>
              <div class="text-xs text-[#7ED957]">Director, RoAvgeek Spotters</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section class="py-20 bg-gradient-to-b from-[#151912] to-[#1a2116]">
    <div class="max-w-4xl mx-auto px-4 text-center space-y-6">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#42483a]/60 border border-[#7ED957]/40 text-xs font-semibold text-[#7ED957]">
        <span>Join the Fastest Growing Roblox Aviation Alliance</span>
      </div>
      <h2 class="text-4xl sm:text-5xl font-black text-white tracking-tight">
        Ready to Put Your Server on the Radar?
      </h2>
      <p class="text-[#b1bba8] text-base max-w-xl mx-auto">
        Add the PTFSbridge bot, configure your embed in 2 minutes, and start connecting with thousands of fellow RoAvgeeks today.
      </p>
      <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
        <a href="https://discord.gg" target="_blank" class="px-8 py-4 rounded-xl bg-[#7ED957] hover:bg-[#8fe56b] text-[#151912] font-black text-base shadow-xl shadow-[#7ED957]/20 transition-transform hover:scale-105">
          Join PTFSbridge on Discord
        </a>
        <a href="#embed-builder" class="px-8 py-4 rounded-xl bg-[#42483a] hover:bg-[#525a48] text-white font-bold text-base border border-[#7ED957]/30 transition-transform hover:scale-105">
          Create Server Embed
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-[#11140e] border-t border-[#42483a]/60 py-12 text-[#9da595] text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#42483a]/40">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-[#42483a] border border-[#7ED957]/50 flex items-center justify-center text-[#7ED957]">
            <svg class="w-4 h-4 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </div>
          <span class="text-base font-black text-white tracking-tight">PTFS<span class="text-[#7ED957]">bridge</span></span>
          <span class="text-[11px] text-[#727a6c]">| Community Discord Embed Network</span>
        </div>
        <div class="flex items-center gap-6">
          <a href="#about" class="hover:text-[#7ED957] transition-colors">How It Works</a>
          <a href="#embed-builder" class="hover:text-[#7ED957] transition-colors">Embed Studio</a>
          <a href="#servers" class="hover:text-[#7ED957] transition-colors">Partner Directory</a>
          <a href="#radar" class="hover:text-[#7ED957] transition-colors">Airport Radar</a>
        </div>
      </div>
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#727a6c]">
        <p>© 2026 PTFSbridge. Community-led Roblox Aviation Network. Not officially affiliated with Roblox Corporation or Pilot Training Flight Simulator.</p>
        <p>Built with <span class="text-[#7ED957]">Elms Sans</span> • Colors: #7ED957 & #42483a</p>
      </div>
    </div>
  </footer>

  <!-- Script for Dynamic Interactivity -->
  <script>
    // Live Embed Synchronizer
    const titleInput = document.getElementById('embed-title-input');
    const catInput = document.getElementById('embed-category-input');
    const hubInput = document.getElementById('embed-hub-input');
    const descInput = document.getElementById('embed-desc-input');
    const fleetInput = document.getElementById('embed-fleet-input');
    const eventInput = document.getElementById('embed-event-input');
    const colorPicker = document.getElementById('embed-color-picker');
    const membersInput = document.getElementById('embed-members-input');
    const colorLabel = document.getElementById('embed-color-label');

    const previewTitle = document.getElementById('preview-title');
    const previewCategory = document.getElementById('preview-category');
    const previewDesc = document.getElementById('preview-desc');
    const previewHub = document.getElementById('preview-hub');
    const previewFleet = document.getElementById('preview-fleet');
    const previewEvent = document.getElementById('preview-event');
    const previewMembers = document.getElementById('preview-members');
    const embedCard = document.getElementById('discord-embed-card');

    function updatePreview() {
      if (titleInput && previewTitle) previewTitle.textContent = titleInput.value || 'Server Name';
      if (catInput && previewCategory) previewCategory.textContent = catInput.value;
      if (descInput && previewDesc) previewDesc.textContent = descInput.value;
      if (hubInput && previewHub) previewHub.textContent = hubInput.value;
      if (fleetInput && previewFleet) previewFleet.textContent = fleetInput.value;
      if (eventInput && previewEvent) previewEvent.textContent = eventInput.value;
      if (membersInput && previewMembers) previewMembers.textContent = membersInput.value;
      if (colorPicker && embedCard) {
        embedCard.style.borderLeftColor = colorPicker.value;
        if (colorLabel) colorLabel.textContent = colorPicker.value.toUpperCase();
      }
    }

    [titleInput, catInput, hubInput, descInput, fleetInput, eventInput, colorPicker, membersInput].forEach(el => {
      if (el) el.addEventListener('input', updatePreview);
    });

    // Copy JSON
    document.getElementById('copy-json-btn')?.addEventListener('click', () => {
      const payload = {
        embeds: [{
          title: titleInput.value,
          description: descInput.value,
          color: parseInt(colorPicker.value.replace('#', ''), 16),
          fields: [
            { name: "Operating Hub", value: hubInput.value, inline: true },
            { name: "Fleet Aircraft", value: fleetInput.value, inline: true },
            { name: "Group Flight", value: eventInput.value, inline: true },
            { name: "Members", value: membersInput.value, inline: true }
          ],
          footer: { text: "PTFSbridge Verified Network" }
        }]
      };
      navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
      alert("Discord Webhook JSON copied to clipboard!");
    });

    // Copy bot command
    document.getElementById('copy-bot-cmd-btn')?.addEventListener('click', () => {
      const cmd = \`/bridge register name:"\${titleInput.value}" hub:"\${hubInput.value}" category:"\${catInput.value}"\`;
      navigator.clipboard.writeText(cmd);
      alert("Bot command copied: " + cmd);
    });

    // Category Filter Pills
    const pills = document.querySelectorAll('.cat-pill');
    const cards = document.querySelectorAll('.server-card');

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => {
          p.classList.remove('bg-[#7ED957]', 'text-[#151912]');
          p.classList.add('bg-[#1f261b]', 'text-[#c0c9b9]');
        });
        pill.classList.add('bg-[#7ED957]', 'text-[#151912]');
        pill.classList.remove('bg-[#1f261b]', 'text-[#c0c9b9]');

        const targetCat = pill.getAttribute('data-cat');
        cards.forEach(card => {
          if (targetCat === 'all' || card.getAttribute('data-category') === targetCat) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Search filter
    document.getElementById('server-search-input')?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? 'flex' : 'none';
      });
    });
  </script>
</body>
</html>`;
}
