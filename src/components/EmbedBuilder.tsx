import React, { useState } from 'react';
import { DEFAULT_EMBED_CONFIG } from '../data/mockData';
import { EmbedConfig } from '../types';
import { Copy, Check, Sparkles, Sliders, ExternalLink, RefreshCw, MessageSquare, Terminal } from 'lucide-react';

export const EmbedBuilder: React.FC = () => {
  const [config, setConfig] = useState<EmbedConfig>(DEFAULT_EMBED_CONFIG);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleTemplate = (type: 'airline' | 'atc' | 'academy' | 'stol') => {
    if (type === 'airline') {
      setConfig({
        ...config,
        serverName: 'Oceanic Express Airways [PTFS]',
        category: 'Virtual Airline',
        description: 'Scheduled transpacific & regional Roblox PTFS flights with custom flight logs, ACARS bot, pilot badges, and weekly 50-aircraft fly-ins.',
        hub: 'Perth Intl (YPPH) & Tokyo Haneda (RJTT)',
        fleet: 'A320neo, A350-900, B777-300ER',
        currentEvent: 'Mega Fly-In: Perth to Tokyo (Sunday 18:00 UTC)',
        members: '2,890 Aviators',
        accentColor: '#7ED957',
      });
    } else if (type === 'atc') {
      setConfig({
        ...config,
        serverName: 'PTFS Oceanic & Regional Radar',
        category: 'Air Traffic Control',
        description: 'Realistic ATC operations across Perth, Greater Rockford, and Tokyo. Providing standardized ICAO clearances, radar vectors, and oceanic tracking.',
        hub: 'Perth Center / Rockford Approach',
        fleet: 'Radar, Tower, Ground, Clearance Delivery',
        currentEvent: 'Perth Tower Active: 120.500 MHz (Senior Controller Online)',
        members: '4,450 Pilots & Controllers',
        accentColor: '#7ED957',
      });
    } else if (type === 'academy') {
      setConfig({
        ...config,
        serverName: 'Rockford Aviators Flight Academy',
        category: 'Flight Academy',
        description: 'Earn your Roblox Pilot License! Structured flight training, instrument rating (IFR), crosswind landing masterclasses, and certified checkrides.',
        hub: 'Greater Rockford (KRFD)',
        fleet: 'Cessna 172, Piper Archer, Baron 58',
        currentEvent: 'Ground School: VFR Navigation & Pattern Work (Friday 20:00 UTC)',
        members: '1,720 Cadets',
        accentColor: '#7ED957',
      });
    } else {
      setConfig({
        ...config,
        serverName: 'Gustaf III Island STOL Club',
        category: 'General Aviation & STOL',
        description: 'Short-field landings, hillside approaches, water runways, and twin-engine turboprops across St. Barth, Izolana, and mountain passes.',
        hub: 'St. Barth (TFFJ) & Izolana (IZO)',
        fleet: 'Twin Otter DHC-6, BN-2 Islander, Cessna Caravan',
        currentEvent: 'Island Hop Rally: 7 Runways in 60 Minutes',
        members: '1,340 Bush Pilots',
        accentColor: '#7ED957',
      });
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const getWebhookPayload = () => {
    const rawColor = parseInt(config.accentColor.replace('#', ''), 16) || 8313175;
    return JSON.stringify(
      {
        content: `✈️ **New PTFSbridge Server Spotlight** — Connect with RoAvgeeks!`,
        embeds: [
          {
            title: config.serverName,
            description: config.description,
            url: config.inviteLink,
            color: rawColor,
            fields: [
              { name: 'Category', value: config.category, inline: true },
              { name: 'Hub Airport', value: config.hub, inline: true },
              { name: 'Fleet', value: config.fleet, inline: false },
              { name: 'Active Event', value: config.currentEvent, inline: false },
              { name: 'Community Size', value: config.members, inline: true },
              { name: 'Invite Link', value: `[Join Discord](${config.inviteLink})`, inline: true },
            ],
            footer: {
              text: config.footerText,
            },
            timestamp: new Date().toISOString(),
          },
        ],
      },
      null,
      2
    );
  };

  const getBotCommand = () => {
    return `/bridge register name:"${config.serverName}" category:"${config.category}" hub:"${config.hub}" invite:"${config.inviteLink}" color:"${config.accentColor}"`;
  };

  return (
    <section id="embed-studio" className="py-20 bg-[#151912] border-b border-[#42483a]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#42483a]/60 border border-[#7ED957]/30 text-xs font-bold text-[#7ED957] uppercase tracking-wider mb-2">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Discord Embed Studio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Design Your Server's PTFSbridge Embed
            </h2>
            <p className="text-sm text-[#a4ad9c] mt-1 max-w-xl">
              Preview how your Discord community looks when syndicated across partner channels. 
              Export the Webhook JSON or register with the PTFSbridge Bot.
            </p>
          </div>

          {/* Quick Preset Buttons */}
          <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#8c9483] font-semibold mr-1">Presets:</span>
            <button
              onClick={() => handleTemplate('airline')}
              className="px-2.5 py-1.5 rounded-lg bg-[#242c1f] hover:bg-[#42483a] text-xs text-white border border-[#42483a] transition-colors cursor-pointer"
            >
              Virtual Airline
            </button>
            <button
              onClick={() => handleTemplate('atc')}
              className="px-2.5 py-1.5 rounded-lg bg-[#242c1f] hover:bg-[#42483a] text-xs text-white border border-[#42483a] transition-colors cursor-pointer"
            >
              ATC Center
            </button>
            <button
              onClick={() => handleTemplate('academy')}
              className="px-2.5 py-1.5 rounded-lg bg-[#242c1f] hover:bg-[#42483a] text-xs text-white border border-[#42483a] transition-colors cursor-pointer"
            >
              Flight School
            </button>
            <button
              onClick={() => handleTemplate('stol')}
              className="px-2.5 py-1.5 rounded-lg bg-[#242c1f] hover:bg-[#42483a] text-xs text-white border border-[#42483a] transition-colors cursor-pointer"
            >
              Island STOL
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form: Customizer Controls */}
          <div className="lg:col-span-6 bg-[#1f261b] p-6 sm:p-7 rounded-2xl border border-[#42483a] space-y-5">
            <div className="flex items-center justify-between border-b border-[#42483a] pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7ED957]"></span>
                <span>Embed Content Fields</span>
              </h3>
              <span className="text-[11px] text-[#7ED957] font-mono">Synced Live</span>
            </div>

            {/* Server Name */}
            <div>
              <label className="block text-xs font-bold text-[#b1bba8] mb-1.5">
                Server Name & Tag [PTFS]
              </label>
              <input
                type="text"
                value={config.serverName}
                onChange={(e) => setConfig({ ...config, serverName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#151912] border border-[#42483a] text-white text-sm focus:border-[#7ED957] focus:outline-none"
                placeholder="e.g. AeroPacific Virtual [PTFS]"
              />
            </div>

            {/* Category & Hub */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#b1bba8] mb-1.5">Category</label>
                <select
                  value={config.category}
                  onChange={(e) => setConfig({ ...config, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#151912] border border-[#42483a] text-white text-sm focus:border-[#7ED957] focus:outline-none"
                >
                  <option value="Virtual Airline">Virtual Airline</option>
                  <option value="Air Traffic Control">Air Traffic Control (ATC)</option>
                  <option value="Flight Academy">Flight Academy</option>
                  <option value="General Aviation & STOL">General Aviation & STOL</option>
                  <option value="Spotting & Media">Spotting & Media Squad</option>
                  <option value="Airport Authority">Airport Authority / Ground Ops</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#b1bba8] mb-1.5">Hub Airport (PTFS)</label>
                <input
                  type="text"
                  value={config.hub}
                  onChange={(e) => setConfig({ ...config, hub: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#151912] border border-[#42483a] text-white text-sm focus:border-[#7ED957] focus:outline-none"
                  placeholder="e.g. Perth Intl (YPPH)"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-bold text-[#b1bba8] mb-1.5">
                Server Description / Recruitment Pitch
              </label>
              <textarea
                rows={3}
                value={config.description}
                onChange={(e) => setConfig({ ...config, description: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#151912] border border-[#42483a] text-white text-sm focus:border-[#7ED957] focus:outline-none leading-relaxed"
                placeholder="What makes your PTFS server unique? Flight events, ranking system, training..."
              />
            </div>

            {/* Fleet & Event */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#b1bba8] mb-1.5">Fleet Aircraft</label>
                <input
                  type="text"
                  value={config.fleet}
                  onChange={(e) => setConfig({ ...config, fleet: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#151912] border border-[#42483a] text-white text-sm focus:border-[#7ED957] focus:outline-none"
                  placeholder="e.g. A320neo, B777, A350"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#b1bba8] mb-1.5">Upcoming Event</label>
                <input
                  type="text"
                  value={config.currentEvent}
                  onChange={(e) => setConfig({ ...config, currentEvent: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#151912] border border-[#42483a] text-white text-sm focus:border-[#7ED957] focus:outline-none"
                  placeholder="e.g. Group Flight: Perth to Tokyo"
                />
              </div>
            </div>

            {/* Members & Accent Color */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div>
                <label className="block text-xs font-bold text-[#b1bba8] mb-1.5">Member Count</label>
                <input
                  type="text"
                  value={config.members}
                  onChange={(e) => setConfig({ ...config, members: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#151912] border border-[#42483a] text-white text-sm focus:border-[#7ED957] focus:outline-none"
                  placeholder="e.g. 1,840 Aviators"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#b1bba8] mb-1.5">Accent Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={config.accentColor}
                    onChange={(e) => setConfig({ ...config, accentColor: e.target.value })}
                    className="w-10 h-10 rounded-xl cursor-pointer bg-transparent border border-[#42483a]"
                  />
                  <input
                    type="text"
                    value={config.accentColor}
                    onChange={(e) => setConfig({ ...config, accentColor: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#151912] border border-[#42483a] text-white font-mono text-xs focus:border-[#7ED957] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Footer Text */}
            <div>
              <label className="block text-xs font-bold text-[#b1bba8] mb-1.5">Footer Text</label>
              <input
                type="text"
                value={config.footerText}
                onChange={(e) => setConfig({ ...config, footerText: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#151912] border border-[#42483a] text-white text-xs focus:border-[#7ED957] focus:outline-none"
              />
            </div>
          </div>

          {/* Right: Authentic Discord Embed Live Replica */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="bg-[#313338] rounded-2xl p-6 sm:p-7 border border-[#1e1f22] shadow-2xl">
              {/* Discord Channel simulated header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#3b3e45] text-xs text-[#949ba4]">
                <div className="flex items-center gap-2">
                  <span className="text-base text-[#7ED957] font-bold">#</span>
                  <span className="font-bold text-white">ptfs-partner-bridge</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1e1f22] text-[#949ba4] font-semibold">
                    PARTNER FEED
                  </span>
                </div>
                <span>Today at 19:35</span>
              </div>

              {/* Bot Message Header */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#42483a] border-2 border-[#7ED957] flex items-center justify-center text-[#7ED957] font-black text-sm shrink-0 shadow">
                  PB
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-bold text-white text-sm hover:underline cursor-pointer">
                      PTFSbridge Bot
                    </span>
                    <span className="text-[9px] uppercase font-bold bg-[#5865F2] text-white px-1.5 py-0.5 rounded">
                      APP
                    </span>
                    <span className="text-[11px] text-[#949ba4]">Today at 19:35</span>
                  </div>

                  {/* Message Introduction */}
                  <p className="text-xs text-[#dbdee1] mb-2 font-medium">
                    ✈️ <strong className="text-white">PTFSbridge Partner Spotlight</strong> — Check out this verified Roblox aviation server:
                  </p>

                  {/* THE EMBED */}
                  <div
                    className="rounded-lg bg-[#2b2d31] p-4 space-y-3 shadow-md max-w-xl border-l-[5px]"
                    style={{ borderLeftColor: config.accentColor || '#7ED957' }}
                  >
                    {/* Top sub-category */}
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[11px] font-bold uppercase tracking-wider"
                        style={{ color: config.accentColor || '#7ED957' }}
                      >
                        {config.category}
                      </span>
                      <span className="text-[10px] text-[#949ba4] font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7ED957]"></span>
                        PTFSbridge Verified
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-base font-bold text-white hover:underline cursor-pointer leading-snug">
                      {config.serverName || 'Untitled Community'}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-[#dbdee1] leading-relaxed">
                      {config.description}
                    </p>

                    {/* Fields Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-2 text-xs border-t border-[#3b3e45]/50">
                      <div>
                        <div className="text-[10px] font-bold text-[#949ba4] uppercase">Operating Hub</div>
                        <div className="text-white font-medium mt-0.5">{config.hub || 'Worldwide'}</div>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-[#949ba4] uppercase">Fleet Aircraft</div>
                        <div className="text-white font-medium mt-0.5">{config.fleet || 'Various Aircraft'}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-[10px] font-bold text-[#949ba4] uppercase">Upcoming Group Flight</div>
                        <div
                          className="font-semibold mt-0.5"
                          style={{ color: config.accentColor || '#7ED957' }}
                        >
                          {config.currentEvent}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-[#949ba4] uppercase">Active Members</div>
                        <div className="text-white font-medium mt-0.5">{config.members}</div>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-[#949ba4] uppercase">Roblox Game</div>
                        <div className="text-[#7ED957] font-medium mt-0.5">Pilot Training Flight Sim</div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-3 border-t border-[#3b3e45] flex items-center justify-between text-[10px] text-[#949ba4]">
                      <span>{config.footerText}</span>
                      <span>148 Allied Servers</span>
                    </div>
                  </div>

                  {/* Action Buttons underneath embed */}
                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <button
                      onClick={() => alert(`Simulating Discord direct join to: ${config.serverName}`)}
                      className="px-3.5 py-1.5 rounded-lg bg-[#4e5058] hover:bg-[#6d6f78] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#7ED957]" />
                      <span>Join Discord Server</span>
                    </button>
                    <button
                      onClick={() => alert('Opening Roblox group portal link')}
                      className="px-3.5 py-1.5 rounded-lg bg-[#4e5058] hover:bg-[#6d6f78] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Roblox Group</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Export & Copy Bar */}
            <div className="bg-[#1f261b] p-4 rounded-xl border border-[#42483a] flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-[#a4ad9c]">
                Ready to deploy this embed across PTFSbridge?
              </div>
              <div className="flex items-center gap-2">
                <button
                  id="copy-webhook-json-btn"
                  onClick={() => copyToClipboard(getWebhookPayload(), 'json')}
                  className="px-3 py-2 rounded-xl bg-[#42483a] hover:bg-[#525a48] text-white text-xs font-bold border border-[#7ED957]/30 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedType === 'json' ? <Check className="w-3.5 h-3.5 text-[#7ED957]" /> : <Copy className="w-3.5 h-3.5 text-[#7ED957]" />}
                  <span>{copiedType === 'json' ? 'JSON Copied!' : 'Copy Webhook JSON'}</span>
                </button>

                <button
                  id="copy-bot-command-btn"
                  onClick={() => copyToClipboard(getBotCommand(), 'cmd')}
                  className="px-3 py-2 rounded-xl bg-[#7ED957] hover:bg-[#8fe56b] text-[#151912] text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  {copiedType === 'cmd' ? <Check className="w-3.5 h-3.5" /> : <Terminal className="w-3.5 h-3.5" />}
                  <span>{copiedType === 'cmd' ? 'Command Copied!' : 'Copy Bot Command'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
