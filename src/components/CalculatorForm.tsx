import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CandidateFormState,
  ProfessionType,
  DistrictType,
  FamilyExpectationType,
  AncestralPropertyType,
  ReelPersonaType,
  HairlineType,
  ComplexionType,
  BodyType
} from "../types";
import {
  PROFESSION_CONFIG,
  DISTRICT_MULTIPLIERS,
  FAMILY_EXPECTATION_CONFIG,
  ANCESTRAL_PROPERTY_CONFIG,
  REEL_PERSONA_CONFIG,
  VEHICLE_DETAILS
} from "../utils/calculator";
import {
  User,
  Briefcase,
  Landmark,
  Smile,
  Sparkles,
  RefreshCw,
  CheckCircle2,
  Crown,
  TrendingDown,
  AlertTriangle,
  Flame,
  Laugh
} from "lucide-react";
import { soundEffects } from "../utils/audio";
import { I18nDictionary } from "../utils/i18n";

interface CalculatorFormProps {
  formData: CandidateFormState;
  setFormData: React.Dispatch<React.SetStateAction<CandidateFormState>>;
  onCalculate: () => void;
  isCalculating: boolean;
  t: I18nDictionary;
}

export const CalculatorForm: React.FC<CalculatorFormProps> = ({
  formData,
  setFormData,
  onCalculate,
  isCalculating,
  t
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

  // Validate fields with witty sarcastic rules
  const validateForm = (data: CandidateFormState = formData): Record<string, string> => {
    const errs: Record<string, string> = {};

    // Name Validation
    if (!data.name || !data.name.trim()) {
      errs.name = t.errorNameEmpty;
    } else if (data.name.trim().length < 3) {
      errs.name = t.errorNameTooShort;
    }

    // Age Validation
    if (data.age === undefined || isNaN(data.age) || data.age < 21) {
      errs.age = t.errorAgeTooYoung;
    } else if (data.age > 55) {
      errs.age = t.errorAgeTooOld;
    }

    // Income Validation
    if (data.monthlyIncome < 0) {
      errs.monthlyIncome = t.errorIncomeNegative;
    } else if (data.monthlyIncome > 5000000) {
      errs.monthlyIncome = t.errorIncomeTooHigh;
    }

    // Khet (Agricultural Land) Validation
    if (data.khetBigha < 0) {
      errs.khetBigha = t.errorKhetNegative;
    } else if (data.khetBigha > 500) {
      errs.khetBigha = t.errorKhetTooHigh;
    }

    // Instagram Followers Validation
    if (data.instagramFollowers < 0) {
      errs.instagramFollowers = t.errorInstaNegative;
    }

    return errs;
  };

  // Field change handler with live validation after first attempt
  const handleFieldChange = <K extends keyof CandidateFormState>(key: K, value: CandidateFormState[K]) => {
    const updated = { ...formData, [key]: value };
    setFormData(updated);

    if (hasAttemptedSubmit) {
      const errs = validateForm(updated);
      setErrors(errs);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      soundEffects.playDholBeat();
      // Scroll to error banner smoothly
      const banner = document.getElementById("form-validation-banner");
      if (banner) {
        banner.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setErrors({});
    onCalculate();
  };

  // Preset loader for Satish Ray funny archetypes & fast testing
  const loadPreset = (preset: "berozgar_raja" | "corporate_udhaar" | "ias" | "bpsc" | "chacha" | "influencer") => {
    soundEffects.playCashRegister();
    setErrors({});
    if (preset === "berozgar_raja") {
      // Satish Ray's Legendary BEROZGAR RAJA BABU (Berozgar + other things better = high dahej, jewels, cars, foreign trip, 2 saalis, virgin bahu quota)
      setFormData({
        name: "Sonu Babua (Berozgar Raja Babu - Satish Ray Archetype)",
        age: 24,
        district: "patna",
        profession: "unemployed_aspirant",
        monthlyIncome: 0,
        familyExpectation: "chacha_vidhayak_ego",
        ancestralProperty: "ancestral_haveli",
        propertyType: "pustaani_khet",
        khetBigha: 25,
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
    } else if (preset === "corporate_udhaar") {
      // Satish Ray's Corporate Majdoor in Udhaar (High salary + lacks other things = negative dahej / udhaar, 2nd hand cycle, old TV, cot, stale samosa)
      setFormData({
        name: "Abhinav Dev (Senior FAANG Dev @ 45 LPA in Bangalore)",
        age: 29,
        district: "delhi_ncr_nri",
        profession: "faang_it_dev",
        monthlyIncome: 280000,
        familyExpectation: "humko_kuch_nahi_chahiye",
        ancestralProperty: "none",
        propertyType: "none",
        khetBigha: 0,
        instagramFollowers: 320,
        reelPersona: "tech_vlogger_gadgets",
        hairline: "receding_stress",
        complexion: "wheatish_hero",
        bodyType: "family_pack_tond",
        isManglik: true,
        hasKhainiHabit: false,
        isEnglishFluent: true,
        isPoliticalDebater: false,
        isVegetarianSanskari: false,
        customVehiclePreference: "atlas_cycle"
      });
    } else if (preset === "ias") {
      setFormData({
        name: "Akash Kumar (IAS AIR 1)",
        age: 26,
        district: "patna",
        profession: "upsc_ias_ips",
        monthlyIncome: 120000,
        familyExpectation: "humko_kuch_nahi_chahiye",
        ancestralProperty: "highway_plot",
        propertyType: "highway_plot",
        khetBigha: 15,
        instagramFollowers: 125000,
        reelPersona: "studygram_upsc_notes",
        hairline: "thick_bollywood",
        complexion: "milky_white",
        bodyType: "fit_normal",
        isManglik: false,
        hasKhainiHabit: false,
        isEnglishFluent: true,
        isPoliticalDebater: true,
        isVegetarianSanskari: true,
        customVehiclePreference: "fortuner"
      });
    } else if (preset === "bpsc") {
      setFormData({
        name: "Rajnish Pandey (SDM)",
        age: 28,
        district: "darbhanga",
        profession: "bpsc_pcs",
        monthlyIncome: 85000,
        familyExpectation: "kewal_aashirwad_aur_scorpio",
        ancestralProperty: "pustaani_khet",
        propertyType: "pustaani_khet",
        khetBigha: 12,
        instagramFollowers: 35000,
        reelPersona: "slowmo_gangster_walk",
        hairline: "thick_bollywood",
        complexion: "wheatish_hero",
        bodyType: "bihari_pehelwan",
        isManglik: false,
        hasKhainiHabit: false,
        isEnglishFluent: true,
        isPoliticalDebater: true,
        isVegetarianSanskari: false,
        customVehiclePreference: "scorpio_classic"
      });
    } else if (preset === "chacha") {
      setFormData({
        name: "Munna Singh (Vidhayak Bhatija)",
        age: 25,
        district: "gorakhpur",
        profession: "chacha_vidhayak",
        monthlyIncome: 300000,
        familyExpectation: "chacha_vidhayak_ego",
        ancestralProperty: "ancestral_haveli",
        propertyType: "highway_plot",
        khetBigha: 25,
        instagramFollowers: 240000,
        reelPersona: "slowmo_gangster_walk",
        hairline: "thick_bollywood",
        complexion: "wheatish_hero",
        bodyType: "bihari_pehelwan",
        isManglik: false,
        hasKhainiHabit: true,
        isEnglishFluent: false,
        isPoliticalDebater: true,
        isVegetarianSanskari: false,
        customVehiclePreference: "scorpio_classic"
      });
    } else if (preset === "influencer") {
      setFormData({
        name: "Bunty Star (Viral Reel Creator)",
        age: 23,
        district: "patna",
        profession: "startup_founder",
        monthlyIncome: 150000,
        familyExpectation: "padosi_competition",
        ancestralProperty: "patna_flat",
        propertyType: "patna_flat",
        khetBigha: 2,
        instagramFollowers: 750000,
        reelPersona: "bhojpuri_viral_dancer",
        hairline: "thick_bollywood",
        complexion: "wheatish_hero",
        bodyType: "gym_sixpack",
        isManglik: false,
        hasKhainiHabit: false,
        isEnglishFluent: true,
        isPoliticalDebater: false,
        isVegetarianSanskari: false,
        customVehiclePreference: "fortuner"
      });
    }
  };

  return (
    <div id="calculator-section" className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-10">
      {/* Header with Presets */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b-4 border-black">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="p-2 bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(234,88,12,1)]">
              <Briefcase className="w-5 h-5 text-orange-500" />
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-black uppercase tracking-tight">
              {t.formTitle}
            </h2>
          </div>
          <p className="text-sm font-bold text-slate-700 mt-1">
            {t.formSubtitle}
          </p>
        </div>

        {/* Quick Satish Ray Presets */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-black uppercase tracking-widest text-slate-500 mr-1">{t.presetsLabel}</span>
          
          <motion.button
            type="button"
            whileHover={{ y: -2, x: -2, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            onClick={() => loadPreset("berozgar_raja")}
            className="px-2.5 py-1 text-xs font-black uppercase bg-amber-400 hover:bg-amber-300 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer flex items-center gap-1"
          >
            <Crown className="w-3.5 h-3.5 text-black" />
            {t.presetBerozgarRaja}
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ y: -2, x: -2, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            onClick={() => loadPreset("corporate_udhaar")}
            className="px-2.5 py-1 text-xs font-black uppercase bg-red-100 hover:bg-red-200 text-red-900 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer flex items-center gap-1"
          >
            <TrendingDown className="w-3.5 h-3.5 text-red-600" />
            {t.presetCorporateUdhaar}
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ y: -2, x: -2, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            onClick={() => loadPreset("ias")}
            className="px-2.5 py-1 text-xs font-black uppercase bg-white hover:bg-amber-100 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
          >
            {t.presetIas}
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ y: -2, x: -2, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            onClick={() => loadPreset("bpsc")}
            className="px-2.5 py-1 text-xs font-black uppercase bg-orange-100 hover:bg-orange-200 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
          >
            {t.presetBpsc}
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ y: -2, x: -2, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            onClick={() => loadPreset("chacha")}
            className="px-2.5 py-1 text-xs font-black uppercase bg-rose-100 hover:bg-rose-200 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
          >
            {t.presetChacha}
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ y: -2, x: -2, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            onClick={() => loadPreset("influencer")}
            className="px-2.5 py-1 text-xs font-black uppercase bg-pink-100 hover:bg-pink-200 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
          >
            {t.presetInfluencer}
          </motion.button>
        </div>
      </div>

      {/* Sarcastic Error Banner when Validation Fails */}
      <AnimatePresence>
        {Object.keys(errors).length > 0 && (
          <motion.div
            id="form-validation-banner"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 450, damping: 22 }}
            className="mt-6 p-4 sm:p-5 bg-red-500 text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex items-start gap-3">
              <span className="p-2 bg-black text-white shrink-0 border-2 border-black">
                <AlertTriangle className="w-5 h-5 text-amber-300 animate-bounce" />
              </span>
              <div className="flex-1">
                <h3 className="font-heading font-black text-base sm:text-lg uppercase tracking-tight text-white flex items-center gap-2">
                  <span>{t.validationErrorTitle}</span>
                  <span className="text-xs bg-black text-amber-300 px-2 py-0.5 font-mono">
                    {Object.keys(errors).length} {Object.keys(errors).length === 1 ? "Error" : "Errors"}
                  </span>
                </h3>
                <p className="text-xs sm:text-sm font-bold text-red-100 mt-1">
                  {t.validationErrorSubtitle}
                </p>
                <ul className="mt-3 space-y-1 text-xs font-black text-black bg-white p-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {Object.entries(errors).map(([key, msg]) => (
                    <li key={key} className="flex items-start gap-1.5">
                      <span className="text-red-600">❌</span>
                      <span>{msg}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form
        noValidate
        onSubmit={handleFormSubmit}
        className="mt-8 space-y-8"
      >
        {/* Section 1: Candidate Bio */}
        <div>
          <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest text-black mb-4 pb-2 border-b-2 border-black flex items-center gap-2">
            <User className="w-4 h-4 text-orange-600" />
            {t.sectionProfile}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Name */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-500">
                  {t.labelName}
                </label>
                {!errors.name && formData.name.trim().length >= 3 && hasAttemptedSubmit && (
                  <span className="text-[10px] font-black text-emerald-700 uppercase flex items-center gap-0.5">
                    <CheckCircle2 className="w-3 h-3" /> OK
                  </span>
                )}
              </div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleFieldChange("name", e.target.value)}
                className={`w-full border-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-2.5 text-sm font-bold focus:outline-none transition-colors ${
                  errors.name
                    ? "bg-red-50 border-red-600 text-red-950 focus:bg-red-100"
                    : "bg-white border-black text-black focus:bg-orange-50"
                }`}
                placeholder="e.g. Sonu Babua"
                id="input-candidate-name"
              />
              {errors.name && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1.5 p-2 bg-red-100 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-start gap-1.5 text-xs font-bold text-red-950"
                >
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{errors.name}</span>
                </motion.div>
              )}
            </div>

            {/* Age */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-500">
                  {t.labelAge}
                </label>
                {!errors.age && formData.age >= 21 && formData.age <= 55 && hasAttemptedSubmit && (
                  <span className="text-[10px] font-black text-emerald-700 uppercase flex items-center gap-0.5">
                    <CheckCircle2 className="w-3 h-3" /> OK
                  </span>
                )}
              </div>
              <input
                type="number"
                value={isNaN(formData.age) ? "" : formData.age}
                onChange={(e) => {
                  const val = e.target.value === "" ? NaN : parseInt(e.target.value, 10);
                  handleFieldChange("age", val);
                }}
                className={`w-full border-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-2.5 text-sm font-bold focus:outline-none transition-colors ${
                  errors.age
                    ? "bg-red-50 border-red-600 text-red-950 focus:bg-red-100"
                    : "bg-white border-black text-black focus:bg-orange-50"
                }`}
                id="input-candidate-age"
              />
              {errors.age && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1.5 p-2 bg-red-100 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-start gap-1.5 text-xs font-bold text-red-950"
                >
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{errors.age}</span>
                </motion.div>
              )}
            </div>

            {/* District */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-1.5">
                {t.labelDistrict}
              </label>
              <select
                value={formData.district}
                onChange={(e) => handleFieldChange("district", e.target.value as DistrictType)}
                className="w-full bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-2.5 text-sm font-bold text-black focus:outline-none focus:bg-orange-50 cursor-pointer"
                id="select-candidate-district"
              >
                {Object.entries(DISTRICT_MULTIPLIERS).map(([key, config]) => (
                  <option key={key} value={key}>
                    {config.label} ({config.multiplier}x Multiplier)
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: Profession & Income */}
        <div>
          <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest text-black mb-4 pb-2 border-b-2 border-black flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-orange-600" />
            {t.sectionCareer}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Profession */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-1.5">
                {t.labelProfession}
              </label>
              <select
                value={formData.profession}
                onChange={(e) => {
                  const newProf = e.target.value as ProfessionType;
                  const cfg = PROFESSION_CONFIG[newProf];
                  setFormData({
                    ...formData,
                    profession: newProf,
                    customVehiclePreference: (cfg?.defaultVehicle?.toLowerCase()?.includes("fortuner") ? "fortuner" : "scorpio_classic") as any
                  });
                }}
                className="w-full bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-2.5 text-sm font-bold text-black focus:outline-none focus:bg-orange-50 cursor-pointer"
                id="select-candidate-profession"
              >
                {Object.entries(PROFESSION_CONFIG).map(([key, config]) => (
                  <option key={key} value={key}>
                    {config.label} — {config.tier} (Base Cash: ₹{((config.baseCash || 0) / 100000).toFixed(1)}L)
                  </option>
                ))}
              </select>
            </div>

            {/* Monthly Income */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-500">
                  {t.labelMonthlyIncome}
                </label>
                {!errors.monthlyIncome && formData.monthlyIncome >= 0 && hasAttemptedSubmit && (
                  <span className="text-[10px] font-black text-emerald-700 uppercase flex items-center gap-0.5">
                    <CheckCircle2 className="w-3 h-3" /> OK
                  </span>
                )}
              </div>
              <input
                type="number"
                step={5000}
                value={isNaN(formData.monthlyIncome) ? "" : formData.monthlyIncome}
                onChange={(e) => {
                  const val = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
                  handleFieldChange("monthlyIncome", val);
                }}
                className={`w-full border-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-2.5 text-sm font-bold focus:outline-none transition-colors ${
                  errors.monthlyIncome
                    ? "bg-red-50 border-red-600 text-red-950 focus:bg-red-100"
                    : "bg-white border-black text-black focus:bg-orange-50"
                }`}
                placeholder="0 for Aspirants"
                id="input-candidate-income"
              />
              {errors.monthlyIncome && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1.5 p-2 bg-red-100 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-start gap-1.5 text-xs font-bold text-red-950"
                >
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{errors.monthlyIncome}</span>
                </motion.div>
              )}
            </div>

            {/* Family Expectation */}
            <div className="sm:col-span-2 lg:col-span-3">
              <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-1.5">
                {t.labelFamilyExpectation}
              </label>
              <select
                value={formData.familyExpectation}
                onChange={(e) => handleFieldChange("familyExpectation", e.target.value as FamilyExpectationType)}
                className="w-full bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-2.5 text-sm font-bold text-black focus:outline-none focus:bg-orange-50 cursor-pointer"
                id="select-candidate-expectation"
              >
                {Object.entries(FAMILY_EXPECTATION_CONFIG).map(([key, config]) => (
                  <option key={key} value={key}>
                    {config.label} (+₹{((config.amount || 0) / 100000).toFixed(1)}L Demanded)
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Section 3: Ancestral Wealth & Social Stardom */}
        <div>
          <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest text-black mb-4 pb-2 border-b-2 border-black flex items-center gap-2">
            <Landmark className="w-4 h-4 text-orange-600" />
            {t.sectionAssets}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Ancestral Holding */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-1.5">
                {t.labelAncestralProperty}
              </label>
              <select
                value={formData.ancestralProperty}
                onChange={(e) => handleFieldChange("ancestralProperty", e.target.value as AncestralPropertyType)}
                className="w-full bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-2.5 text-sm font-bold text-black focus:outline-none focus:bg-orange-50 cursor-pointer"
                id="select-ancestral-property"
              >
                {Object.entries(ANCESTRAL_PROPERTY_CONFIG).map(([key, config]) => (
                  <option key={key} value={key}>
                    {config.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Khet Bigha (Agricultural land) */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-500">
                  {t.labelKhetBigha}
                </label>
                {!errors.khetBigha && formData.khetBigha >= 0 && formData.khetBigha <= 500 && hasAttemptedSubmit && (
                  <span className="text-[10px] font-black text-emerald-700 uppercase flex items-center gap-0.5">
                    <CheckCircle2 className="w-3 h-3" /> OK
                  </span>
                )}
              </div>
              <input
                type="number"
                value={isNaN(formData.khetBigha) ? "" : formData.khetBigha}
                onChange={(e) => {
                  const val = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
                  handleFieldChange("khetBigha", val);
                }}
                className={`w-full border-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-2.5 text-sm font-bold focus:outline-none transition-colors ${
                  errors.khetBigha
                    ? "bg-red-50 border-red-600 text-red-950 focus:bg-red-100"
                    : "bg-white border-black text-black focus:bg-orange-50"
                }`}
                id="input-candidate-khet"
              />
              {errors.khetBigha && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1.5 p-2 bg-red-100 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-start gap-1.5 text-xs font-bold text-red-950"
                >
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{errors.khetBigha}</span>
                </motion.div>
              )}
            </div>

            {/* Instagram Followers */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-500">
                  {t.labelInstaFollowers}
                </label>
                {!errors.instagramFollowers && formData.instagramFollowers >= 0 && hasAttemptedSubmit && (
                  <span className="text-[10px] font-black text-emerald-700 uppercase flex items-center gap-0.5">
                    <CheckCircle2 className="w-3 h-3" /> OK
                  </span>
                )}
              </div>
              <input
                type="number"
                value={isNaN(formData.instagramFollowers) ? "" : formData.instagramFollowers}
                onChange={(e) => {
                  const val = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
                  handleFieldChange("instagramFollowers", val);
                }}
                className={`w-full border-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-2.5 text-sm font-bold focus:outline-none transition-colors ${
                  errors.instagramFollowers
                    ? "bg-red-50 border-red-600 text-red-950 focus:bg-red-100"
                    : "bg-white border-black text-black focus:bg-orange-50"
                }`}
                placeholder="e.g. 85000"
                id="input-instagram-followers"
              />
              {errors.instagramFollowers && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1.5 p-2 bg-red-100 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-start gap-1.5 text-xs font-bold text-red-950"
                >
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{errors.instagramFollowers}</span>
                </motion.div>
              )}
            </div>

            {/* Reel Persona */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-1.5">
                {t.labelReelPersona}
              </label>
              <select
                value={formData.reelPersona}
                onChange={(e) => handleFieldChange("reelPersona", e.target.value as ReelPersonaType)}
                className="w-full bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-2.5 text-sm font-bold text-black focus:outline-none focus:bg-orange-50 cursor-pointer"
                id="select-reel-persona"
              >
                {Object.entries(REEL_PERSONA_CONFIG).map(([key, config]) => (
                  <option key={key} value={key}>
                    {config.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Section 4: Physical Attributes & Sarcastic Traits */}
        <div>
          <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest text-black mb-4 pb-2 border-b-2 border-black flex items-center gap-2">
            <Smile className="w-4 h-4 text-orange-600" />
            {t.sectionLooks}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Hairline */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-1.5">
                {t.labelHairline}
              </label>
              <select
                value={formData.hairline}
                onChange={(e) => setFormData({ ...formData, hairline: e.target.value as HairlineType })}
                className="w-full bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-2.5 text-sm font-bold text-black focus:outline-none focus:bg-orange-50 cursor-pointer"
                id="select-candidate-hairline"
              >
                <option value="thick_bollywood">Thick Bollywood Hair (+₹3.5L)</option>
                <option value="receding_stress">Receding Stress Hairline (-₹2.5L)</option>
                <option value="bald_topi_mandate">Bald / Topi Mandate (-₹6L)</option>
              </select>
            </div>

            {/* Complexion */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-1.5">
                {t.labelComplexion}
              </label>
              <select
                value={formData.complexion}
                onChange={(e) => setFormData({ ...formData, complexion: e.target.value as ComplexionType })}
                className="w-full bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-2.5 text-sm font-bold text-black focus:outline-none focus:bg-orange-50 cursor-pointer"
                id="select-candidate-complexion"
              >
                <option value="milky_white">Milky Fair / Doodh-Jaisa (+₹3L)</option>
                <option value="wheatish_hero">Wheatish Bihari Hero (+₹1L)</option>
                <option value="sun_kissed_ganga">Sun-kissed Ganga Tan (-₹50k)</option>
              </select>
            </div>

            {/* Body Type */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-1.5">
                {t.labelBodyType}
              </label>
              <select
                value={formData.bodyType}
                onChange={(e) => setFormData({ ...formData, bodyType: e.target.value as BodyType })}
                className="w-full bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-2.5 text-sm font-bold text-black focus:outline-none focus:bg-orange-50 cursor-pointer"
                id="select-candidate-bodytype"
              >
                <option value="gym_sixpack">Gym Six-Pack (+₹4L)</option>
                <option value="bihari_pehelwan">Bihari Pehelwan / Desi Akhada (+₹2.5L)</option>
                <option value="fit_normal">Normal Fit (+₹0L)</option>
                <option value="family_pack_tond">Family-Pack Tond / Belly (-₹2L)</option>
              </select>
            </div>
          </div>

          {/* Preferred Vehicle */}
          <div className="mt-4">
            <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-1.5">
              {t.labelVehiclePref}
            </label>
            <select
              value={formData.customVehiclePreference}
              onChange={(e) => setFormData({ ...formData, customVehiclePreference: e.target.value as any })}
              className="w-full bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-2.5 text-sm font-bold text-black focus:outline-none focus:bg-orange-50 cursor-pointer"
              id="select-vehicle-preference"
            >
              {Object.entries(VEHICLE_DETAILS).map(([key, config]) => (
                <option key={key} value={key}>
                  {config.name} (Valued at ₹{((config.value || 0) / 100000).toFixed(1)}L)
                </option>
              ))}
            </select>
          </div>

          {/* Sarcastic Cultural Checkboxes */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Manglik */}
            <motion.label
              whileHover={{ y: -2, x: -2, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
              whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className={`flex items-start gap-3 p-3.5 border-2 border-black cursor-pointer transition-colors ${
                formData.isManglik ? "bg-orange-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black" : "bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-slate-700 hover:bg-slate-50"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.isManglik}
                onChange={(e) => setFormData({ ...formData, isManglik: e.target.checked })}
                className="mt-0.5 accent-black w-4 h-4"
                id="checkbox-manglik"
              />
              <div className="text-xs">
                <span className="font-black uppercase tracking-wider block">{t.labelManglik}</span>
                <span className="text-[11px] font-bold text-slate-600">Panditji pooja penalty applied (-₹4 Lakhs).</span>
              </div>
            </motion.label>

            {/* Khaini */}
            <motion.label
              whileHover={{ y: -2, x: -2, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
              whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className={`flex items-start gap-3 p-3.5 border-2 border-black cursor-pointer transition-colors ${
                formData.hasKhainiHabit ? "bg-orange-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black" : "bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-slate-700 hover:bg-slate-50"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.hasKhainiHabit}
                onChange={(e) => setFormData({ ...formData, hasKhainiHabit: e.target.checked })}
                className="mt-0.5 accent-black w-4 h-4"
                id="checkbox-khaini"
              />
              <div className="text-xs">
                <span className="font-black uppercase tracking-wider block">{t.labelKhaini}</span>
                <span className="text-[11px] font-bold text-slate-600">Khaini rubbing cleanup cess (-₹2 Lakhs).</span>
              </div>
            </motion.label>

            {/* English Fluent */}
            <motion.label
              whileHover={{ y: -2, x: -2, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
              whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className={`flex items-start gap-3 p-3.5 border-2 border-black cursor-pointer transition-colors ${
                formData.isEnglishFluent ? "bg-orange-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black" : "bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-slate-700 hover:bg-slate-50"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.isEnglishFluent}
                onChange={(e) => setFormData({ ...formData, isEnglishFluent: e.target.checked })}
                className="mt-0.5 accent-black w-4 h-4"
                id="checkbox-english"
              />
              <div className="text-xs">
                <span className="font-black uppercase tracking-wider block">{t.labelEnglish}</span>
                <span className="text-[11px] font-bold text-slate-600">High-society premium applied (+₹3.5 Lakhs).</span>
              </div>
            </motion.label>

            {/* Political Debater */}
            <motion.label
              whileHover={{ y: -2, x: -2, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
              whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className={`flex items-start gap-3 p-3.5 border-2 border-black cursor-pointer transition-colors ${
                formData.isPoliticalDebater ? "bg-orange-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black" : "bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-slate-700 hover:bg-slate-50"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.isPoliticalDebater}
                onChange={(e) => setFormData({ ...formData, isPoliticalDebater: e.target.checked })}
                className="mt-0.5 accent-black w-4 h-4"
                id="checkbox-politics"
              />
              <div className="text-xs">
                <span className="font-black uppercase tracking-wider block">{t.labelPolitical}</span>
                <span className="text-[11px] font-bold text-slate-600">Can debate for 6 hours on Bihar elections (+₹2 Lakhs).</span>
              </div>
            </motion.label>

            {/* Vegetarian Sanskari */}
            <motion.label
              whileHover={{ y: -2, x: -2, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
              whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className={`flex items-start gap-3 p-3.5 border-2 border-black cursor-pointer transition-colors ${
                formData.isVegetarianSanskari ? "bg-orange-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black" : "bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-slate-700 hover:bg-slate-50"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.isVegetarianSanskari}
                onChange={(e) => setFormData({ ...formData, isVegetarianSanskari: e.target.checked })}
                className="mt-0.5 accent-black w-4 h-4"
                id="checkbox-sanskari"
              />
              <div className="text-xs">
                <span className="font-black uppercase tracking-wider block">{t.labelSanskari}</span>
                <span className="text-[11px] font-bold text-slate-600">Puja-paath certified (+₹2.5 Lakhs).</span>
              </div>
            </motion.label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t-4 border-black">
          <div className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-orange-600" />
            <span>Complies with Bihari Yuva Matrimonial Benchmark v4.2</span>
          </div>

          <motion.button
            type="submit"
            disabled={isCalculating}
            whileHover={{ y: -3, x: -3, boxShadow: "10px 10px 0px 0px rgba(234,88,12,1)" }}
            whileTap={{ y: 2, x: 2, boxShadow: "4px 4px 0px 0px rgba(234,88,12,1)" }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            id="btn-submit-calculate-dahej"
            className="w-full sm:w-auto px-8 py-5 bg-black text-white font-heading font-black text-xl sm:text-2xl uppercase tracking-tighter hover:bg-orange-600 transition-colors border-2 border-black shadow-[8px_8px_0px_0px_rgba(234,88,12,1)] flex items-center justify-center gap-3 cursor-pointer"
          >
            {isCalculating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin text-orange-500" />
                <span>{t.btnCalculating}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 text-orange-500" />
                <span>{t.btnCalculate}</span>
              </>
            )}
          </motion.button>
        </div>
      </form>
    </div>
  );
};
