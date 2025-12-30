
import React, { useState, useEffect } from 'react';
import { SERVICES } from './constants';
import DataVisual from './components/DataVisual';
import Assistant from './components/Assistant';
import CycleVisual from './components/CycleVisual';
import Archive from './components/Archive';
import PortfolioPage from './components/PortfolioPage';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<'home' | 'portfolio'>('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToHome = () => setView('home');
  const goToPortfolio = () => setView('portfolio');

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLogo = () => (
    <div className="flex items-center gap-3 cursor-pointer" onClick={goToHome}>
      <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">D</div>
      <span className="text-xl font-bold tracking-tight text-slate-900 font-outfit">Dongle Data Lab</span>
    </div>
  );

  const SharedFooter = () => (
    <footer id="contact" className="bg-slate-950 text-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-bold mb-8 font-outfit text-white">Let's connect your loop.</h2>
            <p className="text-slate-400 text-xl leading-relaxed mb-12">
              이야기에서 출발해도 좋고, 데이터에서 출발해도 좋습니다.<br />
              함께 더 나은 의사결정과 변화를 위한 지도를 그려봅시다.
            </p>
            <div className="space-y-6 text-white">
              <div>
                <span className="text-xs uppercase font-bold text-slate-500 tracking-widest block mb-2">Email Us</span>
                <a href="mailto:hello@dongledatalab.com" className="text-2xl font-medium hover:text-indigo-400 transition-colors">hello@dongledatalab.com</a>
              </div>
              <div className="flex gap-6 pt-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Substack</a>
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">이름 / 조직</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-white" placeholder="홍길동" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">연락처</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-white" placeholder="email@address.com" />
                </div>
              </div>
              <div className="space-y-2 text-white">
                <label className="text-xs font-bold text-slate-500 uppercase">내용</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-indigo-500 h-32 text-white" placeholder="현재 고민하고 계신 데이터나 스토리 이슈를 들려주세요."></textarea>
              </div>
              <button className="w-full bg-white text-slate-950 font-bold py-4 rounded-lg hover:bg-slate-200 transition-all">
                메시지 보내기
              </button>
            </form>
          </div>
        </div>
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-outfit font-bold text-white">Dongle Data Lab</span>
            <span>© 2024 All rights reserved.</span>
          </div>
          <p>Based on Neighborhood Nexus Model.</p>
        </div>
      </div>
    </footer>
  );

  if (view === 'portfolio') {
    return (
      <div className="min-h-screen">
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-sm py-4`}>
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <NavLogo />
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
              <button onClick={goToHome} className="hover:text-slate-900 transition-colors">Home</button>
              <button onClick={goToPortfolio} className="text-indigo-600 font-bold">Archive</button>
            </div>
          </div>
        </nav>
        <PortfolioPage onBack={goToHome} />
        <SharedFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <NavLogo />
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
            <button onClick={goToPortfolio} className="hover:text-slate-900 transition-colors">Archive</button>
            <a href="#contact" onClick={scrollToContact} className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <DataVisual />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 font-outfit">
            We turn data into stories,<br />
            <span className="text-slate-400">and stories back into data.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed mb-10">
            동글 데이터랩은 복잡한 데이터를 사람들이 이해하고 말할 수 있는 이야기로 만들고,<br className="hidden md:block" />
            그 이야기가 다시 측정되고 쌓이는 데이터 구조로 이어지도록 설계합니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" onClick={scrollToContact} className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
              우리와 함께 시작하기
            </a>
            <button 
              onClick={goToPortfolio}
              className="px-8 py-4 bg-white text-slate-600 font-semibold rounded-full border border-slate-200 hover:bg-slate-50 transition-all"
            >
              아카이브 둘러보기
            </button>
          </div>
        </div>
      </section>

      {/* About Loop Section */}
      <section id="about" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase mb-4 block">The Nexus Cycle</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">데이터와 내러티브의 순환 구조</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                "데이터를 이해하는 사람"도 많고, "스토리를 잘 만드는 사람"도 많지만, 
                그 둘을 연결하여 **지속 가능한 구조**를 설계할 수 있는 곳은 드뭅니다. 
                동글 데이터랩은 데이터(Data), 이야기(Story), 행동(Action)이 끊임없이 순환하는 생태계를 만듭니다.
              </p>
              <div className="space-y-4">
                {[
                  "의사결정 맥락이 담긴 데이터",
                  "숫자 너머의 이야기",
                  "변화를 이끌어내는 인사이트, 그리고 이 변화를 다시 측정하는 데이터"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700">
                    <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-12">
              <CycleVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-64 h-64 bg-slate-100 rounded-2xl overflow-hidden flex-shrink-0 border border-slate-200 flex items-center justify-center text-7xl grayscale">
              🐿️
            </div>
            <div className="flex-1">
              <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase mb-4 block">Our Expertise</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-outfit">성혜승, the Nexus Designer</h2>
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                “데이터를 이야기로 만들고, 이야기를 다시 데이터 구조로 설계할 수 있는 드문 교차점에 있습니다.”
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-600">
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Background</h4>
                  <p className="text-sm leading-relaxed">도시·주거·공공공간 연구와 GIS 공간 분석을 바탕으로 숫자 뒤에 사람이 있는 데이터를 다뤄왔습니다. 정책과 학술의 복잡한 언어를 대중과 의사결정자가 이해할 수 있는 스토리로 변환하는 데 강점이 있습니다.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Vision</h4>
                  <p className="text-sm leading-relaxed">데이터는 목적이 아니라 연결과 변화의 매개여야 한다고 믿습니다. 데이터와 그 너머에 있는 이야기로 실질적인 사회적 임팩트를 설계합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-outfit">Representative Services</h2>
            <p className="text-slate-500 max-w-xl mx-auto">우리는 데이터가 필요한 모든 단계에 최적화된 솔루션을 제공합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">{service.title}</h3>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.subtitle}</h4>
                <p className="text-slate-500 mb-8 text-sm leading-relaxed flex-grow">{service.description}</p>
                
                <div className="space-y-6 mt-auto">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter block mb-2">Key Targets</span>
                    <div className="flex flex-wrap gap-2">
                      {service.targets.map((t, i) => (
                        <span key={i} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-1 rounded">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter block mb-3">Deliverables</span>
                    <ul className="text-sm text-slate-700 space-y-2">
                      {service.deliverables.map((d, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div id="archive">
            <Archive onExplore={goToPortfolio} />
          </div>
          
          <div className="mt-12 bg-slate-50 rounded-3xl p-2">
             <Assistant />
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
};

export default App;
