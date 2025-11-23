import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#030303]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
         {/* Cyberpunk Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] transform perspective-1000 rotate-x-60 scale-150 origin-bottom" />
         
         {/* Glow Orbs */}
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto flex flex-col items-center select-none w-full">
        
        <div className="flex items-center gap-6 mb-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
           <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
           <span className="text-blue-400 font-mono text-xs tracking-[0.5em] uppercase drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
             FPV / CINEMATIC / VISUALS
           </span>
           <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
        </div>

        {/* Main Title Block */}
        <div className="relative mb-6 group">
           <h1 className="text-8xl md:text-[10rem] lg:text-[12rem] font-bold text-white leading-[0.85] tracking-tighter mix-blend-screen scale-y-110">
            <div className="glitch-wrapper">
              <span className="glitch-text block" data-text="贰东">贰东</span>
            </div>
            <div className="glitch-wrapper">
              <span className="glitch-text block text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500" data-text="传媒">传媒</span>
            </div>
          </h1>
          
          {/* Decorative Elements around text */}
          <div className="absolute -top-4 -right-8 text-xs font-mono text-blue-500/50 rotate-90 hidden md:block">
            SYSTEM_READY // 2024
          </div>
          <div className="absolute -bottom-4 -left-8 text-xs font-mono text-purple-500/50 -rotate-90 hidden md:block">
            EST. 2019 // SHENZHEN
          </div>
        </div>
        
        <div className="relative mt-8 mb-12 max-w-xl mx-auto opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
          <p className="text-lg md:text-xl text-gray-400 font-light tracking-widest leading-relaxed">
            视界无界，<span className="text-white font-bold italic">极速</span> 穿梭。
            <br />
            我们在重力消失的地方，寻找画面的 <span className="text-blue-400">极值</span>。
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto z-20 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
          <a 
            href="#gallery" 
            className="group relative px-12 py-5 bg-white text-black font-bold text-lg uppercase tracking-widest overflow-hidden hover:scale-105 transition-transform duration-300 clip-path-polygon"
            style={{clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'}}
          >
            <div className="absolute inset-0 bg-blue-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative group-hover:text-white transition-colors flex items-center gap-3">
              View Portfolio
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </a>
        </div>
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute bottom-10 left-10 hidden md:block">
         <div className="flex flex-col gap-1 text-[10px] font-mono text-gray-600">
            <span>LAT: 22.5431 N</span>
            <span>LNG: 114.0579 E</span>
            <span className="text-green-500 animate-pulse">SIGNAL: STRONG</span>
         </div>
      </div>
      
      <div className="absolute bottom-10 right-10 hidden md:block text-right">
         <div className="flex flex-col gap-1 text-[10px] font-mono text-gray-600">
            <span>VELOCITY: 150 KM/H</span>
            <span>ALTITUDE: 500 M</span>
            <span className="text-blue-500">MODE: ACRO</span>
         </div>
      </div>
    </div>
  );
};

export default Hero;