import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  { id: '1', title: '霓虹都市夜航', date: '2023.10', category: 'Freestyle', thumbnailUrl: 'https://picsum.photos/seed/neon/600/400', views: '12K' },
  { id: '2', title: '雪域高原贴地', date: '2023.09', category: 'Cinematic', thumbnailUrl: 'https://picsum.photos/seed/snow/600/400', views: '8.5K' },
  { id: '3', title: '废弃重工漂移', date: '2023.11', category: 'Freestyle', thumbnailUrl: 'https://picsum.photos/seed/factory/600/400', views: '22K' },
  { id: '4', title: '海岸线极速追逐', date: '2023.08', category: 'Cinematic', thumbnailUrl: 'https://picsum.photos/seed/coast/600/400', views: '15K' },
  { id: '5', title: '地下车库竞速', date: '2023.12', category: 'Racing', thumbnailUrl: 'https://picsum.photos/seed/garage/600/400', views: '18K' },
  { id: '6', title: '日落塔楼环绕', date: '2023.10', category: 'Cinematic', thumbnailUrl: 'https://picsum.photos/seed/tower/600/400', views: '9K' },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 px-4 max-w-7xl mx-auto bg-[#050505]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
        <div>
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">精选案例</h2>
        </div>
        <div className="flex gap-4 mt-6 md:mt-0">
          <button className="text-white font-bold border-b-2 border-white pb-1">全部</button>
          <button className="text-gray-500 hover:text-white transition-colors pb-1">电影感</button>
          <button className="text-gray-500 hover:text-white transition-colors pb-1">花飞</button>
          <button className="text-gray-500 hover:text-white transition-colors pb-1">商业</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="group relative aspect-[4/3] overflow-hidden bg-gray-900 cursor-pointer">
            <img 
              src={project.thumbnailUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-blue-400 text-xs font-mono mb-2 bg-blue-500/10 inline-block px-2 py-1 rounded w-fit backdrop-blur-sm border border-blue-500/20">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {project.title}
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-400 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                <span>{project.date}</span>
                <span>{project.views} views</span>
              </div>
            </div>
            
            {/* Play Button Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-50 border border-white/20">
               <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="px-10 py-4 bg-[#101014] text-white border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all font-bold tracking-wide">
          查看 Bilibili 频道
        </button>
      </div>
    </section>
  );
};

export default Gallery;