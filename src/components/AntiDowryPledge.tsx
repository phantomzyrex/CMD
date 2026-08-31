import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, HeartHandshake, ShieldCheck, Award, CheckCircle2, Share2, Sparkles, AlertTriangle, Check } from "lucide-react";
import { soundEffects } from "../utils/audio";
import confetti from "canvas-confetti";
import { I18nDictionary } from "../utils/i18n";

interface AntiDowryPledgeProps {
  isOpen: boolean;
  onClose: () => void;
  t?: I18nDictionary;
}

export const AntiDowryPledge: React.FC<AntiDowryPledgeProps> = ({ isOpen, onClose, t }) => {
  const [pledgeName, setPledgeName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasPledged, setHasPledged] = useState(false);
  const [pledgeCount, setPledgeCount] = useState(48924);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleTakePledge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pledgeName.trim()) {
      setErrorMessage(t?.errorPledgeNameEmpty || "Bina naam likhe anti-dowry hero banoge? Pehle apna shubh naam daalo!");
      soundEffects.playDholBeat();
      return;
    }

    if (pledgeName.trim().length < 3) {
      setErrorMessage(t?.errorPledgeNameTooShort || "Pledge lene ke liye poora naam likho bhaiya (kam se kam 3 akshar)!");
      soundEffects.playDholBeat();
      return;
    }

    setErrorMessage("");
    soundEffects.playShehnaiRiff();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setHasPledged(true);
    setPledgeCount((prev) => prev + 1);
  };

  const handleCopyShare = () => {
    const text = `🎉 I just took the Anti-Dowry Pledge on CMD! Let's reject dowry and promote equality. Pledge yours: ${window.location.href}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    soundEffects.playCashRegister();
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-xl bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden my-8"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-black text-white border-b-4 border-black flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <HeartHandshake className="w-6 h-6 text-orange-500" />
            <div>
              <h3 className="font-heading font-black text-lg uppercase tracking-tight">
                National Anti-Dowry Pledge (दहेज़ मुक्त भारत)
              </h3>
              <p className="text-xs text-orange-400 font-bold uppercase tracking-wider">
                Social awareness initiative behind CMD satire
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 text-white hover:text-orange-500 transition-colors cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Awareness Banner */}
          <motion.div
            whileHover={{ y: -1, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            className="p-4 bg-[#FFF8E7] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-black text-xs sm:text-sm font-bold leading-relaxed cursor-default"
          >
            <div className="flex items-center gap-2 font-black uppercase text-black mb-1">
              <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0" />
              <span>Why This Satire Matters:</span>
            </div>
            <p>
              While Satish Ray’s "CMD" comedy sketch humorously exposes the transactional absurdity of matrimonial bargaining in society, 
              <strong> dowry is a punishable crime</strong> under the <em>Dowry Prohibition Act, 1961</em>. Real self-respect lies in mutual love, 
              education, and financial self-reliance.
            </p>
          </motion.div>

          {!hasPledged ? (
            <form noValidate onSubmit={handleTakePledge} className="space-y-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
                  Enter Your Full Name to Pledge:
                </label>
                <input
                  type="text"
                  value={pledgeName}
                  onChange={(e) => {
                    setPledgeName(e.target.value);
                    if (errorMessage) setErrorMessage("");
                  }}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-4 py-3 border-2 bg-white text-sm font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-colors ${
                    errorMessage ? "border-red-600 bg-red-50 text-red-950" : "border-black text-black"
                  }`}
                />
                <AnimatePresence>
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="mt-2 p-2.5 bg-red-100 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-start gap-2 text-xs font-black text-red-950"
                    >
                      <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* The Pledge Text */}
              <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs text-black space-y-2 font-bold">
                <p className="font-black uppercase tracking-wider text-orange-600">“The Citizen’s Resolution:”</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>I shall neither demand nor accept dowry in any form during marriage.</li>
                  <li>I respect marriage as a union of equals, not a commercial asset transaction.</li>
                  <li>I will empower my partner through education and dignity.</li>
                </ul>
              </div>

              <motion.button
                whileHover={{ y: -2, x: -1, boxShadow: "6px 6px 0px 0px rgba(234,88,12,1)" }}
                whileTap={{ y: 1, x: 1, boxShadow: "2px 2px 0px 0px rgba(234,88,12,1)" }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                type="submit"
                className="w-full py-4 bg-black hover:bg-orange-600 text-white font-heading font-black uppercase tracking-wider text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(234,88,12,1)] flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                <span>Take the "Dahej Mukt" Pledge Now</span>
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center p-6 bg-[#FFF8E7] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-4"
            >
              <div className="w-16 h-16 bg-black text-orange-500 border-2 border-black shadow-[3px_3px_0px_0px_rgba(234,88,12,1)] flex items-center justify-center mx-auto">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  OFFICIAL PLEDGE BADGE
                </span>
                <h4 className="font-heading font-black text-2xl text-black uppercase tracking-tight mt-1">
                  Salute, {pledgeName}!
                </h4>
                <p className="text-xs font-black uppercase tracking-wider text-orange-600 mt-1">
                  You are Champion #{(pledgeCount || 0).toLocaleString()} standing against dowry!
                </p>
              </div>

              <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs font-bold text-black">
                “I pledge to marry with pride, dignity, and zero dowry demands!”
              </div>

              <motion.button
                whileHover={{ y: -2, x: -1, boxShadow: "5px 5px 0px 0px rgba(234,88,12,1)" }}
                whileTap={{ y: 1, x: 1, boxShadow: "1px 1px 0px 0px rgba(234,88,12,1)" }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                onClick={handleCopyShare}
                className="px-5 py-2.5 bg-black hover:bg-orange-600 text-white text-xs font-black uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_rgba(234,88,12,1)] flex items-center gap-1.5 mx-auto transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Pledge Copied! Share on WhatsApp</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-orange-500" />
                    <span>Share My Resolution</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          )}

          {/* Social Proof Counter */}
          <div className="text-center text-xs font-black uppercase tracking-wider text-slate-500 pt-2 border-t-2 border-black">
            🌟 <span className="text-black font-black">{(pledgeCount || 0).toLocaleString()}</span> youth have pledged for a Dahej-Mukt India.
          </div>
        </div>
      </motion.div>
    </div>
  );
};
