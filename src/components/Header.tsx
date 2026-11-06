import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'ABOUT' },
    { id: 'expertise', label: 'EXPERTISE' },
    { id: 'work', label: 'WORK' },
    { id: 'ailab', label: 'AI LAB' },
    { id: 'journal', label: 'JOURNAL' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F7F5]/90 backdrop-blur-md border-b border-[#111111]/10 py-3 shadow-xs'
          : 'bg-[#F7F7F5] border-b border-[#111111]/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="text-lg sm:text-xl font-bold tracking-tight text-[#111111] hover:text-[#F07842] transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left font-display"
          >
            {SITE_CONFIG.brandName}.
          </button>

          {/* Zone 2: 5-6 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wider text-[#111111]/70">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive ? 'text-[#111111] font-bold' : 'hover:text-[#111111]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F07842] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleLinkClick('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#F7F7F5] bg-[#111111] rounded-lg hover:bg-[#F07842] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs active:translate-y-px"
            >
              <span>협업 문의</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#111111] hover:text-[#F07842] rounded-lg border border-[#111111]/10 focus:outline-hidden focus:ring-2 focus:ring-[#F07842] cursor-pointer"
              aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#111111]/10 bg-[#F7F7F5] px-6 py-6 transition-all duration-200">
          <nav className="flex flex-col gap-4 text-sm font-semibold text-[#111111]/80">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left py-2 border-b border-[#111111]/5 flex items-center justify-between cursor-pointer ${
                  activeSection === link.id ? 'text-[#F07842] font-bold' : 'hover:text-[#111111]'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#A3A3A3]">→</span>
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#111111] rounded-lg hover:bg-[#F07842] transition-colors cursor-pointer"
              >
                <span>협업 문의 바로가기</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
