import React, { useRef, useState } from 'react';
import { Trash2, Trophy, XCircle, CheckCircle2, ArrowRight, Zap, AlertTriangle, Terminal, Sparkles } from 'lucide-react';
import { Reveal } from './ui/Reveal';

// --- 3D Tilt Card Component ---
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', glowColor }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (max 8 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    // Calculate glow position (percentage)
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;

    setRotation({ x: rotateX, y: rotateY });
    setGlowPos({ x: glowX, y: glowY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      className={`relative perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={cardRef}
        className="transition-transform duration-100 ease-out preserve-3d h-full"
        style={{ 
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovering ? 1.02 : 1}, ${isHovering ? 1.02 : 1}, 1)`,
        }}
      >
        {/* Dynamic Glow Effect */}
        <div 
          className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 transition-opacity duration-500 z-0"
          style={{ 
            opacity: isHovering ? 0.2 : 0,
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor}, transparent 70%)`
          }}
        />
        
        {/* Card Content Container */}
        <div className="relative z-10 h-full">
            {children}
        </div>
      </div>
    </div>
  );
};

const ImportanceSection: React.FC = () => {
  return (
    <section id="importance" className="py-24 bg-gray-50 dark:bg-[#050505] relative transition-colors duration-300 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-widest mb-6 border border-gray-300 dark:border-gray-700">
               <Zap size={14} className="fill-current" /> Compare & Contrast
            </div>
            <h2 className="text-3xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-500 drop-shadow-sm">Power of Precision</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
              Vague inputs create noise. <span className="text-brand-600 dark:text-brand-400 font-bold decoration-brand-500/30 underline underline-offset-4 decoration-2">Specificity</span> creates value.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* ================= CARD 1: BAD PROMPTS (Terminal / Error Style) ================= */}
          <Reveal delay={200} width="100%">
            <TiltCard glowColor="#ef4444" className="h-full">
              <div className="h-full bg-gray-50 dark:bg-[#0a0a0a] rounded-3xl p-1 border border-red-200 dark:border-red-900/30 shadow-2xl relative overflow-hidden group">
                {/* Internal Card Body */}
                <div className="h-full bg-white dark:bg-[#0F0F0F] rounded-[20px] p-8 lg:p-10 relative overflow-hidden flex flex-col">
                    
                    {/* Scanline Animation */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent h-[10px] w-full animate-scan pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(255,0,0,0.03))] z-0 bg-[length:100%_4px,3px_100%] pointer-events-none"></div>

                    {/* Header */}
                    <div className="relative z-10 flex items-center justify-between mb-8 pb-6 border-b border-red-100 dark:border-red-900/20 border-dashed">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-50 dark:bg-red-900/10 rounded-xl flex items-center justify-center text-red-500 shadow-inner ring-1 ring-red-100 dark:ring-red-900/20">
                          <AlertTriangle size={24} strokeWidth={2.5} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 font-mono tracking-tight">Vague Input</h3>
                          <div className="flex items-center gap-2 mt-1">
                             <span className="relative flex h-2 w-2">
                               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                               <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                             </span>
                             <p className="text-[10px] font-mono text-red-500 uppercase tracking-widest font-bold">System Error</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content List */}
                    <div className="space-y-4 mb-8 flex-grow relative z-10">
                      {[
                        "Help me with career",
                        "Write something about AI",
                        "Make it better",
                        "Fix this code"
                      ].map((text, i) => (
                        <div key={i} className="group/item flex items-center p-4 rounded-xl bg-red-50/50 dark:bg-red-950/5 border border-red-100 dark:border-red-900/20 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 hover:translate-x-1 cursor-not-allowed">
                          {/* THE RED BULLET POINT REQUESTED */}
                          <span className="text-red-500 dark:text-red-500 mr-4 select-none text-2xl leading-none animate-pulse">•</span>
                          
                          <span className="font-mono text-gray-500 dark:text-gray-400 text-sm lg:text-base line-through opacity-70 group-hover/item:opacity-100 transition-opacity">
                             {text}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Footer Status */}
                    <div className="mt-auto bg-red-100/50 dark:bg-red-950/20 rounded-xl p-4 flex items-center justify-between border border-red-200 dark:border-red-900/30 relative z-10 backdrop-blur-sm">
                       <div className="flex items-center gap-2">
                          <Terminal size={14} className="text-red-500" />
                          <span className="text-red-700 dark:text-red-400 font-mono text-xs uppercase tracking-wider font-bold">Response Quality</span>
                       </div>
                       <div className="flex items-center gap-2 text-red-600 dark:text-red-500 font-black tracking-tight bg-white dark:bg-red-900/20 px-3 py-1 rounded-lg shadow-sm border border-red-100 dark:border-transparent">
                         <span>TRASH</span>
                         <Trash2 size={16} />
                       </div>
                    </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* ================= CONNECTOR (Desktop Only) ================= */}
          <div className="hidden lg:flex flex-col items-center justify-center relative z-20 -mx-6">
             <div className="h-32 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent absolute top-0"></div>
             <div className="h-32 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent absolute bottom-0"></div>
             
             <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-full border-4 border-gray-100 dark:border-gray-800 shadow-2xl flex items-center justify-center text-brand-500 relative z-30 group">
                <div className="absolute inset-0 bg-brand-500 rounded-full animate-ping opacity-10 duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                <div className="relative z-10 bg-white dark:bg-gray-900 w-[90%] h-[90%] rounded-full flex items-center justify-center">
                    <ArrowRight size={32} className="text-gray-900 dark:text-white group-hover:translate-x-1 transition-transform" />
                </div>
             </div>
          </div>

          {/* ================= CARD 2: GOOD PROMPTS (Holographic Gold) ================= */}
          <Reveal delay={400} width="100%">
            <TiltCard glowColor="#fbbf24" className="h-full">
               <div className="h-full bg-white dark:bg-[#0a0a0a] rounded-3xl p-1 border border-amber-200 dark:border-amber-500/30 shadow-2xl relative overflow-hidden group">
                  {/* Premium Mesh Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-white to-orange-50/50 dark:from-gray-900 dark:via-black dark:to-amber-950/20 opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>

                  <div className="h-full bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-[20px] p-8 lg:p-10 relative overflow-hidden flex flex-col z-10">
                    
                    {/* Floating Particles */}
                    <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                       <Sparkles size={80} className="text-amber-400 animate-pulse" />
                    </div>

                    {/* Header */}
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-amber-100 dark:border-amber-900/30">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-amber-500/30 ring-2 ring-white dark:ring-gray-800">
                          <CheckCircle2 size={24} strokeWidth={2.5} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Precise Prompt</h3>
                          <div className="flex items-center gap-2 mt-1">
                             <div className="flex gap-0.5">
                               {[1,2,3,4,5].map(n => <div key={n} className="w-1 h-2 bg-amber-500 rounded-full"></div>)}
                             </div>
                             <p className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">Optimized</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content List */}
                    <div className="space-y-6 mb-8 flex-grow">
                      {[
                        { text: "I am a final-year engineering student interested in data science. Compare Data Scientist vs ML Engineer roles...", tag: "Context" },
                        { text: "Write a 300-word blog introduction about how AI helps students learn faster, in a friendly tone...", tag: "Style" }
                      ].map((item, i) => (
                        <div key={i} className="group/card relative p-5 bg-white dark:bg-gray-800 rounded-2xl border border-amber-100 dark:border-amber-500/20 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1">
                          {/* Accent Bar */}
                          <div className="absolute -left-px top-6 w-1 h-8 bg-amber-400 rounded-r-full group-hover/card:h-12 transition-all duration-300 shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
                          
                          <div className="flex justify-between items-start mb-2">
                             <div className="flex gap-1">
                               <div className="w-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                               <div className="w-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                             </div>
                             <span className="text-[10px] font-bold text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded border border-amber-100 dark:border-amber-900/30 uppercase tracking-wider">{item.tag}</span>
                          </div>
                          <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed font-medium">
                            "{item.text}"
                          </p>
                        </div>
                      ))}
                    </div>

                     {/* Footer Status */}
                     <div className="mt-auto bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-4 flex items-center justify-between shadow-lg shadow-amber-500/30 text-white relative overflow-hidden group/btn">
                       <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                       <div className="flex items-center gap-2 relative z-10">
                          <Zap size={14} className="fill-white" />
                          <span className="font-mono text-xs uppercase tracking-wider font-bold text-amber-50">Result</span>
                       </div>
                       <div className="flex items-center gap-2 font-bold text-white relative z-10">
                         <span>GOLD STANDARD</span>
                         <Trophy size={18} className="fill-white animate-bounce" />
                       </div>
                    </div>
                  </div>
               </div>
            </TiltCard>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default ImportanceSection;