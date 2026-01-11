import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, X, FolderPlus, Sparkles, Brain } from 'lucide-react';

const GroupBlockSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            Block by <span className="text-white">Custom Groups</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-3xl"
          >
            Create custom bundles of websites—like "Study Mode" or "No Socials"—and block them all instantly with a single switch.
          </motion.p>
        </div>

        {/* Create New Group Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark-card border border-dark-border rounded-2xl p-6 mb-12 shadow-lg"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            Create New Group
          </h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter group name (e.g., Social Media)"
              className="flex-1 bg-dark-input border border-dark-border rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
            />
            <button className="bg-white text-black px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-white/25 hover:shadow-white/40 hover:scale-105 transition-all whitespace-nowrap flex items-center justify-center gap-2">
              Create Group
            </button>
          </div>
        </motion.div>

        {/* Your Groups Grid */}
        <div>
          <h3 className="text-2xl font-display font-bold text-white mb-6">Your Groups</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: The "No AI Classwork" Example from Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-dark-bg border border-white/50 rounded-3xl p-6 relative overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)] group"
            >
              {/* Red Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              <div className="relative z-10">
                {/* Card Header */}
                <div className="flex justify-between items-start mb-6 border-b border-dark-border/50 pb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">No AI Classwork</h4>
                    <p className="text-sm text-slate-400">4 websites</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-1.5 rounded-lg font-semibold text-sm border border-slate-600 text-white hover:bg-slate-800 transition-colors">
                      Unblock
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Scrollable List */}
                <div className="space-y-3 max-h-[240px] overflow-y-auto pr-2 custom-scrollbar mb-4">
                  {/* Item 1 */}
                  <div className="bg-dark-input/50 border border-dark-border/50 rounded-xl p-3 flex items-center justify-between group/item hover:border-dark-border transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/90 flex items-center justify-center shrink-0">
                        <img src="https://www.google.com/s2/favicons?domain=openai.com&sz=64" alt="ChatGPT" className="w-5 h-5" />
                      </div>
                      <span className="text-white font-medium text-sm">chatgpt.com</span>
                    </div>
                    <button className="text-slate-500 hover:text-white transition-colors bg-dark-card p-1 rounded-full">
                      <X className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-dark-input/50 border border-dark-border/50 rounded-xl p-3 flex items-center justify-between group/item hover:border-dark-border transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#f3f0ea] flex items-center justify-center shrink-0">
                        <img src="https://www.google.com/s2/favicons?domain=anthropic.com&sz=64" alt="Claude" className="w-5 h-5" />
                      </div>
                      <span className="text-white font-medium text-sm">claude.ai</span>
                    </div>
                    <button className="text-slate-500 hover:text-white transition-colors bg-dark-card p-1 rounded-full">
                      <X className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-dark-input/50 border border-dark-border/50 rounded-xl p-3 flex items-center justify-between group/item hover:border-dark-border transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0">
                        <img src="https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64" alt="Gemini" className="w-5 h-5" />
                      </div>
                      <span className="text-white font-medium text-sm">gemini.google.com</span>
                    </div>
                    <button className="text-slate-500 hover:text-white transition-colors bg-dark-card p-1 rounded-full">
                      <X className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Item 4 */}
                  <div className="bg-dark-input/50 border border-dark-border/50 rounded-xl p-3 flex items-center justify-between group/item hover:border-dark-border transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center shrink-0">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-medium text-sm">perplexity.ai</span>
                    </div>
                    <button className="text-slate-500 hover:text-white transition-colors bg-dark-card p-1 rounded-full">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Add Website Footer */}
                <div className="flex gap-2 mt-4 pt-4 border-t border-dark-border/30">
                  <input
                    type="text"
                    placeholder="Add website..."
                    className="flex-1 bg-dark-input border border-dark-border rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                  />
                  <button className="w-9 h-9 bg-white hover:bg-slate-200 text-black rounded-lg flex items-center justify-center transition-colors shadow-lg shadow-white/20">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Placeholder Card to show grid balance/empty state */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border border-dashed border-dark-border rounded-3xl p-6 flex flex-col items-center justify-center text-center min-h-[300px] bg-dark-card/30 hover:bg-dark-card/50 transition-colors cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-dark-input flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FolderPlus className="w-8 h-8 text-slate-500 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-slate-300 mb-2">Add Another Group</h4>
              <p className="text-slate-500 max-w-xs">
                Create specific blocklists for different times of day or types of work.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupBlockSection;