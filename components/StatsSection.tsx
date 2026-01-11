import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { BrowsingData } from '../types';
import { Globe } from 'lucide-react';

const data: BrowsingData[] = [
  {
    name: 'Productivity',
    value: 45,
    fill: '#ffffff',
    websites: ['notion.so', 'github.com', 'linear.app']
  },
  {
    name: 'Social Media',
    value: 30,
    fill: '#d4d4d4',
    websites: ['twitter.com', 'instagram.com', 'linkedin.com']
  },
  {
    name: 'Entertainment',
    value: 25,
    fill: '#a3a3a3',
    websites: ['youtube.com', 'netflix.com', 'twitch.tv']
  },
  {
    name: 'Utilities',
    value: 15,
    fill: '#737373',
    websites: ['gmail.com', 'drive.google.com', 'dropbox.com']
  },
  {
    name: 'Development',
    value: 10,
    fill: '#525252',
    websites: ['localhost', 'stackoverflow.com', 'mdn.io']
  },
];

const recentActivity = [
  { domain: 'youtube.com', time: '02:10:40', ago: '2h ago', color: '#ffffff' },
  { domain: 'twitter.com', time: '01:45:22', ago: '2h ago', color: '#e5e5e5' },
  { domain: 'roblox.com', time: '02:00:04', ago: '2h ago', color: '#d4d4d4' },
  { domain: 'instagram.com', time: '00:55:18', ago: '3h ago', color: '#a3a3a3' },
  { domain: 'discord.com', time: '00:02:05', ago: '3h ago', color: '#737373' },
  { domain: 'duckduckgo.com', time: '00:01:24', ago: '3h ago', color: '#525252' },
  { domain: 'google.com', time: '00:44:10', ago: '3h ago', color: '#404040' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-dark-card border border-dark-border p-4 rounded-xl shadow-xl backdrop-blur-md bg-opacity-95 min-w-[180px]">
        <div className="flex items-center justify-between gap-4 mb-3 border-b border-dark-border pb-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: data.fill }}></div>
            <span className="font-bold text-white text-sm">{data.name}</span>
          </div>
          <span className="text-xs font-mono text-brand-300 font-bold">{data.value}%</span>
        </div>

        <div className="space-y-1.5">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Top Sites</p>
          {data.websites?.map((site: string, idx: number) => (
            <div key={idx} className="text-xs text-slate-300 flex items-center gap-2">
              <Globe className="w-3 h-3 text-slate-600" />
              <span>{site}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Your Digital <span className="text-brand-400">Footprint</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Visualizing your browsing habits helps you identify distractions and reclaim your focus.
          </p>
        </div>

        {/* Chart Container - Mimicking the dark box with border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full h-[400px] bg-dark-card border border-dark-border rounded-3xl p-6 mb-12 relative flex items-center justify-center shadow-2xl"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={140}
                paddingAngle={4}
                dataKey="value"
                stroke="rgba(0,0,0,0)"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          {/* Center Text for Donut */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <div className="text-3xl font-bold text-white">6h 12m</div>
            <div className="text-sm text-slate-400">Total Time</div>
          </div>
        </motion.div>

        {/* Recent Activity Grid */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-6">Today's Websites</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentActivity.map((site, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-dark-card border border-dark-border rounded-xl p-4 flex items-center gap-4 hover:bg-dark-input transition-colors group shadow-lg"
              >
                {/* Favicon / Icon */}
                <div className="w-12 h-12 rounded-xl bg-dark-bg/50 flex items-center justify-center shrink-0 overflow-hidden border border-dark-border/50">
                  {site.domain === 'null' ? (
                    <Globe className="w-6 h-6 text-slate-500" />
                  ) : (
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${site.domain}&sz=128`}
                      alt={site.domain}
                      className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                </div>

                {/* Color Indicator */}
                <div className="w-4 h-4 rounded-md shrink-0" style={{ backgroundColor: site.color }}></div>

                {/* Text Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-white font-medium truncate text-sm">{site.domain}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-mono">{site.time}</span>
                    <span>•</span>
                    <span>{site.ago}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;