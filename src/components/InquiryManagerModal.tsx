import React, { useState, useEffect } from 'react';
import { X, Trash2, Download, Inbox, Mail, Calendar, Phone, CheckCircle } from 'lucide-react';
import { ContactSubmission } from '../types';

interface InquiryManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryManagerModal: React.FC<InquiryManagerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [inquiries, setInquiries] = useState<ContactSubmission[]>([]);

  const loadInquiries = () => {
    try {
      const data = localStorage.getItem('park_gyuduk_inquiries');
      if (data) {
        setInquiries(JSON.parse(data));
      } else {
        setInquiries([]);
      }
    } catch {
      setInquiries([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadInquiries();
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleDelete = (id: string) => {
    const updated = inquiries.filter((item) => item.id !== id);
    setInquiries(updated);
    localStorage.setItem('park_gyuduk_inquiries', JSON.stringify(updated));
  };

  const handleClearAll = () => {
    if (window.confirm('모든 문의 내역을 초기화하시겠습니까?')) {
      localStorage.removeItem('park_gyuduk_inquiries');
      setInquiries([]);
    }
  };

  const handleExportJSON = () => {
    const blob = new Blob([JSON.stringify(inquiries, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `park_gyuduk_inquiries_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#111111]/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#F7F7F5] rounded-2xl border border-[#111111]/15 shadow-2xl overflow-hidden text-[#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F7F7F5]/95 backdrop-blur-md border-b border-[#111111]/10">
          <div className="flex items-center gap-2">
            <Inbox className="w-4 h-4 text-[#F07842]" />
            <h3 className="text-sm font-bold text-[#111111] font-display">
              접수된 협업 문의 관리자 뷰 ({inquiries.length}건)
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-[#111111]/70 hover:text-[#111111] hover:bg-[#111111]/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-4">
          {inquiries.length === 0 ? (
            <div className="py-12 text-center text-sm text-[#A3A3A3]">
              <Inbox className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>아직 접수된 문의가 없습니다.</p>
              <p className="text-xs text-[#A3A3A3] mt-1">문의 폼을 작성하여 제출하면 브라우저에 안전하게 보관됩니다.</p>
            </div>
          ) : (
            inquiries.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-xl bg-white border border-[#111111]/10 shadow-xs relative space-y-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-base text-[#111111]">{item.name}</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#F7F7F5] border border-[#111111]/10 text-[#F07842]">
                        {item.inquiryType}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#111111]/70">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-[#A3A3A3]" />
                        <a href={`mailto:${item.email}`} className="hover:underline text-[#111111]">
                          {item.email}
                        </a>
                      </span>
                      {item.phone && (
                        <span className="flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5 text-[#A3A3A3]" />
                          <span>{item.phone}</span>
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-[#A3A3A3]">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{new Date(item.createdAt).toLocaleString('ko-KR')}</span>
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    className="p-1.5 text-neutral-400 hover:text-red-500 rounded-lg hover:bg-neutral-100 transition-colors"
                    title="삭제"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-3.5 rounded-lg bg-[#F7F7F5] border border-[#111111]/5 text-xs text-[#111111]/85 whitespace-pre-line leading-relaxed">
                  {item.message}
                </div>

                {(item.timeline || item.budget) && (
                  <div className="flex items-center gap-4 text-xs text-[#111111]/70 pt-1">
                    {item.timeline && <span>희망 일정: <strong>{item.timeline}</strong></span>}
                    {item.budget && <span>예상 예산: <strong>{item.budget}</strong></span>}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer controls */}
        <div className="p-4 bg-white border-t border-[#111111]/10 flex items-center justify-between">
          <span className="text-xs text-[#A3A3A3] flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>로컬 스토리지에 영구 보존 중</span>
          </span>
          <div className="flex items-center gap-2">
            {inquiries.length > 0 && (
              <>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="px-3 py-1.5 text-xs text-neutral-500 hover:text-red-600 font-medium cursor-pointer"
                >
                  전체 비우기
                </button>
                <button
                  type="button"
                  onClick={handleExportJSON}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#111111] bg-[#F7F7F5] border border-[#111111]/15 rounded-lg hover:bg-[#111111] hover:text-white transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>JSON 내보내기</span>
                </button>
              </>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-[#111111] rounded-lg hover:bg-[#F07842] transition-colors cursor-pointer"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
