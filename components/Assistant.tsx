
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const Assistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const generateNarrativeAngle = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        You are a strategist at 'Dongle Data Lab'. 
        A client has a dataset about: "${input}". 
        Provide 2 unique narrative angles (Story Ideas) and what kind of data metrics would be needed to support those stories.
        Keep the tone professional yet human-centric.
        Answer in Korean.
      `;
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt
      });
      setResponse(result.text || '인사이트를 생성하지 못했습니다.');
    } catch (error) {
      console.error(error);
      setResponse('오류가 발생했습니다. 나중에 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-8 mt-12 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl pointer-events-none">✨</div>
      <h3 className="text-2xl font-bold mb-4">데이터 내러티브 실험실</h3>
      <p className="text-slate-400 mb-6">데이터 주제를 입력하시면 동글의 시각으로 스토리 앵글을 제안해 드립니다.</p>
      
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="예: 서울시 1인 가구 주거 실태, 비건 브랜드 커뮤니티 활동 등"
          className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-slate-500"
        />
        <button 
          onClick={generateNarrativeAngle}
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-lg transition-all"
        >
          {loading ? '생각 중...' : '인사이트 추출'}
        </button>
      </div>

      {response && (
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 animate-fade-in">
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-200">
            {response}
          </pre>
        </div>
      )}
    </div>
  );
};

export default Assistant;
