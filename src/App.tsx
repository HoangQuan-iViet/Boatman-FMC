import React from 'react';
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { LevelsSection } from './components/LevelsSection'
import { RoadmapSection } from './components/RoadmapSection'
import { AwardsSection } from './components/AwardsSection'
import { CurriculumSection } from './components/CurriculumSection'
import { InternationalCampSection } from './components/InternationalCampSection'
import { GallerySection } from './components/GallerySection'
import { PaymentSection } from './components/PaymentSection'
import { FaqSection } from './components/FaqSection'
import { Footer } from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-gray-800 scroll-smooth">
      <HeroSection />
      <AboutSection />
      <LevelsSection />
      <RoadmapSection />
      <AwardsSection />
      <CurriculumSection />
      <InternationalCampSection />
      <GallerySection />
      <PaymentSection />
      <FaqSection />
      <Footer />
    </div>
  )
}

export default App;
