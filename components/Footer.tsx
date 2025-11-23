import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030303] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Big Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-bold text-white/[0.03] leading-none pointer-events-none whitespace-nowrap select-none">
        ER DONG MEDIA
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center relative z-10">
        <div className="mb-12 text-center">
          <p className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">Ready to Fly?</p>
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-8">
            一起创造<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">炸裂</span>视觉
          </h2>
          <a href="mailto:contact@erdong.media" className="inline-block px-10 py-4 border border-white/20 rounded-full text-white font-medium hover:bg-white hover:text-black transition-all duration-300">
            立即联系 / Start a Project
          </a>
        </div>
        
        <div className="flex gap-10 mb-20">
          {['Bilibili', 'YouTube', 'Instagram', 'WeChat'].map((social) => (
            <a key={social} href="#" className="text-gray-500 hover:text-white text-sm font-mono tracking-wider transition-colors uppercase">
              {social}
            </a>
          ))}
        </div>
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-700 font-mono border-t border-white/5 pt-8">
          <p>© 2024 ER DONG MEDIA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span className="cursor-pointer hover:text-gray-500">PRIVACY</span>
             <span className="cursor-pointer hover:text-gray-500">TERMS</span>
             <span className="cursor-pointer hover:text-gray-500">SITEMAP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;