import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Chrome, Target } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 min-h-screen flex items-center overflow-hidden">
      {/* Abstract Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-800/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-card/50 border border-dark-border mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-xs font-medium text-slate-300">v2.0 Now Available</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold font-display leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-brand-200">
            Master Your <br />
            <span className="text-brand-500">Digital Docus</span>
          </h1>

          <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
            Block distractions, track habits, and reclaim your time with the most beautiful and lightweight website blocker for Chrome.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://chromewebstore.google.com/detail/mindlock/egdaeejpejnibbfgiemhbofpoipkoncp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://chromewebstore.google.com/detail/mindlock/egdaeejpejnibbfgiemhbofpoipkoncp', '_blank');
              }}
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all hover:scale-105 cursor-pointer"
            >
              <Chrome className="w-5 h-5" />
              Add to Chrome
            </a>
            <a
              href="https://chromewebstore.google.com/detail/mindlock/egdaeejpejnibbfgiemhbofpoipkoncp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://chromewebstore.google.com/detail/mindlock/egdaeejpejnibbfgiemhbofpoipkoncp', '_blank');
              }}
              className="flex items-center justify-center gap-3 bg-dark-card/50 backdrop-blur-sm border border-dark-border text-white px-8 py-4 rounded-2xl font-bold text-lg hover:border-brand-500/30 transition-all hover:scale-105 cursor-pointer"
            >
              View Demo
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-400" />
              <span>Privacy First</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-brand-400" />
              <span>Lightweight</span>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/32/32?random=${i}`} alt="User" className="w-8 h-8 rounded-full border-2 border-dark-bg" />
              ))}
              <div className="w-8 h-8 rounded-full bg-dark-card border-2 border-dark-bg flex items-center justify-center text-xs font-bold text-white">+2k</div>
            </div>
          </div>
        </motion.div>

        {/* Floating UI Mockup - Replicated from User Image */}
        <div className="relative lg:h-[650px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 bg-dark-bg rounded-2xl shadow-2xl shadow-black/80 w-full max-w-md animate-float border border-dark-border/30 overflow-hidden"
          >
            {/* Window Controls */}
            <div className="h-8 bg-dark-card border-b border-dark-border flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>

            <div className="p-8 flex flex-col items-center text-center relative">
              {/* Logo with Glow */}
              <div className="mb-8 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-500/20 blur-[50px] rounded-full"></div>
                <div className="relative z-10">
                  <img src="/mindlocklogo3.png" alt="MindLock Logo" className="w-20 h-20" />
                </div>
              </div>

              <h3 className="text-4xl font-display font-bold text-brand-300 mb-4 drop-shadow-[0_0_15px_rgba(108,92,231,0.3)]">
                Website Blocked
              </h3>
              <p className="text-slate-400 mb-8">
                This website has been blocked to help you stay focused.
              </p>

              {/* Blocked URL Box */}
              <div className="w-full bg-dark-input border border-dark-border rounded-lg p-4 mb-6 text-left">
                <div className="text-xs text-slate-500 font-semibold mb-1 uppercase tracking-wider">Blocked URL:</div>
                <div className="text-white font-mono text-sm truncate">https://www.distracting-site.com/feed</div>
              </div>

              {/* Focus Message Box */}
              <div className="w-full bg-brand-900/20 border border-brand-500/20 rounded-lg p-4 mb-8">
                <div className="flex items-center justify-center gap-2 text-white font-semibold mb-1">
                  <Target className="w-4 h-4 text-white" />
                  <span>Stay Focused!</span>
                </div>
                <div className="text-sm text-slate-300">You blocked this site for a reason. Keep up the good work!</div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 w-full">
                <button className="flex-1 bg-gradient-to-r from-brand-500 to-brand-600 text-white py-3 rounded-lg font-semibold shadow-lg shadow-brand-500/20 hover:scale-[1.02] transition-transform">
                  ← Go Back
                </button>
                <button className="flex-1 bg-transparent border border-dark-border text-slate-300 py-3 rounded-lg font-medium hover:bg-dark-card transition-colors">
                  Manage Sites
                </button>
              </div>

              {/* Quote at bottom */}
              <div className="mt-8 pt-6 border-t border-dark-border w-full">
                <p className="text-xs text-slate-400 italic">"The key is not to prioritize what's on your schedule, but to schedule your priorities."</p>
                <div className="text-xs text-brand-400 mt-1">— Stephen Covey</div>
              </div>

            </div>
          </motion.div>

          {/* Decorative Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-500/5 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;