import React, { useState } from "react";
import { motion } from "motion/react";
import {
  CandidateFormState,
  ValuationBreakdown
} from "../types";
import {
  Briefcase,
  Car,
  Award,
  Tv,
  UtensilsCrossed,
  Music2,
  FileCheck,
  MessageSquareQuote,
  Calculator,
  Share2,
  Check,
  AlertTriangle,
  Layers,
  HeartHandshake,
  Landmark,
  Instagram,
  Quote,
  Volume2,
  Crown,
  TrendingDown,
  Plane,
  Users2,
  Sparkles,
  ShieldAlert,
  Bike
} from "lucide-react";
import { soundEffects } from "../utils/audio";
import { I18nDictionary } from "../utils/i18n";

interface ValuationResultProps {
  formData: CandidateFormState;
  valuation: ValuationBreakdown;
  currencyUnit: "inr" | "scorpio" | "attache";
  onOpenCertificate: () => void;
  onOpenSasurjiChat: () => void;
  onOpenEmiPlanner: () => void;
  onRecalculate: () => void;
  t: I18nDictionary;
}

export const ValuationResult: React.FC<ValuationResultProps> = ({
  formData,
  valuation,
  currencyUnit,
  onOpenCertificate,
  onOpenSasurjiChat,
  onOpenEmiPlanner,
  onRecalculate,
  t
}) => {
  const [copied, setCopied] = useState(false);

  // Formatter based on selected currency unit
  const formatAmount = (valInr: number) => {
    const safeVal = typeof valInr === "number" && !isNaN(valInr) ? valInr : 0;
    if (valuation.isUdhaarMode) {
      if (currencyUnit === "scorpio") {
        return `-0.00 🚗 (0 Scorpio, Only 2nd Hand Atlas Cycle)`;
      }
      if (currencyUnit === "attache") {
        return `0 🧳 (Bore mein baandh ke Udhaar Bill)`;
      }
      return `-₹${Math.abs(safeVal).toLocaleString("en-IN")} (UDHAAR / DEBT)`;
    }

    if (currencyUnit === "scorpio") {
      const scorpios = (safeVal / 2200000).toFixed(2);
      return `${scorpios} 🚗 Scorpio`;
    }
    if (currencyUnit === "attache") {
      const attaches = (safeVal / 1000000).toFixed(2);
      return `${attaches} 🧳 VIP Attache`;
    }
    return `₹${safeVal.toLocaleString("en-IN")}`;
  };

  const handleShare = () => {
    const text = `🔥 My CMD (Calculate My Dahej) Valuation: ${formatAmount(valuation.total)} (${valuation.tierTitle})! Catchphrase: "${valuation.signatureCatchphrase}". Calculated on Satish Ray's Bihari Yuva App. Check yours now!`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    soundEffects.playCashRegister();
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden p-6 sm:p-10 ${
        valuation.isUdhaarMode ? "bg-red-50" : valuation.isBerozgarRajaBabu ? "bg-amber-50/50" : "bg-white"
      }`}
    >
      {/* Top Banner Ribbon */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b-4 border-black">
        <div className="text-center sm:text-left">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-[10px] font-black uppercase tracking-widest mb-2 ${
            valuation.isUdhaarMode ? "bg-red-600 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" : "bg-black text-white shadow-[2px_2px_0px_0px_rgba(234,88,12,1)]"
          }`}>
            {valuation.isUdhaarMode ? (
              <>
                <ShieldAlert className="w-3.5 h-3.5 text-white" /> SASURJI RECOVERY & INVOICE NOTICE
              </>
            ) : valuation.isBerozgarRajaBabu ? (
              <>
                <Crown className="w-3.5 h-3.5 text-amber-400" /> SATISH RAY'S VIP RAJA BABU SPECIAL
              </>
            ) : (
              <>
                <Check className="w-3.5 h-3.5 text-orange-500" /> VALUATION BENCHMARK CERTIFIED
              </>
            )}
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-black uppercase tracking-tight">
            Valuation Dossier: <span className="text-orange-600 underline decoration-black decoration-2">{formData.name}</span>
          </h2>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mt-1">
            Registered Serial: <span className="font-mono font-black text-black">CMD-2026-PATNA-{Math.floor(1000 + Math.random() * 9000)}</span>
          </p>
        </div>

        {/* Tier Badge */}
        <motion.div
          whileHover={{ y: -2, x: -2, boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)" }}
          transition={{ type: "spring", stiffness: 450, damping: 20 }}
          className={`px-5 py-2.5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center cursor-default ${
            valuation.isUdhaarMode ? "bg-red-200 text-red-950" : valuation.isBerozgarRajaBabu ? "bg-amber-300 text-black" : "bg-white text-black"
          }`}
        >
          <span className="text-[10px] uppercase font-black tracking-widest block text-slate-700">Asset Class</span>
          <span className="font-heading font-black text-base sm:text-lg uppercase flex items-center justify-center gap-1.5">
            {valuation.isUdhaarMode && <TrendingDown className="w-4 h-4 text-red-700" />}
            {valuation.isBerozgarRajaBabu && <Crown className="w-4 h-4 text-black" />}
            {valuation.tierTitle}
          </span>
        </motion.div>
      </div>

      {/* Signature Catchphrase Callout Banner */}
      <motion.div
        whileHover={{ y: -2, boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)" }}
        transition={{ type: "spring", stiffness: 450, damping: 20 }}
        className={`mt-6 p-4 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between gap-3 ${
          valuation.isUdhaarMode ? "bg-red-100" : "bg-[#FFF8E7]"
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="p-2 bg-black text-orange-500 border border-black">
            <Quote className="w-4 h-4" />
          </span>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-orange-600 block">
              Satish Ray's Bihari Yuva Catchphrase
            </span>
            <p className="text-sm sm:text-base font-black text-black tracking-tight">
              {valuation.signatureCatchphrase}
            </p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.15, rotate: 8, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
          whileTap={{ scale: 0.9, y: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 15 }}
          onClick={() => soundEffects.playShehnaiRiff()}
          title="Play Bihari Shehnai"
          className="p-2.5 bg-white hover:bg-orange-100 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
        >
          <Volume2 className="w-4 h-4 text-orange-600" />
        </motion.button>
      </motion.div>

      {/* Hero Number Display - Stark High-Contrast Box */}
      <motion.div
        whileHover={{ y: -3, x: -2, boxShadow: "10px 10px 0px 0px rgba(234,88,12,1)" }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`my-6 text-center p-8 sm:p-10 border-4 border-black relative overflow-hidden ${
          valuation.isUdhaarMode 
            ? "bg-red-950 text-white shadow-[8px_8px_0px_0px_rgba(185,28,28,1)]" 
            : "bg-black text-white shadow-[8px_8px_0px_0px_rgba(234,88,12,1)]"
        }`}
      >
        <div className="absolute top-3 right-4 text-[10px] font-black uppercase tracking-widest text-orange-400 font-mono border border-orange-500/50 px-2 py-0.5">
          {valuation.isUdhaarMode ? "REVERSE EBITDA / DEBT NOTICE" : "EBITDA ADJUSTED"}
        </div>
        <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-slate-300 mb-2">
          {valuation.isUdhaarMode ? t.totalUdhaarTitle : t.totalValuationTitle}
        </p>
        <div className={`font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter my-2 tabular-nums ${
          valuation.isUdhaarMode ? "text-red-400" : "text-orange-500"
        }`}>
          {formatAmount(valuation.total)}
        </div>
        
        <p className="text-sm sm:text-base font-bold text-slate-300 max-w-xl mx-auto mt-3">
          {valuation.isUdhaarMode ? (
            <span className="text-red-200">
              Sasurji says: <strong className="text-white font-black underline decoration-red-400">"Bangalore mein 45 LPA kama rahe ho, par gao mein 1 dhoor khet nahi hai!"</strong> You owe the in-laws for mental suffering.
            </span>
          ) : (
            <>
              Equivalent to <strong className="text-white font-black underline decoration-orange-500 decoration-2">{valuation.scorpioEquivalent} Scorpio Classic S11s</strong> or{" "}
              <strong className="text-white font-black underline decoration-orange-500 decoration-2">{(valuation.total / 1000000).toFixed(1)} VIP Briefcases</strong> of unsoiled cash!
            </>
          )}
        </p>

        {/* Sasurji Risk Pill */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs font-black uppercase tracking-wider"
        >
          <AlertTriangle className="w-4 h-4 text-orange-600" />
          <span>Sasurji Heart Attack Risk:</span>
          <span className={`font-black ${
            valuation.sasurjiRiskLevel.includes("Extreme") || valuation.isUdhaarMode ? "text-red-600" : "text-orange-600"
          }`}>
            {valuation.sasurjiRiskLevel}
          </span>
        </motion.div>
      </motion.div>

      {/* Satish Ray Berozgar Raja Babu Special Highlights Card */}
      {valuation.isBerozgarRajaBabu && (
        <div className="mb-8 p-5 bg-amber-200 border-3 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-2 font-heading font-black text-lg text-black uppercase tracking-tight mb-3">
            <Crown className="w-6 h-6 text-amber-900" />
            <span>👑 Satish Ray's Berozgar Raja Babu Royal Entitlements</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-[10px] font-black uppercase text-orange-600 flex items-center gap-1">
                <Plane className="w-3.5 h-3.5" /> Foreign Honeymoon Trip
              </span>
              <p className="text-xs font-black text-black mt-1">{valuation.foreignTrip || "Switzerland & Dubai All-Expense Paid"}</p>
            </div>
            <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-[10px] font-black uppercase text-orange-600 flex items-center gap-1">
                <Users2 className="w-3.5 h-3.5" /> Saali Protocol
              </span>
              <p className="text-xs font-black text-black mt-1">{valuation.saaliProtocol || "2 Dedicated Saalis for Joota Chupai"}</p>
            </div>
            <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-[10px] font-black uppercase text-orange-600 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Dulhan / Bahu Quota
              </span>
              <p className="text-xs font-black text-black mt-1">{valuation.dulhanQuota || "100% Sanskari Virgin Bahu"}</p>
            </div>
            <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-[10px] font-black uppercase text-orange-600 flex items-center gap-1">
                <Car className="w-3.5 h-3.5" /> Heavy Vehicles Fleet
              </span>
              <p className="text-xs font-black text-black mt-1">Fortuner Legender + Scorpio S11 Classic</p>
            </div>
          </div>
        </div>
      )}

      {/* Sarcastic Inputs Impact Grid */}
      <div className="mb-8">
        <h3 className="font-heading font-black text-lg sm:text-xl text-black uppercase tracking-tight mb-4 flex items-center gap-2 pb-2 border-b-2 border-black">
          <Award className="w-5 h-5 text-orange-600" />
          CMD Core Input Surcharges (Satirical Multipliers)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Family's Expectation */}
          <motion.div
            whileHover={{ y: -3, x: -2, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            className="p-4 bg-[#FFF8E7] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-default"
          >
            <div className="flex items-center justify-between text-black mb-2 pb-1 border-b border-black/20">
              <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-orange-600">
                <HeartHandshake className="w-4 h-4" /> Family Expectation
              </span>
              <span className="text-xs font-mono font-black text-black">
                +₹{(valuation.familyExpectationImpact.amount / 100000).toFixed(1)}L
              </span>
            </div>
            <p className="text-xs font-black text-black">
              {valuation.familyExpectationImpact.label}
            </p>
            <p className="text-[11px] font-bold text-slate-600 mt-1">
              {valuation.familyExpectationImpact.comment}
            </p>
          </motion.div>

          {/* Ancestral Property */}
          <motion.div
            whileHover={{ y: -3, x: -2, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            className="p-4 bg-[#FFF8E7] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-default"
          >
            <div className="flex items-center justify-between text-black mb-2 pb-1 border-b border-black/20">
              <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-orange-600">
                <Landmark className="w-4 h-4" /> Ancestral Property
              </span>
              <span className="text-xs font-mono font-black text-black">
                {valuation.ancestralPropertyImpact.amount >= 0 ? "+" : ""}
                ₹{(valuation.ancestralPropertyImpact.amount / 100000).toFixed(1)}L
              </span>
            </div>
            <p className="text-xs font-black text-black">
              {valuation.ancestralPropertyImpact.label}
            </p>
            <p className="text-[11px] font-bold text-slate-600 mt-1">
              {valuation.ancestralPropertyImpact.comment}
            </p>
          </motion.div>

          {/* Instagram Followers */}
          <motion.div
            whileHover={{ y: -3, x: -2, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            className="p-4 bg-[#FFF8E7] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-default"
          >
            <div className="flex items-center justify-between text-black mb-2 pb-1 border-b border-black/20">
              <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-orange-600">
                <Instagram className="w-4 h-4" /> Instagram Metric
              </span>
              <span className="text-xs font-mono font-black text-black">
                +₹{(valuation.instagramImpact.amount / 100000).toFixed(1)}L
              </span>
            </div>
            <p className="text-xs font-black text-black">
              {valuation.instagramImpact.label}
            </p>
            <p className="text-[11px] font-bold text-slate-600 mt-1">
              {valuation.instagramImpact.comment}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Itemized Dowry Package Breakdown */}
      <div className="mt-8">
        <h3 className="font-heading font-black text-lg sm:text-xl text-black uppercase tracking-tight mb-4 flex items-center gap-2 pb-2 border-b-2 border-black">
          <Layers className="w-5 h-5 text-orange-600" />
          {valuation.isUdhaarMode ? "Itemized Sasurji Recovery Bill (Dowry in Reverse)" : "Itemized Dowry Breakdown (The Demands Rate-Card)"}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Cash / Debt In Briefcase */}
          <motion.div
            whileHover={{ y: -3, x: -2, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex items-center justify-between text-black mb-2 pb-1 border-b border-slate-200">
              <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider">
                <Briefcase className="w-4 h-4 text-orange-600" /> 1. Cash / Debt Balance
              </span>
              <span className="text-sm font-mono font-black text-black">{formatAmount(valuation.cashInBriefcase)}</span>
            </div>
            <p className="text-xs font-bold text-slate-600">
              {valuation.isUdhaarMode ? "Groom must pay this debt to Sasurji before entering mandap." : "Fresh unsoiled ₹500 currency bundles packed inside hardtop VIP suitcase."}
            </p>
          </motion.div>

          {/* Demanded Vehicle */}
          <motion.div
            whileHover={{ y: -3, x: -2, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex items-center justify-between text-black mb-2 pb-1 border-b border-slate-200">
              <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider">
                {valuation.isUdhaarMode ? <Bike className="w-4 h-4 text-red-600" /> : <Car className="w-4 h-4 text-orange-600" />} 2. Vehicle Segment
              </span>
              <span className="text-sm font-mono font-black text-black">{formatAmount(valuation.vehicleValue)}</span>
            </div>
            <p className="text-xs font-black text-black uppercase">{valuation.vehicleName}</p>
            <p className="text-[11px] font-bold text-slate-500 mt-0.5">
              {valuation.isUdhaarMode ? "Rusted bell with flat tire and loose chain." : "With full tank petrol and ribbon on bonnet."}
            </p>
          </motion.div>

          {/* Gold & Jewellery */}
          <motion.div
            whileHover={{ y: -3, x: -2, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex items-center justify-between text-black mb-2 pb-1 border-b border-slate-200">
              <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider">
                <Award className="w-4 h-4 text-orange-600" /> 3. Gold & Jewels ({valuation.goldTola} Tola)
              </span>
              <span className="text-sm font-mono font-black text-black">{formatAmount(valuation.goldValue)}</span>
            </div>
            <p className="text-xs font-bold text-slate-600">
              {valuation.isUdhaarMode ? "0 Tola gold. Only 1 brass ring from local mela." : "Kanthi gold chain, 3 heavy rings, bracelet, and Tanishq gold coin set."}
            </p>
          </motion.div>

          {/* Electronics & Home Appliances */}
          <motion.div
            whileHover={{ y: -3, x: -2, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex items-center justify-between text-black mb-2 pb-1 border-b border-slate-200">
              <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider">
                <Tv className="w-4 h-4 text-orange-600" /> 4. Electronics Package
              </span>
              <span className="text-sm font-mono font-black text-black">{formatAmount(valuation.electronicsValue)}</span>
            </div>
            <p className="text-xs font-bold text-slate-600">
              {valuation.isUdhaarMode ? "14-inch Black & White TV with aluminium foil antenna." : "55\" Sony Bravia 4K TV, 1.5 Ton Split AC, Double Door Refrigerator, Washing Machine."}
            </p>
          </motion.div>

          {/* Furniture & Bedroom Set */}
          <motion.div
            whileHover={{ y: -3, x: -2, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex items-center justify-between text-black mb-2 pb-1 border-b border-slate-200">
              <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider">
                <Briefcase className="w-4 h-4 text-orange-600" /> 5. Furniture & Cot
              </span>
              <span className="text-sm font-mono font-black text-black">{formatAmount(valuation.furnitureValue)}</span>
            </div>
            <p className="text-xs font-bold text-slate-600">
              {valuation.isUdhaarMode ? "Old plastic khatiya (cot) with loose niwar." : "Sheesham Wood King Bed, Godrej Steel Almirah (Triple Locker), 6-seater Dining Set."}
            </p>
          </motion.div>

          {/* Baraat Bhoj & Catering */}
          <motion.div
            whileHover={{ y: -3, x: -2, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex items-center justify-between text-black mb-2 pb-1 border-b border-slate-200">
              <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider">
                <UtensilsCrossed className="w-4 h-4 text-orange-600" /> 6. Baraat Bhoj
              </span>
              <span className="text-sm font-mono font-black text-black">{formatAmount(valuation.cateringValue)}</span>
            </div>
            <p className="text-xs font-bold text-slate-600">
              {valuation.isUdhaarMode ? "1 stale samosa + lukewarm water per Barati." : "500 Barati Champaran Ahuna Mutton, Paneer Pasanda, and 4 piece Rasgulla quota."}
            </p>
          </motion.div>

          {/* Band Baaja & DJ */}
          <motion.div
            whileHover={{ y: -3, x: -2, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:col-span-2 lg:col-span-3"
          >
            <div className="flex items-center justify-between text-black mb-2 pb-1 border-b border-slate-200">
              <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider">
                <Music2 className="w-4 h-4 text-orange-600" /> 7. Band Baaja, Ghodi & DJ Rath
              </span>
              <span className="text-sm font-mono font-black text-black">{formatAmount(valuation.bandBaajaValue)}</span>
            </div>
            <p className="text-xs font-bold text-slate-600">
              {valuation.isUdhaarMode ? "1 Dholak player with broken stick playing sorrowful tunes." : "15-piece Brass Band with generator trolley, white Ghodi with umbrella lights, and Naagin dance DJ setup."}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Action Command Center - Bold Neo-Brutalist Buttons */}
      <div className="mt-8 pt-6 border-t-4 border-black flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Certificate Button */}
          <motion.button
            whileHover={{ y: -2, x: -2, boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ y: 1, x: 1, boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            onClick={() => {
              onOpenCertificate();
              soundEffects.playShehnaiRiff();
            }}
            id="btn-open-valuation-certificate"
            className="px-4 py-3 bg-orange-600 hover:bg-black text-white text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 transition-colors cursor-pointer"
          >
            <FileCheck className="w-4 h-4" />
            <span>{t.btnCertificate}</span>
          </motion.button>

          {/* AI Sasurji Negotiator Button */}
          <motion.button
            whileHover={{ y: -2, x: -2, boxShadow: "6px 6px 0px 0px rgba(234,88,12,1)" }}
            whileTap={{ y: 1, x: 1, boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            onClick={() => {
              onOpenSasurjiChat();
              soundEffects.playCashRegister();
            }}
            id="btn-negotiate-sasurji"
            className="px-4 py-3 bg-black hover:bg-orange-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 transition-colors cursor-pointer"
          >
            <MessageSquareQuote className="w-4 h-4 text-orange-500" />
            <span>{t.btnNegotiate}</span>
          </motion.button>

          {/* EMI & Loan Planner Button */}
          <motion.button
            whileHover={{ y: -2, x: -2, boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ y: 1, x: 1, boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            onClick={onOpenEmiPlanner}
            id="btn-dowry-emi-planner"
            className="px-4 py-3 bg-white hover:bg-amber-100 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-orange-600" />
            <span>{t.btnEmiPlanner}</span>
          </motion.button>
        </div>

        {/* Share & Recalculate */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <motion.button
            whileHover={{ y: -2, x: -2, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            onClick={handleShare}
            id="btn-share-valuation"
            className="px-4 py-3 bg-white hover:bg-slate-100 text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" /> Copied!
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-black" /> {t.btnShare}
              </>
            )}
          </motion.button>

          <motion.button
            whileHover={{ y: -2, x: -2, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            onClick={onRecalculate}
            id="btn-recalculate-valuation"
            className="px-4 py-3 bg-white hover:bg-slate-100 text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-xs sm:text-sm font-black uppercase tracking-wider transition-colors cursor-pointer"
          >
            {t.btnModify}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
