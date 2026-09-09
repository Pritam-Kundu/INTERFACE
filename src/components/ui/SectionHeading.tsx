import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  align = 'left',
  className = ''
}) => {
  return (
    <div className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      {subtitle && (
        <span className="text-accent tracking-[0.2em] uppercase text-sm font-semibold mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-editorial font-bold text-primary mb-6">
        {title}
      </h2>
      <div className={`w-12 h-1 bg-accent/50 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};
