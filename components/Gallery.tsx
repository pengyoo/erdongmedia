import React from 'react';
import { Project } from '../types';

// Updated mock data with more "Er Dong" vibe titles
const projects: Project[] = [
  { id: '1', title: 'NEON CITY DIVE', date: 'OCT 2023', category: 'Freestyle', thumbnailUrl: 'https://picsum.photos/seed/neon_city/800/600', views: '12K' },
  { id: '2', title: 'SNOW DRIFT', date: 'DEC 2023', category: 'Cinematic', thumbnailUrl: 'https://picsum.photos/seed/snow_mountain/800/600', views: '8.5K' },
  { id: '3', title: 'ABANDONED FACTORY', date: 'NOV 2023', category: 'Freestyle', thumbnailUrl: 'https://picsum.photos/seed/factory_ruins/800/600', views: '22K' },
  { id: '4', title: 'COASTAL CHASE', date: 'AUG 2023', category: 'Cinematic', thumbnailUrl: 'https://picsum.photos/seed/ocean_road/800/600', views: '15K' },
  { id: '5', title: 'UNDERGROUND', date: 'JAN 2024', category: 'Racing', thumbnailUrl: 'https://picsum.photos/seed/parking_lot/800/600', views: '18K' },
  { id: '6', title: 'SUNSET TOWER', date: 'SEP 2023', category: 'Cinematic', thumbnailUrl: 'https://picsum.photos/seed/skyscraper/800/600', views: '9K' },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-32 px-4 max-w-7xl mx-auto bg-[#050505]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <div>
          <div className="flex items-center gap-2 mb-4">
             <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
             <span className="text-blue-500 font-mono text-xs tracking-[0.2em] uppercase">Selected Works</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">精选案例</h2>
        </div>
        <div className="flex gap-6 mt-8 md:mt-0 font-mono text-sm">
          {['ALL', 'CINEMATIC', 'FREESTYLE', 'COMMERCIAL'].map((filter, index) => (
            <button 
              key={filter} 
              className={`pb-1 transition-colors hover:text-blue-400 ${index === 0 ? 'text-white border-b border-blue-500' : 'text-gray-600'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={project.id} className="group relative aspect-[16/10] bg-[#111] overflow-hidden cursor-pointer border border-white/5 hover:border-blue-500/50 transition-colors duration-500">
            {/* Image */}
            <img 
              src={project.thumbnailUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
            />
            
            {/* Glitch Overlay Effect on Hover */}
            <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-mono bg-blue-600 text-white px-2 py-1">{project.category}</span>
                <span className="text-xs font-mono text-white/70">0{idx + 1}</span>
              </div>

              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-1 tracking-wide group-hover:text-blue-100">{project.title}</h3>
                <div className="h-[1px] w-0 group-hover:w-full bg-blue-500 transition-all duration-500 ease-out mb-2"></div>
                <div className="flex justify-between text-xs font-mono text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <span>{project.date}</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                    {project.views}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 flex justify-center">
        <button className="px-12 py-4 bg-transparent text-white border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-bold tracking-widest uppercase text-sm group">
          Load More 
          <span className="inline-block ml-2 transition-transform group-hover:rotate-90">+</span>
        </button>
      </div>
    </section>
  );
};

export default Gallery;