import React from "react";
import { motion } from "motion/react";
import { Sparkles, FileText, HeartHandshake, Volume2, Globe } from "lucide-react";
import { soundEffects } from "../utils/audio";
import { LanguageType, I18nDictionary } from "../utils/i18n";

interface NavbarProps {
  currencyUnit: "inr" | "scorpio" | "attache";
  setCurrencyUnit: (unit: "inr" | "scorpio" | "attache") => void;
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: I18nDictionary;
  onOpenPitchDeck: () => void;
  onOpenPledge: () => void;
  onOpenSoundboard: () => void;
  onScrollToCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currencyUnit,
  setCurrencyUnit,
  language,
  setLanguage,
  t,
  onOpenPitchDeck,
  onOpenPledge,
  onOpenSoundboard,
  onScrollToCalculator
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-2">
        {/* Brand */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onScrollToCalculator}
          className="flex items-baseline gap-2 cursor-pointer group"
          id="nav-brand-logo"
        >
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl sm:text-4xl font-black tracking-tighter text-orange-600 italic">CMD</span>
            <span className="hidden xs:inline text-xs sm:text-sm font-black uppercase tracking-widest text-slate-800">
              CalculateMyDahej<span className="text-orange-600">.com</span>
            </span>
          </div>
          <span className="hidden xl:inline-block px-2 py-0.5 text-[9px] font-black uppercase tracking-widest bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(234,88,12,1)]">
            {t.brandTag}
          </span>
        </motion.div>

        {/* Actions & Switchers */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Multi-Language Selector */}
          <div className="flex items-center bg-white p-1 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-xs font-black uppercase">
            <Globe className="w-3.5 h-3.5 text-orange-600 ml-1 mr-1 shrink-0" />
            <button
              onClick={() => {
                setLanguage("en");
                soundEffects.playCashRegister();
              }}
              className={`px-1.5 py-0.5 text-[11px] font-black transition-colors cursor-pointer ${
                language === "en"
                  ? "bg-black text-white"
                  : "text-slate-700 hover:text-black hover:bg-slate-100"
              }`}
              title="English"
            >
              EN
            </button>
            <button
              onClick={() => {
                setLanguage("hi");
                soundEffects.playCashRegister();
              }}
              className={`px-1.5 py-0.5 text-[11px] font-black transition-colors cursor-pointer ${
                language === "hi"
                  ? "bg-black text-white"
                  : "text-slate-700 hover:text-black hover:bg-slate-100"
              }`}
              title="हिन्दी (Hindi)"
            >
              हिन्दी
            </button>
            <button
              onClick={() => {
                setLanguage("bhojpuri");
                soundEffects.playCashRegister();
              }}
              className={`px-1.5 py-0.5 text-[11px] font-black transition-colors cursor-pointer ${
                language === "bhojpuri"
                  ? "bg-black text-white"
                  : "text-slate-700 hover:text-black hover:bg-slate-100"
              }`}
              title="भोजपुरी (Bhojpuri - Satish Ray special)"
            >
              भोजपुरी
            </button>
            <button
              onClick={() => {
                setLanguage("hinglish");
                soundEffects.playCashRegister();
              }}
              className={`px-1.5 py-0.5 text-[11px] font-black transition-colors cursor-pointer hidden md:inline-block ${
                language === "hinglish"
                  ? "bg-black text-white"
                  : "text-slate-700 hover:text-black hover:bg-slate-100"
              }`}
              title="Hinglish (Bihari Slang)"
            >
              Hinglish
            </button>
          </div>

          {/* Currency Unit Toggle */}
          <div className="hidden lg:flex items-center bg-white p-1 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-xs font-black uppercase">
            <span className="text-slate-500 px-1 text-[10px] tracking-wider">{t.navUnit}</span>
            <button
              onClick={() => {
                setCurrencyUnit("inr");
                soundEffects.playCashRegister();
              }}
              className={`px-2 py-0.5 text-xs font-black transition-colors cursor-pointer ${
                currencyUnit === "inr"
                  ? "bg-black text-white"
                  : "text-slate-700 hover:text-black hover:bg-slate-100"
              }`}
              title="Show in Indian Rupees"
            >
              ₹ INR
            </button>
            <button
              onClick={() => {
                setCurrencyUnit("scorpio");
                soundEffects.playScorpioHorn();
              }}
              className={`px-2 py-0.5 text-xs font-black transition-colors cursor-pointer ${
                currencyUnit === "scorpio"
                  ? "bg-black text-white"
                  : "text-slate-700 hover:text-black hover:bg-slate-100"
              }`}
              title="Show in Scorpio Classic Units (1 Scorpio = ₹22 Lakhs)"
            >
              🚗 SCORPIO
            </button>
            <button
              onClick={() => {
                setCurrencyUnit("attache");
                soundEffects.playCashRegister();
              }}
              className={`px-2 py-0.5 text-xs font-black transition-colors cursor-pointer ${
                currencyUnit === "attache"
                  ? "bg-black text-white"
                  : "text-slate-700 hover:text-black hover:bg-slate-100"
              }`}
              title="Show in VIP Suitcase Briefcase Units (1 Briefcase = ₹10 Lakhs)"
            >
              🧳 ATTACHE
            </button>
          </div>

          {/* Soundboard Button */}
          <motion.button
            whileHover={{ y: -2, x: -1, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            onClick={onOpenSoundboard}
            id="nav-soundboard-btn"
            className="px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs font-black uppercase tracking-wider text-black bg-white hover:bg-amber-100 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Open Bihari Yuva Soundboard"
          >
            <Volume2 className="w-4 h-4 text-orange-600" />
            <span className="hidden sm:inline">{t.navSoundboard}</span>
          </motion.button>

          {/* Pitch Deck Button */}
          <motion.button
            whileHover={{ y: -2, x: -1, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            onClick={onOpenPitchDeck}
            id="nav-pitch-deck-btn"
            className="px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs font-black uppercase tracking-wider text-black bg-orange-100 hover:bg-orange-200 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4 text-orange-700" />
            <span>{t.navPitch}</span>
          </motion.button>

          {/* Sincere Anti-Dowry Pledge Button */}
          <motion.button
            whileHover={{ y: -2, x: -1, boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ y: 1, x: 1, boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            onClick={onOpenPledge}
            id="nav-pledge-btn"
            className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-orange-600 hover:bg-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>{t.navPledge}</span>
          </motion.button>
        </div>
      </div>
    </header>
  );
};

