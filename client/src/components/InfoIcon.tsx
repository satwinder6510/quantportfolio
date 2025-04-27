import React from 'react';
import { Info } from 'lucide-react';

interface InfoIconProps {
  onClick: () => void;
  className?: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({ onClick, className = '' }) => {
  return (
    <button 
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      className={`inline-flex items-center justify-center h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 ml-1 ${className}`}
      aria-label="More information"
      title="Click for more information"
    >
      <Info className="h-3 w-3 text-gray-600 dark:text-gray-300" />
    </button>
  );
};

export default InfoIcon;