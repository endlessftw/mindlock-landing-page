import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
  { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg' },
  { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
  { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg' },
];

const CompanySlider: React.FC = () => {
  // Triple companies for truly seamless looping
  const allCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] bg-brand-500/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-display font-semibold text-white mb-3"
          >
            Trusted by Professionals At
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Leading companies worldwide
          </motion.p>
        </div>
      </div>

      {/* Company Logos Slider */}
      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex">
            <motion.div
              animate={{
                x: [0, '-100%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-12 items-center flex-shrink-0"
            >
              {companies.map((company, idx) => (
                <div
                  key={`${company.name}-${idx}`}
                  className="flex-shrink-0 w-40 h-20 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain brightness-0 invert"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
              ))}
            </motion.div>
            <motion.div
              animate={{
                x: [0, '-100%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-12 items-center flex-shrink-0"
            >
              {companies.map((company, idx) => (
                <div
                  key={`${company.name}-duplicate-${idx}`}
                  className="flex-shrink-0 w-40 h-20 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain brightness-0 invert"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Gradient fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-dark-bg to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-dark-bg to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
};

export default CompanySlider;
