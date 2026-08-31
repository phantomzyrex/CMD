import React, { useState } from "react";
import { BIHARI_STARTUP_PITCH_SLIDES } from "../utils/calculator";
import { X, ChevronLeft, ChevronRight, Sparkles, TrendingUp, DollarSign } from "lucide-react";
import { soundEffects } from "../utils/audio";

interface PitchDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PitchDeckModal: React.FC<PitchDeckModalProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const slide = BIHARI_STARTUP_PITCH_SLIDES[currentSlide];

  const handleNext = () => {
    if (currentSlide < BIHARI_STARTUP_PITCH_SLIDES.length - 1) {
      soundEffects.playCashRegister();
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      soundEffects.playCashRegister();
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden my-8 animate-fadeIn">
        {/* Pitch Deck Header */}
        <div className="px-6 py-4 bg-black text-white border-b-4 border-black flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">{slide.emoji}</span>
            <div>
              <h3 className="font-heading font-black text-lg uppercase tracking-tight">
                Shark Tank Pitch Deck
              </h3>
              <p className="text-xs text-orange-400 font-bold uppercase tracking-wider">
                Startup: CMD (Calculate My Dahej) • Seed Round
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 text-white hover:text-orange-500 transition-colors cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Canvas */}
        <div className="p-6 sm:p-8 bg-[#FFF8E7] min-h-[380px] flex flex-col justify-between">
          <div>
            {/* Slide Title */}
            <div className="border-b-2 border-black pb-4 mb-6">
              <span className="text-xs font-black tracking-widest uppercase text-orange-600">
                Slide {currentSlide + 1} of {BIHARI_STARTUP_PITCH_SLIDES.length}
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-black uppercase tracking-tight mt-1">
                {slide.title}
              </h2>
              <p className="text-sm font-bold text-slate-700 mt-1">
                {slide.subtitle}
              </p>
            </div>

            {/* Bullets */}
            <ul className="space-y-3 my-4">
              {slide.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-black bg-white p-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] leading-relaxed">
                  <span className="w-5 h-5 bg-black text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sarcastic Stat Box */}
          <div className="mt-6 p-4 bg-black text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(234,88,12,1)] flex items-center gap-3">
            <div className="p-2 bg-orange-600 text-white shrink-0 border border-black">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-orange-400 block">
                Bihari Yuva Market Metric
              </span>
              <p className="text-xs font-bold text-slate-200">{slide.hilariousStat}</p>
            </div>
          </div>
        </div>

        {/* Deck Navigation Footer */}
        <div className="px-6 py-4 bg-white border-t-4 border-black flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className="px-4 py-2 bg-white hover:bg-slate-100 disabled:opacity-30 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs font-black uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Prev
          </button>

          {/* Dots indicator */}
          <div className="flex items-center gap-2">
            {BIHARI_STARTUP_PITCH_SLIDES.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 cursor-pointer border border-black transition-all ${
                  currentSlide === idx ? "bg-orange-600 w-6" : "bg-white hover:bg-slate-300 w-2.5"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentSlide === BIHARI_STARTUP_PITCH_SLIDES.length - 1}
            className="px-4 py-2 bg-orange-600 hover:bg-black text-white disabled:opacity-30 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs font-black uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
