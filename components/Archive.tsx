
import React from 'react';
import { ARCHIVE_ITEMS } from '../constants';

const Archive: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  return (
    <div className="py-24 border-t border-slate-100">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase mb-4 block">Archive</span>
          <h2 className="text-4xl font-bold text-slate-900 font-outfit">Data Narrative Archive</h2>
          <p className="text-slate-500 mt-4 max-w-lg">데이터가 이야기를 만나 변화를 만든 기록들입니다.</p>
        </div>
        <button 
          onClick={onExplore}
          className="text-sm font-bold text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-indigo-600 hover:border-indigo-600 transition-all"
        >
          전체 사례 보기 →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARCHIVE_ITEMS.map((item) => (
          <div key={item.id} className="group cursor-pointer" onClick={onExplore}>
            <div className="aspect-[16/10] bg-slate-50 rounded-2xl mb-6 overflow-hidden border border-slate-100 flex items-center justify-center text-6xl group-hover:bg-slate-100 transition-all duration-500">
              <span className="group-hover:scale-110 transition-transform duration-500">{item.thumbnail}</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 uppercase">
                {item.category}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">{item.date}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
              {item.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span key={i} className="text-[10px] text-slate-400">#{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archive;
