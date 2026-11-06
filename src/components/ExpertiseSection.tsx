import React from 'react';
import { Check } from 'lucide-react';
import { EXPERTISE_LIST } from '../data/portfolioData';

interface ExpertiseSectionProps {
  onContactClick: () => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ onContactClick }) => {
  return (
    <section id="expertise" className="py-20 lg:py-28 border-b border-[#111111]/8 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F07842] uppercase mb-3">
              <span>EXPERTISE</span>
              <span aria-hidden="true">·</span>
              <span>전문 분야</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-tight font-display [text-wrap:balance]">
              다양한 경험, 하나의 방향.
            </h2>
            <p className="mt-4 text-base text-[#111111]/70 leading-relaxed">
              기획부터 디자인과 콘텐츠 제작까지, 여러 분야의 실무 경험을 유기적으로 연결하여 실제 성과를 낼 수 있는 완성형 솔루션을 제안합니다.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#111111] hover:text-[#F07842] transition-colors pb-1 border-b border-[#111111] hover:border-[#F07842] cursor-pointer"
            >
              <span>프로젝트 의뢰 및 협업 상담</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* 4 Pillars Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {EXPERTISE_LIST.map((item) => (
            <div
              key={item.number}
              className="group p-8 sm:p-10 rounded-xl bg-white border border-[#111111]/8 hover:border-[#111111]/20 transition-all duration-300 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Header line with editorial number */}
                <div className="flex items-center justify-between pb-4 border-b border-[#111111]/8 mb-6">
                  <span className="text-xs font-mono font-bold text-[#F07842] tracking-wider">
                    {item.number}. {item.code}
                  </span>
                  <span className="text-xs text-[#A3A3A3] font-mono tracking-widest">
                    CORE PILLAR
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="text-xs font-bold tracking-widest text-[#A3A3A3] uppercase mb-1 font-display">
                    {item.titleEn}
                  </h3>
                  <h4 className="text-2xl font-bold text-[#111111] font-display">
                    {item.titleKo}
                  </h4>
                </div>

                <p className="text-sm text-[#111111]/75 leading-relaxed mb-8">
                  {item.description}
                </p>

                {/* Scope list with subtle checks */}
                <div className="space-y-3 pt-6 border-t border-[#111111]/8">
                  <p className="text-xs font-bold text-[#111111] tracking-wider uppercase mb-3">
                    주요 제공 역량
                  </p>
                  {item.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]/80">
                      <Check className="w-4 h-4 text-[#F07842] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
