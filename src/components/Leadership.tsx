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
  const [currentCharityImageIndex, setCurrentCharityImageIndex] = useState(0);
  const [isCharityAutoPlay, setIsCharityAutoPlay] = useState(true);

  const cop29Images = [
    "/personal_images/cop29/cop29.jpeg",
    "/personal_images/cop29/IMG_6671.jpg", 
    "/personal_images/cop29/PHOTO-2025-03-24-14-11-47.jpg",
    "/personal_images/cop29/cop29-2.gif"
  ];

  const charityImages = [
    "/charity/IMG_2034.JPG",
    "/charity/ea1c798a-67c2-4204-87fe-ea1dd9e2a8de.JPG"
  ];

  // Auto-play functionality for COP29 images
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % cop29Images.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, cop29Images.length]);

  // Auto-play functionality for charity images
  useEffect(() => {
    if (!isCharityAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentCharityImageIndex((prevIndex) => 
        (prevIndex + 1) % charityImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isCharityAutoPlay, charityImages.length]);

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

  const nextCharityImage = () => {
    setIsCharityAutoPlay(false);
    setCurrentCharityImageIndex((prevIndex) => (prevIndex + 1) % charityImages.length);
  };

  const prevCharityImage = () => {
    setIsCharityAutoPlay(false);
    setCurrentCharityImageIndex((prevIndex) => 
      (prevIndex - 1 + charityImages.length) % charityImages.length
    );
  };

  const goToCharityImage = (index: number) => {
    setIsCharityAutoPlay(false);
    setCurrentCharityImageIndex(index);
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

        {/* Earth Charity Organization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Charity Images Slider */}
            <div 
              className="relative h-80 overflow-hidden"
              onMouseEnter={() => setIsCharityAutoPlay(false)}
              onMouseLeave={() => setIsCharityAutoPlay(true)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentCharityImageIndex}
                  src={charityImages[currentCharityImageIndex]}
                  alt={`Earth Charity - Image ${currentCharityImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevCharityImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/40 hover:bg-black/60 rounded-full text-white transition-all duration-300 backdrop-blur-md border border-white/20 hover:scale-110"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                onClick={nextCharityImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/40 hover:bg-black/60 rounded-full text-white transition-all duration-300 backdrop-blur-md border border-white/20 hover:scale-110"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {charityImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToCharityImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentCharityImageIndex
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
                    <div className="p-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/30">
                      <img 
                        src="/charity/logo.JPG" 
                        alt="Earth Charity Logo"
                        className="h-8 w-8 object-contain rounded"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1 text-white drop-shadow-2xl">Co-Founder</h3>
                      <div className="text-gray-100 font-medium drop-shadow-xl">
                        Earth Charity Organization
                      </div>
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
                  <MapPinIcon className="h-4 w-4 mr-2 text-emerald-600" />
                  <span className="font-medium">Egypt</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-2 text-emerald-600" />
                  <span className="font-medium">Ongoing</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="font-medium">Community Impact</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <a 
                    href="https://instagram.com/earth.khier" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
                  >
                    @earth.khier
                  </a>
                </div>
              </div>

              {/* Impact Highlights */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">365</div>
                  <div className="text-sm text-gray-600">Days of Service</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600 mb-2">Ramadan</div>
                  <div className="text-sm text-gray-600">Special Focus</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Families</div>
                  <div className="text-sm text-gray-600">Primary Beneficiaries</div>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Community Impact & Mission</h4>
                <div className="space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-600 mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Year-Round Family Support:</strong> Co-founded Earth charity organization dedicated to serving families in need throughout the year, with special emphasis during Ramadan and religious holidays
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Ramadan Initiatives:</strong> Organize comprehensive support programs during Ramadan, including food distribution, family assistance, and community engagement activities to strengthen social bonds
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Community Leadership:</strong> Leading grassroots initiatives to build stronger, more supportive communities through direct family assistance and sustainable support programs
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Focus Areas */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Focus Areas & Values</h4>
                <div className="flex flex-wrap gap-3">
                  {["Community Service", "Family Support", "Ramadan Programs", "Social Impact", "Charity Leadership", "Volunteer Coordination"].map((area, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 text-sm font-medium rounded-full border border-emerald-200 hover:shadow-md transition-shadow"
                    >
                      {area}
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