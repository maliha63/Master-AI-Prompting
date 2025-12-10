import React from 'react';
import { Youtube, Instagram, Linkedin } from 'lucide-react';
import { Tooltip } from './ui/Tooltip';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 py-12 border-t border-gray-800 dark:border-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <p className="mb-4 text-xl font-semibold text-white">Master AI Prompting</p>
        
        <div className="text-center mb-8 space-y-2">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} AI Prompting Guide. All rights reserved.
          </p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-500">
            Designed and developed by Maliha
          </p>
        </div>

        <div className="flex gap-8 mb-8">
           <Tooltip text="Visit our YouTube">
             <a href="https://www.youtube.com/@aspirasy" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors transform hover:scale-110 duration-200" aria-label="YouTube">
               <Youtube size={24} />
             </a>
           </Tooltip>
           <Tooltip text="Follow us on Instagram">
             <a href="https://www.instagram.com/aspirasysofficial/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors transform hover:scale-110 duration-200" aria-label="Instagram">
               <Instagram size={24} />
             </a>
           </Tooltip>
           <Tooltip text="Connect on LinkedIn">
             <a href="https://www.linkedin.com/company/aspirasys" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors transform hover:scale-110 duration-200" aria-label="LinkedIn">
               <Linkedin size={24} />
             </a>
           </Tooltip>
        </div>

        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;