import React, { useState } from 'react';
import { Sparkles, Terminal, Copy, Check, ChevronRight } from 'lucide-react';
import { LAB_EXPERIMENTS } from '../data/portfolioData';
import { LabExperiment } from '../types';

export const AiLabSection: React.FC = () => {
  const [selectedExperiment, setSelectedExperiment] = useState<LabExperiment>(LAB_EXPERIMENTS[0]);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const handleCopyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <section id="ailab" className="py-20 lg:py-28 border-b border-[#111111]/8 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F07842] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F07842]" />
            <span>AI & CREATIVE LAB</span>
            <span aria-hidden="true">·</span>
            <span>새로운 시도</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-tight font-display [text-wrap:balance]">
            새로운 도구로,<br />
            새로운 가능성을 실험합니다.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#111111]/75 leading-relaxed">
            기술의 변화는 언제나 새로운 기회를 만듭니다. AI 이미지와 시네마틱 영상, 캐릭터 일관성 제어 도구를 실무에 직접 대입해보며 축적한 프롬프트 파이프라인과 비즈니스 아이디어를 공유합니다.
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-[#111111]/60">
            <span className="font-medium text-[#111111]">※ 원칙:</span>
            <span>완성된 상용 프로젝트와 현재 발전 중인 실험 단계를 명확히 분리하여 기록합니다.</span>
          </div>
        </div>

        {/* 2-Column Split: Experiment Cards on Left, Interactive Pipeline / Prompt Inspector on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: 4 Experiment Domain Cards */}
          <div className="lg:col-span-5 space-y-4">
            {LAB_EXPERIMENTS.map((exp) => {
              const isSelected = selectedExperiment.id === exp.id;
              return (
                <div
                  key={exp.id}
                  onClick={() => setSelectedExperiment(exp)}
                  className={`p-6 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#111111] shadow-sm'
                      : 'bg-white/60 border-[#111111]/8 hover:border-[#111111]/20 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2 text-xs font-mono">
                    <span className="text-[#F07842] font-semibold">{exp.categoryLabel}</span>
                    <span className="text-[#A3A3A3] text-[11px]">{exp.stage}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#111111] mb-2 font-display">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed mb-4 line-clamp-2">
                    {exp.summary}
                  </p>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#111111]/80 pt-3 border-t border-[#111111]/5">
                    <span className="text-[11px] text-[#A3A3A3]">
                      도구: {exp.tools.slice(0, 2).join(', ')}
                    </span>
                    <span className="flex items-center gap-1 text-[#F07842]">
                      <span>파이프라인 보기</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Inspector Console */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-white border border-[#111111]/10 shadow-xs space-y-7">
              {/* Header */}
              <div className="pb-5 border-b border-[#111111]/8">
                <div className="flex items-center justify-between text-xs font-mono text-[#A3A3A3] mb-2">
                  <span>EXPERIMENT CONSOLE</span>
                  <span className="text-[#F07842] font-semibold">{selectedExperiment.stage}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] font-display">
                  {selectedExperiment.title}
                </h3>
              </div>

              {/* Goal & Overview */}
              <div>
                <span className="text-xs font-bold text-[#A3A3A3] tracking-wider uppercase font-display block mb-1.5">
                  실험 목표 (OBJECTIVE)
                </span>
                <p className="text-sm sm:text-base text-[#111111] leading-relaxed font-medium">
                  {selectedExperiment.experimentGoal}
                </p>
              </div>

              {/* Prompt Recipe Inspector if available */}
              {selectedExperiment.promptExample && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#A3A3A3] tracking-wider uppercase font-display flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#F07842]" />
                      <span>핵심 프롬프트 설계 구조 (PROMPT FORMULA)</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopyPrompt(selectedExperiment.promptExample || '')}
                      className="inline-flex items-center gap-1 text-xs text-[#111111]/70 hover:text-[#F07842] transition-colors cursor-pointer"
                    >
                      {copiedPrompt ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-600">복사됨</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>프롬프트 복사</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="p-4 rounded-lg bg-[#111111] text-[#F7F7F5] font-mono text-xs leading-relaxed overflow-x-auto selection:bg-[#F07842]">
                    <code>{selectedExperiment.promptExample}</code>
                  </div>
                </div>
              )}

              {/* Toolchain */}
              <div>
                <span className="text-xs font-bold text-[#A3A3A3] tracking-wider uppercase font-display block mb-2">
                  검증된 도구 체인 (TOOL STACK)
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {selectedExperiment.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-[#F7F7F5] border border-[#111111]/10 text-[#111111] font-mono font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Real Practical Insights */}
              <div className="p-5 rounded-xl bg-[#F7F7F5] border border-[#111111]/8">
                <span className="text-xs font-bold text-[#F07842] tracking-wider uppercase font-display block mb-1">
                  현장 체득 인사이트 (PRACTICAL FINDINGS)
                </span>
                <p className="text-xs sm:text-sm text-[#111111]/80 leading-relaxed">
                  {selectedExperiment.insights}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
