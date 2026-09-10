import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  Plus, 
  Minus, 
  Maximize, 
  Minimize, 
  Download, 
  X
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

interface ReaderToolbarProps {
  currentPage: number;
  totalPages: number;
  zoomLevel: number;
  isFullscreen: boolean;
  onNextPage: () => void;
  onPrevPage: () => void;
  onGoToPage: (page: number) => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomReset: () => void;
  onToggleFullscreen: () => void;
  onToggleTOC: () => void;
  pdfPath: string;
}

export const ReaderToolbar: React.FC<ReaderToolbarProps> = ({
  currentPage,
  totalPages,
  zoomLevel,
  isFullscreen,
  onNextPage,
  onPrevPage,
  onGoToPage,
  onZoomIn,
  onZoomOut,
  onZoomReset,
  onToggleFullscreen,
  onToggleTOC,
  pdfPath
}) => {
  const [pageInput, setPageInput] = useState('');

  const handlePageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(pageInput, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      onGoToPage(pageNum);
      setPageInput('');
    } else {
      // Invalid page, just reset input
      setPageInput('');
    }
  };

  return (
    <div className="fixed bottom-0 sm:bottom-4 left-0 right-0 z-50 flex justify-center px-2 pointer-events-none">
      <div className="bg-surface/90 backdrop-blur-md border border-border rounded-lg shadow-2xl p-2 flex flex-wrap items-center justify-center gap-1 sm:gap-2 pointer-events-auto max-w-full overflow-x-auto">
        
        {/* Navigation Group */}
        <div className="flex items-center gap-1 bg-black/20 rounded-md p-1">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onPrevPage} 
            disabled={currentPage <= 1}
            aria-label="Previous page"
            className="h-8 w-8 p-0"
          >
            <ChevronLeft size={18} />
          </Button>
          
          <form onSubmit={handlePageSubmit} className="flex items-center mx-1">
            <input
              type="text"
              value={pageInput}
              onChange={(e) => setPageInput(e.target.value)}
              placeholder={currentPage.toString()}
              className="w-10 h-6 bg-transparent border-b border-border/50 text-center text-primary text-sm focus:outline-none focus:border-accent"
              aria-label="Go to page"
            />
            <span className="text-secondary text-sm ml-1 select-none">/ {totalPages}</span>
          </form>

          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onNextPage} 
            disabled={currentPage >= totalPages}
            aria-label="Next page"
            className="h-8 w-8 p-0"
          >
            <ChevronRight size={18} />
          </Button>
        </div>

        <div className="w-px h-6 bg-border mx-1 hidden sm:block" />

        {/* Tools Group */}
        <div className="flex items-center gap-1 bg-black/20 rounded-md p-1">
          <Button variant="ghost" size="sm" onClick={onToggleTOC} aria-label="Open contents" className="h-8 px-2 gap-2">
            <Menu size={16} />
            <span className="hidden md:inline text-xs">Contents</span>
          </Button>

          <div className="w-px h-4 bg-border mx-1" />

          <Button variant="ghost" size="sm" onClick={onZoomOut} disabled={zoomLevel <= 0.5} aria-label="Zoom out" title="Zoom out" className="h-8 w-8 p-0 group">
            <Minus size={16} className="transition-colors group-hover:text-white" />
          </Button>
          <Button variant="ghost" size="sm" onClick={onZoomReset} aria-label="Reset zoom" title="Reset zoom to 100%" className="h-8 px-2 text-xs font-mono hover:bg-white/10">
            {Math.round(zoomLevel * 100)}%
          </Button>
          <Button variant="ghost" size="sm" onClick={onZoomIn} disabled={zoomLevel >= 2} aria-label="Zoom in" title="Zoom in" className="h-8 w-8 p-0 group">
            <Plus size={16} className="transition-colors group-hover:text-white" />
          </Button>

          <div className="w-px h-4 bg-border mx-1" />

          <Button variant="ghost" size="sm" onClick={onToggleFullscreen} aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"} className="h-8 w-8 p-0">
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
          </Button>
        </div>

        <div className="w-px h-6 bg-border mx-1 hidden sm:block" />

        {/* Actions Group */}
        <div className="flex items-center gap-1 bg-black/20 rounded-md p-1">
          <a href={pdfPath} download target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" aria-label="Download magazine" className="h-8 px-2 gap-2">
              <Download size={16} />
              <span className="hidden md:inline text-xs">Download</span>
            </Button>
          </a>
          <Link to="/">
            <Button variant="ghost" size="sm" aria-label="Close reader" className="h-8 px-2 gap-2 text-red-400 hover:text-red-300 hover:bg-red-950/30">
              <X size={16} />
              <span className="hidden md:inline text-xs">Close</span>
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};
