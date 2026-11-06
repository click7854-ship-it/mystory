export type ProjectCategory = 
  | 'all'
  | 'advertising'
  | 'real-estate'
  | 'branding'
  | 'ai-content';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  clientOrContext: string;
  isConceptSample: boolean; // "샘플 시안 / 콘셉트 아카이브"
  image: string;
  imageAlt: string;
  keywords: string[];
  summary: string;
  background: string;
  challenge: string;
  role: string;
  process: string[];
  deliverables: string[];
  toolsUsed?: string[];
  demoVideoNote?: string;
}

export interface ExpertiseItem {
  number: string;
  code: string;
  titleEn: string;
  titleKo: string;
  description: string;
  highlights: string[];
}

export interface LabExperiment {
  id: string;
  category: 'character' | 'video' | 'visual' | 'business';
  categoryLabel: string;
  title: string;
  stage: '실험 진행 중 (In Progress)' | '프로토타입 (Prototype)' | '콘셉트 구상 (Concept)';
  summary: string;
  experimentGoal: string;
  promptExample?: string;
  tools: string[];
  insights: string;
  image?: string;
}

export interface JournalArticle {
  id: string;
  category: 'Advertising Notes' | 'AI Making' | 'Business Ideas' | 'Creative Journal';
  categoryKo: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  quotes?: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  inquiryType: '광고·디자인 프로젝트' | 'AI 콘텐츠 제작' | '비즈니스 협업' | '기타 문의';
  timeline?: string;
  budget?: string;
  message: string;
  agreedToPrivacy: boolean;
  createdAt: string;
}
