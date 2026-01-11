import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Dices, Smartphone, Gamepad2, Tv, Newspaper } from 'lucide-react';

interface Category {
  id: string;
  title: string;
  description: string;
  count: number;
  icon: any;
  iconColor: string;
  iconBg: string;
  initialBlocked: boolean;
}

const categoriesData: Category[] = [
  {
    id: 'adult',
    title: 'Adult Content',
    description: 'Block adult and explicit content',
    count: 10,
    icon: ShieldAlert,
    iconColor: 'text-white',
    iconBg: 'bg-white/10',
    initialBlocked: true
  },
  {
    id: 'gambling',
    title: 'Gambling & Betting',
    description: 'Block gambling and betting sites',
    count: 10,
    icon: Dices,
    iconColor: 'text-slate-300',
    iconBg: 'bg-slate-400/10',
    initialBlocked: false
  },
  {
    id: 'social',
    title: 'Social Media',
    description: 'Block social networking sites',
    count: 10,
    icon: Smartphone,
    iconColor: 'text-slate-300',
    iconBg: 'bg-slate-400/10',
    initialBlocked: false
  },
  {
    id: 'gaming',
    title: 'Gaming',
    description: 'Block gaming and entertainment sites',
    count: 10,
    icon: Gamepad2,
    iconColor: 'text-slate-300',
    iconBg: 'bg-slate-400/10',
    initialBlocked: false
  },
  {
    id: 'streaming',
    title: 'Streaming',
    description: 'Block video streaming platforms',
    count: 10,
    icon: Tv,
    iconColor: 'text-slate-300',
    iconBg: 'bg-slate-400/10',
    initialBlocked: false
  },
  {
    id: 'news',
    title: 'News',
    description: 'Block news and media sites',
    count: 10,
    icon: Newspaper,
    iconColor: 'text-slate-300',
    iconBg: 'bg-slate-400/10',
    initialBlocked: false
  }
];

const CategoryBlockSection: React.FC = () => {
  const [categories, setCategories] = useState(categoriesData);

  const toggleBlock = (id: string) => {
    setCategories(prev => prev.map(cat =>
      cat.id === id ? { ...cat, initialBlocked: !cat.initialBlocked } : cat
    ));
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-2"
            >
              Block by <span className="text-brand-400">Category</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg"
            >
              Block entire categories of websites with a single click
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl border transition-all duration-300 group relative overflow-hidden ${cat.initialBlocked
                  ? 'bg-dark-card/80 border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.15)]'
                  : 'bg-dark-card border-dark-border hover:border-white/30'
                }`}
            >
              {/* Active Gradient Background for Blocked state */}
              {cat.initialBlocked && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              )}

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${cat.iconBg} ${cat.initialBlocked ? 'text-white' : cat.iconColor}`}>
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-1 transition-colors ${cat.initialBlocked ? 'text-white' : 'text-white'}`}>
                      {cat.title}
                    </h3>
                    <p className="text-sm text-slate-400 mb-1 font-medium">{cat.description}</p>
                    <div className="text-xs font-mono text-slate-500">{cat.count} websites</div>
                  </div>
                </div>

                <button
                  onClick={() => toggleBlock(cat.id)}
                  className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 border ${cat.initialBlocked
                      ? 'bg-transparent border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500'
                      : 'bg-brand-500 border-transparent text-white hover:bg-brand-600 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 hover:scale-105'
                    }`}
                >
                  {cat.initialBlocked ? 'Unblock' : 'Block'}
                </button>
              </div>

              {/* Footer of Card */}
              <div className="pt-4 border-t border-dark-border/50 flex justify-between items-center relative z-10">
                <span className="text-xs text-slate-500 font-medium">Blocked domains:</span>
                <button className="text-xs text-slate-400 hover:text-white bg-dark-input hover:bg-dark-border/80 px-3 py-1.5 rounded-md transition-colors font-medium">
                  Show list
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBlockSection;