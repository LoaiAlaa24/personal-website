import React from 'react';
import { motion } from 'framer-motion';

const Companies: React.FC = () => {
  const companies = [
    {
      name: "Google",
      logo: "/companies/google-logo-transparent.png",
      website: "https://www.google.com/"
    },
    {
      name: "EFG Holding",
      logo: "/companies/EFG_Holding_5e28ead0a8.png",
      website: "https://www.efg-hermes.com/"
    },
    {
      name: "Volkswagen Group",
      logo: "/companies/volkswagen_group.svg",
      website: "https://www.volkswagenag.com/"
    },
    {
      name: "Stadtwerke München",
      logo: "/companies/swm.png", 
      website: "https://www.swm.de/"
    },
    {
      name: "KNOWRON",
      logo: "/companies/Knowron.png",
      website: "https://www.knowron.com/"
    },
    {
      name: "Legartis",
      logo: "/companies/legartis.png",
      website: "https://www.legartis.ai/"
    },
    {
      name: "Hotdesk",
      logo: "/companies/hotdesk.png",
      website: "https://www.hotdesk.com/"
    },
    {
      name: "Extreme Solutions",
      logo: "/companies/Extreme-Solution-Egypt.png",
      website: "https://extremesolution.com/"
    },
    {
      name: "Technical University of Munich",
      logo: "/companies/tum.png",
      website: "https://www.tum.de/"
    },
    {
      name: "German University in Cairo",
      logo: "/companies/guc.png",
      website: "https://www.guc.edu.eg/"
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-lg font-semibold text-gray-600 mb-8">
            Trusted and Recommended by Engineers at Leading Companies & Alumni of Top Universities
          </h3>
        </motion.div>

        {/* Infinite Rotating Logo Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -2240] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex items-center space-x-16 w-max"
          >
            {/* Triple logos for seamless infinite loop */}
            {companies.concat(companies).concat(companies).map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: (index % companies.length) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15, rotate: 3, y: -5 }}
                className="flex-shrink-0"
              >
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="w-40 h-24 bg-white rounded-2xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 p-2">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient fade effects */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default Companies;