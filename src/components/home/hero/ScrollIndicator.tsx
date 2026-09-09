import React from 'react';
import { Mouse, ChevronDown } from 'lucide-react';

export const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 animate-in fade-in duration-1000 delay-1000 fill-mode-forwards z-20">
      <Mouse className="w-5 h-5 text-white/40 mb-2" strokeWidth={1.5} />
      <span className="text-[9px] tracking-[0.3em] uppercase text-white/40 font-medium mb-1">
        SCROLL TO EXPLORE
      </span>
      <ChevronDown className="w-4 h-4 text-cyan-400/70 animate-bounce" />
    </div>
  );
};
