import React, { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilePdf, FaExpand, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../../data/portfolio';
import { useTheme } from '../../theme/ThemeContext';
import PDFThumbnail from './PDFThumbnail';
import './Projects.css';

// Lazy load PDF Viewer component - only loads when user clicks
const PDFViewerModal = lazy(() => import('./PDFViewerModal'));

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

  const INITIAL_DISPLAY_COUNT = 3;
  const hasMoreProjects = projects.length > INITIAL_DISPLAY_COUNT;
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_DISPLAY_COUNT);

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

        {/* Projects Grid */}
        <div className="projects-grid">
          {displayedProjects.map((project, index) => {
            const projectColor = projectColors[index % projectColors.length];
            
            return (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: 'easeOut' 
                }}
                whileHover={{ y: -8 }}
                onClick={() => openViewer(project)}
              >
                {/* Thumbnail - Auto-generated from PDF first page */}
                <div className="project-thumbnail">
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
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  
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
                  View More ({projects.length - INITIAL_DISPLAY_COUNT} more) <FaChevronDown />
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
