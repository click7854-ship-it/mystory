import React from 'react';
import { Quote } from 'lucide-react';
import { SITE_CONFIG } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const approaches = [
    {
      number: '01',
      title: '경험을 이해하다',
      description: '실제 광고와 비즈니스 현장에서 쌓은 경험을 바탕으로 고객의 니즈와 프로젝트의 본질적인 목적을 깊이 이해합니다.',
    },
    {
      number: '02',
      title: '관점을 확장하다',
      description: '과거의 익숙한 방식에만 머무르지 않고, 생성형 AI와 최신 디지털 도구를 적극적으로 탐색하고 실전에 접목합니다.',
    },
    {
      number: '03',
      title: '결과물로 연결하다',
      description: '단순한 아이디어 구상에 그치지 않고 구체적인 디자인 시안, 영상 콘텐츠, 실행 가능한 비즈니스 계획으로 완성합니다.',
    },
  ];

  const activityDomains = [
    { field: '광고 · 디자인', detail: '광고 및 인쇄대행, 현수막, 전단, 옥외광고, 브로슈어, 카피라이팅' },
    { field: '사업 운영', detail: '광고 대행 사업 운영, 판촉물 쇼핑몰 기획 및 유통 프로세스 관리' },
    { field: '부동산 마케팅', detail: '아파트 및 주상복합 분양홍보, 광고 대행 제안서, 매체 믹스 실행계획' },
    { field: 'AI 콘텐츠', detail: 'AI 캐릭터(덕대리), Runway/Kling 기반 영상, 숏폼, 로고 및 그래픽 제작' },
    { field: '디지털 마케팅', detail: '블로그, 인스타그램, 유튜브 카드뉴스 및 썸네일, 온라인 광고 기획' },
    { field: '신규 사업 기획', detail: 'AI 광고 제작대행 모델, 역발상 커머스, 특화 브랜드(몬스터 편의점) 구상' },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 border-b border-[#111111]/8 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F07842] uppercase mb-3">
            <span>ABOUT ME</span>
            <span aria-hidden="true">·</span>
            <span>나의 이야기</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-tight font-display [text-wrap:balance]">
            경험은 나의 기반이고,<br />
            변화는 나의 다음 방향입니다.
          </h2>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#111111]/80 leading-relaxed font-normal">
            <p className="font-semibold text-lg sm:text-xl text-[#111111]">
              안녕하세요. 박규덕입니다.
            </p>
            <p>
              저는 광고와 디자인, 비즈니스의 현장에서 다양한 프로젝트를 기획하고 직접 실행해 왔습니다.
            </p>
            <p>
              인쇄 홍보물과 광고 디자인, 부동산 분양 마케팅, 브랜드 기획, 사업 운영 등 여러 분야를 경험하면서 하나의 아이디어가 실제 작동하는 결과물로 완성되기까지의 섬세한 과정을 무엇보다 중요하게 생각하게 되었습니다.
            </p>
            <p>
              지금은 오랫동안 축적해온 현장 경험에 새로운 AI 기술을 더하는 일에 집중하고 있습니다. AI를 활용한 이미지와 영상 제작, 디지털 숏폼 콘텐츠 기획, 온라인 마케팅, 새로운 비즈니스 모델에 이르기까지 다양한 가능성을 직접 부딪치며 탐구하고 실험하고 있습니다.
            </p>
            <p className="pt-2 text-[#111111] font-medium">
              익숙한 방법을 반복하기보다는 새로운 기술을 능동적으로 학습하여 현실에서 바로 쓰일 수 있는 실질적인 가치를 만들어내고자 합니다.
            </p>
          </div>

          {/* Right Column: What I Believe Quote Card */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-xl bg-white border border-[#111111]/10 shadow-xs relative">
              <Quote className="w-8 h-8 text-[#F07842] mb-5 opacity-90" />
              <h3 className="text-xs font-bold tracking-widest text-[#A3A3A3] uppercase mb-4 font-display">
                WHAT I BELIEVE
              </h3>
              <p className="text-base sm:text-lg font-medium text-[#111111] leading-relaxed mb-6">
                “좋은 기획은 거창한 아이디어보다 문제를 정확하게 이해하는 것에서 시작합니다. 그리고 새로운 기술의 가치는 그 자체가 아니라, 실제로 필요한 곳에 어떻게 쓰이느냐에 달려 있습니다.”
              </p>
              <div className="pt-4 border-t border-[#111111]/8 flex items-center justify-between text-xs text-[#111111]/70">
                <span className="font-bold text-[#111111]">{SITE_CONFIG.koreanName} ({SITE_CONFIG.brandName})</span>
                <span>Creative Business & AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Step Approach */}
        <div className="mb-20">
          <div className="flex items-center justify-between pb-4 border-b border-[#111111]/10 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#111111] font-display">
              MY APPROACH
            </h3>
            <span className="text-xs font-semibold text-[#A3A3A3] tracking-widest uppercase">
              Working Principles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((item) => (
              <div
                key={item.number}
                className="p-7 rounded-xl bg-white border border-[#111111]/8 transition-all hover:border-[#111111]/25"
              >
                <div className="text-xs font-mono font-bold text-[#F07842] mb-4">
                  STEP {item.number}
                </div>
                <h4 className="text-lg font-bold text-[#111111] mb-2.5 font-display">
                  {item.title}
                </h4>
                <p className="text-sm text-[#111111]/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Domains Table (Transparent & Verifiable) */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#111111]/10 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111] font-display">
                활동 영역 및 실무 범위
              </h3>
              <p className="text-xs text-[#A3A3A3] mt-1">
                실제 현장에서 기획하고 다루어 온 핵심 역량 스펙트럼
              </p>
            </div>
            <span className="hidden sm:inline text-xs text-[#A3A3A3]">
              Curated Track Record
            </span>
          </div>

          <div className="divide-y divide-[#111111]/8 border-y border-[#111111]/8">
            {activityDomains.map((item, idx) => (
              <div
                key={idx}
                className="py-4.5 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/60 transition-colors"
              >
                <div className="w-full sm:w-1/3">
                  <span className="text-sm font-bold text-[#111111] font-display">
                    {item.field}
                  </span>
                </div>
                <div className="w-full sm:w-2/3">
                  <span className="text-xs sm:text-sm text-[#111111]/75 leading-relaxed">
                    {item.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
