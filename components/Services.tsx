import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'FPV 极速跟拍',
    description: '时速 0-150km/h 瞬间爆发。专为赛车、极限运动提供最具速度感的第一人称视角，捕捉每一个肾上腺素飙升的瞬间。',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: '2',
    title: '电影感航拍',
    description: '从城市天际线到壮丽山川，提供 4K/5.1K 高画质稳定航拍画面。擅长长镜头调度，为叙事增添史诗感。',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: '3',
    title: '特种视角定制',
    description: '穿越机室内穿梭、车内穿梭、甚至穿过演员胯下。我们可以飞进任何常规摄影机无法到达的狭小空间。',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
           <div>
              <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2 block">Our Expertise</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white">核心服务</h2>
           </div>
           <p className="text-gray-400 max-w-md text-right mt-4 md:mt-0 font-light">
             解锁不可能的视角，为您的叙事注入动能。
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={service.id} className="group relative bg-[#0a0a0c] p-1 overflow-hidden transition-all duration-300 hover:-translate-y-2">
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-transparent to-purple-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-[#0e0e11] p-8 flex flex-col items-start z-10">
                <div className="mb-6 p-4 bg-white/5 rounded-full text-blue-500 group-hover:text-white group-hover:bg-blue-600 transition-colors duration-300">
                   {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm mb-8 flex-grow">
                  {service.description}
                </p>
                
                <div className="w-full flex justify-between items-center border-t border-white/5 pt-4">
                   <span className="text-xs font-mono text-gray-600 group-hover:text-blue-500 transition-colors">0{idx + 1}</span>
                   <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                      <svg className="w-3 h-3 text-white group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;