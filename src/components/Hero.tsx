import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, DocumentArrowDownIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import AnimatedBackground from './AnimatedBackground';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Download the actual CV
    const link = document.createElement('a');
    link.href = '/cv/LoayNasserCV_AI_Updated.pdf';
    link.download = 'LoayNasser_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGetInTouch = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center relative bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                Loay Nasser
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Data Scientist & Full-Stack AI Engineer
            </motion.p>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-500 mb-8 max-w-5xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
               Transforming AI research into scalable real-world systems.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
              Download Resume
            </motion.button>
            
            <motion.button
              onClick={handleGetInTouch}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-medium rounded-lg transition-colors"
            >
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              Get in Touch
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              href="https://github.com/LoaiAlaa24"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" clipRule="evenodd" />
              </svg>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/loaynaser"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
            <motion.a
              href="mailto:loay.nasserr@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <EnvelopeIcon className="h-8 w-8" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        whileHover={{ y: -5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-primary-600 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDownIcon className="h-8 w-8" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;