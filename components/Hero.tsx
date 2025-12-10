import React from 'react';
import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-12 pb-20 lg:pt-32 lg:pb-40 overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-100/50 dark:bg-brand-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <Reveal>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-sm font-bold uppercase tracking-widest shadow-sm">
                  <Sparkles size={14} /> Prompt Engineering Guide
                </div>
                
                <h1 className="text-4xl lg:text-[5rem] font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
                  Master AI <br className="hidden lg:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400 dark:from-brand-400 dark:to-brand-200">Prompting</span>
                </h1>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  Unlock the true potential of AI. Learn to talk to LLMs clearly, creatively, and effectively—with real prompts you can try right now.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <a 
                  href="#practice-samples"
                  onClick={(e) => handleScroll(e, 'practice-samples')}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-base hover:translate-y-[-2px] hover:shadow-xl hover:shadow-brand-500/30 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Start Practicing
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://youtu.be/p09yRj47kNM?si=Hlt81Vg9Pbg6X-Sx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-xl font-bold text-base hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <PlayCircle size={18} className="text-brand-600 dark:text-brand-400" />
                  Why It Matters
                </a>
              </div>
            </Reveal>
          </div>

          {/* Image Content */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
            <Reveal delay={400}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/20 border-[8px] border-white/50 dark:border-gray-800/50 backdrop-blur-sm transform rotate-2 hover:rotate-0 transition-all duration-700 ease-out">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-transparent mix-blend-overlay z-10"></div>
                <img 
                  src="https://i.pinimg.com/736x/8d/48/32/8d4832f91daa5b3eefb01e238e719288.jpg" 
                  alt="Futuristic AI Brain and Neural Network" 
                  className="w-full h-auto object-cover scale-105 hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;