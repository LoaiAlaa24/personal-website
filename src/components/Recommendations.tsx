import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubbleLeftRightIcon, CalendarIcon, UserIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Recommendations: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [progress, setProgress] = useState(0);
  const recommendations = [
    {
      name: "Max Weber",
      title: "Data Scientist @ SWM",
      relationship: "Managed Loay directly",
      date: "June 1, 2025",
      image: "/employees/Max Weber.jpeg",
      testimonial: "Loay was an outstanding working student at SWM. He contributed to Python AI projects and demonstrated excellent problem-solving. He also led a workshop on Deep Learning, showcasing his communication skills and expertise. I highly recommend him."
    },
    {
      name: "Mohamed Hamza",
      title: "Software Engineer at Google",
      relationship: "Managed Loay directly",
      date: "June 8, 2025",
      image: "/employees/Mohamed Hamza.jpeg",
      testimonial: "I had the distinct pleasure of working alongside Loay at Hotdesk, where he demonstrated exceptional leadership in spearheading a critical Machine Learning project. He was instrumental in developing and deploying a complex ML model from ideation to production. Loay consistently navigated ambiguity with strategic clarity, transforming abstract ideas into impactful solutions. His proactive approach and deep expertise make him an invaluable asset to any data-driven organization."
    },
    {
      name: "Mohamed Ayman Fathy",
      title: "Head of Growth (Ex. Swvl, TTS, Hotdesk)",
      relationship: "Worked with Loay on different teams",
      date: "June 1, 2025",
      image: "/employees/Mohamed Ayman Fathy.jpeg",
      testimonial: "Loay is one of the brightest minds I've worked with. He built Hotdesk's first recommendation engine, improving conversion by 20%, and solved major challenges with image classification models. His contributions significantly boosted our platform performance."
    },
    {
      name: "Ali Kareem Raja",
      title: "Co-Founder @ KNOWRON | MIT | Forbes 30u30",
      relationship: "Managed Loay directly",
      date: "July 21, 2025",
      image: "/employees/Ali Kareem Raja.jpeg",
      testimonial: "I had the chance to manage Loay during his time as a Frontend Working Student while he was completing his Master's at TU Munich. He joined us early in the company's journey and played a key role in developing beta versions of our mobile and web applications. Loay's focus was primarily on rapid prototyping — helping us bring early feature concepts to life quickly so we could test product hypotheses and gather user feedback. His work was important in helping us validate ideas and iterate fast, which is critical in the early stages of a startup. Loay was dependable, eager to contribute, and handled scoped tasks well. He was also a positive and energetic presence in the office, always up for a discussion and helping maintain a friendly team environment."
    },
    {
      name: "Youssef Hany Mahmoud",
      title: "Data Scientist @ EFG Holding",
      relationship: "Reported directly to Loay",
      date: "June 1, 2025",
      image: "/employees/Youssef.jpeg",
      testimonial: "Loay has been an incredible mentor. From day one, he guided me through challenges with patience and supported my growth both technically and professionally. His leadership and supportive nature made a big impact on my development."
    },
    {
      name: "Ahmed Mohamed Nagy",
      title: "Chapter Lead @ Axis",
      relationship: "Managed Loay directly",
      date: "June 12, 2025",
      image: "/employees/Ahmed Mohamed Nagy.jpeg",
      testimonial: "I had the pleasure of working with Loay at Extreme Solutions, where he worked as a mobile developer. It's been great to see his career progression into AI and his achievements, including his M.Sc. in Informatics from TUM and roles at companies like Volkswagen Group and SWM. During our time together, Loay showed strong analytical thinking in his mobile development work. He was eager to learn and adapted quickly to new technologies. His dedication to continuous learning and problem-solving abilities make perfect sense given his successful transition into AI."
    },
    {
      name: "Ali Ahmed",
      title: "Senior Backend Engineer - Founding Team @ Munify (YC S25)",
      relationship: "Studied with Loay",
      date: "June 2, 2025",
      image: "/employees/Ali Ahmed.jpeg",
      testimonial: "I've known and collaborated with Loay for over nine years. Throughout university and various projects, he stood out for his innovation and deep technical insight. Loay is passionate about emerging tech, especially AI, and always brings fresh perspectives. I wholeheartedly recommend him for his strong communication, collaborative mindset, and impact-driven attitude."
    }
  ];

  // Auto-play functionality with progress timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    let progressInterval: NodeJS.Timeout | null = null;

    if (isAutoPlay) {
      setProgress(0);
      
      // Progress bar animation
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 2; // Increment by 2% every 100ms (5000ms / 50 steps = 100ms)
        });
      }, 100);

      // Slide change
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
        setProgress(0);
      }, 5000);

      return () => {
        if (interval) clearInterval(interval);
        if (progressInterval) clearInterval(progressInterval);
      };
    } else {
      setProgress(0);
    }
  }, [isAutoPlay, recommendations.length, currentIndex]);

  const nextRecommendation = () => {
    setIsAutoPlay(false); // Stop auto-play when manually navigating
    setProgress(0);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
  };

  const prevRecommendation = () => {
    setIsAutoPlay(false); // Stop auto-play when manually navigating
    setProgress(0);
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + recommendations.length) % recommendations.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section id="recommendations" className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            What Colleagues Say
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recommendations from managers, team members, and collaborators
          </p>
        </motion.div>

        {/* Sliding Window Container */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevRecommendation}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary-300"
            aria-label="Previous recommendation"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={nextRecommendation}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary-300"
            aria-label="Next recommendation"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-600" />
          </button>

          {/* Sliding Window */}
          <div className="mx-12 overflow-hidden relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 400, damping: 40 },
                  opacity: { duration: 0.3 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    nextRecommendation();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevRecommendation();
                  }
                }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg relative w-full"
              >
                {(() => {
                  const rec = recommendations[currentIndex];
                  return (
                    <>
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6">
                        <ChatBubbleLeftRightIcon className="h-8 w-8 text-primary-200" />
                      </div>

                      {/* Header with Profile Picture */}
                      <div className="mb-6">
                        <div className="flex items-start space-x-6 mb-6">
                          {/* Profile Picture */}
                          <div className="flex-shrink-0">
                            {rec.image ? (
                              <img
                                src={rec.image}
                                alt={`${rec.name} profile`}
                                className="w-20 h-20 rounded-full object-cover border-3 border-primary-200"
                              />
                            ) : (
                              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-blue-500 flex items-center justify-center border-3 border-primary-200">
                                <span className="text-white font-bold text-xl">
                                  {rec.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Name and Title */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-2xl font-bold text-gray-900 mb-2">
                              {rec.name}
                            </h4>
                            <p className="text-primary-600 font-medium mb-4">
                              {rec.title}
                            </p>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-500">
                              <div className="flex items-center">
                                <UserIcon className="h-4 w-4 mr-2" />
                                <span>{rec.relationship}</span>
                              </div>
                              <div className="flex items-center">
                                <CalendarIcon className="h-4 w-4 mr-2" />
                                <span>{rec.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <blockquote className="text-gray-700 leading-relaxed text-lg italic">
                        "{rec.testimonial}"
                      </blockquote>

                      {/* Bottom Border Accent */}
                      <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-primary-400 to-blue-400 rounded-full"></div>
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Timer Bar */}
          {isAutoPlay && (
            <div className="mt-6 max-w-xs mx-auto">
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </div>
              <div className="text-center mt-2">
                <span className="text-xs text-gray-500">
                  Auto-advancing in {Math.ceil((100 - progress) / 20)} seconds
                </span>
              </div>
            </div>
          )}

          {/* Dots Indicator */}
          <div className={`flex justify-center space-x-2 ${isAutoPlay ? 'mt-4' : 'mt-8'}`}>
            {recommendations.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlay(false); // Stop auto-play when clicking dots
                  setProgress(0);
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300 hover:bg-primary-300'
                }`}
                aria-label={`Go to recommendation ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Toggle Button */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => {
                setIsAutoPlay(!isAutoPlay);
                setProgress(0);
              }}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
            >
              {isAutoPlay ? 'Pause Auto-play' : 'Resume Auto-play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;