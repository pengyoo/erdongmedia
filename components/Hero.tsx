import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#050505]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '7s'}} />
        
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
        
        {/* Noise Texture (Optional CSS based noise) */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center select-none">
        
        <div className="mb-8 flex items-center gap-4 animate-fade-in-up opacity-80">
           <div className="h-[2px] w-8 md:w-16 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
           <span className="text-blue-400 font-mono text-xs md:text-sm tracking-[0.4em] uppercase">Cinematic FPV & Creative Visuals</span>
           <div className="h-[2px] w-8 md:w-16 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
        </div>

        {/* Main Title with stronger presence */}
        <div className="relative mb-8">
           <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold text-white leading-none tracking-tighter mix-blend-screen">
            <span className="glitch-text block" data-text="贰东传媒">贰东传媒</span>
          </h1>
          {/* Decorative outline text behind */}
          <h1 className="absolute top-1 left-1 w-full text-7xl md:text-9xl lg:text-[10rem] font-bold text-transparent leading-none tracking-tighter stroke-text opacity-30 blur-sm pointer-events-none" style={{WebkitTextStroke: '1px #3b82f6'}}>
            贰东传媒
          </h1>
        </div>
        
        <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light tracking-widest leading-relaxed">
          既然生而为人，就别像幽灵一样活着。<br/>
          <span className="text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">燃尽热血，记录不凡。</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto z-20">
          <a 
            href="#gallery" 
            className="group relative px-10 py-4 bg-white text-black font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] clip-path-slant"
          >
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative group-hover:text-white transition-colors flex items-center gap-2">
              浏览作品 
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
          </a>
          
          <a 
            href="#contact" 
            className="group px-10 py-4 bg-transparent border border-white/20 text-white font-bold text-lg hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/5 transition-all backdrop-blur-sm"
          >
            联系合作
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-400 animate-pulse">Scroll to Explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;