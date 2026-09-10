import React from 'react';
import { Link } from 'react-router-dom';
import { currentEdition } from '../../data/magazines';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const EditionPreview: React.FC = () => {
  return (
    <section id="current" className="pt-8 pb-24 relative overflow-hidden bg-background">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          title={`INTERAFACE ${currentEdition.year}`}
          subtitle="Current Edition"
          align="center"
          className="mb-16 md:mb-24"
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Info Side */}
          <div className="space-y-8 order-2 lg:order-1 max-w-xl mx-auto lg:mx-0 relative">
            <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/50 via-accent/10 to-transparent hidden lg:block" />
            
            <h3 className="text-4xl md:text-5xl font-editorial font-bold text-primary leading-tight">
              Inside This Edition
            </h3>
            <p className="text-secondary text-lg leading-relaxed">
              {currentEdition.description}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8 border-y border-border/50 bg-white/[0.02] backdrop-blur-sm rounded-lg px-6 mt-8">
              <div>
                <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-2">Pages</p>
                <p className="text-4xl font-light text-primary">{currentEdition.pageCount}</p>
              </div>
              <div>
                <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-2">Published</p>
                <p className="text-4xl font-light text-primary">{currentEdition.year}</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-2">Institution</p>
                <p className="text-sm font-medium text-primary mt-2 uppercase tracking-wide leading-relaxed">
                  Kalyani Govt.<br />Engineering College
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to={`/read/${currentEdition.year}`}>
                <Button size="lg" className="w-full sm:w-auto shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all">
                  READ MAGAZINE
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Preview Side (Dynamic fan out of real pages) */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full max-w-lg mx-auto flex items-center justify-center order-1 lg:order-2 group perspective-1000">
            {currentEdition.pagesPath ? (
              <>
                {/* Back page (Page 3) */}
                <div className="absolute w-[65%] sm:w-[55%] aspect-[1/1.4] rounded-sm shadow-2xl -rotate-12 -translate-x-16 sm:-translate-x-24 opacity-60 group-hover:-translate-x-24 sm:group-hover:-translate-x-32 group-hover:-rotate-12 transition-all duration-700 ease-out border border-border/50 overflow-hidden">
                  <img src={`${currentEdition.pagesPath}page-003.webp`} alt="Page 3 preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                
                {/* Middle page (Page 2) */}
                <div className="absolute w-[65%] sm:w-[55%] aspect-[1/1.4] rounded-sm shadow-2xl rotate-12 translate-x-16 sm:translate-x-24 opacity-80 group-hover:translate-x-24 sm:group-hover:translate-x-32 group-hover:rotate-12 transition-all duration-700 ease-out border border-border/50 overflow-hidden">
                  <img src={`${currentEdition.pagesPath}page-002.webp`} alt="Page 2 preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                
                {/* Foreground Cover (Page 1) */}
                <div className="absolute w-[75%] sm:w-[65%] aspect-[1/1.4] rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.8),_0_0_40px_rgba(6,182,212,0.2)] z-10 group-hover:scale-105 group-hover:-translate-y-4 transition-all duration-700 ease-out border border-border/80 overflow-hidden">
                  <img src={`${currentEdition.pagesPath}page-001.webp`} alt={`${currentEdition.year} Cover`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/5 pointer-events-none" />
                  {/* Binder edge reflection */}
                  <div className="absolute inset-y-0 left-0 w-[1px] bg-white/30" />
                  <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
                </div>
              </>
            ) : (
              <div className="text-secondary">Preview unavailable</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

