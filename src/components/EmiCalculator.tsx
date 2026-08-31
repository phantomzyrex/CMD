import React, { useState } from "react";
import { motion } from "motion/react";
import { ValuationBreakdown } from "../types";
import { X, Calculator, IndianRupee, Landmark, Clock, TrendingUp, AlertTriangle } from "lucide-react";

interface EmiCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  valuation: ValuationBreakdown;
}

export const EmiCalculator: React.FC<EmiCalculatorProps> = ({
  isOpen,
  onClose,
  valuation
}) => {
  const [tenureYears, setTenureYears] = useState(15);
  const [interestRate, setInterestRate] = useState(12.5); // 12.5% p.a.

  if (!isOpen) return null;

  const principal = valuation?.total || 0;
  const monthlyRate = interestRate / 12 / 100;
  const months = tenureYears * 12;

  // Standard EMI Formula: [P x R x (1+R)^N]/[(1+R)^N-1]
  const emi =
    principal > 0 && monthlyRate > 0
      ? Math.round((principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1))
      : 0;

  const totalPayable = emi * months;
  const totalInterest = Math.max(0, totalPayable - principal);

  // Sarcastic Equivalents
  const khetMortgageBigha = (totalPayable / 800000).toFixed(1);
  const rasgullasCount = Math.round(emi / 20); // ₹20 per rasgulla
  const generationsRequired = (tenureYears / 25).toFixed(1);

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
            <Calculator className="w-5 h-5 text-orange-500" />
            <div>
              <h3 className="font-heading font-black text-base sm:text-lg uppercase tracking-tight">
                Sasurji Dowry EMI & Loan Planner
              </h3>
              <p className="text-xs font-bold text-slate-300">
                Financed by "Bank of Pustaani Khet & Gold Loan"
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 text-white hover:text-orange-500 transition-colors cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Principal Demanded */}
          <motion.div
            whileHover={{ y: -2, boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)" }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            className="p-4 bg-[#FFF8E7] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between cursor-default"
          >
            <div>
              <span className="text-xs font-black text-slate-500 uppercase tracking-wider block">Principal Dahej Demanded</span>
              <span className="font-heading font-black text-2xl text-black tabular-nums">
                ₹{principal.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-black uppercase text-white bg-black px-3 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(234,88,12,1)]">
                {valuation.scorpioEquivalent} Scorpios
              </span>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="space-y-4">
            {/* Tenure */}
            <div>
              <div className="flex justify-between text-xs font-black uppercase tracking-wider text-black mb-1">
                <span>Repayment Tenure</span>
                <span className="text-orange-600 font-black">{tenureYears} Years ({months} Months)</span>
              </div>
              <input
                type="range"
                min="5"
                max="35"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full accent-orange-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-500 mt-1">
                <span>5 Yrs (Fast Khet Sale)</span>
                <span>20 Yrs (Next Gen)</span>
                <span>35 Yrs (Pota-Poti Era)</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between text-xs font-black uppercase tracking-wider text-black mb-1">
                <span>Mahajan Compound Interest Rate</span>
                <span className="text-orange-600 font-black">{interestRate}% p.a.</span>
              </div>
              <input
                type="range"
                min="8.5"
                max="24.0"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-orange-600 cursor-pointer"
              />
            </div>
          </div>

          {/* EMI Output Box */}
          <motion.div
            whileHover={{ y: -2, boxShadow: "6px 6px 0px 0px rgba(234,88,12,1)" }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
            className="p-6 bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(234,88,12,1)] text-center cursor-default"
          >
            <span className="text-xs font-black uppercase tracking-widest text-slate-300 block">
              Sasurji Monthly EMI Burden
            </span>
            <div className="font-heading font-black text-4xl sm:text-5xl text-orange-500 my-2 tabular-nums">
              ₹{emi.toLocaleString("en-IN")} <span className="text-sm font-bold text-slate-400">/ mo</span>
            </div>
            <p className="text-xs font-bold text-slate-300">
              Total Interest Payable over {tenureYears} years: <strong className="text-orange-400 font-black">₹{totalInterest.toLocaleString("en-IN")}</strong>
            </p>
          </motion.div>

          {/* Sarcastic Impact Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
            <motion.div
              whileHover={{ y: -2, x: -1, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-default"
            >
              <span className="text-slate-500 block text-[10px] uppercase font-black">Khet Collateral</span>
              <span className="font-black text-black text-sm">{khetMortgageBigha} Bigha</span>
              <p className="text-[10px] font-bold text-slate-500 mt-0.5">Pustaani Khet</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -2, x: -1, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-default"
            >
              <span className="text-slate-500 block text-[10px] uppercase font-black">Rasgulla Equiv.</span>
              <span className="font-black text-black text-sm">{rasgullasCount.toLocaleString()} Pcs</span>
              <p className="text-[10px] font-bold text-slate-500 mt-0.5">Monthly sacrifice</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -2, x: -1, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className="p-3 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-default"
            >
              <span className="text-slate-500 block text-[10px] uppercase font-black">Generations</span>
              <span className="font-black text-black text-sm">{generationsRequired} Pidhi</span>
              <p className="text-[10px] font-bold text-slate-500 mt-0.5">Till debt free</p>
            </motion.div>
          </div>

          <div className="p-3 bg-[#FFF8E7] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2.5 text-xs text-black font-bold">
            <AlertTriangle className="w-5 h-5 text-orange-600 shrink-0" />
            <span>
              <strong>Satirical Warning:</strong> Dowry destroys families financially. Stand on your own feet instead of burdening parents!
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
