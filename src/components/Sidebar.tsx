'use client';

import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // If page is not scrollable, find the section closest to viewport center
      if (documentHeight <= windowHeight) {
        let closestSection = 'about';
        let minDistance = Infinity;
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const distance = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);
            if (distance < minDistance) {
              minDistance = distance;
              closestSection = section;
            }
          }
        }
        setActiveSection(closestSection);
        return;
      }

      // Check if at bottom of page
      if (window.scrollY + windowHeight >= documentHeight - 10) {
        setActiveSection('contact');
        return;
      }

      // Normal scroll detection
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="w-2/5 fixed left-0 top-0 h-full flex flex-col justify-between p-8">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-2">Rahul Vijay</h1>
        <p className="text-lg text-gray-400 mb-6">Front End Developer</p>
        <p className="text-sm text-gray-500 mb-8 leading-relaxed">
          Passionate about creating beautiful, functional web experiences with modern technologies.
        </p>
        
        <nav className="space-y-3">
          <a href="#about" className={`block transition-colors ${
            activeSection === 'about' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
          }`}>About Me</a>
          <a href="#projects" className={`block transition-colors ${
            activeSection === 'projects' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
          }`}>Projects</a>
          <a href="#contact" className={`block transition-colors ${
            activeSection === 'contact' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
          }`}>Contact Me</a>
        </nav>
      </div>
      
      <div className="flex justify-center space-x-4">
        <a href="#" className="p-2 glass-effect rounded-full hover:scale-110 transition-transform">
          <Github size={20} />
        </a>
        <a href="#" className="p-2 glass-effect rounded-full hover:scale-110 transition-transform">
          <Linkedin size={20} />
        </a>
        <a href="#" className="p-2 glass-effect rounded-full hover:scale-110 transition-transform">
          <Instagram size={20} />
        </a>
        <a href="#" className="p-2 glass-effect rounded-full hover:scale-110 transition-transform">
          <Twitter size={20} />
        </a>
      </div>
    </div>
  );
}