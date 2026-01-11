import React from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import StatsSection from './components/StatsSection';
import ReviewsSection from './components/ReviewsSection';
import CompanySlider from './components/CompanySlider';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import CategoryBlockSection from './components/CategoryBlockSection';
import TimeLimitSection from './components/TimeLimitSection';
import GroupBlockSection from './components/GroupBlockSection';

const App: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen text-slate-50 selection:bg-brand-500/30 selection:text-brand-100 overflow-x-hidden">
      <BackgroundCanvas />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <GroupBlockSection />
        <CategoryBlockSection />
        <TimeLimitSection />
        <StatsSection />
        <ReviewsSection />
        <CompanySlider />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
};

export default App;
