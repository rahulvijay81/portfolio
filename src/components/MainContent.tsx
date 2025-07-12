'use client';

import { motion, Variants } from 'framer-motion';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const sectionVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function MainContent() {
  return (
    <motion.div 
      className="w-full lg:w-3/5 lg:ml-auto h-full overflow-y-scroll scrollbar-hide px-2 md:px-4 lg:px-0"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut"
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={sectionVariants}>
          <AboutSection />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <ExperienceSection />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <ProjectsSection />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <ContactSection />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}