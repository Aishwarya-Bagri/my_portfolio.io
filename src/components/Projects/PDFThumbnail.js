import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { FaFilePdf } from 'react-icons/fa';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function PDFThumbnail({ pdfUrl, projectColor, projectName }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoadSuccess = () => {
    setIsLoaded(true);
  };

  const handleLoadError = () => {
    setHasError(true);
  };

  // Show placeholder if error
  if (hasError) {
    return (
      <div 
        className="thumbnail-placeholder"
        style={{ 
          background: `linear-gradient(135deg, ${projectColor} 0%, ${adjustColor(projectColor, -40)} 100%)`
        }}
      >
        <FaFilePdf className="placeholder-icon" />
      </div>
    );
  }

  return (
    <div className="pdf-thumbnail-wrapper">
      {/* Loading skeleton */}
      {!isLoaded && (
        <div 
          className="thumbnail-loading"
          style={{ 
            background: `linear-gradient(135deg, ${projectColor}20 0%, ${projectColor}40 100%)`
          }}
        >
          <div className="loading-pulse"></div>
        </div>
      )}
      
      {/* PDF First Page */}
      <Document
        file={pdfUrl}
        onLoadSuccess={handleLoadSuccess}
        onLoadError={handleLoadError}
        loading={null}
        className={`pdf-document ${isLoaded ? 'loaded' : ''}`}
      >
        <Page 
          pageNumber={1} 
          width={400}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
}

// Helper function to darken colors
function adjustColor(color, amount) {
  const clamp = (val) => Math.min(255, Math.max(0, val));
  let hex = color.replace('#', '');
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  r = clamp(r + amount);
  g = clamp(g + amount);
  b = clamp(b + amount);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

export default PDFThumbnail;

