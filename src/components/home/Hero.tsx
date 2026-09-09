import React from 'react';
import { Link } from 'react-router-dom';
import { currentEdition } from '../../data/magazines';
import { Button } from '../ui/Button';
import { ArrowRight, BookOpen } from 'lucide-react';

import { HeroBackground } from './hero/HeroBackground';
import { HeroParticles } from './hero/HeroParticles';
import { HeroLightTrails } from './hero/HeroLightTrails';
import { HeroMagazine } from './hero/HeroMagazine';
import { HeroStats } from './hero/HeroStats';
import { ScrollIndicator } from './hero/ScrollIndicator';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050B14]">
      {/* Immersive Background Layers */}
      <HeroBackground />
      <HeroParticles />
      <HeroLightTrails />
      
      {/* Main Content Grid */}
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center relative z-10 pt-24 pb-32">
        
        {/* Left: Text Content & Controls */}
        <div className="flex flex-col space-y-8 lg:pr-12">
          
          {/* Editorial Eyebrow */}
          <div className="opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-forwards">
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/50 font-medium">
              IDEAS <span className="text-cyan-500 mx-2">•</span> 
              PEOPLE <span className="text-cyan-500 mx-2">•</span> 
              TECHNOLOGY <span className="text-cyan-500 mx-2">•</span> 
              TOMORROW
            </p>
          </div>

          {/* Title Area */}
          <div className="space-y-4 opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-forwards">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-editorial font-bold leading-none tracking-tight text-white drop-shadow-2xl">
              INTER<span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-cyan-600">AFACE</span>
            </h1>
            <p className="text-sm sm:text-base tracking-[0.3em] uppercase text-white/70 font-semibold pl-1">
              MCA DEPARTMENTAL MAGAZINE
            </p>
          </div>
          
          {/* Description & Divider */}
          <div className="pt-2 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400 fill-mode-forwards">
            <div className="w-12 h-[2px] bg-cyan-500/50 mb-6" />
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed font-light max-w-xl">
              A reflection of ideas, innovation, and the vibrant spirit of our MCA community.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 pt-4 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-forwards">
            <Link to={`/read/${currentEdition.year}`}>
              <Button 
                size="lg" 
                className="w-full sm:w-auto rounded-full bg-[rgba(6,182,212,0.15)] hover:bg-[rgba(6,182,212,0.25)] text-white border border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.3),_inset_0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5),_inset_0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-sm transition-all duration-300 group px-8 py-6"
              >
                <BookOpen className="mr-3 w-5 h-5 text-cyan-100" />
                <span className="tracking-wide font-medium">READ MAGAZINE</span>
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="#current">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto rounded-full border-white/20 text-white/90 hover:text-white hover:bg-white/5 hover:border-white/40 backdrop-blur-sm transition-all duration-300 px-8 py-6 group"
              >
                <svg className="mr-3 w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                <span className="tracking-wide font-medium">EXPLORE EDITIONS</span>
              </Button>
            </Link>
          </div>

          {/* Stats Row */}
          <HeroStats />

          {/* Editorial Quote */}
          <div className="pt-12 opacity-0 animate-in fade-in duration-1000 delay-1000 fill-mode-forwards">
            <div className="border-l border-cyan-500/30 pl-4">
              <p className="font-editorial text-xl text-white/40 italic">
                "More than a magazine,<br />it's our shared story."
              </p>
            </div>
          </div>

        </div>
        
        {/* Right: Magazine Visual */}
        <div className="flex justify-center items-center h-full mt-12 lg:mt-0 opacity-0 animate-in fade-in slide-in-from-right-12 duration-1000 delay-300 fill-mode-forwards relative">
          <HeroMagazine />
          
          {/* Decorative Right-Edge Text (from reference) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col text-right space-y-2 border-r border-cyan-500/30 pr-4 opacity-50">
            <span className="text-[10px] tracking-[0.3em] uppercase text-white font-medium">STUDENT</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-white font-medium">IDEAS</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-white font-medium">REAL IMPACT</span>
          </div>
        </div>

      </div>

      {/* Decorative Bottom-Right Text */}
      <div className="absolute bottom-8 right-12 hidden lg:flex items-center space-x-4 opacity-0 animate-in fade-in duration-1000 delay-1000 fill-mode-forwards z-20">
        <div className="w-12 h-[1px] bg-white/20" />
        <span className="text-[9px] tracking-[0.3em] uppercase text-white/40 font-medium">
          SAME MINDS. BRIGHTER HORIZONS.
        </span>
      </div>

      <ScrollIndicator />
    </section>
  );
};

