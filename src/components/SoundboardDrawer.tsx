import React from "react";
import { motion } from "motion/react";
import { X, Volume2, Sparkles } from "lucide-react";
import { soundEffects } from "../utils/audio";

interface SoundboardDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SoundboardDrawer: React.FC<SoundboardDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const soundButtons = [
    {
      label: "🎺 Wedding Shehnai",
      desc: "Authentic Shaadi Riff for Rishta Pakka",
      action: () => soundEffects.playShehnaiRiff(),
      color: "bg-amber-100 hover:bg-amber-200 border-amber-300 text-amber-900"
    },
    {
      label: "🚗 Scorpio S11 Loud Horn",
      desc: "VIP Baraat entry sound in Patna",
      action: () => soundEffects.playScorpioHorn(),
      color: "bg-orange-100 hover:bg-orange-200 border-orange-300 text-orange-950"
    },
    {
      label: "💰 Cash Register Cha-Ching",
      desc: "Briefcase opening sound effect",
      action: () => soundEffects.playCashRegister(),
      color: "bg-emerald-100 hover:bg-emerald-200 border-emerald-300 text-emerald-950"
    },
    {
      label: "🥁 Desi Dhol & Naagin Beat",
      desc: "Street dance celebration rhythm",
      action: () => soundEffects.playDholBeat(),
      color: "bg-purple-100 hover:bg-purple-200 border-purple-300 text-purple-950"
    },
    {
      label: "❌ Sasurji Rejection Buzzer",
      desc: "When groom is unemployed or bald",
      action: () => soundEffects.playBuzzer(),
      color: "bg-red-100 hover:bg-red-200 border-red-300 text-red-950"
    }
  ];

  const dialogueQuotes = [
    { title: "Aise Kaise Chalega Bhaiya", text: "“Aise kaise chalega bhaiya?! 5 saal Mukherjee Nagar me maggi khaye, ab Fortuner mangenge toh bura lag raha hai?”" },
    { title: "Chacha Bhatija Protocol", text: "“Hamare Chacha Vidhayak hain, bina 50 Scorpio ke baraat gaon ki boundary cross nahi karegi!”" },
    { title: "Kaa Ho Babua", text: "“Kaa ho babua! Aukaat pata chali ya abhi bhi lag raha hai ki FAANG ka WFH sarkari chaprasi se behtar hai?”" },
    { title: "Launda IAS Hai", text: "“Launda IAS nikaal liya hai, ab Sasurji ke 3 generation ke khet bikne tay hain!”" },
    { title: "Hypocrisy Special", text: "“Hum dahej ke sakht khilaf hain... bas ladki ke baap ne gusse me Scorpio ki chaabi fek di toh hum mana nahi kar paaye!”" },
    { title: "Rasgulla Quota", text: "“Baraat me 4 piece rasgulla per barati aur Champaran meat se kam mila toh shaadi mandap se cancel!”" },
    { title: "Bihari Yuva Pitch", text: "“CMD: Where matrimony meets FinTech, and father-in-laws meet the real market valuation!”" }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-lg bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden my-8"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-black text-white border-b-4 border-black flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-orange-500" />
            <h3 className="font-heading font-black text-base sm:text-lg uppercase tracking-tight">
              Bihari Yuva & Wedding Soundboard
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-white hover:text-orange-500 transition-colors cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Buttons Grid */}
        <div className="p-6 space-y-5 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {soundButtons.map((snd, i) => (
              <motion.button
                key={i}
                whileHover={{ y: -2, x: -2, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
                whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                onClick={snd.action}
                className="p-3.5 bg-[#FFF8E7] hover:bg-orange-100 text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-left transition-colors cursor-pointer"
              >
                <span className="font-black text-xs uppercase block">{snd.label}</span>
                <span className="text-[10px] font-bold text-slate-600 block mt-0.5">{snd.desc}</span>
              </motion.button>
            ))}
          </div>

          {/* Catchphrases */}
          <div className="border-t-2 border-black pt-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-black mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              Iconic Satish Ray Catchphrases
            </h4>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {dialogueQuotes.map((q, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -1, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
                  transition={{ type: "spring", stiffness: 450, damping: 20 }}
                  className="p-2.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs text-black"
                >
                  <span className="font-black text-orange-600 block text-[10px] uppercase tracking-wider">{q.title}</span>
                  <p className="font-bold text-black mt-0.5">{q.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
