/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { CandidateFormState, ValuationBreakdown } from "./types";
import { calculateDahejValuation, FUNNY_QUOTES } from "./utils/calculator";
import { soundEffects } from "./utils/audio";
import { LanguageType, TRANSLATIONS } from "./utils/i18n";
import confetti from "canvas-confetti";

import { Navbar } from "./components/Navbar";
import { HeroBanner } from "./components/HeroBanner";
import { CalculatorForm } from "./components/CalculatorForm";
import { ValuationResult } from "./components/ValuationResult";
import { CertificateModal } from "./components/CertificateModal";
import { SasurjiNegotiator } from "./components/SasurjiNegotiator";
import { EmiCalculator } from "./components/EmiCalculator";
import { PitchDeckModal } from "./components/PitchDeckModal";
import { AntiDowryPledge } from "./components/AntiDowryPledge";
import { SoundboardDrawer } from "./components/SoundboardDrawer";
import { Footer } from "./components/Footer";

import { Quote, Sparkles, MessageCircleWarning, Award, HeartHandshake } from "lucide-react";

export default function App() {
  // Multi-language state (English, Hindi, Bhojpuri, Hinglish)
  const [language, setLanguage] = useState<LanguageType>("hinglish");
  const t = TRANSLATIONS[language];

  // Candidate form initial state
  const [formData, setFormData] = useState<CandidateFormState>({
    name: "Sonu Babua (Bihari Yuva)",
    age: 25,
    district: "patna",
    profession: "unemployed_aspirant",
    monthlyIncome: 0,
    familyExpectation: "chacha_vidhayak_ego",
    ancestralProperty: "ancestral_haveli",
    propertyType: "pustaani_khet",
    khetBigha: 20,
    instagramFollowers: 85000,
    reelPersona: "slowmo_gangster_walk",
    hairline: "thick_bollywood",
    complexion: "wheatish_hero",
    bodyType: "gym_sixpack",
    isManglik: false,
    hasKhainiHabit: false,
    isEnglishFluent: true,
    isPoliticalDebater: true,
    isVegetarianSanskari: true,
    customVehiclePreference: "fortuner"
  });

  // Calculation output state
  const [valuation, setValuation] = useState<ValuationBreakdown>(() =>
    calculateDahejValuation({
      name: "Sonu Babua (Bihari Yuva)",
      age: 25,
      district: "patna",
      profession: "unemployed_aspirant",
      monthlyIncome: 0,
      familyExpectation: "chacha_vidhayak_ego",
      ancestralProperty: "ancestral_haveli",
      propertyType: "pustaani_khet",
      khetBigha: 20,
      instagramFollowers: 85000,
      reelPersona: "slowmo_gangster_walk",
      hairline: "thick_bollywood",
      complexion: "wheatish_hero",
      bodyType: "gym_sixpack",
      isManglik: false,
      hasKhainiHabit: false,
      isEnglishFluent: true,
      isPoliticalDebater: true,
      isVegetarianSanskari: true,
      customVehiclePreference: "fortuner"
    })
  );

  const [hasCalculated, setHasCalculated] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [currencyUnit, setCurrencyUnit] = useState<"inr" | "scorpio" | "attache">("inr");

  // Modals visibility state
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isSasurjiChatOpen, setIsSasurjiChatOpen] = useState(false);
  const [isEmiPlannerOpen, setIsEmiPlannerOpen] = useState(false);
  const [isPitchDeckOpen, setIsPitchDeckOpen] = useState(false);
  const [isPledgeOpen, setIsPledgeOpen] = useState(false);
  const [isSoundboardOpen, setIsSoundboardOpen] = useState(false);

  // Quote index
  const [quoteIndex, setQuoteIndex] = useState(0);

  const handleCalculate = () => {
    setIsCalculating(true);
    soundEffects.playDholBeat();

    setTimeout(() => {
      const calculated = calculateDahejValuation(formData);
      setValuation(calculated);
      setHasCalculated(true);
      setIsCalculating(false);

      soundEffects.playShehnaiRiff();
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });

      // Scroll smoothly to results
      setTimeout(() => {
        document.getElementById("results-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }, 600);
  };

  const scrollToCalculator = () => {
    document.getElementById("calculator-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8E7] text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        currencyUnit={currencyUnit}
        setCurrencyUnit={setCurrencyUnit}
        language={language}
        setLanguage={setLanguage}
        t={t}
        onOpenPitchDeck={() => setIsPitchDeckOpen(true)}
        onOpenPledge={() => setIsPledgeOpen(true)}
        onOpenSoundboard={() => setIsSoundboardOpen(true)}
        onScrollToCalculator={scrollToCalculator}
      />

      {/* Main Hero Banner */}
      <HeroBanner onStartCalculation={scrollToCalculator} t={t} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Dynamic Satirical Quote Banner */}
        <motion.div
          whileHover={{ y: -2, x: -1, boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
          whileTap={{ y: 1, x: 1, boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)" }}
          transition={{ type: "spring", stiffness: 450, damping: 20 }}
          onClick={() => {
            setQuoteIndex((prev) => (prev + 1) % FUNNY_QUOTES.length);
            soundEffects.playCashRegister();
          }}
          className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer group"
        >
          <div className="flex items-start gap-3">
            <span className="p-2 bg-black text-white shrink-0 border border-black group-hover:rotate-6 transition-transform">
              <Quote className="w-5 h-5 text-orange-500" />
            </span>
            <div>
              <span className="text-[10px] uppercase font-black tracking-widest text-orange-600 block">
                {t.quoteWisdomTitle}
              </span>
              <p className="text-xs sm:text-sm font-bold text-black italic mt-0.5">
                {FUNNY_QUOTES[quoteIndex]}
              </p>
            </div>
          </div>
          <span className="text-xs font-black uppercase tracking-wider text-orange-600 shrink-0 hidden sm:inline">
            {t.nextQuoteBtn}
          </span>
        </motion.div>

        {/* Valuation Calculator Form */}
        <CalculatorForm
          formData={formData}
          setFormData={setFormData}
          onCalculate={handleCalculate}
          isCalculating={isCalculating}
          t={t}
        />

        {/* Valuation Results Display */}
        {hasCalculated && (
          <div id="results-section">
            <ValuationResult
              formData={formData}
              valuation={valuation}
              currencyUnit={currencyUnit}
              onOpenCertificate={() => setIsCertificateOpen(true)}
              onOpenSasurjiChat={() => setIsSasurjiChatOpen(true)}
              onOpenEmiPlanner={() => setIsEmiPlannerOpen(true)}
              onRecalculate={scrollToCalculator}
              t={t}
            />
          </div>
        )}

        {/* Sarcastic Feature Callout Cards with Framer-Motion Hover Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {/* Card 1: AI Sasurji */}
          <motion.div
            whileHover={{ y: -4, x: -3, boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ y: 2, x: 2, boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            onClick={() => {
              setIsSasurjiChatOpen(true);
              soundEffects.playCashRegister();
            }}
            className="p-6 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer group"
          >
            <div className="w-12 h-12 bg-black text-white border-2 border-black flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              👴
            </div>
            <h3 className="font-heading font-black text-lg text-black uppercase tracking-tight">
              {t.cardSasurjiTitle}
            </h3>
            <p className="text-xs font-bold text-slate-700 mt-2 leading-relaxed">
              {t.cardSasurjiDesc}
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-orange-600 mt-4 group-hover:translate-x-1.5 transition-transform">
              {t.cardSasurjiAction}
            </span>
          </motion.div>

          {/* Card 2: Shark Tank Pitch */}
          <motion.div
            whileHover={{ y: -4, x: -3, boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ y: 2, x: 2, boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            onClick={() => {
              setIsPitchDeckOpen(true);
              soundEffects.playCashRegister();
            }}
            className="p-6 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer group"
          >
            <div className="w-12 h-12 bg-black text-white border-2 border-black flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              🦈
            </div>
            <h3 className="font-heading font-black text-lg text-black uppercase tracking-tight">
              {t.cardPitchTitle}
            </h3>
            <p className="text-xs font-bold text-slate-700 mt-2 leading-relaxed">
              {t.cardPitchDesc}
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-orange-600 mt-4 group-hover:translate-x-1.5 transition-transform">
              {t.cardPitchAction}
            </span>
          </motion.div>

          {/* Card 3: Anti Dowry Pledge */}
          <motion.div
            whileHover={{ y: -4, x: -3, boxShadow: "10px 10px 0px 0px rgba(234,88,12,1)" }}
            whileTap={{ y: 2, x: 2, boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            onClick={() => {
              setIsPledgeOpen(true);
              soundEffects.playShehnaiRiff();
            }}
            className="p-6 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer group"
          >
            <div className="w-12 h-12 bg-black text-orange-500 border-2 border-black flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              🤝
            </div>
            <h3 className="font-heading font-black text-lg text-black uppercase tracking-tight">
              {t.cardPledgeTitle}
            </h3>
            <p className="text-xs font-bold text-slate-700 mt-2 leading-relaxed">
              {t.cardPledgeDesc}
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-orange-600 mt-4 group-hover:translate-x-1.5 transition-transform">
              {t.cardPledgeAction}
            </span>
          </motion.div>
        </div>
      </main>

      {/* Modals */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        formData={formData}
        valuation={valuation}
      />

      <SasurjiNegotiator
        isOpen={isSasurjiChatOpen}
        onClose={() => setIsSasurjiChatOpen(false)}
        formData={formData}
        valuation={valuation}
      />

      <EmiCalculator
        isOpen={isEmiPlannerOpen}
        onClose={() => setIsEmiPlannerOpen(false)}
        valuation={valuation}
      />

      <PitchDeckModal
        isOpen={isPitchDeckOpen}
        onClose={() => setIsPitchDeckOpen(false)}
      />

      <AntiDowryPledge
        isOpen={isPledgeOpen}
        onClose={() => setIsPledgeOpen(false)}
        t={t}
      />

      <SoundboardDrawer
        isOpen={isSoundboardOpen}
        onClose={() => setIsSoundboardOpen(false)}
      />

      {/* Footer */}
      <Footer
        onOpenPitchDeck={() => setIsPitchDeckOpen(true)}
        onOpenPledge={() => setIsPledgeOpen(true)}
        onOpenSoundboard={() => setIsSoundboardOpen(true)}
      />
    </div>
  );
}
