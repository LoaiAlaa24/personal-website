import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CpuChipIcon, 
  CircleStackIcon, 
  CommandLineIcon,
  CogIcon,
  BoltIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentMagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const AnimatedBackground: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Code snippets that will float around
  const codeSnippets = [
    'import torch',
    'def train_model():',
    'np.array([1, 2, 3])',
    'SELECT * FROM data',
    'const ai = new AI()',
    'transformer.fit(X)',
    'model.predict()',
    'useEffect(() => {}',
    'async def process():',
    'CUDA_VISIBLE_DEVICES',
    'pip install tensorflow',
    'git commit -m "AI"',
    'vectorizer.embed(query)',
    'retriever.get_docs()',
    'from langchain import RAG',
    'similarity_search()',
    'embeddings.encode()',
    'vector_db.query()',
    'context = retrieve()',
    'llm.generate(context)',
    'rag_pipeline.run()',
    'faiss.similarity_search',
    'ChromaDB.from_docs()',
    'def augment_prompt():',
    'from langgraph import Agent',
    'agent.run(task)',
    'multi_agent_system()',
    'agent.plan_execute()',
    'memory.save_state()',
    'tools = [search, calc]',
    'agent.reasoning_loop()',
    'coordinator.delegate()',
    'workflow.add_node()',
    'agent.reflect()',
    'state_graph.compile()',
    'async def agent_step():'
  ];

  // Generate floating code elements
  const floatingElements = Array.from({ length: 4 }, (_, i) => (
    <motion.div
      key={`code-${i}`}
      className="absolute text-sm font-mono text-gray-400/40 pointer-events-none whitespace-nowrap"
      initial={{
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        opacity: 0
      }}
      animate={{
        x: [
          Math.random() * dimensions.width,
          Math.random() * dimensions.width,
          Math.random() * dimensions.width
        ],
        y: [
          Math.random() * dimensions.height,
          Math.random() * dimensions.height,
          Math.random() * dimensions.height
        ],
        opacity: [0, 0.6, 0.3, 0.6, 0],
      }}
      transition={{
        duration: 20 + Math.random() * 10,
        repeat: Infinity,
        delay: i * 2,
        ease: "linear"
      }}
    >
      {codeSnippets[i % codeSnippets.length]}
    </motion.div>
  ));

  // Neural network nodes
  const neuralNodes = Array.from({ length: 8 }, (_, i) => (
    <motion.div
      key={`node-${i}`}
      className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full pointer-events-none"
      initial={{
        x: Math.random() * dimensions.width * 0.9,
        y: Math.random() * dimensions.height * 0.9,
        scale: 0
      }}
      animate={{
        x: Math.random() * dimensions.width * 0.9,
        y: Math.random() * dimensions.height * 0.9,
        scale: [0, 1.2, 0.8, 1.2, 0],
        opacity: [0, 0.8, 0.4, 0.8, 0]
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        delay: i * 0.3,
        ease: "easeInOut"
      }}
    />
  ));

  // Data flow particles
  const dataParticles = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={`particle-${i}`}
      className="absolute w-2 h-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full pointer-events-none"
      initial={{
        x: -20,
        y: Math.random() * dimensions.height * 0.8,
      }}
      animate={{
        x: dimensions.width + 20,
        y: Math.random() * dimensions.height * 0.8,
      }}
      transition={{
        duration: 10 + Math.random() * 5,
        repeat: Infinity,
        delay: i * 2,
        ease: "linear"
      }}
    />
  ));

  // AI Icons floating around
  const aiIcons = [
    { icon: CpuChipIcon, color: 'text-blue-400' },
    { icon: CircleStackIcon, color: 'text-purple-400' },
    { icon: CommandLineIcon, color: 'text-green-400' },
    { icon: CogIcon, color: 'text-orange-400' },
    { icon: BoltIcon, color: 'text-yellow-400' },
    { icon: EyeIcon, color: 'text-cyan-400' },
    { icon: ChatBubbleLeftRightIcon, color: 'text-pink-400' },
    { icon: DocumentMagnifyingGlassIcon, color: 'text-indigo-400' }
  ];

  const floatingIcons = Array.from({ length: 4 }, (_, i) => {
    const IconComponent = aiIcons[i % aiIcons.length].icon;
    const iconColor = aiIcons[i % aiIcons.length].color;
    
    return (
      <motion.div
        key={`icon-${i}`}
        className={`absolute pointer-events-none ${iconColor} opacity-20`}
        initial={{
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          rotate: 0,
          scale: 0.5
        }}
        animate={{
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          rotate: [0, 180, 360],
          scale: [0.5, 0.8, 0.5],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 15 + Math.random() * 10,
          repeat: Infinity,
          delay: i * 1.5,
          ease: "easeInOut"
        }}
      >
        <IconComponent className="h-8 w-8" />
      </motion.div>
    );
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating code elements */}
      {floatingElements}

      {/* Neural network nodes */}
      {neuralNodes}

      {/* Floating AI Icons */}
      {floatingIcons}

      {/* Data flow particles */}
      {dataParticles}

      {/* Circuit-like lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
        <motion.path
          d={`M0,${dimensions.height * 0.2} Q${dimensions.width * 0.3},${dimensions.height * 0.3} ${dimensions.width * 0.6},${dimensions.height * 0.2} T${dimensions.width},${dimensions.height * 0.2}`}
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d={`M0,${dimensions.height * 0.5} Q${dimensions.width * 0.4},${dimensions.height * 0.6} ${dimensions.width * 0.8},${dimensions.height * 0.5} T${dimensions.width},${dimensions.height * 0.5}`}
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        <motion.path
          d={`M0,${dimensions.height * 0.8} Q${dimensions.width * 0.35},${dimensions.height * 0.9} ${dimensions.width * 0.7},${dimensions.height * 0.8} T${dimensions.width},${dimensions.height * 0.8}`}
          stroke="url(#gradient3)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 4 }}
        />
        
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Binary Code Rain */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute text-xs font-mono text-green-400/30 pointer-events-none"
          initial={{
            x: (i * dimensions.width) / 5,
            y: -20,
          }}
          animate={{
            y: dimensions.height + 20,
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear"
          }}
        >
          {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
        </motion.div>
      ))}

      {/* AI Brain visualization */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-40 h-40 pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0, 0.3, 0.1, 0.3, 0], 
          scale: [0.8, 1, 1.1, 1, 0.8],
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="relative w-full h-full">
          {/* Central node */}
          <motion.div 
            className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
          
          {/* Connecting lines */}
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-20 h-0.5 bg-gradient-to-r from-purple-400/50 to-transparent origin-left transform -translate-y-1/2"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`
              }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
          
          {/* Outer nodes */}
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={`outer-${i}`}
              className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-70px)`
              }}
              animate={{
                scale: [0.5, 1.2, 0.5],
                opacity: [0.3, 0.9, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedBackground;