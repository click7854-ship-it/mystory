import { ProjectItem, ExpertiseItem, LabExperiment, JournalArticle } from '../types';

export const SITE_CONFIG = {
  brandName: 'PARK GYUDUK',
  subtitle: 'Creative Business & AI',
  koreanName: '박규덕',
  slogan: '경험을 디자인하고, 가능성을 연결합니다.',
  subcopy: '광고와 비즈니스의 경험에 AI와 디지털 기술을 더해 새로운 가치를 만들어갑니다.',
  email: 'click7854@gmail.com',
  location: 'Seoul / Gyeonggi, South Korea',
  availableFor: ['브랜딩 & 광고 디자인 프로젝트', 'AI 캐릭터 및 숏폼 영상 제작', '부동산 마케팅 기획', '신규 비즈니스 협업'],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'yongdu-the-live',
    title: '용두 더리브',
    subtitle: '부동산 분양광고 비주얼 및 홍보 전단 디자인',
    category: 'real-estate',
    categoryLabel: '부동산 마케팅',
    year: '2024 - 2025',
    clientOrContext: '수도권 주상복합 분양 마케팅',
    isConceptSample: true,
    image: '/src/assets/images/project_realestate_brochure_1793930429229.jpg',
    imageAlt: '용두 더리브 분양 홍보 브로슈어 및 전단 디자인 샘플',
    keywords: ['분양광고', '전단 디자인', '광고 카피', '비주얼 콘셉트'],
    summary: '광고 대상의 입지 조건과 핵심 셀링 포인트를 분석하여, 실수요자의 눈길을 사로잡는 분양홍보 전단의 콘셉트와 명확한 시각적 카피를 기획한 작업입니다.',
    background: '도심 역세권 주상복합 개발 사업의 분양을 앞두고, 경쟁 단지와 차별화된 입지 강점(교통, 학군, 미래 가치)을 한눈에 전달해야 하는 과제가 있었습니다.',
    challenge: '복잡한 건축 정보와 평면도, 금융 조건을 좁은 인쇄면 안에서 가독성 높게 전달하고, 가독성을 해치지 않으면서도 고급스러운 프리미엄 이미지를 구축해야 했습니다.',
    role: '분양 인쇄 홍보물 비주얼 디렉션, 메인 카피라이팅, 정보 위계 재설계',
    process: [
      '타깃 수용자(3040 실수요자 및 임대 투자자) 니즈 분석',
      '단지 투시도와 평면도 그래픽의 시각적 강조점 선정',
      '핵심 혜택을 3초 만에 각인시키는 볼드 헤드라인 도출',
      '인쇄 감리 및 고해상도 인쇄 출력 프로세스 조율'
    ],
    deliverables: [
      '신문 삽지 및 배포용 대형 전단 (8단 / 4단)',
      '홍보관 비치용 프리미엄 리플렛 & 브로슈어 시안',
      '현수막 및 옥외 거치용 요약 비주얼 가이드'
    ],
    toolsUsed: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Architectural Plan Rendering']
  },
  {
    id: 'beolgyo-private-rental',
    title: '벌교 민간임대아파트',
    subtitle: '지역 맞춤형 분양홍보 전략 및 종합 제안서 기획',
    category: 'real-estate',
    categoryLabel: '부동산 마케팅',
    year: '2024',
    clientOrContext: '지방 중소도시 신규 공급 프로젝트',
    isConceptSample: true,
    image: '/src/assets/images/project_branding_identity_1793930430659.jpg',
    imageAlt: '벌교 민간임대아파트 분양 홍보 전략 제안서 및 브랜딩 에셋',
    keywords: ['홍보기획', '사업 제안', '광고계획', '시각자료'],
    summary: '지역 거주민의 주거 성향과 사업 목적을 면밀히 검토해, 분양홍보 방향, 오프라인·온라인 광고 매체 믹스, 시각 자료 구성을 일관되게 설계한 전략 프로젝트입니다.',
    background: '중소 거점 지역의 특성상 대도시 중심의 디지털 마케팅보다는 현장 거점과 오프라인 네트워크, 신뢰감 있는 제도적 안전성 전달이 무엇보다 중요했습니다.',
    challenge: '민간임대라는 제도의 복잡한 세제 혜택과 전세 보증금 보호 정책을 지역 어르신과 실수요자 모두가 쉽게 납득할 수 있는 쉬운 언어로 재구성하는 것이 핵심이었습니다.',
    role: '종합 광고 실행계획서 작성, 매체 믹스 예산 배분, 설명회 프레젠테이션 설계',
    process: [
      '해당 권역 주거 노후도 및 전세가율 현장 데이터 조사',
      '오프라인 거점(지정 지정 게시대, 현수막, 차량 랩핑) 동선 수립',
      '사업 안정성을 보증하는 인포그래픽 제안서 덱 제작',
      '홍보 인력 교육용 브리핑 시트 및 FAQ 가이드라인 정립'
    ],
    deliverables: [
      '전체 분양 실행계획 종합 제안서 (Keynote/PDF)',
      '매체별 일정표 및 예산 집행 계획표',
      '지역 배포용 Q&A 안내 가이드북'
    ],
    toolsUsed: ['Keynote', 'Illustrator', 'Data Visualization', 'Spreadsheet Budgeting']
  },
  {
    id: 'real-estate-lab',
    title: '부동산 랩 (Real Estate Lab)',
    subtitle: '디지털 부동산 정보 큐레이션 및 소셜 콘텐츠 브랜드',
    category: 'branding',
    categoryLabel: '브랜드·디자인',
    year: '2025',
    clientOrContext: '자체 디지털 콘텐츠 미디어 기획',
    isConceptSample: true,
    image: '/src/assets/images/project_branding_identity_1793930430659.jpg',
    imageAlt: '부동산 랩 브랜드 아이덴티티 및 모바일 피드 템플릿',
    keywords: ['브랜드 네이밍', '채널 기획', 'SNS 콘텐츠', '디지털 마케팅'],
    summary: '인스타그램과 유튜브를 기반으로 딱딱한 부동산 정책과 청약 정보를 직관적인 그래픽과 카드뉴스로 전달하기 위해 고안한 디지털 콘텐츠 미디어 브랜드 기획입니다.',
    background: '복잡한 부동산 규제와 시장 트렌드를 일반 소비자가 알기 쉽게 소화할 수 있는 독립형 마이크로 미디어 채널의 필요성을 확인했습니다.',
    challenge: '일회성 포스팅에 그치지 않고, 구독자가 단 1초 만에 브랜드를 인식할 수 있는 명확한 비주얼 그리드와 템플릿 시스템을 규격화하는 것이었습니다.',
    role: '브랜드 네이밍, 로고 디자인, 소셜미디어 템플릿 시스템 디자인',
    process: [
      '신뢰감을 주는 미니멀한 그리드 기반 아이덴티티 수립',
      '인스타그램 캐러셀(카드뉴스) 표준 1:1 및 4:5 레이아웃 정의',
      '유튜브 썸네일 전용 고대비 타이포그래피 스타일 가이드',
      '주제별(청약, 분양, 세금 상식) 컬러 코딩 시스템 구축'
    ],
    deliverables: [
      '브랜드 로고마크 및 타이포 시스템 가이드',
      'Figma 기반 카드뉴스 템플릿 12종',
      '유튜브 썸네일 및 채널 아트 팩'
    ],
    toolsUsed: ['Figma', 'Photoshop', 'Typography Layout']
  },
  {
    id: 'ai-character-deokdaeri',
    title: 'AI 캐릭터 — 덕대리',
    subtitle: '생성형 AI 캐릭터 기반 숏폼 스토리텔링 영상 프로젝트',
    category: 'ai-content',
    categoryLabel: 'AI 영상·콘텐츠',
    year: '2025 - 2026',
    clientOrContext: 'AI 크리에이티브 랩 연구 프로젝트',
    isConceptSample: true,
    image: '/src/assets/images/project_ai_character_deok_1793930430230.jpg',
    imageAlt: '직장인 AI 캐릭터 덕대리 3D 스타일 렌더 및 숏폼 썸네일',
    keywords: ['AI 캐릭터', '쇼츠 영상', '스토리텔링', '영상 프롬프트'],
    summary: '직장 생활의 공감 가는 순간들을 유쾌하게 풀어내는 3D 스타일 캐릭터 덕대리를 개발하고, 일관된 캐릭터 룩을 유지하며 숏폼 영상으로 양산하는 AI 파이프라인을 실험한 프로젝트입니다.',
    background: '생성형 AI 영상 제작에서 가장 큰 난제였던 "캐릭터 일관성(Character Consistency)"을 유지하면서, 빠른 주기로 숏폼 콘텐츠를 제작할 수 있는 프로세스를 구축하고자 했습니다.',
    challenge: '프롬프트 변화에도 동일 인물의 얼굴 비율과 의상, 표정 톤앤매너를 유지하고, 자연스러운 립싱크 및 숏폼 템포(30~45초)에 맞는 컷 전환을 달성해야 했습니다.',
    role: '캐릭터 세계관 기획, 프롬프트 엔지니어링 파이프라인 설계, 영상 컷 편집',
    process: [
      'LoRA 및 멀티앵글 시드 데이터를 활용한 캐릭터 기준 마스터샷 고정',
      'Midjourney / Flux 기반 감정 및 포즈별 프레임 생성',
      'Runway Gen-3 / Kling을 통한 자연스러운 인물 모션 생성',
      'ElevenLabs 한국어 보이스 매칭 및 Premiere Pro 리듬 편집'
    ],
    deliverables: [
      '덕대리 공식 캐릭터 디자인 가이드 및 시드 프롬프트 시트',
      '유튜브 쇼츠 / 인스타그램 릴스 파일럿 에피소드 3편 시안',
      'AI 영상 생성 워크플로우 매뉴얼'
    ],
    toolsUsed: ['Midjourney', 'Runway Gen-3', 'Kling AI', 'ElevenLabs', 'Premiere Pro'],
    demoVideoNote: '본 프로젝트는 AI 영상 생성 툴을 실무에 결합하기 위한 자체 R&D 결과물입니다.'
  },
  {
    id: 'monster-convenience',
    title: '몬스터 편의점 (Monster Convenience)',
    subtitle: '몬스터 & 히어로 콘셉트 특화 리테일 브랜드 기획',
    category: 'branding',
    categoryLabel: '브랜드·디자인',
    year: '2025',
    clientOrContext: '신규 F&B 및 리테일 비즈니스 콘셉트 연구',
    isConceptSample: true,
    image: '/src/assets/images/project_monster_convenience_1793930430795.jpg',
    imageAlt: '몬스터 편의점 패키징 및 브랜드 그래픽 콘셉트 목업',
    keywords: ['브랜드 아이디어', '로고 디자인', '콘셉트 패키징'],
    summary: '개성 넘치는 몬스터 캐릭터와 볼드한 네온 오렌지 컬러를 결합하여, 기존의 정형화된 편의점 공간을 트렌디한 문화 공간으로 재해석한 신규 리테일 브랜드 콘셉트 프로젝트입니다.',
    background: '오프라인 판촉물 쇼핑몰과 유통 비즈니스를 관찰하며, 차별화된 PB(자체 브랜드) 상품과 캐릭터 지식재산권(IP)이 결합된 새로운 매장 경험을 구상했습니다.',
    challenge: '단순한 편의점을 넘어, 방문 자체가 엔터테인먼트가 되는 비주얼 아이덴티티를 확립하고, 패키지, 음료 캔, 간판 등에 확장 적용 가능한 모듈형 그래픽을 설계해야 했습니다.',
    role: '브랜드 스토리텔링, 로고 및 그래픽 모티프 개발, PB 패키지 목업 시각화',
    process: [
      'Z세대를 타깃으로 한 위트 있고 볼드한 몬스터 그래픽 심볼 개발',
      '차콜 블랙(#111111)과 네온 오렌지(#F07842)의 고대비 컬러 스키마 확립',
      'PB 스낵 및 에너지 드링크 패키지 3D 그래픽 목업 렌더링',
      '매장 외관 및 팝업 스토어 사이니지 콘셉트 전개'
    ],
    deliverables: [
      '몬스터 편의점 심볼 마크 및 워드마크 디자인',
      'PB 제품 패키지 라인업 디자인 시안 (음료/스낵/굿즈)',
      '브랜드 콘셉트 피치북 및 매장 사인 가이드'
    ],
    toolsUsed: ['Photoshop', 'Illustrator', 'Generative Design Mockups', 'Blender']
  }
];

export const EXPERTISE_LIST: ExpertiseItem[] = [
  {
    number: '01',
    code: 'ADV_DSGN',
    titleEn: 'Advertising & Design',
    titleKo: '광고 · 인쇄 디자인',
    description: '목적에 맞는 명확한 메시지를 시각적으로 전달하고, 현장에서 실제 고객의 행동을 이끌어내는 완성도 높은 광고 결과물을 기획하고 디자인합니다.',
    highlights: [
      '홍보물(리플렛, 브로슈어, 카탈로그) 종합 기획 및 편집',
      '전단, 현수막, 롤배너, 옥외 간판 등 인쇄·출력 광고',
      '기업 및 브랜드 로고(CI/BI)와 시각 아이덴티티 구축',
      '고객 심리를 파고드는 카피라이팅 및 광고 문구 설계'
    ]
  },
  {
    number: '02',
    code: 'RE_MKT',
    titleEn: 'Real Estate Marketing',
    titleKo: '부동산 마케팅 기획',
    description: '프로젝트의 입지와 건축적 특성, 목표 타깃을 깊이 있게 분석하여 분양 현장에 최적화된 마케팅 메시지와 실행 가능한 광고 제안서를 도출합니다.',
    highlights: [
      '아파트, 오피스텔, 주상복합 분양광고 통합 기획',
      '수요층 분석 기반 분양홍보 콘텐츠 및 셀링 포인트 도출',
      '시행사/대행사 제출용 맞춤형 광고대행 제안서 기획',
      '오프라인 게시대와 온라인 타깃 광고를 잇는 매체 믹스'
    ]
  },
  {
    number: '03',
    code: 'AI_CREATIVE',
    titleEn: 'AI Creative Content',
    titleKo: 'AI 콘텐츠 제작 & 영상',
    description: '최신 생성형 AI 도구를 실무 파이프라인에 결합하여, 제작 비용과 시간을 혁신하면서도 높은 퀄리티의 캐릭터와 영상 콘텐츠를 제작하고 실험합니다.',
    highlights: [
      '일관된 스타일을 유지하는 3D/2D AI 캐릭터 제작',
      'Runway, Kling, Luma 기반의 시네마틱 AI 영상 연출',
      '유튜브 쇼츠, 릴스용 숏폼 비디오 시나리오 및 컷 편집',
      '비즈니스 맞춤형 AI 이미지 및 프롬프트 파이프라인 구축'
    ]
  },
  {
    number: '04',
    code: 'BIZ_PLAN',
    titleEn: 'Business & Digital Planning',
    titleKo: '비즈니스 & 디지털 기획',
    description: '직접 사업을 운영하고 광고를 집행해 본 현장 감각을 바탕으로, 공허한 이론이 아닌 시장에서 실질적으로 작동하는 비즈니스 모델과 실행안을 수립합니다.',
    highlights: [
      'AI 기반 제작대행 및 새로운 수익 모델 기획',
      '온라인 판촉물 및 커머스 운영 관점의 실행 계획',
      '신규 브랜드 콘셉트 및 네이밍, 타깃 포지셔닝',
      'SNS와 블로그, 검색 최적화(SEO)를 아우르는 디지털 전략'
    ]
  }
];

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: 'lab-character',
    category: 'character',
    categoryLabel: 'Character & Story',
    title: '덕대리 직장 생활 시네마틱 유니버스',
    stage: '실험 진행 중 (In Progress)',
    summary: '캐릭터의 일관된 성격과 시각적 특징을 유지하며, 직장인들의 일상 희로애락을 다루는 숏폼 시트콤 시리즈를 기획하고 있습니다.',
    experimentGoal: '표정과 각도가 바뀌어도 인물의 고유성을 잃지 않는 AI 캐릭터 생성 워크플로우 정립',
    promptExample: 'A charismatic 3D rendered Korean office worker character named Deok-daeri, smart corporate jacket, confident coffee sip, cinematic depth of field, 8k Pixar aesthetic, consistent face seed: 4829104',
    tools: ['Midjourney v6', 'Flux.1', 'Photoshop Inpainting', 'FaceID Re-centering'],
    insights: '단일 프롬프트보다 얼굴 기준 베이스 이미지를 생성한 뒤 LoRA 가중치를 세밀하게 조절하는 파이프라인이 캐릭터 일관성 유지에 가장 효과적이었습니다.'
  },
  {
    id: 'lab-video',
    category: 'video',
    categoryLabel: 'Video & Shorts',
    title: 'AI 비디오 컷 전환 및 역동적 카메라 무빙 연구',
    stage: '프로토타입 (Prototype)',
    summary: 'Runway Gen-3와 Kling AI를 결합해 정지된 일러스트를 자연스러운 카메라 패닝과 인물 제스처로 변환하는 기법을 실험합니다.',
    experimentGoal: 'AI 영상 특유의 왜곡이나 흐려짐 현상을 최소화하면서 역동적인 숏폼 호흡을 만들어내는 프레임 보정 기법 확보',
    promptExample: 'Cinematic slow push-in shot, natural eye movement, soft office ambient morning light, subtle wind blowing hair, high physical realism --camera pan right',
    tools: ['Runway Gen-3 Alpha', 'Kling AI', 'Topaz Video AI (업스케일링)', 'DaVinci Resolve'],
    insights: '모션 가중치를 4~6 수준으로 제어하고, 짧은 4초 클립을 교차 편집할 때 AI 특유의 부자연스러움이 사라지고 완성도 높은 영상미가 살아납니다.'
  },
  {
    id: 'lab-visual',
    category: 'visual',
    categoryLabel: 'Visual Experiments',
    title: '생성형 AI를 통한 패키징 및 브랜딩 에셋 래피드 프로토타이핑',
    stage: '실험 진행 중 (In Progress)',
    summary: '새로운 제품 콘셉트 구상 시 수일이 걸리던 3D 목업 렌더링 과정을 AI 이미지 생성으로 1시간 이내에 시각화하는 방법론입니다.',
    experimentGoal: '실제 양산 가능한 제품 규격과 패키지 재질감을 AI 프롬프트로 정밀하게 제어하는 기술 축적',
    promptExample: 'Matte black embossed aluminum can design, minimalist orange monster typography logo, studio softbox lighting on volcanic slate table, 8k commercial packaging mockup',
    tools: ['Flux Dev', 'Midjourney', 'Illustrator 벡터화', 'Dimension / Blender'],
    insights: '아이디어 단계에서 클라이언트에게 설득력 있는 시각 자료를 빠르게 제공함으로써 커뮤니케이션 비용을 70% 이상 절감할 수 있음을 확인했습니다.'
  },
  {
    id: 'lab-business',
    category: 'business',
    categoryLabel: 'New Business Ideas',
    title: '소상공인 맞춤형 원스톱 AI 광고 제작 패키지 모델',
    stage: '콘셉트 구상 (Concept)',
    summary: '고비용 영상 제작이 어려운 지역 소상공인과 중소기업을 위해, 카피라이팅부터 AI 영상 숏폼, 전단 디자인까지 번들로 제공하는 서비스 모델을 구상 중입니다.',
    experimentGoal: '실무 광고 대행 경험과 AI 자동화 툴을 융합하여 단가 경쟁력과 퀄리티를 동시에 갖춘 패키지 비즈니스 모델 설계',
    tools: ['마케팅 자동화 툴', 'AI 비디오 템플릿', '클라우드 인쇄 제휴망', 'CRM 시스템'],
    insights: '기술 자체의 놀라움보다 "이 광고가 매장에 실제 손님을 끌어오는가"라는 실용적 결과를 보여줄 때 고객의 지불 용의가 발생함을 확인하고 있습니다.'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'article-1',
    category: 'Advertising Notes',
    categoryKo: '광고 · 디자인 노트',
    title: '현수막 100장보다 중요한 카피 한 줄 — 오프라인 광고 현장에서 배운 메시지 설계법',
    date: '2026. 10. 18',
    readTime: '4 min read',
    summary: '아무리 많은 예산으로 거리에 현수막을 걸어도 지나가는 사람의 마음에 걸리는 단어 하나가 없다면 낭비입니다. 현장에서 체득한 반응을 부르는 메시지의 조건.',
    quotes: '좋은 광고는 화려한 미사여구가 아니라, 지나가던 사람이 멈춰 서서 "어? 내 이야기인데?" 하고 돌아보게 만드는 한마디에서 시작됩니다.',
    content: [
      '오랫동안 인쇄 광고, 현수막, 전단, 분양 홍보물을 직접 기획하고 제작하면서 배운 가장 뼈아픈 교훈이 있습니다. 그것은 광고주가 하고 싶은 말과 고객이 듣고 싶은 말 사이의 거리가 생각보다 훨씬 멀다는 점입니다.',
      '분양광고 전단을 만들 때 흔히 저지르는 실수는 아파트의 장점 10가지를 빼곡하게 채워 넣는 것입니다. 하지만 운전 중이거나 길을 걷는 소비자가 읽을 수 있는 글자는 단 세 단어 안팎입니다. "역세권 도보 3분", "확정 분양가", "마지막 1억대". 이처럼 고객의 가장 본질적인 결핍이나 호기심을 자극하지 못하면 그 전단은 곧바로 쓰레기통으로 향합니다.',
      '디자인은 단순히 예쁘게 만드는 작업이 아닙니다. 복잡한 정보 중에서 가장 중요한 단 하나를 골라내어, 그것이 1초 안에 눈에 박히도록 정보의 위계를 세우는 시각적 기획입니다.',
      '지금 제가 AI 툴을 다루면서도 이 원칙을 잊지 않으려고 합니다. 기술이 아무리 화려한 영상을 1분 만에 뽑아내더라도, 그 영상 속 대사와 장면이 사람의 마음을 건드리지 못하면 그것은 그저 디지털 쓰레기일 뿐이기 때문입니다.'
    ]
  },
  {
    id: 'article-2',
    category: 'AI Making',
    categoryKo: 'AI 제작기',
    title: 'AI 영상 툴을 실무에 도입하며 겪은 3가지 시행착오와 해결책',
    date: '2026. 09. 25',
    readTime: '5 min read',
    summary: 'Midjourney부터 Runway, Kling까지. 프롬프트만 넣으면 마법처럼 영상이 완성될 거라 기대했던 초기의 착각과, 이를 실무 퀄리티로 끌어올린 극복기.',
    quotes: 'AI는 내 생각을 대신해주는 기계가 아니라, 내 상상력을 10배 빠르게 캔버스에 옮겨주는 가장 성실한 어시스턴트입니다.',
    content: [
      '처음 생성형 AI 영상 도구를 접했을 때의 충격은 아직도 생생합니다. 키보드로 글자 몇 자를 쳤을 뿐인데 영화 속 한 장면 같은 4초 클립이 렌더링되어 나왔기 때문입니다. 하지만 "오, 신기하다!"라는 감탄을 넘어 "이걸 실제 납품 가능한 결과물로 쓸 수 있는가?"라는 질문을 던졌을 때 수많은 벽에 부딪혔습니다.',
      '첫째, 캐릭터 얼굴이 매 컷마다 바뀌는 문제였습니다. 1번 씬의 주인공과 2번 씬의 주인공이 서로 다른 사람처럼 보이면 서사가 성립되지 않습니다. 이를 해결하기 위해 기본 시드 고정(Seed Lock), 얼굴 클로즈업 레퍼런스 이미지 분리, 그리고 Inpainting을 통한 후반 보정 파이프라인을 구축했습니다.',
      '둘째, 부자연스러운 물리 법칙입니다. 손가락의 기형이나 물체가 허공에 녹아드는 아티팩트는 영상의 신뢰도를 순식간에 떨어뜨립니다. 프롬프트에 불필요한 서술어를 줄이고, 카메라 무빙(Pan, Zoom)을 명시적으로 제어하며, 모션 버킷 값을 적절히 낮추는 실험을 수백 번 거쳤습니다.',
      '셋째, 사운드와 리듬감의 부재입니다. 아무리 예쁜 영상도 소리와 컷 호흡이 맞지 않으면 지루합니다. AI 툴에서 뽑아낸 무음 클립을 전문 영상 편집 툴로 가져와 음향 효과(Foley)와 배경음악의 박자에 맞춰 타이트하게 자르는 과정이 최종 완성도의 80%를 결정합니다.'
    ]
  },
  {
    id: 'article-3',
    category: 'Business Ideas',
    categoryKo: '비즈니스 아이디어',
    title: '광고 대행과 쇼핑몰 운영 경험자가 바라보는 차세대 숏폼 비즈니스 모델',
    date: '2026. 08. 14',
    readTime: '4 min read',
    summary: '과거 오프라인 판촉물 쇼핑몰과 광고 대행을 하면서 느꼈던 구조적 한계를 최신 AI 기술과 숏폼 미디어가 어떻게 해소할 수 있는지에 대한 생각.',
    quotes: '유통의 핵심은 항상 고객의 이목을 끄는 비용(CAC)을 낮추는 것이며, AI 숏폼은 그 비용을 가장 극적으로 낮추는 지렛대입니다.',
    content: [
      '판촉물과 인쇄 사업을 운영할 때 가장 큰 고충은 바로 영업 비용과 재고 부담이었습니다. 카탈로그를 찍어 배포하고 일일이 전화를 돌려 주문을 받는 전통적인 방식은 투입되는 에너지에 비해 마진이 박했습니다.',
      '하지만 지금의 디지털 환경은 판도가 완전히 바뀌었습니다. 개인이 기획한 캐릭터 하나, 위트 있는 30초 숏폼 영상 하나가 수만, 수십만 명의 잠재 고객에게 도달합니다.',
      '제가 구상하는 모델은 "콘텐츠 중심의 역발상 커머스"입니다. 먼저 제품을 대량 주문해 쌓아두는 것이 아니라, AI를 활용해 매력적인 세계관과 캐릭터 IP(예: 덕대리나 몬스터 편의점)를 숏폼으로 먼저 시장에 선보이고, 팬덤과 반응이 검증되었을 때 비로소 굿즈와 실물 제품으로 전환하는 방식입니다.',
      '이러한 방식은 초기 자본 리스크를 최소화하고, 광고비 지출 없이 오가닉 트래픽으로 구매 전환을 일으킬 수 있는 강력한 무기가 될 것입니다.'
    ]
  },
  {
    id: 'article-4',
    category: 'Creative Journal',
    categoryKo: '창작과 생각',
    title: '익숙한 것을 내려놓고 새로운 도구를 마주하는 태도에 관하여',
    date: '2026. 07. 02',
    readTime: '3 min read',
    summary: '수십 년간 익혀온 손에 익은 인쇄 노하우가 AI라는 새로운 파도 앞에서 어떤 의미를 가질 수 있을까. 변화를 두려워하지 않고 배움으로 환원하는 삶.',
    quotes: '과거의 경험은 버리는 것이 아니라, 새로운 기술이라는 돋보기를 통해 더 선명하게 빛나는 뿌리입니다.',
    content: [
      '어느 날 문득 주변을 둘러보았을 때, 세상이 변하는 속도가 내가 생각했던 것보다 훨씬 빠르다는 것을 실감했습니다. 손으로 인쇄 규격을 맞추고 현수막 시안을 검토하던 시간들이 최신 생성형 AI 모델 앞에서 무의미해지는 것은 아닐까 하는 불안감이 잠시 스치기도 했습니다.',
      '하지만 직접 AI 프롬프트를 연구하고 컴퓨터 앞에 앉아 밤을 새워가며 깨달은 사실이 있습니다. 툴은 계속해서 진화하지만, "무엇이 사람의 마음을 움직이는가", "어떤 비주얼이 신뢰를 주는가", "비즈니스는 어떻게 이익을 남기는가"에 대한 본질적인 감각은 결코 기계가 대신해줄 수 없다는 점입니다.',
      '오히려 현장에서 수많은 인쇄 사고를 겪고, 고객의 거절을 받아보고, 사업의 부침을 경험했던 시간들이야말로 AI 도구를 다룰 때 어떤 프롬프트를 던져야 할지 가르쳐주는 가장 값진 나침반이 되어주었습니다.',
      '앞으로도 저는 "예전에 내가 이랬는데"에 머무르지 않고, 오늘 새로 나온 기술을 가장 먼저 테스트해보는 겸손하고 뜨거운 제작자로 남고 싶습니다.'
    ]
  }
];
