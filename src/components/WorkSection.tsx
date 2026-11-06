import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCategory, ProjectItem } from '../types';

interface WorkSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: '전체 프로젝트' },
    { id: 'real-estate', label: '부동산 마케팅' },
    { id: 'advertising', label: '광고 · 인쇄' },
    { id: 'branding', label: '브랜드 · 디자인' },
    { id: 'ai-content', label: 'AI 영상 · 콘텐츠' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-20 lg:py-28 border-b border-[#111111]/8 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F07842] uppercase mb-3">
              <span>WORK & ARCHIVE</span>
              <span aria-hidden="true">·</span>
              <span>프로젝트</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-tight font-display [text-wrap:balance]">
              기획하고, 만들고, 발전시켜 온 작업들.
            </h2>
            <p className="mt-4 text-base text-[#111111]/70 leading-relaxed">
              광고·디자인 프로젝트부터 AI 캐릭터 영상과 브랜드 기획까지, 생각을 구체적인 결과물로 발전시켜 온 주요 과정과 결과물을 기록합니다.
            </p>
          </div>

          {/* Interactive Segmented Filter Tabs (Buttons allowed for interactive controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-[#111111]/10 rounded-xl self-start lg:self-end">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#111111] text-[#F7F7F5] shadow-xs'
                      : 'text-[#111111]/70 hover:text-[#111111] hover:bg-[#F7F7F5]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl bg-white border border-[#111111]/10 overflow-hidden hover:border-[#111111]/25 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ECECE9]">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Sample Notice Overlay */}
                  {project.isConceptSample && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-medium bg-[#111111]/80 backdrop-blur-xs text-white rounded-md">
                      샘플 시안 / 콘셉트
                    </div>
                  )}
                  {project.category === 'ai-content' && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium bg-[#F07842] text-white rounded-md shadow-xs">
                      <Sparkles className="w-3 h-3" />
                      <span>AI R&D</span>
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-7 sm:p-8">
                  {/* Unboxed Metadata Line with Typographic Separator */}
                  <div className="flex items-center gap-2 text-xs text-[#A3A3A3] mb-3 font-mono">
                    <span className="text-[#111111] font-semibold">{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.clientOrContext}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-2 font-display group-hover:text-[#F07842] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#111111]/60 mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-[#111111]/75 leading-relaxed line-clamp-2 mb-6">
                    {project.summary}
                  </p>

                  {/* Unboxed Keywords / Tags */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#A3A3A3] font-mono">
                    {project.keywords.map((kw, kwIdx) => (
                      <React.Fragment key={kwIdx}>
                        <span>#{kw}</span>
                        {kwIdx < project.keywords.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with Details Link */}
              <div className="px-7 sm:px-8 py-4 bg-[#F7F7F5]/50 border-t border-[#111111]/8 flex items-center justify-between text-xs font-semibold text-[#111111] group-hover:text-[#F07842] transition-colors">
                <span>프로젝트 상세 기획 및 과정 보기</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty state safeguard */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-white border border-[#111111]/10">
            <p className="text-sm text-[#111111]/60">해당 카테고리의 프로젝트를 정리하고 있습니다.</p>
          </div>
        )}
      </div>
    </section>
  );
};
