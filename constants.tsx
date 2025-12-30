
import { ServicePackage, ArchiveItem } from './types';

export const SERVICES: ServicePackage[] = [
  {
    id: 'data-to-story',
    title: 'DATA → STORY',
    subtitle: '보는 순간 이해되는 데이터 시각화',
    description: '복잡한 데이터를 사람들이 이해하고 말할 수 있는 이야기로 만듭니다. 단순 시각화를 넘어 의사결정 맥락과 감정선을 담습니다.',
    targets: ['공공기관', '연구소', '대학', '임팩트 스타트업'],
    features: ['데이터 분석 및 시각화', '공간/사회 맥락 해석', '스토리라인 설계'],
    deliverables: ['Narrative Data Report', 'Explorable Visualization', 'Presentation Slides'],
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
    subtitle: '데이터와 커뮤니티를 잇는 파트너십',
    description: '데이터-커뮤니티-행동을 잇는 지속 가능한 파트너십을 제안합니다.',
    targets: ['도시 재생 프로젝트', '민관 협력 조직', '대학 연구팀'],
    features: ['지속적 데이터 수집/분석', '인사이트 발굴', '피드백 루프 설계'],
    deliverables: ['Quarterly Insight Report', 'Community Dashboard', 'Program Optimization'],
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
    thumbnail: '🧾',
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
    thumbnail: '🏛️',
    intent: '연구실에서 출판한 수많은 논문들을 단순한 리스트로 나열하는 기존의 관행을 깨고 싶었습니다. 연구 주제의 흐름과 연구실이 지향하는 학술적 가치를 한눈에 조망(Overview)할 수 있는 직관적인 정보 구조를 설계했습니다.',
    philosophy: '지식의 가치는 축적이 아니라 연결에 있습니다. 파편화된 연구 성과들을 하나의 이야기로 엮어낼 때, 비로소 연구실의 정체성이 완성됩니다.',
    link: 'https://bonwookoo.github.io/bonwookoo/'
  },
  {
    id: '3',
    title: '친환경 브랜드의 진정성 수치화',
    category: 'Startup',
    summary: '브랜드의 친환경 메시지가 실제 고객의 행동 데이터로 어떻게 이어지는지 측정 가능한 구조로 설계했습니다.',
    date: '2023.09',
    tags: ['브랜딩', '지표 설계', '전략'],
    thumbnail: '🌿',
    intent: '그린워싱 논란을 방지하고 브랜드가 주장하는 사회적 가치가 실제 어떤 임팩트로 변환되는지 추적 가능한 대시보드와 지표 체계를 구축했습니다.',
    philosophy: '측정되지 않는 가치는 설득력을 갖기 어렵습니다. 브랜드의 철학이 데이터라는 언어를 입을 때, 비로소 시장과 진정성 있는 소통이 가능해집니다.',
    link: 'https://example.com/project-3'
  }
];
