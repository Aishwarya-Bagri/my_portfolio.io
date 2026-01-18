import React, { createContext, useContext, useEffect, useState } from 'react';
import { getThemeByName } from './themes';

const ThemeContext = createContext();

// Fixed theme - Blue
const FIXED_THEME = getThemeByName('Blue');

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Use fixed Blue theme
    setTheme(FIXED_THEME);
    applyTheme(FIXED_THEME);
    setIsLoaded(true);
    
    console.log(`🎨 Theme: ${FIXED_THEME.name}`);
  }, []);

  const applyTheme = (themeData) => {
    const root = document.documentElement;
    
    root.style.setProperty('--primary', themeData.primary);
    root.style.setProperty('--primary-light', themeData.primaryLight);
    root.style.setProperty('--secondary', themeData.secondary);
    root.style.setProperty('--accent', themeData.accent);
    root.style.setProperty('--bg-primary', themeData.bgPrimary);
    root.style.setProperty('--bg-secondary', themeData.bgSecondary);
    root.style.setProperty('--bg-tertiary', themeData.bgTertiary);
    root.style.setProperty('--text-primary', themeData.textPrimary);
    root.style.setProperty('--text-secondary', themeData.textSecondary);
    root.style.setProperty('--text-muted', themeData.textMuted);
    root.style.setProperty('--gradient-start', themeData.gradientStart);
    root.style.setProperty('--gradient-end', themeData.gradientEnd);
    
    // Update gradient
    root.style.setProperty(
      '--gradient-primary', 
      `linear-gradient(135deg, ${themeData.gradientStart} 0%, ${themeData.gradientEnd} 100%)`
    );
  };

  // Don't render until theme is loaded to prevent flash
  if (!isLoaded) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

