import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { experiences } from '../../data/portfolio';
import './Experience.css';

function Experience() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const isExpanded = (id) => expandedCards[id] || false;

  return (
    <div className="experience section">
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
            <span className="text-gradient">Experiences</span>
          </h2>
          <p className="section-subtitle">
            My professional journey in operations, sales, and product management.
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`experience-card ${isExpanded(exp.id) ? 'expanded' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Colored Header */}
              <div 
                className="card-header"
                style={{ backgroundColor: exp.themeColor }}
              >
                <h3 className="company-name">{exp.company}</h3>
              </div>

              {/* Floating Logo */}
              <div className="logo-wrapper">
                <div className="logo-circle">
                  <img src={`${process.env.PUBLIC_URL}${exp.logo}`} alt={exp.company} />
                </div>
              </div>

              {/* Card Body */}
              <div className="card-body">
                <h4 className="role-title">{exp.role}</h4>
                <p className="date-range">{exp.date}</p>
                
                {/* Description - truncated by default */}
                <p className={`description ${isExpanded(exp.id) ? 'expanded' : 'collapsed'}`}>
                  {exp.description}
                </p>
                
                {/* Highlights - hidden by default */}
                <AnimatePresence>
                  {isExpanded(exp.id) && exp.highlights && exp.highlights.length > 0 && (
                    <motion.ul
                      className="highlights"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.highlights.map((item, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                {/* Read More / Read Less Button */}
                {(exp.highlights && exp.highlights.length > 0) && (
                  <button 
                    className="read-more-btn"
                    onClick={() => toggleCard(exp.id)}
                  >
                    {isExpanded(exp.id) ? (
                      <>
                        Read Less <FaChevronUp />
                      </>
                    ) : (
                      <>
                        Read More <FaChevronDown />
                      </>
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
