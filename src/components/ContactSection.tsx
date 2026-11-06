import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, Inbox } from 'lucide-react';
import { SITE_CONFIG } from '../data/portfolioData';
import { ContactSubmission } from '../types';
import { PrivacyPolicyModal } from './PrivacyPolicyModal';
import { InquiryManagerModal } from './InquiryManagerModal';

interface ContactSectionProps {
  initialInquiryTopic?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialInquiryTopic }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState<ContactSubmission['inquiryType']>('광고·디자인 프로젝트');
  const [timeline, setTimeline] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState(
    initialInquiryTopic ? `[${initialInquiryTopic}] 관련하여 프로젝트 의뢰 및 협업을 제안드립니다.\n\n` : ''
  );
  const [agreed, setAgreed] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // Anti-spam trap

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<ContactSubmission | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isInquiryManagerOpen, setIsInquiryManagerOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Spam honeypot
    if (honeypot.trim() !== '') return;

    // Validation
    if (!name.trim()) {
      setErrorMsg('이름 또는 담당자명을 입력해 주세요.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('유효한 이메일 주소를 입력해 주세요.');
      return;
    }
    if (!message.trim()) {
      setErrorMsg('문의 내용을 구체적으로 작성해 주세요.');
      return;
    }
    if (!agreed) {
      setErrorMsg('개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }

    setIsSubmitting(true);

    const newSubmission: ContactSubmission = {
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      inquiryType,
      timeline: timeline.trim() || undefined,
      budget: budget.trim() || undefined,
      message: message.trim(),
      agreedToPrivacy: agreed,
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage reliably
    try {
      const existing = localStorage.getItem('park_gyuduk_inquiries');
      const list: ContactSubmission[] = existing ? JSON.parse(existing) : [];
      list.unshift(newSubmission);
      localStorage.setItem('park_gyuduk_inquiries', JSON.stringify(list));
    } catch (err) {
      console.warn('LocalStorage save failed:', err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(newSubmission);
      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
      setTimeline('');
      setBudget('');
      setMessage('');
      setAgreed(false);
    }, 400);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#F07842] uppercase mb-3">
            <span>CONTACT & COLLABORATION</span>
            <span aria-hidden="true">·</span>
            <span>함께할 가능성</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-tight font-display [text-wrap:balance]">
            함께할 수 있는<br />
            새로운 가능성을 기다립니다.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#111111]/75 leading-relaxed">
            광고와 디자인, 영상 콘텐츠 제작, 브랜드 기획 또는 새로운 비즈니스 프로젝트에 대해 이야기하고 싶으시다면 편하게 연락해 주세요. 서로의 경험과 아이디어가 만나 실질적인 결과물로 이어질 수 있기를 바랍니다.
          </p>
        </div>

        {/* 2-Column Grid: Form & Direct Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#111111]/10 shadow-xs">
              <h3 className="text-xl font-bold text-[#111111] font-display mb-6">
                프로젝트 의뢰 및 협업 문의서
              </h3>

              {submitSuccess ? (
                <div className="p-8 rounded-xl bg-[#F7F7F5] border border-emerald-600/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#111111] font-display">
                    문의가 정상적으로 접수되었습니다.
                  </h4>
                  <p className="text-sm text-[#111111]/75 leading-relaxed max-w-md mx-auto">
                    작성해 주신 소중한 내용은 안전하게 보관되었습니다. 확인 후 남겨주신 연락처(<strong>{submitSuccess.email}</strong>)로 24~48시간 이내에 정성껏 회신드리겠습니다.
                  </p>
                  <div className="text-xs font-mono text-[#A3A3A3] pt-2">
                    접수 번호: {submitSuccess.id}
                  </div>
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSubmitSuccess(null)}
                      className="px-5 py-2.5 text-xs font-semibold text-[#111111] bg-white border border-[#111111]/15 rounded-lg hover:bg-[#111111] hover:text-white transition-colors cursor-pointer"
                    >
                      새로운 문의 작성하기
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsInquiryManagerOpen(true)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#F07842] hover:underline cursor-pointer"
                    >
                      <Inbox className="w-3.5 h-3.5" />
                      <span>접수 내역 확인</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Anti-spam trap field hidden from real humans */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_trap"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2 font-display">
                        이름 / 회사명 <span className="text-[#F07842]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="홍길동 또는 회사명"
                        className="w-full px-4 py-3 rounded-lg bg-[#F7F7F5] border border-[#111111]/10 text-sm text-[#111111] placeholder:text-[#A3A3A3] focus:outline-hidden focus:ring-2 focus:ring-[#F07842] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2 font-display">
                        이메일 주소 <span className="text-[#F07842]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#F7F7F5] border border-[#111111]/10 text-sm text-[#111111] placeholder:text-[#A3A3A3] focus:outline-hidden focus:ring-2 focus:ring-[#F07842] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Contact Number & Inquiry Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2 font-display">
                        연락처 / 카카오톡 ID (선택)
                      </label>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="010-0000-0000"
                        className="w-full px-4 py-3 rounded-lg bg-[#F7F7F5] border border-[#111111]/10 text-sm text-[#111111] placeholder:text-[#A3A3A3] focus:outline-hidden focus:ring-2 focus:ring-[#F07842] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2 font-display">
                        문의 유형 <span className="text-[#F07842]">*</span>
                      </label>
                      <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value as ContactSubmission['inquiryType'])}
                        className="w-full px-4 py-3 rounded-lg bg-[#F7F7F5] border border-[#111111]/10 text-sm text-[#111111] focus:outline-hidden focus:ring-2 focus:ring-[#F07842] focus:bg-white transition-all"
                      >
                        <option value="광고·디자인 프로젝트">광고·디자인 프로젝트 의뢰</option>
                        <option value="AI 콘텐츠 제작">AI 캐릭터/영상 콘텐츠 제작</option>
                        <option value="비즈니스 협업">신규 비즈니스 협업 제안</option>
                        <option value="기타 문의">기타 문의 및 상담</option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Schedule & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2 font-display">
                        희망 완료 일정 (선택)
                      </label>
                      <input
                        type="text"
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        placeholder="예: 2주 이내, 2026년 상반기"
                        className="w-full px-4 py-3 rounded-lg bg-[#F7F7F5] border border-[#111111]/10 text-sm text-[#111111] placeholder:text-[#A3A3A3] focus:outline-hidden focus:ring-2 focus:ring-[#F07842] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2 font-display">
                        예상 예산 범위 (선택)
                      </label>
                      <input
                        type="text"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        placeholder="협의 가능 또는 범위"
                        className="w-full px-4 py-3 rounded-lg bg-[#F7F7F5] border border-[#111111]/10 text-sm text-[#111111] placeholder:text-[#A3A3A3] focus:outline-hidden focus:ring-2 focus:ring-[#F07842] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2 font-display">
                      문의 내용 <span className="text-[#F07842]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="프로젝트의 목적, 현재 준비된 자료(기획서/디자인 파일 유무), 기대하시는 역할 등을 자유롭게 적어주세요."
                      className="w-full px-4 py-3 rounded-lg bg-[#F7F7F5] border border-[#111111]/10 text-sm text-[#111111] placeholder:text-[#A3A3A3] focus:outline-hidden focus:ring-2 focus:ring-[#F07842] focus:bg-white transition-all leading-relaxed"
                    />
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded-sm border-gray-300 text-[#F07842] focus:ring-[#F07842] cursor-pointer"
                      />
                      <span className="text-xs text-[#111111]/75 leading-relaxed">
                        [필수] 개인정보 수집 및 이용 목적(문의 회신 및 프로젝트 상담)에 동의합니다.{' '}
                        <button
                          type="button"
                          onClick={() => setIsPrivacyModalOpen(true)}
                          className="text-[#F07842] underline hover:text-[#111111] font-medium ml-1 cursor-pointer"
                        >
                          전문 보기
                        </button>
                      </span>
                    </label>
                  </div>

                  {/* Error Notification */}
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-50 text-red-700 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm font-semibold text-white bg-[#111111] rounded-lg hover:bg-[#F07842] disabled:opacity-50 transition-all cursor-pointer shadow-xs active:translate-y-px"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? '문의 저장 중...' : '문의 보내기'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Contact & Process */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Channel Box */}
            <div className="p-8 rounded-2xl bg-white border border-[#111111]/10 shadow-xs space-y-6">
              <h3 className="text-xs font-bold tracking-widest text-[#A3A3A3] uppercase font-display">
                DIRECT CHANNELS
              </h3>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-[#F7F7F5] border border-[#111111]/8 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-white text-[#F07842] shadow-2xs shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] text-[#A3A3A3] uppercase font-mono">Official Email</p>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-sm font-bold text-[#111111] hover:underline truncate block"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 text-[#111111]/70 hover:text-[#F07842] rounded-lg hover:bg-white transition-colors cursor-pointer shrink-0"
                    title="이메일 복사"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-[#F7F7F5] border border-[#111111]/8 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white text-[#F07842] shadow-2xs shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#A3A3A3] uppercase font-mono">Location & Working Scope</p>
                    <p className="text-sm font-semibold text-[#111111]">
                      {SITE_CONFIG.location} (전국 비대면 협업 가능)
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Process Steps */}
              <div className="pt-4 border-t border-[#111111]/8 space-y-3">
                <p className="text-xs font-bold text-[#111111] tracking-wider uppercase font-display">
                  협업 진행 절차
                </p>
                <div className="space-y-2 text-xs text-[#111111]/75">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[#F07842]">01</span>
                    <span>온라인 문의 접수 및 24~48시간 이내 1차 검토 회신</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[#F07842]">02</span>
                    <span>프로젝트 상세 요구사항, 예산, 일정 사전 협의</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[#F07842]">03</span>
                    <span>맞춤형 기획안 및 견적/일정표 확정</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[#F07842]">04</span>
                    <span>제작 착수, 단계별 피드백 및 최종 산출물 납품</span>
                  </div>
                </div>
              </div>

              {/* Inquiry Manager Button (Admin / Owner view) */}
              <div className="pt-4 border-t border-[#111111]/8 flex items-center justify-between text-xs">
                <span className="text-[#A3A3A3]">사이트 관리자 도구:</span>
                <button
                  type="button"
                  onClick={() => setIsInquiryManagerOpen(true)}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#111111] hover:text-[#F07842] transition-colors cursor-pointer"
                >
                  <Inbox className="w-3.5 h-3.5" />
                  <span>접수된 문의 내역 열람 ({(() => {
                    try {
                      const data = localStorage.getItem('park_gyuduk_inquiries');
                      return data ? JSON.parse(data).length : 0;
                    } catch {
                      return 0;
                    }
                  })()})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
      <InquiryManagerModal
        isOpen={isInquiryManagerOpen}
        onClose={() => setIsInquiryManagerOpen(false)}
      />
    </section>
  );
};
