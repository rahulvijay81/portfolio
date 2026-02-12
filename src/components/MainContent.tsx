'use client';

import { motion, Variants } from 'framer-motion';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

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
      className="w-full lg:w-3/5 lg:ml-auto h-full px-2 sm:px-6 md:px-8 lg:px-0 pb-24 lg:pb-0 pt-24 lg:pt-0"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      <motion.div
        className="space-y-8 md:space-y-0"
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
          <SkillsSection />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <ProjectsSection />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <ContactSection />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Footer />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}