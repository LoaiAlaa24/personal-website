import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, GlobeAltIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { FitnessCenter } from '@mui/icons-material';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <AcademicCapIcon className="h-8 w-8" />,
      title: "M.Sc. Informatics from TUM",
      description: "Machine Learning & Analytics with 1.9 GPA and 1.0 Thesis Grade"
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8" />,
      title: "International Experience",
      description: "Working across Germany, Egypt, and the UAE with global companies"
    },
    {
      icon: <TrophyIcon className="h-8 w-8" />,
      title: "Facebook Hackathon Winner",
      description: "3rd Place winner showcasing innovation and technical excellence"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed mb-6">
                I am a Data Scientist and Full-Stack AI Engineer with international experience across Germany, Egypt, and the UAE. 
                With a Master's degree from the Technical University of Munich (TUM) and project collaborations 
                with top global companies, I specialize in building scalable AI systems, multimodal RAG pipelines, 
                and advanced NLP tools.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From deploying production-grade models to fine-tuning LLMs, I bring full-stack intelligence 
                to every product I touch. My work spans across autonomous vehicle research, recommendation systems, 
                and enterprise AI solutions that have improved workflow efficiency by up to 70%.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600">Germany / Egypt </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                  <p className="text-gray-600">English, German (B1)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">loay.nasserr@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                  <p className="text-gray-600">+49 15224007210<br/>+20 1012345167</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 border border-gray-200">
                  <img src="/universities/tum.png" alt="TUM Logo" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    M.Sc. Informatics
                  </h4>
                  <p className="text-primary-600 font-medium">
                    Technical University of Munich (TUM)
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p className="mb-2"><strong>Major:</strong> Machine Learning & Analytics</p>
                <p className="mb-2"><strong>GPA:</strong> 1.9 | <strong>Thesis Grade:</strong> 1.0 (Highest Distinction)</p>
                <p className="mb-2"><strong>Thesis:</strong> Completed at TUM in collaboration with Volkswagen Group</p>
                <p><strong>Graduated:</strong> Sep 2024</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 border border-gray-200">
                  <img src="/universities/guc.png" alt="GUC Logo" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    B.Sc. Computer Science and Engineering
                  </h4>
                  <p className="text-blue-600 font-medium">
                    German University in Cairo (GUC)
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p className="mb-2"><strong>GPA:</strong> 1.8 | <strong>Thesis Grade:</strong> 1.0</p>
                <p><strong>Graduated:</strong> Jul 2020</p>
              </div>
            </div>
          </div>
        </motion.div>


        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <FitnessCenter className="text-orange-600" />
              Fun Facts
            </h3>
            <p className="text-gray-600">
              When I'm not building AI systems, you can find me weightlifting in CrossFit sessions or capturing moments through photography and reels on my Instagram{' '}
              <a 
                href="https://instagram.com/loay.world_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                @loay.world_
              </a>
              ! I was also a member of Zamalek basketball team, one of Egypt's biggest sports clubs, which helped me develop strong teamwork and leadership skills that I apply in my professional collaborations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;