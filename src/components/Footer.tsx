import React from "react";
import { Heart, ShieldCheck, Youtube, Sparkles } from "lucide-react";

interface FooterProps {
  onOpenPitchDeck: () => void;
  onOpenPledge: () => void;
  onOpenSoundboard: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPitchDeck,
  onOpenPledge,
  onOpenSoundboard
}) => {
  return (
    <footer className="bg-black text-white border-t-4 border-black mt-16 pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b-2 border-zinc-800">
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-orange-600 border-2 border-white flex items-center justify-center text-white font-black text-xl">
                ₹
              </div>
              <span className="font-heading font-black text-xl text-white uppercase tracking-tight">
                CalculateMyDahej<span className="text-orange-500">.com</span>
              </span>
            </div>
            <p className="text-xs font-bold text-slate-400 leading-relaxed">
              Satirical matrimonial valuation and startup pitch engine inspired by Satish Ray’s viral comedy sketch 
              <strong className="text-white"> "Bihari Yuva — Calculate My Dahej (CMD)"</strong>.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-black text-[10px] font-black uppercase tracking-wider border-2 border-black">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" /> 100% SARCASTIC COMEDY
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-orange-400 mb-3">
              App Modules & Features
            </h4>
            <ul className="space-y-2.5 text-xs font-bold">
              <li>
                <button onClick={onOpenPitchDeck} className="hover:text-orange-400 uppercase tracking-wider transition-colors cursor-pointer text-left">
                  🦈 Shark Tank Bihari Pitch Deck
                </button>
              </li>
              <li>
                <button onClick={onOpenSoundboard} className="hover:text-orange-400 uppercase tracking-wider transition-colors cursor-pointer text-left">
                  🎺 Shehnai & Scorpio Soundboard
                </button>
              </li>
              <li>
                <button onClick={onOpenPledge} className="hover:text-orange-400 uppercase tracking-wider text-orange-500 font-black transition-colors cursor-pointer text-left">
                  🤝 National Anti-Dowry Pledge
                </button>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/shorts/JGj5Zv86JN0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-orange-400 uppercase tracking-wider text-slate-300 transition-colors"
                >
                  <Youtube className="w-4 h-4 text-red-500" /> Watch Satish Ray Short
                </a>
              </li>
            </ul>
          </div>

          {/* Social Message & Legal Disclaimer */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-orange-400 text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-orange-500" />
              <span>Social Awareness Notice</span>
            </div>
            <p className="text-xs font-bold text-slate-400 leading-relaxed">
              Dowry is a severe social crime and strictly illegal under the Dowry Prohibition Act, 1961. 
              This website employs parody to critique matrimonial greed and promote equality.
            </p>
            <p className="text-xs font-bold text-slate-300 italic border-l-2 border-orange-500 pl-2">
              "Beti padhao, aage badhao — Dahej mat lo, aatmavishwas pao!"
            </p>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-bold text-slate-500">
          <p>© {new Date().getFullYear()} CMD (Calculate My Dahej). Built with satire & craft.</p>
          <div className="flex items-center gap-1 text-slate-400 uppercase tracking-wider">
            <span>Tribute to</span>
            <strong className="text-orange-500 font-black">Satish Ray (Bihari Yuva)</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};
