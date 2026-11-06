/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { WorkSection } from './components/WorkSection';
import { AiLabSection } from './components/AiLabSection';
import { JournalSection } from './components/JournalSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { ProjectItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [inquiryTopic, setInquiryTopic] = useState<string | undefined>(undefined);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Scroll spy to track active section
  useEffect(() => {
    const sectionIds = ['home', 'about', 'expertise', 'work', 'ailab', 'journal', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInquireFromProject = (projectTitle: string) => {
    setInquiryTopic(projectTitle);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F5] text-[#111111] antialiased">
      {/* Fixed Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 01. HOME (Hero & Value Proposition) */}
        <Hero
          onExploreWork={() => handleNavigate('work')}
          onExploreAbout={() => handleNavigate('about')}
          onExploreAiLab={() => handleNavigate('ailab')}
        />

        {/* 02. ABOUT ME (Narrative & Principles) */}
        <AboutSection />

        {/* 03. EXPERTISE (4 Core Pillars) */}
        <ExpertiseSection
          onContactClick={() => handleNavigate('contact')}
        />

        {/* 04. WORK (Interactive Portfolio & Case Studies) */}
        <WorkSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 05. AI LAB (Experiments & Prompt Inspector) */}
        <AiLabSection />

        {/* 06. JOURNAL (Insights & Essays) */}
        <JournalSection />

        {/* 07. CONTACT (Inquiry Form & Direct Channels) */}
        <ContactSection
          initialInquiryTopic={inquiryTopic}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
      />

      {/* Project Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={handleInquireFromProject}
      />

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
}
