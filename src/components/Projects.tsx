import React from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  ArrowTopRightOnSquareIcon,
  CpuChipIcon,
  DocumentMagnifyingGlassIcon,
  ChatBubbleBottomCenterTextIcon,
  SparklesIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Simulation2Realism: Master Thesis",
      description: "Narrowing the gap between Simulation and Realism in Autonomous Driving. Adaptation of image generative AI model to autonomous driving dataset, creation of corner case scenarios in simulation and transformation to realistic street scenes.",
      technologies: ["Unity", "Stable Diffusion XL", "PyTorch", "Computer Vision", "Autonomous Driving"],
      icon: <CpuChipIcon className="h-8 w-8" />,
      color: "from-green-500 to-teal-600",
      image: "/projects/volkswagen 1.png",
      github: null,
      demo: null,
      company: "Volkswagen Group",
      logo: "/companies/volkswagen_group.svg",
      highlights: [
        "Grade: 1.0 (Highest Distinction)",
        "Presented to Volkswagen Group Executive Board",
        "Fine-tuned on Audi A2D2 dataset",
        "Corner case generation framework"
      ]
    },
    {
      title: "Hotdesk Recommendation Engine",
      description: "Built Hotdesk's first recommendation engine enabling users to receive listing recommendations based on multiple attributes, improving user retention rate by over 20%. Available in the app's 'Top picks for you' section.",
      technologies: ["Python", "Flask", "AWS", "Machine Learning", "Recommendation Systems"],
      icon: <SparklesIcon className="h-8 w-8" />,
      color: "from-orange-500 to-red-600",
      image: "/projects/hotdesk recommendation engine.png",
      github: null,
      demo: null,
      company: "Hotdesk",
      logo: "/companies/hotdesk.png",
      highlights: [
        "20%+ improvement in user retention",
        "Multi-attribute recommendation system",
        "Production deployment on AWS",
        "Available in live mobile app"
      ]
    },
    {
      title: "Image Quality Assurance 'Conan'",
      description: "Developed CNN ML model & OpenCV system that analyzes listing image quality through detecting objects, watermarks, blurriness and brightness, granting scores based on business requirements with 90%+ accuracy.",
      technologies: ["Python", "OpenCV", "CNN", "Google Data Studio", "Computer Vision"],
      icon: <CpuChipIcon className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-600",
      image: "/projects/hotdesk quality assurance.png",
      github: null,
      demo: null,
      highlights: [
        "90%+ model accuracy",
        "Automated image quality scoring",
        "Data analytics dashboard",
        "Verified by Operations team"
      ]
    },
    {
      title: "Archive Documents Redaction",
      description: "Implemented Data Anonymization model that processes PDF documents using OCR and anonymizes text using NLP Entity Recognition by fine-tuning BERT, Spacy and Flair models with Presidio and regex algorithms.",
      technologies: ["Python", "Azure", "BERT", "Spacy", "Presidio", "OCR", "NLP"],
      icon: <DocumentMagnifyingGlassIcon className="h-8 w-8" />,
      color: "from-purple-500 to-pink-600",
      image: "/projects/swm redacting docs.png",
      github: null,
      demo: null,
      company: "Stadtwerke München",
      logo: "/companies/swm.png",
      highlights: [
        "Automated document anonymization",
        "Fine-tuned BERT for German text",
        "OCR + NLP pipeline",
        "Enterprise-grade security"
      ]
    },
    {
      title: "MVG Email Classification",
      description: "Implemented German Email Classification using NLP that classifies emails into 10 topics by fine-tuning German BERT model. Used Latent Dirichlet Allocation (LDA) for email clustering and labeling.",
      technologies: ["Python", "PyTorch", "German BERT", "LDA", "NLP"],
      icon: <ChatBubbleBottomCenterTextIcon className="h-8 w-8" />,
      color: "from-indigo-500 to-purple-600",
      image: "/projects/swm email classifier.png",
      github: null,
      demo: null,
      highlights: [
        "10-topic classification system",
        "Fine-tuned German BERT",
        "LDA clustering for labeling",
        "Municipal services automation"
      ]
    },
    {
      title: "Dense Passage Retrieval System",
      description: "Improving Information Retrieval through Dense Textual Representations. Built Dense Passage Retrieval (DPR) search engine offering advantages over BM25 algorithm by focusing on semantic meaning rather than syntactic overlap using embeddings and cosine similarity.",
      technologies: ["Dense Passage Retrieval", "Embeddings", "Cosine Similarity", "Flutter", "GPL", "BEIR Format"],
      icon: <DocumentMagnifyingGlassIcon className="h-8 w-8" />,
      color: "from-teal-500 to-green-600",
      image: "/projects/knowron Dense Passage.png",
      github: null,
      demo: null,
      highlights: [
        "Semantic search over syntactic matching",
        "Flutter app for dataset annotation",
        "Generative Pseudo Labeling (GPL)",
        "BEIR format document processing"
      ]
    },
    {
      title: "KNOWRON Mobile Apps",
      description: "AI-powered personal assistant helping deskless workers spend less time searching and more time finding. Developed two cross-platform applications using React Native: KNOWRON & Voith with offline mode, articles/documents search, and QR scanning.",
      technologies: ["React Native", "Cross-platform", "Offline Storage", "QR Scanning", "Mobile Development"],
      icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
      color: "from-cyan-500 to-blue-600",
      image: "/projects/knowron apps.png",
      github: null,
      demo: null,
      company: "KNOWRON",
      logo: "/companies/Knowron.png",
      highlights: [
        "Two published mobile apps",
        "Offline mode capability",
        "QR code scanning",
        "Articles & documents search"
      ]
    },
    {
      title: "KNOWRON Web Control Suite",
      description: "Business control suite built using MERN stack to enable the business side to add features seen on the mobile app. Developed responsive web application with MaterialUI and Grid, including analytics dashboard and content management.",
      technologies: ["React.js", "MERN Stack", "Material-UI", "Analytics", "Content Management"],
      icon: <CodeBracketIcon className="h-8 w-8" />,
      color: "from-blue-500 to-indigo-600",
      image: null,
      github: null,
      demo: null,
      highlights: [
        "Analytics dashboard",
        "Articles creation & editing",
        "Tutorials management",
        "Responsive web design"
      ]
    },
    {
      title: "Drive like an Egyptian 2.0",
      description: "Bachelor thesis project implementing a crowded Egyptian-like track simulator using Unity3D. Created autonomous car agent with obstacles including road signs and pedestrians to simulate real Egyptian driving challenges using Supervised Machine Learning with Keras and CNN.",
      technologies: ["C#", "Python", "Keras", "Unity3D", "CNN", "Supervised Learning"],
      icon: <CpuChipIcon className="h-8 w-8" />,
      color: "from-yellow-500 to-orange-600",
      image: "/projects/drive like an egyptian.png",
      github: null,
      demo: "https://www.youtube.com/watch?v=_mnGsw9FBTk",
      highlights: [
        "Bachelor thesis project (Grade: 1.0)",
        "Egyptian traffic simulation",
        "Autonomous driving agent",
        "Unity3D simulator with CNN"
      ]
    },
    {
      title: "Extreme Solutions Mobile Apps",
      description: "Built mobile applications for clients using React Native, iOS Native & Android Native. Published American University in Cairo app to App Store and Google Play. Specialized in custom software development and enterprise solutions.",
      technologies: ["React Native", "iOS Native", "Android Native", "Mobile Development", "App Store"],
      icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
      color: "from-pink-500 to-rose-600",
      image: null,
      github: null,
      demo: null,
      highlights: [
        "Published to App Store & Google Play",
        "American University in Cairo app",
        "Multi-platform development",
        "Enterprise software solutions"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A showcase of AI systems and applications I've built to solve real-world problems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Project Image */}
              {project.image && (
                <div className="relative h-64 bg-gray-50 flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} screenshot`}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg`}>
                      <div className={`text-transparent bg-gradient-to-r ${project.color} bg-clip-text`}>
                        {project.icon}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="p-8">
                {/* Title and Links */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    {project.company && project.logo && (
                      <div className="flex items-center">
                        <img 
                          src={project.logo} 
                          alt={`${project.company} logo`}
                          className="w-4 h-4 object-contain mr-2"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        <span className="text-sm text-primary-600 font-medium">
                          {project.company}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-2 text-gray-400 hover:text-primary-600 transition-colors bg-gray-50 rounded-lg"
                      >
                        <CodeBracketIcon className="h-5 w-5" />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-2 text-gray-400 hover:text-primary-600 transition-colors bg-gray-50 rounded-lg"
                      >
                        <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="grid grid-cols-1 gap-2">
                    {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center text-sm">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-700 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-10 text-gray-700 text-xs font-medium rounded-full border border-gray-200`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              More Projects on GitHub
            </h3>
            <p className="text-gray-600 mb-6">
              Check out my GitHub profile for more projects, contributions, and code samples.
            </p>
            <motion.a
              href="https://github.com/LoaiAlaa24"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" clipRule="evenodd" />
              </svg>
              View GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;