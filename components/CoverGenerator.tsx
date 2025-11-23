import React, { useState } from 'react';
import { generateCoverImage } from '../services/geminiService';
import { GeneratorState } from '../types';

const CoverGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState<GeneratorState>(GeneratorState.IDLE);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setStatus(GeneratorState.GENERATING);
    setError(null);

    try {
      const imageUrl = await generateCoverImage(prompt);
      setGeneratedImage(imageUrl);
      setStatus(GeneratorState.SUCCESS);
    } catch (err) {
      setError('生成失败，请稍后重试。');
      setStatus(GeneratorState.ERROR);
    }
  };

  return (
    <section id="generator" className="py-20 bg-[#141419] relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Controls */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase tracking-wide mb-4">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                由 Gemini 2.5 强力驱动
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                AI 封面实验室
              </h2>
              <p className="text-gray-400 text-lg">
                需要一张炸裂的视频封面？描述你想要的场景，让 AI 为你的飞行视频生成极具视觉冲击力的封面图。
              </p>
            </div>

            <form onSubmit={handleGenerate} className="space-y-4">
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="例如：赛博朋克风格的城市夜景，穿越机极速穿过霓虹灯圈，动态模糊，4K高清..."
                  className="w-full h-32 bg-[#1e1e24] border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all"
                />
                <div className="absolute bottom-3 right-3 text-xs text-gray-500">
                  {prompt.length} 字
                </div>
              </div>
              <button
                type="submit"
                disabled={status === GeneratorState.GENERATING || !prompt.trim()}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2
                  ${status === GeneratorState.GENERATING 
                    ? 'bg-gray-700 cursor-not-allowed text-gray-400' 
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/25'
                  }`}
              >
                {status === GeneratorState.GENERATING ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    正在渲染中...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    立即生成
                  </>
                )}
              </button>
            </form>
            
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}
          </div>

          {/* Display Area */}
          <div className="relative">
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-[#0a0a0c] border-2 border-dashed border-gray-800 flex items-center justify-center group">
              {generatedImage ? (
                <div className="relative w-full h-full">
                  <img 
                    src={generatedImage} 
                    alt="Generated Cover" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                     <a 
                       href={generatedImage} 
                       download="skybound-cover.png"
                       className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
                     >
                       下载原图
                     </a>
                  </div>
                </div>
              ) : (
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto flex items-center justify-center mb-4 text-gray-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <p className="text-gray-500">你的杰作将显示在这里</p>
                </div>
              )}
            </div>
             {/* Decorative Frame Elements */}
             <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-indigo-500/30 rounded-tl-3xl pointer-events-none" />
             <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-cyan-500/30 rounded-br-3xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoverGenerator;