import React, { useState, useMemo } from 'react';
import { Project } from '../types';

// Expanded mock data with fixed and high-quality URLs
const allProjects: Project[] = [
  { 
    id: '1', 
    title: 'NEON CITY DIVE', 
    date: 'OCT 2023', 
    category: 'Freestyle', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1565626424177-969641753754?q=80&w=800&auto=format&fit=crop', // Cyberpunk City
    views: '12K', 
    description: '穿梭于繁华都市的霓虹灯海，极限贴楼飞行。' 
  },
  { 
    id: '2', 
    title: 'SNOW DRIFT', 
    date: 'DEC 2023', 
    category: 'Cinematic', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1551524559-8af4e66a3239?q=80&w=800&auto=format&fit=crop', // Snow Skiing
    views: '8.5K', 
    description: '雪山之巅的极速追逐，捕捉滑雪者的动态瞬间。' 
  },
  { 
    id: '3', 
    title: 'ABANDONED FACTORY', 
    date: 'NOV 2023', 
    category: 'Freestyle', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1550948537-130a1ce83314?q=80&w=800&auto=format&fit=crop', // Industrial/Abandoned
    views: '22K', 
    description: '在废弃工业遗址中的花式操作，充满颓废美学。' 
  },
  { 
    id: '4', 
    title: 'COASTAL CHASE', 
    date: 'AUG 2023', 
    category: 'Cinematic', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop', // Coastal Road
    views: '15K', 
    description: '沿着海岸线的长镜头追车，海浪与引擎的协奏曲。' 
  },
  { 
    id: '5', 
    title: 'UNDERGROUND', 
    date: 'JAN 2024', 
    category: 'Racing', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1495539406979-bf61752d0222?q=80&w=800&auto=format&fit=crop', // Dark Tunnel
    views: '18K', 
    description: '地下停车场的极速狂飙，考验反应速度的极限。' 
  },
  { 
    id: '6', 
    title: 'SUNSET TOWER', 
    date: 'SEP 2023', 
    category: 'Cinematic', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop', // City Sunset
    views: '9K', 
    description: '日落时分的城市地标环绕，唯美光影。' 
  },
  { 
    id: '7', 
    title: 'EV CAR TVC', 
    date: 'FEB 2024', 
    category: 'Commercial', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop', // Cool Car
    views: '45K', 
    description: '某电动汽车品牌官方宣传片，展现科技与速度。' 
  },
  { 
    id: '8', 
    title: 'FOREST GAP', 
    date: 'JUL 2023', 
    category: 'Racing', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop', // Forest
    views: '11K', 
    description: '密林穿越，不仅要快，更要精准。' 
  },
  { 
    id: '9', 
    title: 'MUSIC FESTIVAL', 
    date: 'MAY 2023', 
    category: 'Commercial', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1459749411177-718bf9954a6c?q=80&w=800&auto=format&fit=crop', // Concert
    views: '32K', 
    description: '万人音乐节现场，从人群头顶呼啸而过。' 
  },
];

const categories = ['ALL', 'CINEMATIC', 'FREESTYLE', 'RACING', 'COMMERCIAL'];

