import React, { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaLightbulb, FaRocket, FaChartLine } from 'react-icons/fa';
import './HeroProject.css';

// Lazy load PDF Viewer
const PDFViewerModal = lazy(() => import('./PDFViewerModal'));

function HeroProject() {
  const [selectedProject, setSelectedProject] = useState(null);

  const heroData = {
    title: "Intelligent Multi-Order Batching Engine",
    problem: {
      title: "The Problem",
      content: "Zomato's \"One Order = One Driver\" logistics model is operationally inefficient during peak hours. High demand (hitting ~1,034 orders/hr) creates fleet bottlenecks, while \"dead miles\" from unbatched orders drive the Cost Per Delivery (CPD) up to ₹108.20, eroding unit economics."
    },
    solution: {
      title: "The Solution",
      content: "I proposed a \"Multi-Pick, Multi-Drop\" Product Requirements Document (PRD) to batch orders from nearby restaurants. To validate this, I simulated a Naive Greedy Algorithm on historical data, applying strict \"Freshness Guardrails\" (7-min prep sync) to ensure food quality wasn't compromised."
    },
    impact: {
      title: "The Impact",
      content: "The simulation validated the financial viability of the feature, showing a potential 11.3% reduction in delivery costs (lowering CPD to ₹96.01) and increasing fleet capacity by saving 926 trips during peak volumes."
    },
    pdfs: [
      {
        id: "prd",
        name: "View PRD",
        description: "Product Requirements Document",
        pdfUrl: "/documents/zomato-batching.pdf",
        color: "#e23744"
      },
      {
        id: "analytics",
        name: "Unit Economics Analysis",
        description: "Data Analytics Report",
        pdfUrl: "/documents/data-analytics-batching.pdf",
        color: "#06b6d4"
      }
    ]
  };

  const openViewer = (pdf) => {
    setSelectedProject({
      name: pdf.name,
      pdfUrl: pdf.pdfUrl,
      color: pdf.color
    });
    document.body.style.overflow = 'hidden';
  };

  const closeViewer = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="hero-project-section">
      <motion.div
        className="hero-project-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Badge */}
        <div className="hero-badge">
          <span>🌟 My Hero Project</span>
        </div>

        {/* Title */}
        <h2 className="hero-title">{heroData.title}</h2>

        {/* Three Columns */}
        <div className="hero-columns">
          {/* Problem */}
          <motion.div 
            className="hero-column problem"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="column-icon problem-icon">
              <FaLightbulb />
            </div>
            <h3>{heroData.problem.title}</h3>
            <p>{heroData.problem.content}</p>
          </motion.div>

          {/* Solution */}
          <motion.div 
            className="hero-column solution"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="column-icon solution-icon">
              <FaRocket />
            </div>
            <h3>{heroData.solution.title}</h3>
            <p>{heroData.solution.content}</p>
          </motion.div>

          {/* Impact */}
          <motion.div 
            className="hero-column impact"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="column-icon impact-icon">
              <FaChartLine />
            </div>
            <h3>{heroData.impact.title}</h3>
            <p>{heroData.impact.content}</p>
          </motion.div>
        </div>

        {/* PDF Buttons */}
        <div className="hero-pdf-buttons">
          {heroData.pdfs.map((pdf) => (
            <motion.button
              key={pdf.id}
              className="hero-pdf-btn"
              style={{ '--btn-color': pdf.color }}
              onClick={() => openViewer(pdf)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaFilePdf className="pdf-icon" />
              <div className="btn-text">
                <span className="btn-title">{pdf.name}</span>
                <span className="btn-subtitle">{pdf.description}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* PDF Viewer Modal */}
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
    </div>
  );
}

export default HeroProject;

