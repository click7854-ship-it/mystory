import React, { useEffect } from 'react';
import { X, Quote, ArrowLeft } from 'lucide-react';
import { JournalArticle } from '../types';

interface ArticleReaderModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#111111]/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-[#F7F7F5] rounded-2xl border border-[#111111]/15 shadow-2xl overflow-hidden text-[#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-4 bg-[#F7F7F5]/95 backdrop-blur-md border-b border-[#111111]/10">
          <div className="flex items-center gap-2 text-xs text-[#A3A3A3] font-mono">
            <span className="text-[#F07842] font-semibold">{article.categoryKo}</span>
            <span aria-hidden="true">·</span>
            <span>{article.date}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
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

        {/* Article Body */}
        <div className="max-h-[80vh] overflow-y-auto px-6 sm:px-12 py-10 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] font-display mb-4 leading-tight">
              {article.title}
            </h2>
            <p className="text-base text-[#111111]/70 leading-relaxed italic border-l-2 border-[#F07842] pl-4 py-1">
              {article.summary}
            </p>
          </div>

          {article.quotes && (
            <div className="p-6 rounded-xl bg-white border border-[#111111]/8 relative">
              <Quote className="w-6 h-6 text-[#F07842] mb-3 opacity-80" />
              <p className="text-base sm:text-lg font-medium text-[#111111] leading-relaxed">
                {article.quotes}
              </p>
            </div>
          )}

          <div className="space-y-5 text-base sm:text-lg text-[#111111]/85 leading-relaxed font-normal">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Footer of modal */}
          <div className="pt-8 border-t border-[#111111]/10 flex items-center justify-between">
            <span className="text-xs text-[#A3A3A3]">
              글: 박규덕 (PARK GYUDUK) · 저작권 보호를 받습니다.
            </span>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#F07842] cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>목록으로 돌아가기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
