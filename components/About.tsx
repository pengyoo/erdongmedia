import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto bg-[#050505]">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Image with distinctive border/style */}
        <div className="relative order-2 md:order-1">
           <div className="absolute -inset-4 border-2 border-white/10 z-0"></div>
           <div className="absolute top-4 left-4 w-full h-full bg-blue-600/5 z-0"></div>
           <img 
             // Cinematic back view of a person exploring nature/mountains
             src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=800&auto=format&fit=crop"
             alt="Er Dong Profile" 
             className="relative z-10 w-full h-auto object-cover filter contrast-110 hover:contrast-100 transition-all duration-700 aspect-[3/4]"
           />
           
           <div className="absolute bottom-8 right-[-20px] z-20 bg-blue-600 text-white p-6 shadow-xl max-w-xs hidden md:block">
              <p className="font-bold text-lg">"飞行的意义，在于打破视角的边界。"</p>
           </div>
        </div>
        
        {/* Right: Text Content */}
        <div className="order-1 md:order-2 space-y-8">
          <div className="space-y-2">
            <span className="text-blue-500 font-bold tracking-widest uppercase">The Pilot</span>
            <h2 className="text-5xl font-bold text-white">贰东 <span className="text-gray-600 text-3xl block mt-2">Er Dong</span></h2>
          </div>
          
          <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-blue-500 pl-6">
            95后，独立 FPV 飞手，贰东传媒主理人。
            <br/><br/>
            不仅仅是操作无人机，更是在进行一场关于速度与构图的即兴创作。从地下车库的极速狂飙，到城市楼宇间的穿针引线，我专注于用第一视角（FPV）呈现那些充满张力和呼吸感的画面。
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">5年+</h4>
              <p className="text-sm text-gray-500">FPV 飞行经验</p>
            </div>
             <div>
              <h4 className="text-3xl font-bold text-white mb-1">100+</h4>
              <p className="text-sm text-gray-500">商业项目交付</p>
            </div>
             <div>
              <h4 className="text-3xl font-bold text-white mb-1">15台</h4>
              <p className="text-sm text-gray-500">自组穿越机</p>
            </div>
             <div>
              <h4 className="text-3xl font-bold text-white mb-1">∞</h4>
              <p className="text-sm text-gray-500">热爱</p>
            </div>
          </div>
          
          <div className="pt-8">
             <h3 className="text-white font-bold mb-4">御用装备 GEAR</h3>
             <div className="flex flex-wrap gap-3">
               {['DJI O3 Air Unit', 'TBS Tango 2 Pro', 'GoPro 11 Black', '5" Apex DC', 'Cinelog 35 v2'].map(item => (
                 <span key={item} className="px-3 py-1 bg-[#1a1a1f] text-gray-300 text-sm font-mono border border-white/10 hover:border-blue-500 transition-colors cursor-default">
                   {item}
                 </span>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;