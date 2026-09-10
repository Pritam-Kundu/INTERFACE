import React, { forwardRef, useEffect, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

interface FlipbookViewerProps {
  pages: number[];
  pagesPath: string;
  zoomLevel: number;
  onPageChange: (pageNumber: number) => void;
  flipbookRef: React.RefObject<any>;
}

// Page component must use forwardRef for react-pageflip to work
const Page = forwardRef<HTMLDivElement, { number: number; imageSrc: string; isCover?: boolean }>((props, ref) => {
  return (
    <div className="page bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden" ref={ref}>
      <div className="page-content w-full h-full relative">
        <img 
          src={props.imageSrc} 
          alt={`Page ${props.number}`}
          className="w-full h-full object-fill"
          loading={props.number <= 3 ? "eager" : "lazy"}
          decoding={props.number <= 3 ? "sync" : "async"}
        />
        {/* Subtle inner shadow for book binding effect */}
        {!props.isCover && (
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
        )}
      </div>
    </div>
  );
});

Page.displayName = 'Page';

export const FlipbookViewer: React.FC<FlipbookViewerProps> = ({
  pages,
  pagesPath,
  zoomLevel,
  onPageChange,
  flipbookRef
}) => {
  const [dimensions, setDimensions] = useState({ width: 400, height: 600 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const mobile = width < 768;
      setIsMobile(mobile);

      // Calculate optimal page size maintaining aspect ratio (~1:1.4)
      // Allow toolbar space at the bottom (approx 80px)
      const availableHeight = height - 100;
      let targetHeight = availableHeight;
      let targetWidth = targetHeight / 1.414; // Standard A4/magazine ratio

      if (mobile) {
        // Mobile: single page, max width
        if (targetWidth > width - 32) {
          targetWidth = width - 32;
          targetHeight = targetWidth * 1.414;
        }
      } else {
        // Desktop: two pages side by side
        if (targetWidth * 2 > width - 64) {
          targetWidth = (width - 64) / 2;
          targetHeight = targetWidth * 1.414;
        }
      }

      setDimensions({ width: targetWidth, height: targetHeight });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onFlip = (e: any) => {
    // react-pageflip uses 0-based indexing.
    // In 2-page mode, it returns the left page index.
    // If we are on the cover (index 0), it's page 1.
    // If index is 1 (inside cover left), page is 2.
    onPageChange(e.data + 1);
  };

  return (
    <div className={`w-full h-full ${zoomLevel > 1 ? 'overflow-auto touch-pan-x touch-pan-y' : 'overflow-hidden touch-none'} flex items-center justify-center`}>
      <div
        className="flex items-center justify-center transition-all duration-300 ease-out"
        style={{
          width: zoomLevel > 1 ? `${dimensions.width * (isMobile ? 1 : 2) * zoomLevel}px` : '100%',
          height: zoomLevel > 1 ? `${dimensions.height * zoomLevel}px` : '100%',
        }}
      >
        <div 
          style={{
            transform: `scale(${zoomLevel})`,
            transition: 'transform 0.3s cubic-bezier(0.2, 0, 0, 1)',
            transformOrigin: 'center center'
          }}
        >
      {dimensions.width > 0 && (
        <HTMLFlipBook
          width={dimensions.width}
          height={dimensions.height}
          size="fixed"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onFlip}
          className="flipbook shadow-2xl"
          ref={flipbookRef}
          usePortrait={isMobile}
          startPage={0}
          drawShadow={true}
          flippingTime={1000}
          useMouseEvents={true}
          swipeDistance={30}
          clickEventForward={true}
          style={{}}
          startZIndex={0}
          autoSize={true}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          {pages.map((pageNum) => {
            const pageImageName = `page-${String(pageNum).padStart(3, '0')}.webp`;
            const isCover = pageNum === 1 || pageNum === pages.length;
            
            return (
              <Page
                key={pageNum}
                number={pageNum}
                imageSrc={`${pagesPath}${pageImageName}`}
                isCover={isCover}
              />
            );
          })}
        </HTMLFlipBook>
      )}
        </div>
      </div>
    </div>
  );
};
