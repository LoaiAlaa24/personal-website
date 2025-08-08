import React from 'react';
import { motion } from 'framer-motion';
import { TrophyIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Awards & Certifications
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Recognition and continuous learning achievements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-yellow-50 p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative rounded-lg overflow-hidden mb-6 shadow-md">
              <img 
                src="/personal_images/facebook hackathon/IMG_1866.jpg" 
                alt="Facebook Hackathon Award"
                className="w-full h-48 object-contain hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-600 to-transparent opacity-20"></div>
            </div>
            <TrophyIcon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Facebook Hackathon
            </h3>
            <p className="text-yellow-600 font-semibold text-lg mb-4">3rd Place Winner</p>
            <p className="text-gray-600">
              Demonstrated innovation and technical excellence in a competitive hackathon environment
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-green-50 p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <AcademicCapIcon className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              DeepLearning.AI Specialization
            </h3>
            <p className="text-green-600 font-semibold text-lg mb-4">Andrew Ng Course</p>
            <p className="text-gray-600">
              Completed comprehensive machine learning and deep learning specialization program
            </p>
          </motion.div>
        </motion.div>

        {/* Additional Achievement */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-8 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Academic Excellence
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Master's Thesis</h4>
                <p className="text-primary-600 font-medium">Grade: 1.0 (Highest Distinction)</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Bachelor's Thesis</h4>
                <p className="text-blue-600 font-medium">Grade: 1.0 (Highest Distinction)</p>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Awards;