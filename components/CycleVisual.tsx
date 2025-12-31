
import React from 'react';

const CycleVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center p-8 md:p-0">
      {/* Background Circle Path */}
      <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="0.5"
          strokeDasharray="2,2"
        />
        {/* Animated Gradient Path */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          strokeDasharray="251.2"
          strokeDashoffset="251.2"
          className="animate-[dash_5s_linear_infinite]"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a5b4fc" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nodes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 group">
        <div className="bg-white border-2 border-indigo-600 shadow-xl rounded-xl md:rounded-2xl px-3 py-2 md:px-6 md:py-4 flex flex-col items-center transition-transform group-hover:scale-110">
          <span className="text-lg md:text-2xl mb-0.5 md:mb-1">📉</span>
          <span className="font-bold text-slate-900 text-xs md:text-base">DATA</span>
          <span className="text-[8px] md:text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Collection</span>
        </div>
      </div>

      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 group">
        <div className="bg-white border border-slate-200 shadow-lg rounded-xl md:rounded-2xl px-3 py-2 md:px-6 md:py-4 flex flex-col items-center transition-transform group-hover:scale-110">
          <span className="text-lg md:text-2xl mb-0.5 md:mb-1">📖</span>
          <span className="font-bold text-slate-900 text-xs md:text-base">STORY</span>
          <span className="text-[8px] md:text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Narrative</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 group">
        <div className="bg-white border border-slate-200 shadow-lg rounded-xl md:rounded-2xl px-3 py-2 md:px-6 md:py-4 flex flex-col items-center transition-transform group-hover:scale-110">
          <span className="text-lg md:text-2xl mb-0.5 md:mb-1">⚡</span>
          <span className="font-bold text-slate-900 text-xs md:text-base">ACTION</span>
          <span className="text-[8px] md:text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Decision</span>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 group">
        <div className="bg-indigo-600 text-white shadow-xl rounded-xl md:rounded-2xl px-3 py-2 md:px-6 md:py-4 flex flex-col items-center transition-transform group-hover:scale-110">
          <span className="text-lg md:text-2xl mb-0.5 md:mb-1">🔄</span>
          <span className="font-bold text-xs md:text-base">LOOP</span>
          <span className="text-[8px] md:text-[10px] opacity-70 uppercase font-bold tracking-tighter">Feedback</span>
        </div>
      </div>

      {/* Center Label */}
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-black text-slate-900 font-outfit">NEXUS</div>
        <div className="text-[8px] md:text-[10px] text-indigo-600 font-bold tracking-widest uppercase">The Loop</div>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CycleVisual;
