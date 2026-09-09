import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Current Edition', href: '/#current' },
    { label: 'Archive', href: '/#archive' },
    { label: 'About', href: '/#about' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border py-4 shadow-sm' : 'bg-transparent py-6'
    }`} aria-label="Main Navigation">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-4 focus:outline-none focus:ring-2 focus:ring-accent rounded-sm group">
          <img 
            src="/assets/college-logo.png" 
            alt="Kalyani Government Engineering College Logo" 
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain filter group-hover:brightness-110 transition-all"
          />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-editorial font-bold text-primary tracking-wider leading-none">
              INTERAFACE
            </span>
            <span className="text-[10px] sm:text-xs text-secondary tracking-widest uppercase mt-1">
              MCA Departmental Magazine
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-sm text-secondary hover:text-primary transition-colors tracking-wide focus:outline-none focus:ring-2 focus:ring-accent rounded-sm px-2 py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary focus:outline-none focus:ring-2 focus:ring-accent rounded-sm p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-lg border-b border-border shadow-xl py-4 flex flex-col px-6 space-y-2">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-base text-secondary hover:text-primary transition-colors py-3 border-b border-border/30 last:border-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

