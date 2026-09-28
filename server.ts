import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

let aiClient: GoogleGenAI | null = null;
function getAI(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error('GEMINI_API_KEY environment variable is required');
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

function getCommunityFallbackAnswer(lastMessage: string): string {
  const q = (lastMessage || '').toLowerCase();
  if (q.includes('discoveri')) {
    return "discoveri™ is PTFSbridge's signature embed format! Instead of messy Discord text dumps with spam bots, discoveri™ creates clean, eye-catching visual cards showcasing your server's flight focus, fleet, and upcoming group events.";
  }
  if (q.includes('partner') || q.includes('apply') || q.includes('form') || q.includes('airline')) {
    return "You can apply to be a founding partner right now! Head to our official partnership form at https://ptfsbridge.fillout.com/partnership to claim your spotlight in our day-one showcase.";
  }
  if (q.includes('bot') || q.includes('spam')) {
    return "Zero bots! PTFSbridge does not use invasive Discord bots that clutter your server channels or compromise security. Everything is organized through clean discoveri™ embed cards and verified partnerships.";
  }
  if (q.includes('discord') || q.includes('join') || q.includes('link') || q.includes('invite')) {
    return "You can join our official PTFSbridge Discord server at https://discord.gg/9PjNZzHdT to connect with fellow RoAvgeeks!";
  }
  if (q.includes('flight') || q.includes('group') || q.includes('atc') || q.includes('roblox') || q.includes('ptfs')) {
    return "PTFSbridge brings together virtual airlines, flight academies, and ATC controllers across Pilot Training Flight Simulator for coordinated co-op flights and shared skies so nobody flies alone.";
  }
  return "Hey there! I'm bridgeChat, your PTFSB Assistant! You can ask me about discoveri™ embeds, partner flights, server partnerships, or joining our Discord community at https://discord.gg/9PjNZzHdT.";
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Gemini Chatbot API Route
  app.post('/api/chat', async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Messages array is required' });
      }

      const lastUserMsg = messages[messages.length - 1]?.content || '';

      if (!process.env.GEMINI_API_KEY) {
        const fallbackText = getCommunityFallbackAnswer(lastUserMsg);
        return res.json({
          text: `${fallbackText}\n\n*(Tip: Set GEMINI_API_KEY in Settings > Secrets for unrestricted live generative responses).*`,
        });
      }

      const ai = getAI();
      const systemInstruction = `You are bridgeChat, the official PTFSB Assistant for PTFSbridge.
PTFSbridge is the premier community hub for Roblox Pilot Training Flight Simulator (PTFS) fans, flight crews, and Discord server owners!
Here are the essential facts about PTFSbridge:
- discoveri™ embeds: formatted cards showcasing community airlines, fleets, and flight hubs without using spam bots.
- Catch partner flights: co-hosting group flights with allied airlines, flight academies, and ATC sessions (Perth, Tokyo, Rockford, etc.).
- Welcoming RoAvgeek space: friendly space for PTFS fans to hang out, share liveries, and collaborate.
- We do not use bots. Everything is launching soon, and founding partner applications are open.
- Official Links:
  • Discord Server: https://discord.gg/9PjNZzHdT
  • Partnership Form: https://ptfsbridge.fillout.com/partnership
  • Roblox PTFS Game: https://www.roblox.com/games/69184822/Pilot-Training-Flight-Simulator

Tone: Energetic, friendly, knowledgeable about aviation and PTFS, concise, and helpful. Use clear formatting with bullet points when helpful. Keep responses concise so they are quick to read in chat.`;

      const contents = messages.map((m: { role: string; content: string }) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }],
      }));

      // Candidate models for graceful fallback if high demand (503 / 429) occurs
      const candidateModels = ['gemini-3.8-flash', 'gemini-3.1-flash-lite', 'gemini-flash-latest'];
      let generatedText = '';
      let lastApiError: any = null;

      for (const model of candidateModels) {
        try {
          const response = await ai.models.generateContent({
            model,
            contents,
            config: {
              systemInstruction,
              temperature: 0.7,
            },
          });
          if (response.text) {
            generatedText = response.text;
            break;
          }
        } catch (err: any) {
          lastApiError = err;
          const errMsg = err?.message || String(err);
          const isDemandOrRateLimit =
            errMsg.includes('503') ||
            errMsg.includes('high demand') ||
            errMsg.includes('UNAVAILABLE') ||
            errMsg.includes('429') ||
            errMsg.includes('RESOURCE_EXHAUSTED');

          if (isDemandOrRateLimit) {
            console.warn(`Model ${model} unavailable due to high demand. Attempting fallback model...`);
            continue;
          }
          throw err;
        }
      }

      if (!generatedText) {
        console.warn('All candidate models unavailable. Providing verified community briefing.');
        const fallbackText = getCommunityFallbackAnswer(lastUserMsg);
        return res.json({
          text: `${fallbackText}\n\n*(Note: bridgeChat responded using our verified briefing while live AI servers handle high traffic).*`,
        });
      }

      res.json({ text: generatedText });
    } catch (error: any) {
      console.error('Gemini API Error caught:', error);
      const lastUserMsg = req.body?.messages?.[req.body.messages.length - 1]?.content || '';
      const fallbackText = getCommunityFallbackAnswer(lastUserMsg);
      // Always return a graceful 200 response with verified community guidance
      return res.json({
        text: `${fallbackText}\n\n*(Note: bridgeChat is operating via verified community briefing).*`,
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`PTFSbridge server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
