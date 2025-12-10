import React from 'react';
import { User, CheckSquare, Settings, Code2, Terminal, FileJson, Play } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const StructureSection: React.FC = () => {
  return (
    <section id="structure" className="py-24 bg-[#0f1117] text-white relative overflow-hidden transition-colors duration-300">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-xs font-mono mb-6">
                <Code2 size={14} /> 
                <span>PROMPT_SYNTAX_V1.0</span>
             </div>
             <h2 className="text-3xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white">
               Anatomy of a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Perfect Prompt</span>
             </h2>
             <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
               Just like code, prompts need structure to execute correctly. Master these three variables to compile the perfect output.
             </p>
          </div>
        </Reveal>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Legend Cards */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={100}>
              <div className="group bg-gray-800/40 backdrop-blur-md border border-gray-700/50 p-6 rounded-2xl hover:bg-gray-800/80 transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)] relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white group-hover:text-blue-400 transition-colors">1. Context / Role</h4>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Initialize the AI's persona. define <em>who</em> it is to set the knowledge base and tone.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="group bg-gray-800/40 backdrop-blur-md border border-gray-700/50 p-6 rounded-2xl hover:bg-gray-800/80 transition-all duration-300 hover:border-green-500/30 hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.2)] relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-green-500/10 rounded-xl text-green-400 group-hover:scale-110 transition-transform duration-300">
                    <CheckSquare size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white group-hover:text-green-400 transition-colors">2. Task</h4>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Execute the function. Be specific about <em>what</em> needs to be done. Vague inputs return null value.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="group bg-gray-800/40 backdrop-blur-md border border-gray-700/50 p-6 rounded-2xl hover:bg-gray-800/80 transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.2)] relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    <Settings size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white group-hover:text-purple-400 transition-colors">3. Constraints</h4>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Set parameters. Define length, format, and style boundaries to filter the output.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: IDE Visual */}
          <div className="lg:col-span-7">
            <Reveal delay={400}>
              <div className="rounded-xl overflow-hidden shadow-2xl bg-[#1e1e1e] border border-gray-700 ring-4 ring-gray-900/50 transform transition-transform hover:scale-[1.01] duration-500">
                 {/* Title Bar */}
                 <div className="bg-[#252526] px-4 py-3 flex items-center justify-between border-b border-[#333]">
                   <div className="flex items-center gap-4">
                     <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                       <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                       <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                     </div>
                   </div>
                   <div className="flex items-center gap-2 text-gray-400 text-xs font-sans bg-[#1e1e1e] px-3 py-1 rounded-md border border-[#333]">
                      <FileJson size={12} className="text-yellow-400" />
                      prompt_engineer.json
                   </div>
                   <div className="w-10"></div> {/* Spacer */}
                 </div>
                 
                 <div className="flex">
                    {/* Gutter / Line Numbers */}
                    <div className="hidden sm:block w-12 bg-[#1e1e1e] border-r border-[#333] pt-6 pb-6 text-right pr-3 text-gray-600 font-mono text-sm select-none">
                      <div className="leading-8">1</div>
                      <div className="leading-8">2</div>
                      <div className="leading-8">3</div>
                      <div className="leading-8">4</div>
                      <div className="leading-8">5</div>
                      <div className="leading-8">6</div>
                    </div>

                    {/* Code Area */}
                    <div className="flex-1 p-6 font-mono text-sm md:text-base leading-8 overflow-x-auto">
                       <div className="group flex flex-wrap items-center gap-2 hover:bg-[#2a2d2e] rounded px-2 -mx-2 transition-colors">
                          <span className="text-blue-500">"context"</span>: 
                          <span className="text-[#ce9178]">"You are a career counselor at a top university."</span>,
                          <span className="text-gray-500 text-xs ml-auto opacity-0 group-hover:opacity-100 transition-opacity select-none flex items-center gap-1"><User size={10}/> Role</span>
                       </div>
                       
                       <div className="group flex flex-wrap items-center gap-2 hover:bg-[#2a2d2e] rounded px-2 -mx-2 transition-colors">
                          <span className="text-green-500">"task"</span>: 
                          <span className="text-[#ce9178]">"Help me decide between two job offers."</span>,
                          <span className="text-gray-500 text-xs ml-auto opacity-0 group-hover:opacity-100 transition-opacity select-none flex items-center gap-1"><CheckSquare size={10}/> Action</span>
                       </div>
                       
                       <div className="group flex flex-wrap items-center gap-2 hover:bg-[#2a2d2e] rounded px-2 -mx-2 transition-colors">
                          <span className="text-purple-500">"constraints"</span>: 
                          <span className="text-[#ce9178]">"Compare salary, work-life balance in a table."</span>
                          <span className="text-gray-500 text-xs ml-auto opacity-0 group-hover:opacity-100 transition-opacity select-none flex items-center gap-1"><Settings size={10}/> Format</span>
                       </div>
                    </div>
                 </div>

                 {/* Terminal / Output */}
                 <div className="bg-[#1e1e1e] border-t border-[#333]">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-[#333] bg-[#252526]">
                       <div className="flex gap-4 text-xs font-bold text-gray-400 uppercase">
                          <span className="text-white border-b border-white pb-2 -mb-2.5">Output</span>
                          <span className="hover:text-gray-200 cursor-pointer">Terminal</span>
                       </div>
                       <Play size={12} className="text-green-500 fill-current" />
                    </div>
                    <div className="p-4 font-mono text-xs md:text-sm text-gray-300">
                       <div className="flex gap-2">
                          <span className="text-green-500">➜</span>
                          <span className="text-blue-400">~</span>
                          <span className="text-gray-400">generating response...</span>
                       </div>
                       <div className="mt-2 text-gray-400 pl-4 border-l-2 border-gray-700">
                          <span className="text-green-400">✔</span> Table generated successfully.<br/>
                          <span className="text-green-400">✔</span> Analyzed 2 job offers.<br/>
                          <span className="text-green-400">✔</span> Word count: 185 words.
                       </div>
                    </div>
                 </div>
                 
                 {/* Status Bar */}
                 <div className="bg-[#007acc] px-4 py-1 flex items-center justify-between text-[10px] text-white select-none">
                    <div className="flex gap-3">
                       <span>main*</span>
                       <span>errors: 0</span>
                    </div>
                    <div className="flex gap-3">
                       <span>Ln 3, Col 42</span>
                       <span>UTF-8</span>
                       <span>JSON</span>
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

export default StructureSection;