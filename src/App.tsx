import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Companies from './components/Companies';
import About from './components/About';
import Leadership from './components/Leadership';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Recommendations from './components/Recommendations';
import References from './components/References';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Hotjar from './components/Hotjar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden w-full">
      <Hotjar />
      <Navigation />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Companies />
        <Recommendations />
        <References />
        <About />
        <Experience />
        <Leadership />
        <Projects />
        <Awards />
        <Skills />
        <Contact />
      </motion.main>
    </div>
  );
}

export default App;