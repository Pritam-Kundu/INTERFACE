import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { magazines } from '../data/magazines';
import { FlipbookViewer } from '../components/reader/FlipbookViewer';
import { ReaderToolbar } from '../components/reader/ReaderToolbar';
import { TableOfContents } from '../components/reader/TableOfContents';

export const Reader: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const edition = magazines.find(m => m.year.toString() === id);
  const flipbookRef = useRef<any>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!edition) {
      navigate('/');
    }
  }, [edition, navigate]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleNextPage = useCallback(() => {
    if (flipbookRef.current) {
      flipbookRef.current.pageFlip().flipNext();
    }
  }, []);

  const handlePrevPage = useCallback(() => {
    if (flipbookRef.current) {
      flipbookRef.current.pageFlip().flipPrev();
    }
  }, []);

  const handleGoToPage = useCallback((page: number) => {
    if (flipbookRef.current) {
      // react-pageflip uses 0-indexed page numbers
      flipbookRef.current.pageFlip().flip(page - 1);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (tocOpen) return; // Disable keyboard nav if TOC is open
      
      switch (e.key) {
        case 'ArrowRight':
          handleNextPage();
          break;
        case 'ArrowLeft':
          handlePrevPage();
          break;
        case 'Home':
          handleGoToPage(1);
          break;
        case 'End':
          if (edition) handleGoToPage(edition.pageCount);
          break;
        case 'Escape':
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextPage, handlePrevPage, handleGoToPage, edition, tocOpen]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  if (!edition) return null;

  const pages = Array.from({ length: edition.pageCount }, (_, i) => i + 1);

  return (
    <div className="fixed inset-0 bg-background overflow-hidden animate-in fade-in duration-700 z-50 flex flex-col">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-background to-background pointer-events-none" />

      {/* Main Reader Area */}
      <div className="relative flex-1 w-full h-full overflow-hidden flex items-center justify-center pt-8 pb-20">
        <FlipbookViewer
          pages={pages}
          pagesPath={edition.pagesPath}
          zoomLevel={zoomLevel}
          onPageChange={(page) => setCurrentPage(page)}
          flipbookRef={flipbookRef}
        />
      </div>

      <ReaderToolbar
        currentPage={currentPage}
        totalPages={edition.pageCount}
        zoomLevel={zoomLevel}
        isFullscreen={isFullscreen}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
        onGoToPage={handleGoToPage}
        onZoomIn={() => setZoomLevel(prev => Math.min(prev + 0.5, 3))}
        onZoomOut={() => setZoomLevel(prev => Math.max(prev - 0.5, 1))}
        onZoomReset={() => setZoomLevel(1)}
        onToggleFullscreen={toggleFullscreen}
        onToggleTOC={() => setTocOpen(true)}
        pdfPath={edition.pdfPath}
      />

      <TableOfContents
        isOpen={tocOpen}
        onClose={() => setTocOpen(false)}
        onNavigate={handleGoToPage}
        totalPages={edition.pageCount}
      />
    </div>
  );
};
