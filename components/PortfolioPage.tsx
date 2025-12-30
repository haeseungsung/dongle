
import React, { useEffect } from 'react';
import { ARCHIVE_ITEMS } from '../constants';

const PortfolioPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 animate-fade-in bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-20">
          <div>
            <h1 className="text-5xl font-black text-slate-900 mb-4 font-outfit">Portfolio Archive</h1>
            <p className="text-slate-500 text-lg max-w-2xl">
              동글 데이터랩이 데이터를 이야기로, 이야기를 다시 데이터로 연결하며 남긴 주요 기록들입니다. 
              우리는 단순한 결과물이 아닌 과정 속에 담긴 의사결정의 지도를 그립니다.
            </p>
          </div>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 font-bold text-indigo-600 hover:text-indigo-700 transition-all group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            홈으로 돌아가기
          </button>
        </div>

        <div className="space-y-48">
          {ARCHIVE_ITEMS.map((item) => (
            <div key={item.id} className="flex flex-col gap-12 group">
              {/* Image Row */}
              <div className="relative w-full aspect-[21/9] bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex items-center justify-center text-9xl group-hover:shadow-md transition-shadow">
                <span className="group-hover:scale-110 transition-transform duration-1000 ease-out">{item.thumbnail}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent pointer-events-none"></div>
              </div>

              {/* Content Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-slate-900 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                      {item.category}
                    </span>
                    <span className="text-slate-400 text-sm font-medium">{item.date}</span>
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-6 font-outfit leading-tight">{item.title}</h2>
                  <p className="text-slate-500 text-lg leading-relaxed mb-8">{item.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-slate-400 font-medium bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">#{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative">
                      <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-indigo-100"></div>
                      <h4 className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] mb-4">Project Intent</h4>
                      <p className="text-slate-600 leading-relaxed text-base">
                        {item.intent}
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-indigo-100"></div>
                      <h4 className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] mb-4">Core Philosophy</h4>
                      <p className="text-slate-600 leading-relaxed text-base italic">
                        "{item.philosophy}"
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-8 border-t border-slate-100 flex justify-end">
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-sm hover:bg-indigo-600 transition-all shadow-xl hover:-translate-y-1"
                      >
                        Project Visit
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
