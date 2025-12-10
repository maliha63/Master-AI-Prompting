import React from 'react';
import { LLM_MODELS } from '../constants';
import { ExternalLink, CheckCircle2, Box } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const ModelComparison: React.FC = () => {
  return (
    <section id="models" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-widest mb-4">
              <Box size={14} /> Model Landscape
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">Top LLM Models</h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Different models have different strengths. We recommend testing your prompts across multiple platforms to find the best fit for your specific use case.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {LLM_MODELS.map((model, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-1 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:shadow-brand-500/10 dark:hover:shadow-brand-900/20 transition-all duration-300 h-full group flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="bg-white dark:bg-gray-900 rounded-[22px] p-7 h-full flex flex-col relative z-10">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-2">
                       <span className="inline-block px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-wider">
                         {model.company}
                       </span>
                       <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                         {model.name}
                       </h3>
                    </div>
                    <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center group-hover:rotate-6 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                      <img 
                        src={model.logo} 
                        alt={`${model.name} logo`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="h-px w-full bg-gray-100 dark:bg-gray-800 mb-6"></div>
                  
                  {/* Features List */}
                  <div className="flex-grow space-y-3 mb-8">
                    {model.features.split(',').map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-brand-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-tight">
                          {feature.trim()}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  <a 
                    href={model.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-bold flex items-center justify-center gap-2 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 text-sm shadow-sm hover:shadow-lg hover:shadow-brand-500/20"
                    aria-label={`Try ${model.name}`}
                  >
                    Try Model <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelComparison;