import React, { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilePdf, FaExpand, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../../data/portfolio';
import { useTheme } from '../../theme/ThemeContext';
import PDFThumbnail from './PDFThumbnail';
import HeroProject from './HeroProject';
import './Projects.css';

// Lazy load PDF Viewer component - only loads when user clicks
const PDFViewerModal = lazy(() => import('./PDFViewerModal'));

// Helper to format description with bold labels
const formatDescriptionWithBold = (desc) => {
  return desc.split('\n').map((line, i) => {
    // Bold the labels: Problem, Solution, Impact
    let formattedLine = line
      .replace(/^(•\s*)(Problem:)/i, '$1<strong>$2</strong>')
      .replace(/^(•\s*)(Solution:)/i, '$1<strong>$2</strong>')
      .replace(/^(•\s*)(Impact:)/i, '$1<strong>$2</strong>');
    
    return (
      <span key={i} className="desc-line">
        <span dangerouslySetInnerHTML={{ __html: formattedLine }} />
        {i < desc.split('\n').length - 1 && <br />}
      </span>
    );
  });
};

// Project Card Component - Full description display
function ProjectCard({ project, projectColor, onOpenViewer }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
    >
      {/* Thumbnail - Auto-generated from PDF first page */}
      <div className="project-thumbnail" onClick={() => onOpenViewer(project)}>
        <PDFThumbnail 
          pdfUrl={`${process.env.PUBLIC_URL}${project.pdfUrl}`}
          projectColor={projectColor}
          projectName={project.name}
        />
        
        {/* Hover Overlay */}
        <div className="thumbnail-overlay">
          <div className="overlay-content">
            <FaExpand className="expand-icon" />
            <span>View Document</span>
          </div>
        </div>

        {/* PDF Badge */}
        <div className="pdf-badge" style={{ backgroundColor: projectColor }}>
          <FaFilePdf /> PDF
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <a
            href={`${process.env.PUBLIC_URL}${project.pdfUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="quick-btn"
            title="Open in new tab"
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h3 className="project-name" onClick={() => onOpenViewer(project)}>{project.name}</h3>
        
        {/* Full Description */}
        <div className="project-description">
          {formatDescriptionWithBold(project.description)}
        </div>
        
        {/* Tags */}
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="tag"
              style={{ 
                backgroundColor: `${projectColor}15`,
                color: projectColor
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  
  // Generate project colors from theme
  const projectColors = [
    theme.primary,
    theme.secondary,
    theme.primaryLight,
    theme.gradientEnd,
  ];

  // Filter out hero project PDFs from regular grid (optional - remove if you want them shown)
  const regularProjects = projects.filter(p => 
    p.pdfUrl !== '/documents/zomato-batching.pdf' && 
    p.pdfUrl !== '/documents/data-analytics-batching.pdf'
  );

  const INITIAL_DISPLAY_COUNT = 3;
  const hasMoreProjects = regularProjects.length > INITIAL_DISPLAY_COUNT;
  const displayedProjects = showAll ? regularProjects : regularProjects.slice(0, INITIAL_DISPLAY_COUNT);

  const openViewer = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeViewer = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="projects section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Strategic case studies and research documents showcasing data-driven insights and business solutions.
          </p>
        </motion.div>

        {/* Hero Project Section */}
        <HeroProject />

        {/* Other Projects Header */}
        {regularProjects.length > 0 && (
          <motion.h3 
            className="other-projects-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Other Projects
          </motion.h3>
        )}

        {/* Projects Grid */}
        <div className="projects-grid">
          {displayedProjects.map((project, index) => {
            const projectColor = projectColors[index % projectColors.length];
            
            return (
              <ProjectCard
                key={project.id}
                project={project}
                projectColor={projectColor}
                onOpenViewer={openViewer}
              />
            );
          })}
        </div>

        {/* View More / View Less Button */}
        {hasMoreProjects && (
          <motion.div
            className="projects-toggle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              className="toggle-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  Show Less <FaChevronUp />
                </>
              ) : (
                <>
                  View More ({regularProjects.length - INITIAL_DISPLAY_COUNT} more) <FaChevronDown />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>

      {/* Lazy Loaded PDF Viewer Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Suspense fallback={
            <div className="modal-loading">
              <div className="loader-spinner"></div>
              <span>Loading viewer...</span>
            </div>
          }>
            <PDFViewerModal 
              project={selectedProject} 
              onClose={closeViewer} 
            />
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
