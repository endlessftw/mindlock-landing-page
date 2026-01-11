import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Trash2, CheckCircle, AlertCircle } from 'lucide-react';

const TimeLimitSection: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header & Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark-card border border-dark-border rounded-3xl p-8 md:p-10 mb-8 shadow-2xl relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-white/10 text-white">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Daily Time Limits</h2>
          </div>

          <p className="text-slate-400 mb-8 max-w-3xl">
            Set maximum daily time allowances for specific websites. You'll receive warnings at 75% and 90%, and the site will be blocked when you reach your limit.
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="w-full md:flex-1">
              <input
                type="text"
                placeholder="Enter domain (e.g., youtube.com)"
                className="w-full bg-dark-input border border-dark-border rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
              />
            </div>
            <div className="w-full md:w-48">
              <input
                type="number"
                placeholder="Minutes per day"
                className="w-full bg-dark-input border border-dark-border rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
              />
            </div>
            <button className="w-full md:w-auto bg-white text-black px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-white/25 hover:shadow-white/40 hover:scale-105 transition-all whitespace-nowrap">
              Set Limit
            </button>
          </div>
        </motion.div>

        {/* Active Limits Area */}
        <div className="bg-dark-card/50 border border-dark-border rounded-3xl p-8 md:p-10 relative">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-white">Active Time Limits</h3>
            <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center text-sm font-bold border border-white/30">
              2
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Instagram */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-dark-bg border border-dark-border rounded-2xl p-6 hover:border-white/30 transition-colors group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-dark-input border border-dark-border flex items-center justify-center">
                    <img src="https://www.google.com/s2/favicons?domain=instagram.com&sz=64" alt="Instagram" className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-white text-lg">instagram.com</span>
                </div>
                <button className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/20 transition-colors">
                  Remove
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-dark-input/50 rounded-lg p-3 border border-dark-border/50">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Daily Limit</div>
                  <div className="text-white font-bold font-mono">30m</div>
                </div>
                <div className="bg-dark-input/50 rounded-lg p-3 border border-dark-border/50">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Used Today</div>
                  <div className="text-white font-bold font-mono">0s</div>
                </div>
                <div className="bg-dark-input/50 rounded-lg p-3 border border-dark-border/50">
                  <div className="text-[10px] text-white font-bold uppercase tracking-wider mb-1">Remaining</div>
                  <div className="text-white font-bold font-mono">30m</div>
                </div>
              </div>

              <div className="relative h-2 bg-dark-input rounded-full overflow-hidden mb-3">
                <div className="absolute top-0 left-0 h-full w-0 bg-white rounded-full"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-white">0%</span>
                <div className="flex items-center gap-1.5 text-white text-xs font-bold bg-white/10 px-2 py-1 rounded-full border border-white/20">
                  <CheckCircle className="w-3 h-3" />
                  <span>Good</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: YouTube */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-dark-bg border border-dark-border rounded-2xl p-6 hover:border-white/30 transition-colors group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-dark-input border border-dark-border flex items-center justify-center">
                    <img src="https://www.google.com/s2/favicons?domain=youtube.com&sz=64" alt="YouTube" className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-white text-lg">youtube.com</span>
                </div>
                <button className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/20 transition-colors">
                  Remove
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-dark-input/50 rounded-lg p-3 border border-dark-border/50">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Daily Limit</div>
                  <div className="text-white font-bold font-mono">45m</div>
                </div>
                <div className="bg-dark-input/50 rounded-lg p-3 border border-dark-border/50">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Used Today</div>
                  <div className="text-white font-bold font-mono">35m</div>
                </div>
                <div className="bg-dark-input/50 rounded-lg p-3 border border-dark-border/50">
                  <div className="text-[10px] text-white font-bold uppercase tracking-wider mb-1">Remaining</div>
                  <div className="text-white font-bold font-mono">10m</div>
                </div>
              </div>

              <div className="relative h-2 bg-dark-input rounded-full overflow-hidden mb-3">
                <div className="absolute top-0 left-0 h-full w-[77%] bg-white rounded-full"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-white">77%</span>
                <div className="flex items-center gap-1.5 text-white text-xs font-bold bg-white/10 px-2 py-1 rounded-full border border-white/20">
                  <AlertCircle className="w-3 h-3" />
                  <span>Warning</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLimitSection;