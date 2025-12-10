import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Determine classes based on position
  let containerClasses = "absolute z-50 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap shadow-lg font-medium animate-slide-up dark:bg-gray-100 dark:text-gray-900";
  let arrowClasses = "absolute border-4 border-transparent";

  switch (position) {
    case 'top':
      containerClasses += " bottom-full left-1/2 -translate-x-1/2 mb-2";
      arrowClasses += " top-full left-1/2 -translate-x-1/2 -mt-1 border-t-gray-900 dark:border-t-gray-100";
      break;
    case 'bottom':
      containerClasses += " top-full left-1/2 -translate-x-1/2 mt-2";
      arrowClasses += " bottom-full left-1/2 -translate-x-1/2 -mb-1 border-b-gray-900 dark:border-b-gray-100";
      break;
    case 'left':
      containerClasses += " right-full top-1/2 -translate-y-1/2 mr-2";
      arrowClasses += " left-full top-1/2 -translate-y-1/2 -ml-1 border-l-gray-900 dark:border-l-gray-100";
      break;
    case 'right':
      containerClasses += " left-full top-1/2 -translate-y-1/2 ml-2";
      arrowClasses += " right-full top-1/2 -translate-y-1/2 -mr-1 border-r-gray-900 dark:border-r-gray-100";
      break;
  }

  return (
    <div 
      className="relative flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={containerClasses}>
          {text}
          <div className={arrowClasses} />
        </div>
      )}
    </div>
  );
};