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
      name: "Mohamed Hamza",
      title: "Software Engineer at Google",
      relationship: "Managed Loay directly",
      date: "June 8, 2025",
      image: "/employees/Mohamed Hamza.jpeg",
      testimonial: "I had the distinct pleasure of working alongside Loay at Hotdesk, where he demonstrated exceptional leadership in spearheading a critical Machine Learning project. He was instrumental in developing and deploying a complex ML model from ideation to production. Loay consistently navigated ambiguity with strategic clarity, transforming abstract ideas into impactful solutions. His proactive approach and deep expertise make him an invaluable asset to any data-driven organization."
    },
    {
      name: "Max Weber",
      title: "Data Scientist @ SWM",
      relationship: "Managed Loay directly",
      date: "June 1, 2025",
      image: "/employees/Max Weber.jpeg",
      testimonial: "It’s rare to come across a working student as outstanding as Loay. Not only was he a pleasure to work with, he also demonstrated very good problem-solving skills across various projects at SWM. There he made several meaningful contributions to our Python development projects and impressed me in particular with his ability to tackle complex challenges in the field of AI. In addition to his technical strengths, Loay also exhibited very good communication skills. He led a well-received workshop on Deep Learning techniques for the entire team. There, he showcased both his expertise and his ability to convey complex ideas clearly. I can recommend him without hesitation."   },
    {
      name: "Mohamed Ayman Fathy",
      title: "Head of Growth (Ex. Swvl, TTS, Hotdesk)",
      relationship: "Worked with Loay on different teams",
      date: "June 1, 2025",
      image: "/employees/Mohamed Ayman Fathy.jpeg",
      testimonial: "Loay is one of the brightest minds I've worked with. He built Hotdesk's first recommendation engine, improving conversion by 20%, and solved major challenges with image classification models. His contributions significantly boosted our platform performance."
    },
    {
      name: "Hala Hagag",
      title: "Junior Computer Science student @ Nile University",
      relationship: "Reported directly to Loay",
      date: "September 1, 2025",
      image: "/employees/hala-hagag.jpeg",
      testimonial: "I had the privilege of being mentored by Loay during my internship at EFG Holding, and I couldn't have asked for a better mentor. He always created a supportive and encouraging environment that made learning both fun and impactful. Loay has a great way of explaining complex topics clearly and pushing you to think deeper, while also giving you the confidence to try, fail, and improve. His feedback was always constructive, and he constantly motivated us to grow not just as interns, but as professionals. What stood out most is how approachable and genuinely caring he is. He went above and beyond to guide us, celebrate our progress, and make sure we felt confident in our work. Anyone who has the chance to work with or be mentored by Loay will not only learn a lot, but also enjoy the journey."
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
      name: "Yahia Elbanhawy",
      title: "Senior Data Science Student at The American University in Cairo | AUC Student Ambassador | Ex Data Science Intern @ EFG",
      relationship: "Reported directly to Loay",
      date: "September 2, 2025",
      image: "/employees/Yahia ElBanhawy.jpeg",
      testimonial: "I had the privilege of being mentored directly by Loay, who truly opened a new door for me by exposing me to advanced and highly applicable topics, including but not limited to Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Vector Databases, AI Engineering, Machine Learning, and Software Engineering fundamentals, along with practical skills in Git version control and collaborative software development. Loay went out of his way more times than I can count to make sure I was on the right track. He consistently introduced me to best practices and state-of-the-art technologies, ensuring that I was not only learning but also applying these concepts in meaningful ways. What I appreciated most, and what I will remain truly grateful for, is his unwavering commitment to us as interns, even amidst his demanding and hectic schedule. He was always there, responsive, and supportive, never letting us feel lost or left behind. Beyond the technical guidance, Loay pushed me to my limits and helped me uncover a version of myself I didn't know existed. He challenged me to think critically, approach problems from new angles, and embrace growth. His mentorship has left a lasting impact on my personal and professional development, and I feel fortunate to have had the opportunity to learn under his guidance. I wholeheartedly recommend Loay to anyone seeking a mentor or leader who blends deep technical expertise with an authentic dedication to nurturing the growth of others."
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
    },
    {
      name: "Laila Amgad El Zawawy",
      title: "Senior Computer Science student minoring in AI @ MIU | Data Science Intern @ EFG",
      relationship: "Reported directly to Loay",
      date: "September 1, 2025",
      image: "/employees/laila-amgad-el-zawawy.jpeg",
      testimonial: "I had the privilege of being mentored by Loay during my internship at EFG Holding as a Data Science Intern. His guidance and support played a huge role in making my experience both valuable and enjoyable. Loay has an exceptional ability to simplify complex concepts and explain them in a clear, practical way. He always made himself available to answer questions, provide feedback, and encourage me to push my skills further. What stood out most was how he created an atmosphere that was not only productive but also fun, which made every challenge feel exciting rather than overwhelming. I'm truly grateful for his mentorship and the confidence I gained while working under his guidance. I highly recommend Loay for his technical expertise, leadership, and the positive energy he brings to any team."
    },
    {
      name: "Yahia Samer",
      title: "Student at German International University - GIU",
      relationship: "Reported directly to Loay",
      date: "September 1, 2025",
      image: null,
      testimonial: "During my internship at EFG Holding, I had the privilege of working under Loay, who made a big impact on my learning experience in just one month. He not only introduced us to advanced topics like LLMs, RAG, and LangChain through insightful workshops, but also trusted us to apply these concepts in real projects. What stood out most was how approachable and supportive he was, always making time to check in and guide us, even with his own busy schedule. Rather than giving direct answers, he encouraged us to think differently and find solutions on our own, which helped me become much more independent and confident in my work. His friendly nature and mentorship style created an environment where learning felt both challenging and motivating. I'm really grateful to have had the chance to learn from him, and I believe anyone who works with him will benefit from his expertise and guidance."
    },
    {
      name: "Ahmed Hossam",
      title: "Data scientist senior at SAMS college",
      relationship: "Reported directly to Loay",
      date: "September 1, 2025",
      image: null,
      testimonial: "I had the privilege of working directly under Loay during my internship at EFG Holding. His leadership and guidance were instrumental in shaping my professional growth and making my experience both rewarding and impactful. Loay has a remarkable ability to manage teams with clarity, patience, and vision. He always ensured that I had the support and direction I needed while also giving me the space to take ownership of my work. His feedback was consistently constructive and insightful, encouraging me to grow, refine my skills, and approach challenges with confidence. What I admired most was how he fostered a positive and motivating work environment. He balanced professionalism with approachability, which made collaboration enjoyable and turned every challenge into an opportunity to learn rather than an obstacle. I am truly grateful for his mentorship and for the confidence I gained under his direct management. I highly recommend Loay for his leadership, strategic thinking, and the positive impact he brings to any team he leads."
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
          return prev + 1; // Increment by 1% every 100ms (10000ms / 100 steps = 100ms)
        });
      }, 100);

      // Slide change
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
        setProgress(0);
      }, 10000);

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
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary-300"
            aria-label="Previous recommendation"
          >
            <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
          </button>

          <button
            onClick={nextRecommendation}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary-300"
            aria-label="Next recommendation"
          >
            <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
          </button>

          {/* Sliding Window */}
          <div className="mx-8 sm:mx-12 overflow-hidden relative">
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
                className="bg-gray-50 rounded-2xl p-4 sm:p-8 shadow-lg relative w-full h-[600px] sm:h-[500px] flex flex-col"
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
                      <div className="mb-4 sm:mb-6 flex-shrink-0">
                        <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-4 sm:mb-6">
                          {/* Profile Picture */}
                          <div className="flex-shrink-0">
                            {rec.image ? (
                              <img
                                src={rec.image}
                                alt={`${rec.name} profile`}
                                className="w-20 h-20 rounded-full object-cover border-3 border-primary-200"
                              />
                            ) : (
                              <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center border-3 border-primary-200">
                                <span className="text-white font-bold text-xl">
                                  {rec.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Name and Title */}
                          <div className="flex-1 min-w-0 text-center sm:text-left">
                            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                              {rec.name}
                            </h4>
                            <p className="text-primary-600 font-medium mb-2 sm:mb-4 text-sm sm:text-base">
                              {rec.title}
                            </p>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
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
                      <blockquote className="text-gray-700 leading-relaxed text-base sm:text-lg italic flex-1 overflow-y-auto">
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
                  Auto-advancing in {Math.ceil((100 - progress) / 10)} seconds
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