// OSD (On Screen Display) Video Player Modal
const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-[fadeIn_0.3s_ease-out]">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose}></div>
      
      <div className="relative w-full max-w-5xl aspect-video bg-black border-2 border-gray-800 shadow-2xl overflow-hidden group">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 z-50 text-white hover:text-red-500 transition-colors p-2 bg-black/50 rounded">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* FPV OSD Layer (Simulated Overlay) */}
        <div className="absolute inset-0 z-20 pointer-events-none p-8 font-mono text-white/80 text-shadow-sm select-none">
           {/* Top Left */}
           <div className="absolute top-6 left-8 flex flex-col gap-1">
             <span className="animate-pulse font-bold">RSS -65dBm</span>
             <span>LQ 98%</span>
             <span className="text-xl font-bold mt-2">AIR MODE</span>
           </div>

           {/* Top Center: Recording Timer */}
           <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-lg">REC 00:04:20</span>
           </div>

           {/* Top Right: Battery */}
           <div className="absolute top-6 right-8 text-right">
              <div className="text-2xl font-bold">24.2V</div>
              <div className="text-sm">LAND NOW</div>
           </div>

           {/* Center: Crosshair */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
                <line x1="20" y1="10" x2="20" y2="30" />
                <line x1="10" y1="20" x2="30" y2="20" />
                <circle cx="20" cy="20" r="15" />
              </svg>
           </div>

           {/* Bottom Left: Pilot Name */}
           <div className="absolute bottom-6 left-8">
              <h3 className="text-xl font-bold tracking-widest">ER DONG</h3>
              <p className="text-sm text-gray-400">{project.title}</p>
           </div>

           {/* Bottom Right: Speed/Alt */}
           <div className="absolute bottom-6 right-8 text-right">
              <div>ALT: 120m</div>
              <div>SPD: 104km/h</div>
           </div>
        </div>

        {/* Fake Video Content (Using Image for demo) */}
        <div className="absolute inset-0 z-10">
           <img src={project.thumbnailUrl} alt={project.title} className="w-full h-full object-cover opacity-80" />
           {/* Static Noise Overlay */}
           <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] opacity-[0.05] mix-blend-screen pointer-events-none"></div>
           
           {/* Play Button (Fake) */}
           <div className="absolute inset-0 flex items-center justify-center z-30 group-hover:opacity-100 transition-opacity">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:scale-110 transition-transform hover:bg-white/20">
                 <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'ALL') return allProjects;
    return allProjects.filter(p => p.category.toUpperCase() === activeFilter);
  }, [activeFilter]);

  return (
    <section id="gallery" className="py-32 px-4 max-w-7xl mx-auto bg-[#050505] min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <div>
          <div className="flex items-center gap-2 mb-4">
             <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
             <span className="text-blue-500 font-mono text-xs tracking-[0.2em] uppercase">Visual Archives</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">精选案例</h2>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 md:mt-0 font-mono text-sm">
          {categories.map((filter) => (
            <button 
              key={filter} 
              onClick={() => setActiveFilter(filter)}
              className={`pb-1 transition-all duration-300 relative group ${
                activeFilter === filter 
                ? 'text-white' 
                : 'text-gray-600 hover:text-blue-400'
              }`}
            >
              {filter}
              <span className={`absolute bottom-0 left-0 h-[1px] bg-blue-500 transition-all duration-300 ${activeFilter === filter ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="group relative aspect-video bg-[#111] overflow-hidden cursor-pointer border border-white/5 hover:border-blue-500/50 transition-all duration-500 animate-[fadeIn_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            {/* Image */}
            <img 
              src={project.thumbnailUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
            />
            
            {/* Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,rgba(0,0,0,0.3)_1px)] bg-[size:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-start -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-mono border border-blue-500 text-blue-400 px-2 py-0.5 rounded-sm backdrop-blur-md">
                   {project.category.toUpperCase()}
                </span>
                <span className="text-[10px] font-mono text-white/70">NO.{project.id.padStart(2, '0')}</span>
              </div>

              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-1 tracking-wide group-hover:text-blue-200">{project.title}</h3>
                <p className="text-xs text-gray-300 line-clamp-1 mb-3">{project.description}</p>
                
                <div className="flex justify-between items-center text-xs font-mono text-gray-400 border-t border-white/10 pt-2">
                  <span>{project.date}</span>
                  <div className="flex items-center gap-2 text-white">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span>WATCH</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
         <div className="w-full py-20 text-center text-gray-600 font-mono">
           // NO SIGNAL DETECTED IN THIS SECTOR
         </div>
      )}

      {/* Load More Button (Visual Only) */}
      <div className="mt-20 flex justify-center">
        <button className="relative px-12 py-4 bg-transparent text-white border border-white/20 hover:border-blue-500 transition-all duration-300 font-bold tracking-widest uppercase text-sm group overflow-hidden">
          <span className="relative z-10 group-hover:text-blue-500 transition-colors">Load More Archives</span>
          <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Gallery;