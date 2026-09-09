import React from 'react';
import type { MagazineEdition } from '../../data/magazines';

interface MagazineCoverProps {
  edition: MagazineEdition;
  featured?: boolean;
  className?: string;
}

export const MagazineCover: React.FC<MagazineCoverProps> = ({ 
  edition, 
  featured = false,
  className = '' 
}) => {
  return (
    <div 
      className={`relative group cursor-pointer perspective-1000 ${className}`}
    >
      <div className={`
        relative w-full aspect-[1/1.4] bg-surface rounded-sm border border-border overflow-hidden
        transition-all duration-700 ease-out
        group-hover:shadow-[20px_20px_60px_rgba(0,0,0,0.5),_0_0_40px_rgba(6,182,212,0.15)]
        group-hover:-translate-y-2 group-hover:rotate-y-[-5deg]
        flex flex-col items-center justify-between
        before:absolute before:inset-0 before:bg-gradient-to-tr before:from-transparent before:via-transparent before:to-white/5
        after:absolute after:inset-y-0 after:left-0 after:w-[2px] after:bg-gradient-to-b after:from-white/20 after:via-white/40 after:to-white/20 after:shadow-[1px_0_2px_rgba(0,0,0,0.5)]
      `}>
        {/* Binder simulation */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none" />
        
        {edition.pagesPath ? (
          <img 
            src={`${edition.pagesPath}page-001.webp`} 
            alt={`${edition.title} ${edition.year} Cover`}
            className="w-full h-full object-cover relative z-0"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-between p-8 w-full h-full">
            {/* Content Placeholder */}
            <div className="flex flex-col items-center w-full z-20 mt-8">
              <span className="text-accent tracking-[0.3em] text-xs font-semibold uppercase mb-4">
                MCA Departmental
              </span>
              <h2 className={`${featured ? 'text-5xl md:text-7xl' : 'text-3xl md:text-4xl'} font-editorial font-bold text-primary tracking-wider text-center`}>
                {edition.title}
              </h2>
            </div>

            <div className="w-full flex justify-between items-end z-20">
              <div className="flex flex-col">
                <span className="text-secondary text-xs uppercase tracking-widest">Edition</span>
                <span className="text-primary font-bold tracking-wider">{edition.year}</span>
              </div>
              <div className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center backdrop-blur-sm group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
            
            {/* Subtle decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-[1px] bg-border pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-16 h-[1px] bg-border pointer-events-none" />
          </div>
        )}
      </div>
    </div>
  );
};
