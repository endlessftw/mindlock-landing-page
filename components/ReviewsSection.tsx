import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    name: "Alex Rivera",
    role: "Software Engineer",
    content: "MindLock is the only blocker that doesn't feel like a chore to use. The UI is incredible and it actually helps me stay in the flow.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Digital Artist",
    content: "The 'Time Limits' feature is a lifesaver. I can set a daily limit on how much I'm available to use a website.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "James Wilson",
    role: "Medical Student",
    content: "The statistics dashboard opened my eyes to how much time I was wasting. Simple, effective, and beautiful.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "Michael Torres",
    role: "Freelancer",
    content: "I've tried every blocker out there. This is the first one that doesn't slow down my browser. It's lightweight and just works.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "Emily Parker",
    role: "Student",
    content: "Syncing my blocklists between my laptop and desktop computer is seamless. I never have to set it up twice.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "David Kim",
    role: "Product Designer",
    content: "The dark mode UI is absolutely stunning. It fits perfectly with my workspace aesthetic. Finally, a tool that respects design.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "Lisa Morgan",
    role: "Writer",
    content: "I love that it doesn't track my browsing history. Privacy is my number one concern and MindLock respects that.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
  }
];

const ReviewsSection: React.FC = () => {
  // Duplicate reviews for seamless looping
  const allReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 relative overflow-hidden scroll-mt-24">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-white/5 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Loved by <span className="text-white">Focus Masters</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            See what our community has to say about reclaiming their time with MindLock.
          </motion.p>
        </div>
      </div>

      {/* Scrolling Container */}
      <div className="relative w-full">
        {/* Gradient Masks for smooth fade in/out */}
        <div className="absolute top-0 left-0 h-full w-12 md:w-32 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-12 md:w-32 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {allReviews.map((review, index) => (
            <div
              key={index}
              className="w-[350px] md:w-[400px] mx-4 bg-dark-card border border-dark-border p-8 rounded-3xl relative group transition-all duration-300 hover:border-white/30"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-white" />
              </div>

              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed relative z-10 text-sm md:text-base h-24 overflow-hidden">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-white to-slate-400 shrink-0">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full rounded-full border-2 border-dark-card object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{review.name}</div>
                  <div className="text-slate-400 text-sm font-medium">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Proof Bar */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-10 border-t border-dark-border flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {['TechCrunch', 'ProductHunt', 'TheVerge', 'LifeHacker'].map((brand) => (
            <span key={brand} className="text-xl font-display font-bold text-white cursor-default">{brand}</span>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default ReviewsSection;