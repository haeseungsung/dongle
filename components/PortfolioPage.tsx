
import React, { useEffect, useState } from 'react';
import { ARCHIVE_ITEMS } from '../constants';
import { ArchiveItem } from '../types';

const ProjectModal: React.FC<{ item: ArchiveItem; onClose: () => void }> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-slate-900 font-bold shadow-lg z-10 transition-all"
          >
            ✕
          </button>
          <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 uppercase tracking-wider">
              {item.category}
            </span>
            <span className="text-sm text-slate-400 font-medium">{item.date}</span>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-outfit">{item.title}</h2>

          <div className="space-y-6 text-slate-600">
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Summary</h3>
              <p className="leading-relaxed">{item.summary}</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Intent</h3>
              <p className="leading-relaxed">{item.intent}</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Philosophy</h3>
              <p className="leading-relaxed">{item.philosophy}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {item.tags.map((tag, i) => (
                <span key={i} className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">#{tag}</span>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all"
            >
              프로젝트 사이트 바로가기
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ item: ArchiveItem; isPlaceholder?: boolean; rowIndex: number; onClick: () => void }> = ({ item, isPlaceholder = false, rowIndex, onClick }) => {
  return (
    <div
      onClick={isPlaceholder ? undefined : onClick}
      className={`group block ${isPlaceholder ? 'pointer-events-none' : 'cursor-pointer'} ${rowIndex % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'}`}
    >
      <div className={`relative aspect-[3/4] bg-slate-50 overflow-hidden border border-slate-100 group-hover:border-slate-300 transition-all duration-300 ${!isPlaceholder && 'group-hover:shadow-lg'}`}>
        {isPlaceholder ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
            <span className="text-slate-300 text-xs font-bold uppercase tracking-widest">Coming Soon</span>
          </div>
        ) : (
          <>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                <span className="bg-white text-slate-900 text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">
                  {item.category}
                </span>
                <span className="text-white text-[9px] font-medium">{item.date}</span>
              </div>
              <h3 className="text-white font-bold text-xs mb-1 font-outfit leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                {item.title}
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const PortfolioPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [selectedProject, setSelectedProject] = useState<ArchiveItem | null>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Create placeholders to fill up to 12 total items
  const placeholderCount = 12 - ARCHIVE_ITEMS.length;
  const placeholders = Array.from({ length: placeholderCount }, (_, i) => ({
    id: `placeholder-${i}`,
    title: 'Coming Soon',
    category: 'TBA',
    summary: '',
    date: '202X',
    tags: [],
    thumbnail: '',
    intent: '',
    philosophy: '',
    link: ''
  }));

  const allItems = [...ARCHIVE_ITEMS, ...placeholders];

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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16">
          {allItems.map((item, index) => {
            // 데스크톱 6열 기준으로 지그재그 애니메이션 적용
            const rowIndex = Math.floor(index / 6);

            return (
              <ProjectCard
                key={item.id}
                item={item as ArchiveItem}
                isPlaceholder={item.id.startsWith('placeholder-')}
                rowIndex={rowIndex}
                onClick={() => setSelectedProject(item as ArchiveItem)}
              />
            );
          })}
        </div>

        {selectedProject && (
          <ProjectModal
            item={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>

      <style>{`
        @keyframes slide-left {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-20px);
          }
        }

        @keyframes slide-right {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(20px);
          }
        }

        .animate-slide-left {
          animation: slide-left 15s ease-in-out infinite;
        }

        .animate-slide-right {
          animation: slide-right 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;
