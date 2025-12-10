import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { Moon, Sun } from 'lucide-react';

const AspiraSysLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="AspiraSys Logo">
    <text x="10" y="145" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="110" className="fill-[#151515] dark:fill-white" letterSpacing="-2">
      AspiraSys
    </text>

    <path d="M630 55 
           L665 110 
           L595 100 
           Z" 
        fill="#2e82c8" 
        stroke="#2e82c8" 
        strokeWidth="5" 
        strokeLinejoin="round"/>

    <path d="M660 10 
           L720 35 
           L670 80 
           Z" 
        fill="#cf4929" 
        stroke="#cf4929" 
        strokeWidth="5" 
        strokeLinejoin="round"/>

    <path d="M685 85 
           L735 135 
           L655 150 
           Z" 
        fill="#6cad46" 
        stroke="#6cad46" 
        strokeWidth="5" 
        strokeLinejoin="round"/>
  </svg>
);

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScrollProgress = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScrollProgress);
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <a href="#top" onClick={(e) => handleScroll(e, 'top')} className="cursor-pointer hover:opacity-80 transition-opacity">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Master AI Prompting</h1>
           </a>
        </div>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 text-sm lg:text-base font-medium text-gray-600 dark:text-gray-300">
            <a href="#importance" onClick={(e) => handleScroll(e, 'importance')} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Why It Matters</a>
            <a href="#structure" onClick={(e) => handleScroll(e, 'structure')} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Structure</a>
            <a href="#models" onClick={(e) => handleScroll(e, 'models')} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Models</a>
            <a href="#practice" onClick={(e) => handleScroll(e, 'practice')} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Practice</a>
          </nav>
          
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle - No Tooltip */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 hidden md:block"></div>

            <div className="ml-0">
               <AspiraSysLogo className="h-8 md:h-10 w-auto" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-brand-500 transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }}></div>
    </header>
  );
};

export default Header;