
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
    id: '1',
    title: '서울시 1인 가구 외로움 지도',
    category: 'Public',
    summary: '단순한 인구 통계를 넘어, 소셜 미디어 키워드와 공간 데이터를 결합해 도시의 고립감을 시각화했습니다.',
    date: '2024.01',
    tags: ['공간 분석', '시각화', '정책 제안'],
    thumbnail: '📍',
    intent: '도시 내 1인 가구가 겪는 물리적/심리적 고립의 패턴을 발견하고, 정책 입안자들이 직관적으로 위기 지역을 파악할 수 있는 시각적 근거를 제공하고자 했습니다.',
    philosophy: '데이터는 차갑지만, 그 데이터가 가리키는 곳에는 실제 사람이 있습니다. 우리는 숫자의 합산 뒤에 숨겨진 개인의 외로움을 지도로 드러내는 것이 정책의 시작이라고 믿습니다.',
    link: 'https://example.com/project-1'
  },
  {
    id: '2',
    title: '성수동 로컬 커뮤니티 데이터 임팩트',
    category: 'Community',
    summary: '지역 주민들의 활동이 로컬 상권의 지속가능성에 미치는 영향을 내러티브로 풀어낸 케이스 스터디.',
    date: '2023.11',
    tags: ['커뮤니티', '로컬 리테일', '내러티브'],
    thumbnail: '🏘️',
    intent: '젠트리피케이션이 진행되는 성수동에서, 커뮤니티 자산이 어떻게 지역 경제를 지탱하는지 증명하여 로컬 브랜드들이 연대할 수 있는 명분을 만들었습니다.',
    philosophy: '지역의 가치는 임대료가 아니라 사람들의 관계망에서 나옵니다. 보이지 않는 관계를 가시적인 지표로 전환하여 커뮤니티의 힘을 증명하는 것이 우리의 역할입니다.',
    link: 'https://example.com/project-2'
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
