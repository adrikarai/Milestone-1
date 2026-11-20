import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faHouse, faUtensils, faImages, faPhone,
  faBars, faXmark, faMugHot, faMoon, faSun
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/', icon: faHouse },
    { name: 'Menu', path: '/menu', icon: faUtensils },
    { name: 'Gallery', path: '/gallery', icon: faImages },
    { name: 'Contact', path: '/contact', icon: faPhone }
  ];

  // Apply Dark Mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Detect System Theme
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemTheme = (event) => {
      if (!localStorage.getItem('theme')) setDarkMode(event.matches);
    };

    mediaQuery.addEventListener('change', handleSystemTheme);
    return () => mediaQuery.removeEventListener('change', handleSystemTheme);
  }, []);

  // Close Mobile Menu and Scroll to Top on Page Change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Navigate and Scroll to Top
  const handleNavigation = (path) => {
    setIsOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  // Toggle Theme
  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const focusStyle = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F23883] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF5EC] dark:focus-visible:ring-offset-[#1F1B1D]";

  return (
    <header className="bg-[#FFF5EC] dark:bg-[#1F1B1D] shadow-md  top-0 z-50 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" onClick={() => handleNavigation('/')} aria-label="Mimi Café Home" className={`flex items-center gap-2 shrink-0 ${focusStyle}`}>
          <div className="w-12 h-12 rounded-full bg-[#F23883] flex items-center justify-center text-white text-xl">
            <FontAwesomeIcon icon={faMugHot} />
          </div>

          <div>
            <p className="text-2xl md:text-3xl font-extrabold text-[#F23883] tracking-tight">MIMI</p>
            <span className="text-[10px] md:text-xs font-bold tracking-[4px] text-[#292329] dark:text-[#FDE6D5]">CAFÉ</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-2 bg-white/80 dark:bg-[#30272C] rounded-full p-2 shadow-sm">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => handleNavigation(item.path)}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-[#292329] dark:text-[#FFF5EC] font-semibold hover:bg-[#C8F45A] hover:text-[#292329] transition-all duration-300 ${location.pathname === item.path ? 'bg-[#C8F45A] text-[#292329]' : ''} ${focusStyle}`}
              >
                <FontAwesomeIcon icon={item.icon} />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">

          {/* Dark Mode Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className={`w-11 h-11 rounded-full bg-[#292329] dark:bg-[#FDE6D5] text-white dark:text-[#292329] hover:bg-[#F23883] dark:hover:bg-[#F23883] dark:hover:text-white transition-all duration-300 ${focusStyle}`}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden w-11 h-11 rounded-full bg-[#F23883] text-white text-xl hover:bg-[#D92770] transition ${focusStyle}`}
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div id="mobile-navigation" className="md:hidden bg-[#FFF5EC] dark:bg-[#1F1B1D] border-t border-[#F23883]/20 px-5 py-5 shadow-lg">
          <ul className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => handleNavigation(item.path)}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl text-[#292329] dark:text-[#FFF5EC] font-semibold hover:bg-[#C8F45A] hover:text-[#292329] transition-all duration-300 ${location.pathname === item.path ? 'bg-[#C8F45A] text-[#292329]' : ''} ${focusStyle}`}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-[#F23883] w-5" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
