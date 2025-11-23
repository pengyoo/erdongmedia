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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: '3',
    title: '室内精准穿梭',
    description: '配备全包围涵道机，可在室内、人群、狭窄空间安全飞行。一镜到底展现建筑结构、工厂流水线或活动现场。',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#08080a] relative overflow-hidden">
      {/* Decorative Text */}
      <div className="absolute top-10 right-0 text-[12rem] font-bold text-white/[0.02] pointer-events-none select-none leading-none">
        SERVICES
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">我们提供什么</h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            不只是飞行，更是对视觉语言的重新构建。我们将技术与艺术结合，为您呈现无法复制的视觉冲击。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group p-8 bg-[#101014] border border-white/5 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;