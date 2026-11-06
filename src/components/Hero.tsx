import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Layers, Briefcase, Zap } from 'lucide-react';
import { SITE_CONFIG } from '../data/portfolioData';
import heroDirectorImg from '../assets/images/hero_director_portrait_1793930427761.jpg';

interface HeroProps {
  onExploreWork: () => void;
  onExploreAbout: () => void;
  onExploreAiLab: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onExploreAbout,
  onExploreAiLab,
}) => {
  const [imgError, setImgError] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>(heroDirectorImg || '/images/hero_director_portrait.jpg');
  return (
    <section id="home" className="pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-[#111111]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Split Screen 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              {/* Unboxed Kicker metadata */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F07842] uppercase mb-4">
                <span>{SITE_CONFIG.subtitle}</span>
                <span aria-hidden="true">·</span>
                <span>Creative Thinking, Real Experience</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.12] mb-6 font-display [text-wrap:balance]">
                경험을 디자인하고,<br />
                가능성을 연결합니다.
              </h1>

              {/* Subcopy */}
              <p className="text-base sm:text-lg text-[#111111]/75 leading-relaxed max-w-2xl mb-8 font-normal">
                {SITE_CONFIG.subcopy}
                <br className="hidden sm:inline" />
                인쇄 홍보물과 광고 디자인, 부동산 분양 마케팅에서부터 AI 영상과 캐릭터, 신규 비즈니스 기획까지 생각을 실제 작동하는 결과물로 연결합니다.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-10">
                <button
                  type="button"
                  onClick={onExploreWork}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#F7F7F5] bg-[#111111] rounded-lg hover:bg-[#F07842] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs active:translate-y-px"
                >
                  <span>MY WORK — 프로젝트 보기</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={onExploreAbout}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#111111] bg-white border border-[#111111]/15 rounded-lg hover:border-[#111111] hover:bg-[#F7F7F5] transition-colors whitespace-nowrap shrink-0 cursor-pointer active:translate-y-px"
                >
                  <span>ABOUT ME — 나의 이야기</span>
                </button>
                <button
                  type="button"
                  onClick={onExploreAiLab}
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs sm:text-sm font-medium text-[#111111]/70 hover:text-[#F07842] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#F07842]" />
                  <span>AI LAB 실험 보기</span>
                </button>
              </div>
            </div>

            {/* Quiet status & scroll indicator */}
            <div className="pt-6 border-t border-[#111111]/8 flex items-center justify-between text-xs text-[#111111]/60">
              <div className="flex items-center gap-2">
                <span className="font-medium text-[#111111]">{SITE_CONFIG.koreanName}</span>
                <span aria-hidden="true">/</span>
                <span>크리에이티브 비즈니스 & AI 디렉터</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-[#A3A3A3]">
                <span>스크롤하여 탐색</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait Presentation */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative group overflow-hidden rounded-xl border border-[#111111]/10 bg-white shadow-xs">
              <div className="aspect-[3/4] w-full overflow-hidden bg-[#ECECE9]">
                {!imgError ? (
                  <img
                    src={imgSrc}
                    alt="박규덕 크리에이티브 비즈니스 & AI 디렉터 프로필"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={() => {
                      if (imgSrc !== '/images/hero_director_portrait.jpg') {
                        setImgSrc('/images/hero_director_portrait.jpg');
                      } else {
                        setImgError(true);
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#181818] text-[#F7F7F5]">
                    <span className="text-xs tracking-widest text-[#F07842] uppercase mb-2">Director Profile</span>
                    <span className="text-2xl font-bold mb-1 font-display">PARK GYUDUK</span>
                    <span className="text-xs text-[#A3A3A3]">Creative Business & AI</span>
                  </div>
                )}
              </div>

              {/* Minimalist Editorial Caption */}
              <div className="p-4 bg-white border-t border-[#111111]/10 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#111111]">PARK GYUDUK</p>
                  <p className="text-[11px] text-[#A3A3A3]">Creative Business & AI Specialist</p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-medium text-[#F07842]">Seoul · In Progress</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Pillar KPI / Competency Strip below hero split */}
        <div className="mt-14 pt-10 border-t border-[#111111]/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-lg bg-white/70 border border-[#111111]/5">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-4 h-4 text-[#F07842]" />
                <span className="text-xs font-bold text-[#111111] tracking-wider uppercase font-display">
                  Advertising & Print
                </span>
              </div>
              <p className="text-xs text-[#111111]/70 leading-relaxed">
                전단, 옥외광고, 현수막, 카피라이팅 등 오프라인 광고 현장의 실전 기획 노하우.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white/70 border border-[#111111]/5">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-4 h-4 text-[#F07842]" />
                <span className="text-xs font-bold text-[#111111] tracking-wider uppercase font-display">
                  Real Estate Marketing
                </span>
              </div>
              <p className="text-xs text-[#111111]/70 leading-relaxed">
                분양홍보 전략, 제안서 기획, 인포그래픽, 실수요자 타깃 메시징 시스템.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white/70 border border-[#111111]/5">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#F07842]" />
                <span className="text-xs font-bold text-[#111111] tracking-wider uppercase font-display">
                  AI Pipeline & Video
                </span>
              </div>
              <p className="text-xs text-[#111111]/70 leading-relaxed">
                3D 캐릭터 일관성 유지, Runway/Kling 시네마틱 영상, 숏폼 콘텐츠 양산 파이프라인.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white/70 border border-[#111111]/5">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-[#F07842]" />
                <span className="text-xs font-bold text-[#111111] tracking-wider uppercase font-display">
                  Business & Execution
                </span>
              </div>
              <p className="text-xs text-[#111111]/70 leading-relaxed">
                쇼핑몰 및 사업 운영 경험을 결합한 실질적 수익 모델 및 신규 브랜드 기획.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
