'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Code } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center spotlight-effect"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">Your Name</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">Full Stack Developer</p>
          <div className="flex justify-center space-x-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="p-3 glass-effect rounded-full"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="p-3 glass-effect rounded-full"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="p-3 glass-effect rounded-full"
            >
              <Twitter size={24} />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="spotlight-effect"
          >
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love creating beautiful, functional applications that solve real-world problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-12 text-center spotlight-effect"
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-effect rounded-lg p-6 spotlight-effect group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <Code size={48} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
                <p className="text-gray-400 mb-4">Description of the project and technologies used.</p>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink size={16} />
                    <span>Live</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="spotlight-effect"
          >
            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
            <p className="text-lg text-gray-300 mb-8">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:your.email@example.com"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              <Mail size={20} />
              <span>Say Hello</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}