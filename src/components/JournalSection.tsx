import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/portfolioData';
import { JournalArticle } from '../types';
import { ArticleReaderModal } from './ArticleReaderModal';

export const JournalSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  return (
    <section id="journal" className="py-20 lg:py-28 border-b border-[#111111]/8 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F07842] uppercase mb-3">
              <span>JOURNAL & INSIGHTS</span>
              <span aria-hidden="true">·</span>
              <span>생각과 기록</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-tight font-display [text-wrap:balance]">
              배우고, 경험하고, 기록합니다.
            </h2>
            <p className="mt-4 text-base text-[#111111]/70 leading-relaxed">
              새로운 기술을 접하며 알게 된 것들, 광고와 디자인 실무에서 느낀 점들, 콘텐츠 제작 과정에서의 시행착오와 비즈니스 인사이트를 솔직하게 아카이브합니다.
            </p>
          </div>
          <div className="text-xs text-[#A3A3A3] font-mono shrink-0">
            <span>4 ESSAYS ARCHIVED</span>
          </div>
        </div>

        {/* 2-column Editorial Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group cursor-pointer p-8 sm:p-10 rounded-2xl bg-white border border-[#111111]/8 hover:border-[#111111]/20 hover:shadow-xs transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Zero-Pill Unboxed Metadata line with Typographic Separator */}
                <div className="flex items-center gap-2 text-xs text-[#A3A3A3] mb-4 font-mono">
                  <span className="text-[#F07842] font-semibold">{article.categoryKo}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-3 leading-snug font-display group-hover:text-[#F07842] transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-[#111111]/75 leading-relaxed line-clamp-3 mb-6">
                  {article.summary}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-[#111111]/8 flex items-center justify-between text-xs font-semibold text-[#111111] group-hover:text-[#F07842] transition-colors">
                <span>글 전문 읽기</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      <ArticleReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
};
