import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/80 backdrop-blur-md border-b border-dark-border py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src="/mindlocklogo3.png" 
            alt="MindLock Logo" 
            className="w-10 h-10"
          />
          <span className="text-xl font-bold font-display tracking-tight text-white">MindLock</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')} className="hover:text-white transition-colors">How It Works</a>
          <a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')} className="hover:text-white transition-colors">Reviews</a>
        </div>

        <button className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-slate-200 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10">
          <Download className="w-4 h-4" />
          <span>Add to Chrome</span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;