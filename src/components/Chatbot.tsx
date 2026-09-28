import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, RefreshCw, Minimize2 } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome',
    role: 'assistant',
    content: "Hey there! I'm bridgeChat, your PTFSB Assistant. Ask me anything about our discoveri™ embeds, partner flights, Roblox PTFS routes, or how to get your server featured!",
    timestamp: 'Just now',
  },
];

const SUGGESTIONS = [
  "What is discoveri™?",
  "How do I apply for partnership?",
  "Tell me about partner flights",
  "Do you use Discord bots?",
];

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastPrompt, setLastPrompt] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || input).trim();
    if (!messageContent || isLoading) return;

    setLastPrompt(messageContent);
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: messageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setError(null);
    setIsLoading(true);

    try {
      // Map to payload for /api/chat
      const payloadMessages = newMessages
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      // If only welcome was there, pass user message
      if (payloadMessages.length === 0) {
        payloadMessages.push({ role: 'user', content: messageContent });
      }

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: payloadMessages }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        let rawErr = errData.error || `Server responded with ${res.status}`;
        try {
          const parsed = typeof rawErr === 'string' ? JSON.parse(rawErr) : rawErr;
          if (parsed?.error?.message) {
            rawErr = parsed.error.message;
          }
        } catch {}
        throw new Error(rawErr);
      }

      const data = await res.json();
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.text || "I'm ready for departure! What else would you like to know?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      console.warn('Chatbot fetch fallback triggered:', err);
      const fallbackMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content:
          "I'm experiencing brief turbulence with the live satellite link! While the connection stabilizes, remember that you can apply for a founding partnership at https://ptfsbridge.fillout.com/partnership or join our Discord at https://discord.gg/9PjNZzHdT.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    setMessages(INITIAL_MESSAGES);
    setError(null);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 font-sans">
      {/* Launcher Button */}
      {!isOpen && (
        <button
          id="open-chatbot-btn"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#0b1a0d] hover:bg-[#153119] text-white shadow-2xl border border-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer active:scale-95"
          aria-label="Open AI Copilot Chat"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-xl bg-[#8fe340] text-[#0b1a0d] flex items-center justify-center font-bold">
              <Bot className="w-5 h-5 animate-pulse" />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#8fe340] border-2 border-[#0b1a0d] rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#8fe340] border-2 border-[#0b1a0d] rounded-full" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold tracking-[-0.04em] leading-tight">Ask bridgeChat</span>
              <Sparkles className="w-3.5 h-3.5 text-[#8fe340]" />
            </div>
            <span className="text-[11px] text-white/70 tracking-[-0.02em] leading-none block">PTFSB Assistant</span>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          id="chatbot-window"
          className="w-[92vw] sm:w-[380px] md:w-[420px] h-[540px] max-h-[85vh] rounded-3xl bg-[#0b1a0d] text-white border border-white/20 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300"
        >
          {/* Header */}
          <div className="px-5 py-4 bg-[#102413] border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#8fe340] text-[#0b1a0d] flex items-center justify-center font-bold shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-base tracking-[-0.05em] leading-none text-white">bridgeChat</h3>
                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-[#8fe340]/20 text-[#8fe340] border border-[#8fe340]/30">
                    Gemini 3.8
                  </span>
                </div>
                <p className="text-xs text-white/70 tracking-[-0.03em] leading-none mt-1">PTFSB Assistant</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                title="Reset conversation"
                className="p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Minimize chat"
                className="p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 scrollbar-thin scrollbar-thumb-white/20">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-[#8fe340] text-[#0b1a0d] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm tracking-[-0.03em] leading-[1.22] shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-[#8fe340] text-[#0b1a0d] font-semibold rounded-br-xs'
                      : 'bg-white/10 text-white border border-white/10 rounded-bl-xs'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                  <span
                    className={`text-[10px] mt-1 block ${
                      msg.role === 'user' ? 'text-[#0b1a0d]/60 text-right' : 'text-white/50 text-left'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-white/20 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-2.5 justify-start items-center">
                <div className="w-7 h-7 rounded-lg bg-[#8fe340] text-[#0b1a0d] flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-white/10 border border-white/10 rounded-2xl px-4 py-3 text-xs text-white/80 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#8fe340] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-[#8fe340] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-[#8fe340] animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="ml-2 text-white/60">bridgeChat is calculating route...</span>
                </div>
              </div>
            )}

            {/* Error Notification with Retry */}
            {error && (
              <div className="p-3.5 rounded-2xl bg-amber-950/80 border border-amber-500/40 text-amber-100 text-xs flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <span className="leading-snug">{error}</span>
                  <button
                    type="button"
                    onClick={() => setError(null)}
                    className="text-amber-300 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Dismiss"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                {lastPrompt && (
                  <button
                    type="button"
                    onClick={() => handleSendMessage(lastPrompt)}
                    className="self-start px-3 py-1 rounded-lg bg-amber-600/60 hover:bg-amber-600 text-white font-bold text-[11px] tracking-tight transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Retry message</span>
                  </button>
                )}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-4 py-2 bg-[#102413] border-t border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
            {SUGGESTIONS.map((suggestion, idx) => (
              <button
                key={idx}
                disabled={isLoading}
                onClick={() => handleSendMessage(suggestion)}
                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#8fe340] hover:text-[#0b1a0d] text-white text-xs font-medium tracking-[-0.03em] transition-all cursor-pointer shrink-0 disabled:opacity-50"
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#0b1a0d] border-t border-white/10 flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask bridgeChat about PTFSbridge..."
              disabled={isLoading}
              className="flex-1 bg-white/10 text-white placeholder-white/50 text-sm px-4 py-2.5 rounded-xl border border-white/15 focus:outline-none focus:border-[#8fe340] tracking-[-0.03em] transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
              className="p-2.5 rounded-xl bg-[#8fe340] hover:bg-[#a4f553] text-[#0b1a0d] disabled:opacity-40 disabled:hover:bg-[#8fe340] transition-all cursor-pointer font-bold shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
