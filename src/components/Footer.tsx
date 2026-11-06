import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-[#F7F7F5] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-12 border-b border-white/10">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white mb-2">
              {SITE_CONFIG.brandName}.
            </h3>
            <p className="text-xs text-[#A3A3A3] font-mono tracking-widest uppercase mb-4">
              {SITE_CONFIG.subtitle}
            </p>
            <p className="text-sm text-[#F7F7F5]/70 max-w-sm leading-relaxed">
              {SITE_CONFIG.slogan}
              <br />
              광고와 비즈니스의 경험에 AI와 디지털 기술을 더해 새로운 가치를 만들어갑니다.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-14 text-xs font-semibold tracking-wider text-[#A3A3A3]">
            <div className="space-y-3">
              <span className="text-white uppercase font-display block text-xs tracking-widest">
                Navigation
              </span>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => onNavigate('home')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    HOME
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    ABOUT ME
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('expertise')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    EXPERTISE
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('work')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    WORK
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-white uppercase font-display block text-xs tracking-widest">
                Archive
              </span>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => onNavigate('ailab')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    AI LAB
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('journal')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    JOURNAL
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    CONTACT
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenPrivacy}
                    className="hover:text-[#F07842] transition-colors cursor-pointer"
                  >
                    개인정보처리방침
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3A3A3]">
          <div>
            <span>© 2026 {SITE_CONFIG.brandName} ({SITE_CONFIG.koreanName}). All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#A3A3A3] hover:text-white transition-colors cursor-pointer"
            >
              <span>맨 위로 이동</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
