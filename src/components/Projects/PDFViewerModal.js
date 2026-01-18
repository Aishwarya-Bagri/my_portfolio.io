import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import { FaTimes, FaDownload, FaExpand, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function PDFViewerModal({ project, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setIsLoading(false);
  };

  const onDocumentLoadError = (error) => {
    console.error('PDF load error:', error);
    setIsLoading(false);
  };

  const nextPage = () => {
    if (currentPage < numPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Calculate responsive width
  const getPageWidth = () => {
    if (typeof window === 'undefined') return 700;
    return Math.min(800, window.innerWidth - 80);
  };

  return (
    <motion.div
      className="pdf-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-backdrop"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      <motion.div
        className="modal-content"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        {/* Modal Header */}
        <div className="modal-header" style={{ borderColor: project.color }}>
          <h3>{project.name}</h3>
          <div className="modal-actions">
            <a
              href={project.pdfUrl}
              download
              className="modal-btn"
              title="Download PDF"
              onClick={(e) => e.stopPropagation()}
            >
              <FaDownload />
            </a>
            <a
              href={project.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-btn"
              title="Open in new tab"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExpand />
            </a>
            <button 
              className="modal-btn close-btn" 
              onClick={onClose}
              title="Close"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="modal-body">
          {isLoading && (
            <div className="pdf-loading-modal">
              <div className="loader-spinner"></div>
              <span>Loading document...</span>
            </div>
          )}
          
          <Document
            file={project.pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={null}
            className="pdf-document"
          >
            <Page
              pageNumber={currentPage}
              width={getPageWidth()}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading={
                <div className="page-loading">
                  <div className="loader-spinner small"></div>
                </div>
              }
            />
          </Document>
        </div>

        {/* Modal Footer - Pagination */}
        {numPages && numPages > 1 && (
          <div className="modal-footer">
            <button
              className="page-btn"
              onClick={prevPage}
              disabled={currentPage <= 1}
              aria-label="Previous page"
            >
              <FaChevronLeft /> Previous
            </button>
            <span className="page-info">
              Page <strong>{currentPage}</strong> of <strong>{numPages}</strong>
            </span>
            <button
              className="page-btn"
              onClick={nextPage}
              disabled={currentPage >= numPages}
              aria-label="Next page"
            >
              Next <FaChevronRight />
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default PDFViewerModal;

