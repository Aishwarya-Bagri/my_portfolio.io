import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaPuzzlePiece, FaChartBar, FaCode, FaCheckCircle } from 'react-icons/fa';
import { skillCategories } from '../../data/portfolio';
import { useTheme } from '../../theme/ThemeContext';
import './Skills.css';

// Icon mapping
const iconMap = {
  target: FaBullseye,
  puzzle: FaPuzzlePiece,
  chart: FaChartBar,
  code: FaCode,
};

function Skills() {
  const { theme } = useTheme();
  
  // Generate color variants from theme
  const colorVariants = [
    theme.primary,
    theme.secondary,
    theme.primaryLight,
    theme.gradientEnd,
  ];
  
  return (
    <div className="skills section">
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
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            Core competencies in product management, analytics, and technology.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || FaBullseye;
            const cardColor = colorVariants[index % colorVariants.length];
            
            return (
              <motion.div
                key={category.id}
                className="skill-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <div className="skill-icon" style={{ backgroundColor: `${cardColor}15` }}>
                  <IconComponent style={{ color: cardColor }} />
                </div>

                {/* Title */}
                <h3 className="skill-title">{category.title}</h3>

                {/* Skills List */}
                <ul className="skill-list">
                  {category.skills.map((skill, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                    >
                      <FaCheckCircle className="check-icon" style={{ color: cardColor }} />
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;

