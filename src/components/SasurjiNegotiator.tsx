import React, { useState, useRef, useEffect } from "react";
import { CandidateFormState, ValuationBreakdown, SasurjiMessage } from "../types";
import { X, Send, Bot, User, Sparkles, RefreshCw, AlertCircle, ArrowRight, CornerDownLeft } from "lucide-react";
import { soundEffects } from "../utils/audio";

interface SasurjiNegotiatorProps {
  isOpen: boolean;
  onClose: () => void;
  formData: CandidateFormState;
  valuation: ValuationBreakdown;
}

export const SasurjiNegotiator: React.FC<SasurjiNegotiatorProps> = ({
  isOpen,
  onClose,
  formData,
  valuation
}) => {
  const [messages, setMessages] = useState<SasurjiMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentOffer, setCurrentOffer] = useState(valuation?.total || 0);
  const [sasurjiOffer, setSasurjiOffer] = useState(Math.round((valuation?.total || 0) * 0.5));
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize initial message when modal opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const totalVal = valuation?.total || 0;
      const initialGreeting: SasurjiMessage = {
        id: "msg-1",
        role: "sasurji",
        content: `Namaskar babu ${formData.name}! Hamari beti MA first class pass hai aur tum CMD par ₹${totalVal.toLocaleString("en-IN")} ka dahej demand kar rahe ho? Pehle aukaat aur salary slip dikhao, tab baat aage badhegi!`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        sentiment: "stubborn",
        counterOffer: Math.round(totalVal * 0.55)
      };
      setMessages([initialGreeting]);
      setSasurjiOffer(Math.round(totalVal * 0.55));
    }
  }, [isOpen, formData, valuation]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim() || isLoading) return;

    soundEffects.playCashRegister();

    const userMsg: SasurjiMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    const updatedHistory = [...messages, userMsg];
    setMessages(updatedHistory);
    setInputText("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/gemini/negotiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedHistory,
          candidateData: formData,
          currentOffer: currentOffer
        })
      });

      const data = await res.json();
      const botMsg: SasurjiMessage = {
        id: `sasurji-${Date.now()}`,
        role: "sasurji",
        content: data.reply || "Arey babu, dahej mangte sharam nahi aati?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        sentiment: data.sentiment || "stubborn",
        counterOffer: data.counterOffer || sasurjiOffer
      };

      if (data.counterOffer) {
        setSasurjiOffer(data.counterOffer);
      }

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      const fallbackMsg: SasurjiMessage = {
        id: `sasurji-${Date.now()}`,
        role: "sasurji",
        content: "Arey babua! Network thoda slow hai par hamara dil pakka hai — 15 lakh cash aur ek Hero Splendor se zyada ek rupiya nahi milega!",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        sentiment: "stubborn",
        counterOffer: Math.round(valuation.total * 0.4)
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickRebuttals = [
    "Arey Sasurji, humaara BPSC Rank top 50 me hai!",
    "Chacha Vidhayak hain, bina Scorpio baraat nahi niklegi!",
    "Chalo 5 tola sona aur AC me 2 lakh discount de dete hain!",
    "Hamari beti ko rani bana ke rakhenge, thoda budget badhaiye!"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col h-[90vh] max-h-[700px] animate-fadeIn">
        {/* Header */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 bg-black text-white border-b-4 border-black flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] flex items-center justify-center text-xl">
              👴
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-black text-base sm:text-lg uppercase tracking-tight">
                  Shri Ramakant Singh (AI Sasurji)
                </h3>
                <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-widest bg-orange-600 text-white border border-black">
                  LIVE BOT
                </span>
              </div>
              <p className="text-xs font-bold text-slate-300">
                Bride's Father • Expert in emotional bargaining & scrutiny
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white hover:text-orange-500 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Live Negotiation Deal Meter */}
        <div className="bg-[#FFF8E7] px-4 py-2.5 border-b-2 border-black flex items-center justify-between text-xs font-black uppercase text-black">
          <div>
            <span className="text-slate-500 block text-[9px] tracking-wider">Demanded Dahej</span>
            <span className="text-orange-600 font-black">₹{(currentOffer || 0).toLocaleString("en-IN")}</span>
          </div>

          <div className="text-center px-3 py-1 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-slate-500 block text-[9px] uppercase tracking-wider">Gap</span>
            <span className="text-black font-mono font-black">₹{Math.max(0, (currentOffer || 0) - (sasurjiOffer || 0)).toLocaleString("en-IN")}</span>
          </div>

          <div className="text-right">
            <span className="text-slate-500 block text-[9px] tracking-wider">Sasurji Counter</span>
            <span className="text-black font-black">₹{(sasurjiOffer || 0).toLocaleString("en-IN")}</span>
          </div>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-100">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${
                msg.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center text-xs font-black shrink-0 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                  msg.role === "user"
                    ? "bg-black text-white"
                    : "bg-orange-500 text-white"
                }`}
              >
                {msg.role === "user" ? <User className="w-4 h-4" /> : "👴"}
              </div>

              <div
                className={`max-w-[80%] px-4 py-3 text-xs sm:text-sm font-bold leading-relaxed border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${
                  msg.role === "user"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                <p>{msg.content}</p>
                {msg.counterOffer != null && msg.role === "sasurji" && (
                  <div className="mt-2 pt-2 border-t-2 border-black text-[11px] font-black uppercase text-black flex items-center gap-1.5">
                    <span>⚡ Revised Bid:</span>
                    <span className="bg-[#FFF8E7] px-2 py-0.5 border border-black font-mono font-black">
                      ₹{(msg.counterOffer || 0).toLocaleString("en-IN")}
                    </span>
                  </div>
                )}
                <span
                  className={`block text-[10px] mt-1 font-bold ${
                    msg.role === "user" ? "text-orange-400 text-right" : "text-slate-500"
                  }`}
                >
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-black font-bold text-xs italic bg-white p-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] max-w-xs">
              <RefreshCw className="w-4 h-4 animate-spin text-orange-600" />
              <span>Sasurji is calculating khet mortgage in Darbhanga...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Rebuttals Row */}
        <div className="px-4 py-2 bg-[#FFF8E7] border-t-2 border-black overflow-x-auto flex items-center gap-2 text-xs">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 shrink-0">
            Dialogue:
          </span>
          {quickRebuttals.map((reb, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(reb)}
              disabled={isLoading}
              className="px-2.5 py-1 bg-white hover:bg-orange-100 text-black border-2 border-black text-[10px] font-black uppercase tracking-wider shrink-0 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
            >
              {reb}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-3 sm:p-4 bg-white border-t-4 border-black flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your rebuttal or counter-demand to Sasurji..."
            className="flex-1 px-4 py-3 border-2 border-black bg-white text-slate-900 text-sm font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] focus:outline-none"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isLoading}
            className="px-5 py-3 bg-black text-white hover:bg-orange-600 disabled:opacity-50 font-black uppercase text-xs sm:text-sm border-2 border-black shadow-[3px_3px_0px_0px_rgba(234,88,12,1)] flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4 text-orange-500" />
            <span className="hidden sm:inline">Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};
