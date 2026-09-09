import React from 'react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        
        {/* College Identity */}
        <div className="flex flex-col items-center mb-10">
          <img 
            src="/assets/college-logo.png" 
            alt="Kalyani Government Engineering College" 
            className="h-16 w-16 mb-4 object-contain filter opacity-80 hover:opacity-100 transition-opacity"
          />
          <h4 className="text-primary font-bold tracking-widest text-sm uppercase">
            Kalyani Government Engineering College
          </h4>
          <p className="text-secondary text-xs uppercase tracking-widest mt-2">
            Master of Computer Applications (MCA)
          </p>
        </div>

        <div className="w-16 h-[1px] bg-border mb-10" />

        {/* Magazine Identity */}
        <h3 className="text-2xl font-editorial font-bold text-primary tracking-wider mb-2">
          INTERAFACE
        </h3>
        <p className="text-secondary text-xs tracking-widest uppercase mb-8">
          MCA Departmental Magazine &mdash; {year} Edition
        </p>
        
        <div className="text-xs text-secondary/50 mt-4">
          <p>&copy; {year} Kalyani Government Engineering College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

