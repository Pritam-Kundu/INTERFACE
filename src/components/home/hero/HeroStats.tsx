import React from 'react';

export const HeroStats: React.FC = () => {
  return (
    <div className="flex items-center space-x-6 sm:space-x-12 mt-12 pt-8 border-t border-white/5 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 fill-mode-forwards">
      <div className="flex flex-col">
        <span className="text-3xl sm:text-4xl font-editorial text-white mb-1">
          42<span className="text-xl sm:text-2xl text-cyan-400">+</span>
        </span>
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/50">PAGES</span>
      </div>

      <div className="w-[1px] h-12 bg-white/10" />

      <div className="flex flex-col">
        <span className="text-3xl sm:text-4xl font-editorial text-white mb-1">
          ∞
        </span>
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/50">IDEAS</span>
      </div>

      <div className="w-[1px] h-12 bg-white/10" />

      <div className="flex flex-col">
        <span className="text-3xl sm:text-4xl font-editorial text-white mb-1">
          1
        </span>
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/50">MCA FAMILY</span>
      </div>
    </div>
  );
};
