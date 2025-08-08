import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CalendarIcon,
  MapPinIcon,
  SparklesIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const Leadership: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const cop29Images = [
    "/personal_images/cop29/cop29.jpeg",
    "/personal_images/cop29/IMG_6671.jpg", 
    "/personal_images/cop29/PHOTO-2025-03-24-14-11-47.jpg",
    "/personal_images/cop29/cop29-2.gif"
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % cop29Images.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, cop29Images.length]);

  const nextImage = () => {
    setIsAutoPlay(false);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cop29Images.length);
  };

  const prevImage = () => {
    setIsAutoPlay(false);
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + cop29Images.length) % cop29Images.length
    );
  };

  const goToImage = (index: number) => {
    setIsAutoPlay(false);
    setCurrentImageIndex(index);
  };

  return (
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Leadership & Impact
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Leading sustainable innovation through entrepreneurship and climate action
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Hero Image Slider */}
            <div 
              className="relative h-80 overflow-hidden"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={cop29Images[currentImageIndex]}
                  alt={`COP29 Azerbaijan - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/40 hover:bg-black/60 rounded-full text-white transition-all duration-300 backdrop-blur-md border border-white/20 hover:scale-110"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/40 hover:bg-black/60 rounded-full text-white transition-all duration-300 backdrop-blur-md border border-white/20 hover:scale-110"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {cop29Images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>

              {/* Title with Background Overlay */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 backdrop-blur-sm">
                  <div className="flex items-center space-x-4 text-white">
                    <a
                      href="https://petrotreatment.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-xl border border-white/30 transition-all duration-300 hover:scale-105 group"
                    >
                      <img 
                        src="/companies/petrotreatment.png" 
                        alt="Petrotreatment Logo"
                        className="h-8 w-8 object-contain brightness-0 invert group-hover:brightness-75 transition-all duration-300"
                      />
                    </a>
                    <div>
                      <h3 className="text-2xl font-bold mb-1 text-white drop-shadow-2xl">Major Shareholder & Tech Advisor</h3>
                      <a
                        href="https://petrotreatment.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-100 hover:text-white font-medium drop-shadow-xl transition-colors duration-300"
                      >
                        Petrotreatment Group
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Header Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-2 text-primary-600" />
                  <span className="font-medium">Egypt</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-2 text-primary-600" />
                  <span className="font-medium">2024 – Present</span>
                </div>
                <div className="flex items-center">
                  <SparklesIcon className="h-4 w-4 mr-2 text-primary-600" />
                  <span className="font-medium">COP29 National Winner</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 0V3" />
                  </svg>
                  <a 
                    href="https://petrotreatment.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-primary-600 hover:text-primary-700 transition-colors duration-300"
                  >
                    petrotreatment.com
                  </a>
                </div>
              </div>

              {/* Impact Highlights */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-primary-50 rounded-xl">
                  <div className="text-2xl font-bold text-primary-600 mb-2">3rd</div>
                  <div className="text-sm text-gray-600">National Place</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-2">COP29</div>
                  <div className="text-sm text-gray-600">Climate Summit</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">250K</div>
                  <div className="text-sm text-gray-600">EGP Prize Award</div>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-xl">
                  <div className="text-2xl font-bold text-indigo-600 mb-2">AI+CV</div>
                  <div className="text-sm text-gray-600">Tech Integration</div>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Key Achievements & Impact</h4>
                <div className="space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-600 mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Innovative Sustainability Project:</strong> Led an innovative project to repurpose industrial wastewater for cultivating Paulownia trees, combining sustainability with AI technology
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>AI-Driven Environmental Monitoring:</strong> Leveraged AI and Computer Vision technologies to enhance monitoring of tree growth and health for scalable environmental impact
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-600 mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>International Recognition:</strong> Achieved 3rd place on national level and represented Egypt as part of the national delegation at COP29 Azerbaijan in Baku, showcasing our project among the top winners
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-600 mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Prime Minister Recognition:</strong> Honored by Prime Minister Mostafa Madbouly and presented with a prestigious prize of 250,000 EGP in recognition of the project's environmental impact and innovation excellence
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>High-Level Government Collaboration:</strong> Collaborated with H.E. Ambassador Hisham Badr and engaged with H.E. Dr. Rania Al-Mashat and H.E. Dr. Yasmine Fouad on sustainable development initiatives
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies & Focus Areas</h4>
                <div className="flex flex-wrap gap-3">
                  {["AI", "Computer Vision", "Environmental Monitoring", "Sustainability", "Climate Tech"].map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-gradient-to-r from-primary-100 to-blue-100 text-primary-800 text-sm font-medium rounded-full border border-primary-200 hover:shadow-md transition-shadow"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;