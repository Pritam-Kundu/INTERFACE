import React from 'react';
import { Link } from 'react-router-dom';
import { currentEdition } from '../../data/magazines';
import { Button } from '../ui/Button';
import { MagazineCover } from '../ui/MagazineCover';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-background to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        
        {/* Text Content */}
        <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-forwards opacity-0">
          
          {/* Institutional Identity */}
          <div className="flex flex-col space-y-4 pb-4 border-b border-border/30">
            <div className="flex items-center space-x-4">
              <img 
                src="/assets/college-logo.png" 
                alt="KGEC Logo" 
                className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-primary font-bold tracking-wider text-sm sm:text-base">
                  KALYANI GOVERNMENT ENGINEERING COLLEGE
                </span>
                <span className="text-secondary text-xs sm:text-sm tracking-widest uppercase mt-1">
                  Master of Computer Applications
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-editorial font-bold text-primary leading-tight">
              INTERA<br />FACE
            </h1>
            <p className="text-accent tracking-[0.3em] uppercase text-sm font-semibold pt-2">
              MCA Departmental Magazine &mdash; {currentEdition.year} EDITION
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to={`/read/${currentEdition.year}`}>
              <Button size="lg" className="group w-full sm:w-auto">
                READ MAGAZINE 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="#current">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                EXPLORE EDITION
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Magazine Cover */}
        <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-10 duration-1000 delay-300 fill-mode-forwards opacity-0">
          <div className="w-full max-w-md lg:max-w-lg perspective-1000">
            <MagazineCover edition={currentEdition} featured />
          </div>
        </div>

      </div>
    </section>
  );
};

