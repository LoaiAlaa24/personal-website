import React from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  CloudIcon, 
  CommandLineIcon,
  CircleStackIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';
import { 
  Psychology, 
  Visibility, 
  AutoAwesome, 
  ThumbUp
} from '@mui/icons-material';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <CodeBracketIcon className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-600",
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "C#", "Java"]
    },
    {
      title: "AI & Machine Learning",
      icon: <CpuChipIcon className="h-6 w-6" />,
      color: "from-purple-500 to-pink-600",
      skills: ["PyTorch", "TensorFlow", "LangChain", "Transformers", "OpenCV", "Stable Diffusion", "BERT", "Multi-Modal RAG Systems", "Computer Vision", "NLP"]
    },
    {
      title: "Web Development",
      icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
      color: "from-green-500 to-teal-600",
      skills: ["React.js", "React Native", "FastAPI", "Flask", "Node.js", "HTML/CSS", "Tailwind CSS", "Material-UI"]
    },
    {
      title: "Cloud & DevOps",
      icon: <CloudIcon className="h-6 w-6" />,
      color: "from-orange-500 to-red-600",
      skills: ["Azure", "AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Microservices"]
    },
    {
      title: "Databases",
      icon: <CircleStackIcon className="h-6 w-6" />,
      color: "from-indigo-500 to-purple-600",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Vector Databases", "Redis", "Elasticsearch"]
    },
    {
      title: "Tools & Technologies",
      icon: <CommandLineIcon className="h-6 w-6" />,
      color: "from-cyan-500 to-blue-600",
      skills: ["Git", "LangGraph", "Unity", "Streamlit", "Jupyter", "LangSmith", "RAGAS", "LangSmith"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern AI applications and scalable systems
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 bg-gradient-to-r ${category.color} bg-opacity-10 text-gray-800 text-xs font-medium rounded-full border border-gray-200 hover:bg-opacity-20 transition-all duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            AI Specializations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Natural Language Processing", icon: <Psychology className="text-4xl text-blue-600" />, color: "bg-blue-100" },
              { name: "Computer Vision", icon: <Visibility className="text-4xl text-green-600" />, color: "bg-green-100" },
              { name: "Generative AI", icon: <AutoAwesome className="text-4xl text-purple-600" />, color: "bg-purple-100" },
              { name: "Recommendation Systems", icon: <ThumbUp className="text-4xl text-orange-600" />, color: "bg-orange-100" }
            ].map((specialization, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`${specialization.color} p-6 rounded-lg text-center`}
              >
                <div className="mb-3">{specialization.icon}</div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {specialization.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Learning */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Continuous Learning
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EmojiEvents className="text-2xl text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  DeepLearning.AI Specialization
                </h4>
                <p className="text-gray-600 text-sm">
                  Completed Andrew Ng's comprehensive ML course series
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MenuBook className="text-2xl text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Research & Development
                </h4>
                <p className="text-gray-600 text-sm">
                  Active research in multimodal AI and autonomous systems
                </p>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Skills;