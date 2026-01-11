import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-32 relative px-6">
      <div className="max-w-5xl mx-auto relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-white/10 blur-[100px] rounded-full -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-dark-card to-dark-bg border border-dark-border rounded-[3rem] p-12 md:p-24 text-center overflow-hidden relative"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />

          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight">
            Ready to reclaim your time?
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Join 10,000+ users who have unlocked their true potential with MindLock.
          </p>

          <button className="group relative inline-flex items-center justify-center gap-3 bg-white text-slate-950 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-100 transition-all hover:scale-105">
            Install MindLock
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 rounded-2xl ring-2 ring-white/50 animate-pulse"></div>
          </button>

          <p className="mt-8 text-sm text-slate-500">No credit card required • Works on Chrome, Brave, Edge</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;