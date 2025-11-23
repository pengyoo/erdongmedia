import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 text-center tracking-tight">
          LET'S CREATE <span className="text-blue-500">MAGIC</span> together.
        </h2>
        
        <div className="flex gap-8 mb-16">
          {['Bilibili', 'YouTube', 'Instagram', 'WeChat'].map((social) => (
            <a key={social} href="#" className="text-gray-400 hover:text-white font-medium text-lg transition-colors relative group">
              {social}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
        
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} 贰东传媒 Er Dong Media. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span>Privacy Policy</span>
             <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;