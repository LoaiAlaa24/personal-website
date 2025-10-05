import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarIcon, MapPinIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Experience: React.FC = () => {
  const [imageIndices, setImageIndices] = useState<{[key: number]: number}>({});

  const handleNextImage = (expIndex: number, totalImages: number) => {
    setImageIndices(prev => ({
      ...prev,
      [expIndex]: ((prev[expIndex] || 0) + 1) % totalImages
    }));
  };

  const handlePrevImage = (expIndex: number, totalImages: number) => {
    setImageIndices(prev => ({
      ...prev,
      [expIndex]: ((prev[expIndex] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const experiences = [
    {
      company: "Legartis GmbH",
      position: "AI Automation Engineer",
      location: "Leipzig, Germany",
      period: "Oct 2024 – Present",
      description: [
        "LLMs, Automations, and Agents cool stuff :)"
      ],
      technologies: ["LLMs", "AI Agents", "Automation", "n8n"],
      color: "from-emerald-500 to-cyan-600",
      image: null,
      images: null,
      logo: "/companies/legartis.avif"
    },
    {
      company: "EFG Holding",
      position: "Senior Data Scientist",
      location: "Remote",
      period: "Dec 2024 – Present",
      description: [
        "Built LangGraph RAG agents with FastAPI on Azure integrated into Microsoft Power Automate, improving workflow efficiency by 70%",
        "Enabled multimodal retrieval (text + images + tables), used LangSmith, and evaluated performance with RAGAS",
        "Created and supervised internship program with students working on HR matching system and investment helper using LLMs and RAGs",
        "Conduct daily workshops teaching software engineering and AI concepts from basic to advanced level"
      ],
      technologies: ["LangGraph", "FastAPI", "Azure", "Microsoft Power Automate", "LangSmith", "RAGAS", "Mentoring", "Teaching"],
      color: "from-blue-500 to-purple-600",
      image: "/personal_images/efg/efg-team.jpg",
      images: null,
      logo: "/companies/EFG_Holding_5e28ead0a8.png"
    },
    {
      company: "Volkswagen Group",
      position: "Gen AI Researcher (Thesis)",
      location: "Wolfsburg, Germany",
      period: "Dec 2023 – Sep 2024",
      description: [
        "Used Stable Diffusion + Unity for synthetic corner case generation in autonomous driving datasets",
        "Fine-tuned Stable Diffusion XL on Audi's A2D2 dataset for enhanced synthetic data quality"
      ],
      technologies: ["Stable Diffusion", "Unity", "PyTorch", "Computer Vision", "Autonomous Driving"],
      color: "from-green-500 to-teal-600",
      image: null,
      images: [
        "/personal_images/volkswagen/volkswagen group.gif",
        "/personal_images/volkswagen/volkswagen group.jpeg"
      ],
      logo: "/companies/volkswagen_group.svg"
    },
    {
      company: "Hotdesk",
      position: "Software Engineer (AI)",
      location: "Dubai (remotely)",
      period: "Sep 2022 – Dec 2023",
      description: [
        "Built the recommendation engine, image quality filter (CNN + OpenCV), and optimized ETL pipelines on GCP",
        "Served models via AWS Lambda & Flask for scalable production deployment"
      ],
      technologies: ["CNN", "OpenCV", "GCP", "AWS Lambda", "Flask", "Recommendation Systems"],
      color: "from-orange-500 to-red-600",
      image: "/personal_images/hotdesk/hotdesk.jpg",
      images: null,
      logo: "/companies/hotdesk.png"
    },
    {
      company: "Stadtwerke München",
      position: "Working Student (AI)",
      location: "Munich, Germany",
      period: "Oct 2022 – Dec 2023",
      description: [
        "Built LLM-based systems like German email classifier (BERT), PDF anonymization (OCR + NLP)",
        "Developed enterprise AI solutions for municipal services automation"
      ],
      technologies: ["BERT", "NLP", "OCR", "LLMs", "German Language Processing"],
      color: "from-indigo-500 to-purple-600",
      image: "/personal_images/swm/swm.gif",
      images: null,
      logo: "/companies/swm.png"
    },
    {
      company: "KNOWRON",
      position: "Working Student (ML/Software)",
      location: "Munich, Germany",
      period: "Jul 2021 – Sep 2022",
      description: [
        "Built dense retrieval search engine and co-developed mobile apps (Voith, ASM) published on App Stores",
        "Implemented semantic search capabilities for industrial documentation"
      ],
      technologies: ["Dense Retrieval", "React Native", "Semantic Search", "Mobile Development"],
      color: "from-cyan-500 to-blue-600",
      image: "/personal_images/knowron/IMG_6487.jpg",
      images: null,
      logo: "/companies/Knowron.png"
    },
    {
      company: "Extreme Solutions",
      position: "Software Engineer",
      location: "Cairo, Egypt",
      period: "Jul 2020 – Aug 2021",
      description: [
        "Developed mobile/web apps (e.g., American University in Cairo app) using React Native & ReactJS",
        "Built full-stack applications serving thousands of university students and faculty"
      ],
      technologies: ["React Native", "ReactJS", "Full-Stack Development", "Mobile Apps"],
      color: "from-pink-500 to-rose-600",
      image: null,
      images: null,
      logo: "/companies/Extreme-Solution-Egypt.png"
    },
    {
      company: "The German University in Cairo",
      position: "Junior Teaching Assistant",
      location: "Cairo, Egypt",
      period: "Sep 2018 – Mar 2020",
      description: [
        "Taught CSEN101 to first semester students, covering Python basics and Object-Oriented Programming fundamentals",
        "Taught CSEN201 to second semester students, focusing on Java and advanced OOP concepts"
      ],
      technologies: ["Python", "Java", "OOP", "Teaching", "Programming Fundamentals"],
      color: "from-teal-500 to-green-600",
      image: "/personal_images/guc/package.jpeg",
      images: null,
      logo: "/companies/guc.png"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            My journey across leading tech companies, building AI systems that make a difference
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-white shadow-lg`}></div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    {/* Header */}
                    <div className="mb-4">
                      {/* <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${exp.color} mb-4`}>
                        <BriefcaseIcon className="h-6 w-6 text-white" />
                      </div> */}
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {exp.position}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          {exp.logo && (
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} logo`}
                              className="w-5 h-5 object-contain mr-2"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                          )}
                          <span className="font-semibold text-primary-600">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    {/* Image/Slider */}
                    {(exp.image || exp.images) && (
                      <div className="mb-6">
                        <div className="relative rounded-lg overflow-hidden shadow-md">
                          {exp.images && Array.isArray(exp.images) && exp.images.length > 1 ? (
                            // Multiple images - show slider
                            <>
                              <AnimatePresence mode="wait">
                                <motion.img
                                  key={`${index}-${imageIndices[index] || 0}`}
                                  src={exp.images![imageIndices[index] || 0]}
                                  alt={`${exp.company} experience - Image ${(imageIndices[index] || 0) + 1}`}
                                  className="w-full h-48 object-cover"
                                  initial={{ opacity: 0, x: 300 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -300 }}
                                  transition={{ duration: 0.5, ease: "easeInOut" }}
                                />
                              </AnimatePresence>

                              {/* Navigation Arrows */}
                              <button
                                onClick={() => handlePrevImage(index, exp.images!.length)}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                              >
                                <ChevronLeftIcon className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => handleNextImage(index, exp.images!.length)}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                              >
                                <ChevronRightIcon className="h-4 w-4" />
                              </button>

                              {/* Dots Indicator */}
                              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                                {exp.images!.map((_, imgIndex) => (
                                  <button
                                    key={imgIndex}
                                    onClick={() => setImageIndices(prev => ({...prev, [index]: imgIndex}))}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                      imgIndex === (imageIndices[index] || 0)
                                        ? 'bg-white w-6'
                                        : 'bg-white/50 hover:bg-white/70'
                                    }`}
                                  />
                                ))}
                              </div>
                            </>
                          ) : (
                            // Single image
                            <img 
                              src={exp.image || (exp.images && exp.images[0]) || ''} 
                              alt={`${exp.company} experience`}
                              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                            />
                          )}
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {exp.description.map((desc, descIndex) => (
                          <li key={descIndex} className="text-gray-600 leading-relaxed flex items-start">
                            <span className="text-primary-600 mr-2 mt-2">•</span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full border border-gray-200 hover:bg-gray-200 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for the other half on desktop */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always excited to work on challenging AI projects and build innovative solutions.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Let's Work Together
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;