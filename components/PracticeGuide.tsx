import React from 'react';
import { Gamepad2, Sparkles, RefreshCcw, FlaskConical, Trophy, PartyPopper, Zap, ArrowRight, Command } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const PracticeGuide: React.FC = () => {
  return (
    <section id="practice" className="py-24 bg-[#050505] text-white relative overflow-hidden">
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#050505] to-black pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      {/* Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
               <Command size={14} /> Training Grounds
            </div>
            <h2 className="text-3xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
              Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400 inline-block pb-2">Art of Prompting</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Theory is just the beginning. To truly fluent in AI, you need to enter the training grounds. Here is your practice regimen.
            </p>
          </div>
        </Reveal>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
          
          {/* Card 1: The Lab (Experiment) - Spans 7 cols */}
          <div className="lg:col-span-7 group">
            <Reveal delay={100} width="100%">
              <div className="h-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[32px] p-8 lg:p-10 relative overflow-hidden hover:border-brand-500/50 transition-colors duration-500">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-brand-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                   <div className="w-14 h-14 bg-brand-500/20 rounded-2xl flex items-center justify-center text-brand-400 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
                      <FlaskConical size={28} strokeWidth={2.5} />
                   </div>
                   
                   <div>
                     <h3 className="text-2xl font-bold text-white mb-3">The Lab: Experiment Widely</h3>
                     <p className="text-lg text-gray-400 leading-relaxed">
                       Don't rely on a single source. Run the <span className="text-white font-semibold">same prompt</span> through ChatGPT, Gemini, and Claude simultaneously.
                     </p>
                   </div>

                   {/* Visual Element */}
                   <div className="flex gap-4 items-center mt-2">
                      {['GPT', 'Gemini', 'Claude'].map((model, i) => (
                        <div key={i} className="px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-gray-300 group-hover:border-brand-500/30 transition-colors">
                           {model}_v{i+1}.0
                        </div>
                      ))}
                      <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                   </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Card 2: The Loop (Iterate) - Spans 5 cols */}
          <div className="lg:col-span-5 group">
            <Reveal delay={200} width="100%">
               <div className="h-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[32px] p-8 lg:p-10 relative overflow-hidden hover:border-green-500/50 transition-colors duration-500">
                 {/* Hover Glow */}
                 <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"></div>

                 <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                    <div className="flex justify-between items-start">
                      <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-400 group-hover:rotate-180 transition-transform duration-700 ease-in-out shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]">
                          <RefreshCcw size={28} strokeWidth={2.5} />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider">
                        Loop
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Iterate & Refine</h3>
                      <p className="text-lg text-gray-400 leading-relaxed">
                        The first answer is rarely the best. Tweak your wording. Add constraints. <span className="text-white font-semibold">Polishing is part of the process.</span>
                      </p>
                    </div>
                 </div>
               </div>
            </Reveal>
          </div>

          {/* Card 3: The Studio (Flavor) - Spans 5 cols */}
          <div className="lg:col-span-5 group">
            <Reveal delay={300} width="100%">
               <div className="h-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[32px] p-8 lg:p-10 relative overflow-hidden hover:border-pink-500/50 transition-colors duration-500">
                 {/* Hover Glow */}
                 <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>

                 <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                    <div className="w-14 h-14 bg-pink-500/20 rounded-2xl flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)]">
                        <Sparkles size={28} strokeWidth={2.5} />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Add Unique Flavor</h3>
                      <p className="text-lg text-gray-400 leading-relaxed">
                        Don't be boring. Ask for a specific tone, a local context, or a unique format to <span className="text-white font-semibold">break the generic AI mold.</span>
                      </p>
                    </div>
                 </div>
               </div>
            </Reveal>
          </div>

          {/* Card 4: The Arcade (Play) - Spans 7 cols */}
          <div className="lg:col-span-7 group">
            <Reveal delay={400} width="100%">
               <div className="h-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[32px] p-8 lg:p-10 relative overflow-hidden hover:border-purple-500/50 transition-colors duration-500">
                 {/* Hover Glow */}
                 <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"></div>

                 <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                    <div className="flex items-center justify-between">
                       <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 group-hover:animate-bounce shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]">
                          <Gamepad2 size={28} strokeWidth={2.5} />
                       </div>
                       <Zap size={24} className="text-gray-600 group-hover:text-yellow-400 transition-colors fill-current" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Gamify the Process</h3>
                      <p className="text-lg text-gray-400 leading-relaxed">
                        Treat it like a game. Can you make the AI write a funny poem? A serious contract? <span className="text-white font-semibold">Playfulness leads to mastery.</span>
                      </p>
                    </div>
                 </div>
               </div>
            </Reveal>
          </div>
          
          {/* Footer Banner: Achievement */}
          <div className="lg:col-span-12 mt-8">
             <Reveal delay={500} width="100%">
               <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 p-8 md:p-12 text-center group hover:border-amber-500/40 transition-colors duration-500">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
                  <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-20 transition-opacity duration-700 transform group-hover:rotate-12">
                     <Trophy size={200} />
                  </div>

                  <div className="relative z-10 flex flex-col items-center justify-center">
                     <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                        Prompting is a Skill
                     </h3>
                     <p className="text-lg text-amber-100/80 max-w-2xl mx-auto mb-8 font-medium">
                        It's not just typing questions—it's about clarity, structure, and imagination.
                     </p>
                     
                     <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500 text-white font-bold shadow-lg shadow-amber-500/20 hover:scale-105 transition-transform cursor-default">
                        <PartyPopper size={20} className="animate-bounce" />
                        <span>Achievement: Happy Prompting!</span>
                     </div>
                  </div>
               </div>
             </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PracticeGuide;