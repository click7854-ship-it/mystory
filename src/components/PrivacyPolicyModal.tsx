import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#111111]/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#F7F7F5] rounded-2xl border border-[#111111]/15 shadow-2xl overflow-hidden text-[#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-[#F7F7F5]/95 backdrop-blur-md border-b border-[#111111]/10">
          <div className="flex items-center gap-2 text-xs font-bold text-[#111111] uppercase tracking-wider font-display">
            <ShieldCheck className="w-4 h-4 text-[#F07842]" />
            <span>개인정보 수집 및 이용 동의 안내</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-[#111111]/70 hover:text-[#111111] hover:bg-[#111111]/5 transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-5 text-sm text-[#111111]/80 leading-relaxed max-h-[70vh] overflow-y-auto">
          <p>
            PARK GYUDUK(박규덕) 개인 브랜딩 웹사이트는 프로젝트 의뢰 및 비즈니스 협업 문의를 위해 아래와 같이 개인정보를 수집·이용합니다.
          </p>

          <div className="p-4 rounded-xl bg-white border border-[#111111]/10 space-y-3 text-xs">
            <div>
              <span className="font-bold text-[#111111] block mb-0.5">1. 수집하는 개인정보 항목</span>
              <p className="text-[#111111]/70">이름, 이메일 주소, 연락처/메신저(선택), 문의 내용</p>
            </div>
            <div>
              <span className="font-bold text-[#111111] block mb-0.5">2. 개인정보의 수집 및 이용 목적</span>
              <p className="text-[#111111]/70">프로젝트 의뢰 상담, 견적 및 일정 회신, 비즈니스 협업 커뮤니케이션</p>
            </div>
            <div>
              <span className="font-bold text-[#111111] block mb-0.5">3. 개인정보의 보유 및 이용 기간</span>
              <p className="text-[#111111]/70">문의 처리 완료 및 사후 커뮤니케이션을 위해 접수일로부터 1년간 보관 후 안전하게 파기합니다. (요청 시 즉시 파기)</p>
            </div>
            <div>
              <span className="font-bold text-[#111111] block mb-0.5">4. 동의 거부 권리</span>
              <p className="text-[#111111]/70">이용자는 개인정보 수집 동의를 거부할 권리가 있으며, 동의 거부 시 온라인 문의 접수가 제한될 수 있습니다.</p>
            </div>
          </div>

          <p className="text-xs text-[#A3A3A3]">
            수집된 개인정보는 상기 목적 외의 용도로 제3자에게 제공되거나 마케팅 스팸으로 활용되지 않습니다.
          </p>
        </div>

        <div className="p-4 bg-white border-t border-[#111111]/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#111111] rounded-lg hover:bg-[#F07842] transition-colors cursor-pointer"
          >
            확인했습니다
          </button>
        </div>
      </div>
    </div>
  );
};
