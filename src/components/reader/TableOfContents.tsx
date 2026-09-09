import React from 'react';
import { X } from 'lucide-react';
import { Button } from '../ui/Button';

interface TableOfContentsProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (pageNumber: number) => void;
  totalPages: number;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  isOpen,
  onClose,
  onNavigate,
  totalPages
}) => {
  if (!isOpen) return null;

  // Since we don't have the exact text content of the PDF, we provide 
  // a generic page-range navigation to ensure we don't invent false information.
  const sections = [
    { title: "Cover", page: 1 },
    { title: "Pages 2 - 9", page: 2 },
    { title: "Pages 10 - 19", page: 10 },
    { title: "Pages 20 - 29", page: 20 },
    { title: "Pages 30 - 39", page: 30 },
    { title: "End Pages", page: Math.max(1, totalPages - 2) },
    { title: "Back Cover", page: totalPages },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="relative w-full max-w-sm h-full bg-surface border-r border-border shadow-2xl flex flex-col animate-in slide-in-from-left duration-500">
        <div className="p-6 border-b border-border flex justify-between items-center">
          <h2 className="text-xl font-editorial font-bold text-primary tracking-wider">
            Contents
          </h2>
          <Button variant="ghost" size="sm" onClick={onClose} aria-label="Close contents">
            <X size={20} />
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => {
                onNavigate(section.page);
                onClose();
              }}
              className="w-full flex items-center justify-between p-4 hover:bg-white/5 rounded-sm transition-colors text-left group"
            >
              <span className="text-primary group-hover:text-accent transition-colors">
                {section.title}
              </span>
              <span className="text-secondary text-sm font-mono">
                {section.page}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
