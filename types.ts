
export interface ServicePackage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  targets: string[];
  features: string[];
  deliverables: string[];
  icon: string;
}

export interface ArchiveItem {
  id: string;
  title: string;
  category: 'Public' | 'Community' | 'Startup' | 'Research';
  summary: string;
  date: string;
  tags: string[];
  thumbnail: string;
  intent: string;      // 프로젝트 의도
  philosophy: string;  // 프로젝트 철학
  link?: string;       // 외부 링크
}
