import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rotate-45 flex items-center justify-center">
              <span className="text-white font-bold -rotate-45">E</span>
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">
              贰东<span className="text-blue-500">传媒</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['首页', '作品', '服务', '关于'].map((item, index) => {
                 const hrefs = ['#home', '#gallery', '#services', '#about'];
                 return (
                  <a 
                    key={item}
                    href={hrefs[index]} 
                    className="relative group px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                 );
              })}
            </div>
          </div>
          
          <div className="md:hidden">
             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
               </svg>
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0c] border-b border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {['首页', '作品', '服务', '关于'].map((item, index) => {
                 const hrefs = ['#home', '#gallery', '#services', '#about'];
                 return (
                  <a 
                    key={item}
                    href={hrefs[index]}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
                  >
                    {item}
                  </a>
                 );
              })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;