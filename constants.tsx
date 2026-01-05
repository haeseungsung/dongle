
import { ServicePackage, ArchiveItem } from './types';

export const SERVICES: ServicePackage[] = [
  {
    id: 'data-to-story',
    title: 'DATA → STORY',
    subtitle: '데이터 시각화 & 웹 대쉬보드 개발',
    description: '복잡한 원천 데이터를 누구나 직관적으로 이해할 수 있는 인터랙티브 대시보드와 웹 프로덕트로 전환합니다. 단순한 차트를 넘어 의사결정의 내러티브를 설계합니다.',
    targets: ['공공기관', '연구소', '대학', '임팩트 스타트업'],
    features: ['데이터 분석 및 시각화', '공간/사회 맥락 해석', '스토리라인 설계'],
    deliverables: ['Custom Web Dashboard', 'Data Narrative Web Site', 'Real-time Monitoring Tool'],
    icon: '📊'
  },
  {
    id: 'story-to-data',
    title: 'STORY → DATA',
    subtitle: '이야기를 뒷받침할 데이터 전략',
    description: '당신의 비전과 이야기를 분석 가능한 데이터 구조로 설계합니다. 어떤 데이터를 쌓고 어떻게 보여줄지 정의합니다.',
    targets: ['초기 스타트업', '브랜드팀', '커뮤니티 프로젝트'],
    features: ['서비스 핵심 스토리 정의', '데이터 수집 전략 설계', '지표 체계 수립'],
    deliverables: ['Data Strategy Map', 'Metric Blueprint', 'Visualization Wireframes'],
    icon: '🏗️'
  },
  {
    id: 'nexus-lab',
    title: 'NEXUS LAB',
    subtitle: '데이터 기반 커뮤니티 파트너십',
    description: '데이터-스토리-행동을 잇는 장기적인 기술 파트너십을 맺습니다. 지속적인 데이터 업그레이드와 프로덕트 유지보수를 지원합니다.',
    targets: ['도시 재생 프로젝트', '민관 협력 조직', '대학 연구팀'],
    features: ['지속적 데이터 수집/분석', '인사이트 발굴', '피드백 루프 설계'],
    deliverables: ['Quarterly Insight Report', 'Community Dashboard', 'Product Maintenance'],
    icon: '🤝'
  }
];

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: 'photo-receipt',
    title: 'Photo Receipt: 기억의 연말정산',
    category: 'Startup',
    summary: '일상의 사진을 픽셀 클러스터링으로 분석하여 정량화된 컬러 데이터 영수증으로 발행하는 실험적 프로젝트.',
    date: '2023.12',
    tags: ['이미지 분석', '컬러 클러스터링', '데이터 시각화'],
    thumbnail: '/photo-receipt-preview.jpg',
    portfolioImage: '/photo-receipt-portfolio.png',
    intent: '한 해를 돌아보며 "사진을 영수증처럼 정산받고 싶다"는 클라이언트의 감성적 요구를 기술적 분석으로 구현했습니다. 사용자의 사진첩 속 픽셀들을 컬러 클러스터링 알고리즘으로 분석하여, 가장 지배적인 색상들을 영수증 항목처럼 리스트화했습니다.',
    philosophy: '데이터는 감정을 수치화하는 도구가 아니라, 우리가 미처 발견하지 못한 기억의 패턴을 시각적으로 증명해주는 거울입니다.',
    link: 'https://photo-receipt.vercel.app/'
  },
  {
    id: 'yonsei-urban-lab',
    title: '연세대 구본우 교수 연구실: Academic Overview',
    category: 'Research',
    summary: '도시공학 연구실의 학술적 궤적과 핵심 성과를 조망할 수 있는 내러티브 중심의 아카이브 웹사이트 설계 및 디자인.',
    date: '2024.02',
    tags: ['연구소 UI/UX', '학술 아카이빙', '데이터 구조화'],
    thumbnail: '/yonsei-lab-preview.jpg',
    portfolioImage: '/yonsei-lab-portfolio.png',
    intent: '연구실에서 출판한 수많은 논문들을 단순한 리스트로 나열하는 기존의 관행을 깨고 싶었습니다. 연구 주제의 흐름과 연구실이 지향하는 학술적 가치를 한눈에 조망(Overview)할 수 있는 직관적인 정보 구조를 설계했습니다.',
    philosophy: '지식의 가치는 축적이 아니라 연결에 있습니다. 파편화된 연구 성과들을 하나의 이야기로 엮어낼 때, 비로소 연구실의 정체성이 완성됩니다.',
    link: 'https://bonwookoo.github.io/bonwookoo/'
  },
 {
    id: 'atlanta-nexus',
    title: 'Atlanta Neighborhood Nexus: 33N Data Blog',
    category: 'Public',
    summary: '미국 애틀랜타 지역의 사회, 경제, 문화 데이터를 분석하여 깊이 있는 인사이트를 담은 데이터 스토리텔링 블로그 시리즈를 집필했습니다.',
    date: '2023.08',
    tags: ['데이터 스토리텔링', '지역 분석', '내러티브 집필'],
    thumbnail: '/atlanta-nexus-preview.jpg',
    portfolioImage: '/atlanta-nexus-portfolio.png',
    intent: '미국 애틀랜타 지역 사회가 직면한 복잡한 문제들을 시민들이 쉽게 이해할 수 있는 내러티브로 전환하는 것이 목표였습니다. 파편화된 지역 데이터를 연결하여 도시의 변화와 사회적 불평등을 시각화하고 설명했습니다.',
    philosophy: '데이터는 지역 사회의 목소리를 대변하는 가장 강력한 증거입니다. 올바른 이야기와 결합될 때 데이터는 단순한 통계에서 공동체의 행동을 이끄는 지도로 진화합니다.',
    link: 'https://33n.atlantaregional.com/author/haeseungsung'
  }
];
