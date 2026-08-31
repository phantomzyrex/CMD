import React from "react";
import { motion } from "motion/react";
import { Sparkles, TrendingUp, ShieldAlert, Award, Calculator, Flame } from "lucide-react";
import { soundEffects } from "../utils/audio";
import { I18nDictionary } from "../utils/i18n";

interface HeroBannerProps {
  onStartCalculation: () => void;
  t: I18nDictionary;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onStartCalculation, t }) => {
  return (
    <div className="relative overflow-hidden bg-[#FFF8E7] pt-8 pb-10 sm:pt-10 sm:pb-12 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Ticker tape */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex items-center gap-2 overflow-hidden bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] px-3 py-1.5 text-xs font-black uppercase text-slate-900 max-w-3xl mx-auto"
        >
          <span className="flex items-center gap-1 bg-orange-600 text-white text-[10px] font-black uppercase px-2 py-0.5 tracking-wider shrink-0">
            <Flame className="w-3 h-3 animate-pulse" /> LIVE FEED
          </span>
          <div className="truncate text-slate-800 text-[11px] font-bold">
            {t.liveFeed}
          </div>
        </motion.div>

        {/* Hero Title & Pitch - Bold Typography Layout */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-black text-xs font-black uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            {t.heroBadge}
          </motion.div>

          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-black tracking-tight leading-[0.95] uppercase">
            {t.heroTitleLine1} <br />
            <span className="text-orange-600 underline decoration-black decoration-4">
              {t.heroTitleStartup}
            </span>{" "}
            {t.heroTitleLine2}
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-xl font-bold text-slate-700 max-w-2xl mx-auto leading-snug italic">
            {t.heroSubtitle}
          </p>

          {/* Sarcastic Highlights / Micro-Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-black uppercase text-black">
            <motion.div
              whileHover={{ y: -2, x: -1, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-default"
            >
              <TrendingUp className="w-4 h-4 text-orange-600" /> {t.heroMultiplierTag1}
            </motion.div>
            <motion.div
              whileHover={{ y: -2, x: -1, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-default"
            >
              <Award className="w-4 h-4 text-black" /> {t.heroMultiplierTag2}
            </motion.div>
            <motion.div
              whileHover={{ y: -2, x: -1, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-100 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-default"
            >
              <ShieldAlert className="w-4 h-4 text-orange-700" /> {t.heroMultiplierTag3}
            </motion.div>
          </div>

          {/* Primary Action Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.button
              whileHover={{ y: -3, x: -3, boxShadow: "10px 10px 0px 0px rgba(234,88,12,1)" }}
              whileTap={{ y: 2, x: 2, boxShadow: "4px 4px 0px 0px rgba(234,88,12,1)" }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              onClick={() => {
                onStartCalculation();
                soundEffects.playShehnaiRiff();
              }}
              id="hero-calculate-now-btn"
              className="w-full sm:w-auto px-8 py-5 bg-black text-white font-heading font-black text-xl sm:text-2xl uppercase tracking-tighter hover:bg-orange-600 transition-colors border-2 border-black shadow-[8px_8px_0px_0px_rgba(234,88,12,1)] flex items-center justify-center gap-3 cursor-pointer"
            >
              <Calculator className="w-6 h-6 text-orange-500" />
              <span>{t.heroCalculateBtn}</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};



