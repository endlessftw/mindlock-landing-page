import React from 'react';
import { Shield, Palette, Zap, Cloud, FolderOpen, UserX } from 'lucide-react';
import { motion } from 'framer-motion';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Website Blocking",
    description: "Add any website to your blocklist instantly. Supports wildcards and subdomains.",
    icon: Shield,
    color: "text-white"
  },
  {
    title: "Modern Dark UI",
    description: "Beautifully crafted interface that's easy on the eyes, day or night.",
    icon: Palette,
    color: "text-white"
  },
  {
    title: "Cloud Sync",
    description: "Your settings sync automatically across all your devices via Chrome Storage.",
    icon: Cloud,
    color: "text-white"
  },
  {
    title: "Lightweight & Fast",
    description: "Uses less than 5MB of RAM. Zero impact on your browsing speed.",
    icon: Zap,
    color: "text-white"
  },
  {
    title: "Smart Categories",
    description: "Group websites into categories like Social, News, or Entertainment.",
    icon: FolderOpen,
    color: "text-white"
  },
  {
    title: "No Sign Up Required",
    description: "You don't need to create an account. You can instantly start using the extension.",
    icon: UserX,
    color: "text-white"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 font-semibold tracking-wider uppercase text-sm"
          >
            Why MindLock?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl md:text-5xl font-display font-bold text-white"
          >
            Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">stay focused</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-dark-card/40 backdrop-blur-sm border border-dark-border hover:border-white/50 hover:bg-dark-card/60 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl bg-dark-bg/50 border border-dark-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;