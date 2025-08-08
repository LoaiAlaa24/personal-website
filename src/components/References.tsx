import React from 'react';
import { motion } from 'framer-motion';
import { 
  DocumentArrowDownIcon,
  EyeIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

const References: React.FC = () => {
  const references = [
    {
      company: "Volkswagen Group",
      date: "September 20, 2024",
      quote: "His performance far exceeded our expectations and requirements. He successfully presented his thesis at the Volkswagen Executive Board's Future Mobility Days. His conduct was consistently exemplary.",
      logo: "/companies/volkswagen_group.svg",
      certificateFile: "/certificates/VOLKSWAGEN GROUP - Arbeitszeugnis.pdf"
    },
    {
      company: "Stadtwerke München",
      date: "November 30, 2023", 
      quote: "He always completed tasks to our highest satisfaction. Particularly noteworthy are the components Mr. Nasser implemented, which now serve as essential building blocks in our ML pipelines.",
      logo: "/companies/swm.png",
      certificateFile: "/certificates/SWM - Arbeitszeugnis.pdf"
    },
    {
      company: "Hotdesk",
      date: "October 15, 2024",
      quote: "Loai is an exceptionally agile and self-driven talent. He was the mastermind behind our core ML recommendation model, delivering outstanding results and significantly enhancing user experience.",
      logo: "/companies/hotdesk.png", 
      certificateFile: "/certificates/Hotdesk - Employment Reference Form.pdf"
    }
  ];

  return (
    <section id="references" className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Reference Letters
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Official employer references documenting performance and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {references.map((ref, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Company Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={ref.logo}
                    alt={`${ref.company} logo`}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {ref.company}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      {ref.date}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-600 text-sm italic leading-relaxed mb-6">
                "{ref.quote}"
              </blockquote>

              {/* Actions */}
              <div className="flex space-x-2">
                <motion.a
                  href={ref.certificateFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white text-xs font-medium rounded transition-colors"
                >
                  <EyeIcon className="h-3 w-3 mr-1" />
                  View
                </motion.a>
                <motion.a
                  href={ref.certificateFile}
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white text-xs font-medium rounded transition-colors"
                >
                  <DocumentArrowDownIcon className="h-3 w-3 mr-1" />
                  Download
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;