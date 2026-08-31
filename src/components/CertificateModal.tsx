import React from "react";
import { CandidateFormState, ValuationBreakdown } from "../types";
import { X, Printer, Download, Share2, Award, CheckCircle2, ShieldAlert } from "lucide-react";
import { soundEffects } from "../utils/audio";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: CandidateFormState;
  valuation: ValuationBreakdown;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  formData,
  valuation
}) => {
  if (!isOpen) return null;

  const serialNo = `CMD-${new Date().getFullYear()}-BIHAR-${Math.floor(100000 + Math.random() * 900000)}`;

  const handlePrint = () => {
    soundEffects.playShehnaiRiff();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden my-8 animate-fadeIn">
        {/* Modal Controls Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-black text-white border-b-4 border-black print:hidden">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-orange-500" />
            <span className="font-heading font-black text-sm sm:text-base uppercase tracking-tight">
              CMD Matrimonial Appraisal Certificate
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-orange-600 hover:bg-white hover:text-black text-white border-2 border-black text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" /> Print Dossier
            </button>
            <button
              onClick={onClose}
              className="p-1 text-white hover:text-orange-500 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Certificate Sheet (Printable Target) */}
        <div id="cmd-certificate" className="p-6 sm:p-10 bg-[#FFF8E7] text-black relative">
          {/* Ornate Border Box */}
          <div className="border-4 border-black p-6 sm:p-8 bg-white relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
              <span className="text-8xl font-black text-black rotate-[-25deg]">
                CMD BIHAR
              </span>
            </div>

            {/* Header / Seal */}
            <div className="text-center relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-black text-orange-500 border-2 border-black shadow-[3px_3px_0px_0px_rgba(234,88,12,1)] mb-3">
                <span className="text-2xl font-black">₹</span>
              </div>

              <h2 className="font-heading font-black text-2xl sm:text-3xl text-black uppercase tracking-tight">
                Calculate My Dahej (CMD)
              </h2>
              <p className="text-xs font-black text-orange-600 tracking-widest uppercase mt-0.5">
                Official Rishta Valuation Authority • Patna HQ
              </p>
              <p className="text-xs font-mono font-bold text-slate-500 mt-1">
                Serial No: <strong className="text-black font-black">{serialNo}</strong>
              </p>
            </div>

            {/* Certificate Body */}
            <div className="my-6 text-center space-y-2 relative z-10">
              <p className="text-xs uppercase font-black text-slate-500 tracking-widest">
                This is to officially certify that
              </p>
              <h3 className="font-heading font-black text-2xl sm:text-4xl text-black uppercase tracking-tight underline decoration-orange-500 decoration-4">
                Shri {formData.name}
              </h3>
              <p className="text-xs font-bold text-slate-700 max-w-lg mx-auto leading-relaxed pt-2">
                Native of <strong className="text-black uppercase font-black">{formData.district}</strong>, practicing as{" "}
                <strong className="text-black uppercase font-black">{formData.profession.replace(/_/g, " ")}</strong>, 
                has been duly audited through Bihari Yuva’s proprietary matrimonial algorithm.
              </p>
            </div>

            {/* Valuation Highlights Box */}
            <div className="my-6 p-6 bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(234,88,12,1)] text-center relative z-10">
              <span className="text-xs uppercase font-black tracking-widest text-slate-300 block">
                Total Evaluated Matrimonial Market Dahej
              </span>
              <div className="font-heading font-black text-4xl sm:text-5xl text-orange-500 my-2 tabular-nums">
                ₹{(valuation?.total || 0).toLocaleString("en-IN")}
              </div>
              <div className="inline-block px-3 py-1 bg-white text-black text-xs font-black uppercase tracking-wider border border-black mt-1">
                GRADE: {valuation.tierTitle}
              </div>
            </div>

            {/* Package Summary Items */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs relative z-10">
              <div className="p-2.5 bg-[#FFF8E7] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-slate-500 block text-[10px] font-black uppercase">Suitcase Cash</span>
                <span className="font-black text-black">₹{(valuation.cashInBriefcase / 100000).toFixed(1)} Lakhs</span>
              </div>
              <div className="p-2.5 bg-[#FFF8E7] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-slate-500 block text-[10px] font-black uppercase">Vehicle</span>
                <span className="font-black text-black truncate block">{valuation.vehicleName}</span>
              </div>
              <div className="p-2.5 bg-[#FFF8E7] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-slate-500 block text-[10px] font-black uppercase">Gold Tola</span>
                <span className="font-black text-black">{valuation.goldTola} Tola</span>
              </div>
              <div className="p-2.5 bg-[#FFF8E7] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-slate-500 block text-[10px] font-black uppercase">Scorpio Unit</span>
                <span className="font-black text-black">{valuation.scorpioEquivalent} Scorpios</span>
              </div>
            </div>

            {/* Signatures & Stamps */}
            <div className="mt-8 pt-6 border-t-2 border-black flex items-center justify-between gap-4 text-xs relative z-10">
              <div className="text-left">
                <div className="font-serif italic font-bold text-black text-base">
                  Satish Ray (Bihari Yuva)
                </div>
                <div className="text-[10px] text-slate-600 font-black uppercase tracking-wider">
                  Founder & Chief Dahej Auditor
                </div>
              </div>

              {/* Stamp */}
              <div className="w-16 h-16 border-2 border-black bg-orange-500 text-white flex items-center justify-center rotate-[-8deg] text-[9px] font-black text-center leading-tight uppercase p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                CERTIFIED CMD BIHAR
              </div>

              <div className="text-right">
                <div className="font-mono font-black text-black">
                  {new Date().toLocaleDateString("en-IN")}
                </div>
                <div className="text-[10px] text-slate-600 font-black uppercase tracking-wider">
                  Appraisal Date
                </div>
              </div>
            </div>

            {/* Satirical Warning footer on certificate */}
            <div className="mt-4 pt-3 border-t border-slate-200 text-center text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              Satire Only: CMD strictly opposes dowry. Support 100% dowry-free marriages!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
