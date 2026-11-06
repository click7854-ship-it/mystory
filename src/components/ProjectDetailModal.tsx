import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#111111]/80 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl my-8 bg-[#F7F7F5] rounded-2xl border border-[#111111]/15 shadow-2xl overflow-hidden text-[#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-4 bg-[#F7F7F5]/95 backdrop-blur-md border-b border-[#111111]/10">
          <div className="flex items-center gap-2 text-xs text-[#111111]/70 font-mono">
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
            {project.isConceptSample && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-[#F07842] font-semibold">샘플 시안 / 콘셉트 아카이브</span>
              </>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#111111]/70 hover:text-[#111111] hover:bg-[#111111]/5 transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="max-h-[82vh] overflow-y-auto px-6 sm:px-8 py-8 space-y-10">
          {/* Title Area */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] font-display mb-3">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#111111]/75 leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Project Media Showcase */}
          <div className="rounded-xl overflow-hidden border border-[#111111]/10 bg-white shadow-xs">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#ECECE9]">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallbackMap: Record<string, string> = {
                    'yongdu-the-live': '/images/project_realestate_brochure.jpg',
                    'beolgyo-private-rental': '/images/project_branding_identity.jpg',
                    'real-estate-lab': '/images/project_branding_identity.jpg',
                    'ai-character-deokdaeri': '/images/project_ai_character_deok.jpg',
                    'monster-convenience': '/images/project_monster_convenience.jpg',
                  };
                  const fallback = fallbackMap[project.id];
                  if (fallback && !target.src.endsWith(fallback)) {
                    target.src = fallback;
                  }
                }}
              />
            </div>
            {project.isConceptSample && (
              <div className="p-3 bg-[#111111]/5 border-t border-[#111111]/5 text-xs text-[#111111]/60 flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-[#F07842] shrink-0" />
                <span>
                  본 이미지는 포트폴리오 기획 및 디자인 방향의 이해를 돕기 위한 샘플 시안/콘셉트 자료입니다.
                </span>
              </div>
            )}
          </div>

          {/* Overview Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-xl bg-white border border-[#111111]/8">
            <div>
              <span className="text-xs font-bold text-[#A3A3A3] tracking-wider uppercase font-display block mb-1">
                담당 역할 (ROLE)
              </span>
              <p className="text-sm font-semibold text-[#111111] leading-relaxed">
                {project.role}
              </p>
            </div>
            <div>
              <span className="text-xs font-bold text-[#A3A3A3] tracking-wider uppercase font-display block mb-1">
                프로젝트 성격 (CONTEXT)
              </span>
              <p className="text-sm font-semibold text-[#111111] leading-relaxed">
                {project.clientOrContext}
              </p>
            </div>
            {project.toolsUsed && (
              <div className="sm:col-span-2 pt-4 border-t border-[#111111]/5">
                <span className="text-xs font-bold text-[#A3A3A3] tracking-wider uppercase font-display block mb-2">
                  활용 도구 & 기술
                </span>
                <div className="flex flex-wrap gap-2 text-xs text-[#111111]/80">
                  {project.toolsUsed.map((tool, idx) => (
                    <span key={idx} className="font-mono bg-[#F7F7F5] px-2.5 py-1 rounded-md border border-[#111111]/10">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Structured Case Study Sections */}
          <div className="space-y-8">
            {/* Background & Challenge */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-white border border-[#111111]/8">
                <h3 className="text-xs font-bold tracking-widest text-[#F07842] uppercase mb-2 font-display">
                  01. 기획 배경 (BACKGROUND)
                </h3>
                <p className="text-sm text-[#111111]/80 leading-relaxed">
                  {project.background}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#111111]/8">
                <h3 className="text-xs font-bold tracking-widest text-[#F07842] uppercase mb-2 font-display">
                  02. 해결 과제 (CHALLENGE)
                </h3>
                <p className="text-sm text-[#111111]/80 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </div>

            {/* Process */}
            <div className="p-6 rounded-xl bg-white border border-[#111111]/8">
              <h3 className="text-xs font-bold tracking-widest text-[#F07842] uppercase mb-4 font-display">
                03. 작업 과정 및 접근 방식 (PROCESS)
              </h3>
              <div className="space-y-3">
                {project.process.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#111111]/85">
                    <span className="font-mono text-xs font-bold text-[#A3A3A3] pt-0.5">
                      0{idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables / Final Output */}
            <div className="p-6 rounded-xl bg-white border border-[#111111]/8">
              <h3 className="text-xs font-bold tracking-widest text-[#F07842] uppercase mb-4 font-display">
                04. 최종 결과물 및 산출물 (DELIVERABLES)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#111111]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#F07842] shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-[#111111]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#A3A3A3]">
              실제 프로젝트 환경과 요구사항에 맞춤형으로 기획·제작 가능합니다.
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#111111] rounded-lg hover:bg-[#F07842] transition-colors cursor-pointer"
              >
                <span>이 프로젝트와 유사한 협업 문의</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
