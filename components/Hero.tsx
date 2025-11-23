import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#050505]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px]" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        
        <div className="mb-6 flex items-center gap-4 animate-fade-in-up">
           <div className="h-[1px] w-12 bg-blue-500/50"></div>
           <span className="text-blue-400 font-mono text-sm tracking-[0.3em] uppercase">Er Dong Media Presents</span>
           <div className="h-[1px] w-12 bg-blue-500/50"></div>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-none tracking-tight">
          <span className="glitch-text block" data-text="贰东传媒">贰东传媒</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
          既然生而为人，就别像幽灵一样活着。<br/>
          <span className="text-white font-medium">燃尽热血，记录不凡。</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
          <a 
            href="#gallery" 
            className="group relative px-8 py-4 bg-white text-black font-bold text-lg overflow-hidden transition-all hover:scale-105"
          >
            <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative group-hover:text-white transition-colors">浏览作品</span>
          </a>
          
          <a 
            href="#about" 
            className="group px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-lg hover:border-blue-500 hover:text-blue-400 transition-all"
          >
            了解团队
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;