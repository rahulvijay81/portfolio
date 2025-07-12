'use client';

import { Github, Linkedin, X, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import { smoothScrollTo } from '../lib/smooth-scroll';
import SocialData from '../data/social.json';
import type { SocialMediaData } from '../types';

const socialData: SocialMediaData = SocialData;

const getIcon = (name: string) => {
  switch (name) {
    case 'github': return Github;
    case 'linkedin': return Linkedin;
    case 'x': return X;
    case 'instagram': return Instagram;
    default: return Github;
  }
};

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'contact'];
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
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-2/5 fixed left-0 top-0 h-full">
        <div className="flex flex-col justify-between p-8 h-full">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-2">Rahul Vijay</h1>
            <p className="text-lg text-gray-400 mb-6">Front End Developer</p>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
              Passionate about creating beautiful, functional web experiences with modern technologies.
            </p>
            
            <nav className="space-y-3">
              <button onClick={() => smoothScrollTo('about')} className={`block transition-colors text-left ${
                activeSection === 'about' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
              }`}>About Me</button>
              <button onClick={() => smoothScrollTo('experience')} className={`block transition-colors text-left ${
                activeSection === 'experience' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
              }`}>Experience</button>
              <button onClick={() => smoothScrollTo('projects')} className={`block transition-colors text-left ${
                activeSection === 'projects' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
              }`}>Projects</button>
              <button onClick={() => smoothScrollTo('contact')} className={`block transition-colors text-left ${
                activeSection === 'contact' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
              }`}>Contact Me</button>
            </nav>
          </div>
          
          <div className="flex justify-center space-x-4">
            {socialData.socialMedia.map((social) => {
              const Icon = getIcon(social.socialMediaName);
              return (
                <a key={social.socialMediaName} href={social.url} target="_blank" rel="noopener noreferrer" className="p-2 glass-effect rounded-full hover:scale-110 transition-transform">
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Header */}
      <div className="lg:hidden py-8 p-3 md:p-4 pb-2 flex flex-col items-center">
        <div className="text-center mb-3">
          <h1 className="text-lg md:text-2xl font-bold mb-1">Rahul Vijay</h1>
          <p className="text-xs md:text-base text-gray-400 mb-2">Front End Developer</p>
        </div>
        
        <nav className="flex justify-center gap-2 mb-4">
          <button onClick={() => smoothScrollTo('about')} className={`px-2 py-1 rounded-lg text-xs md:text-sm transition-colors ${
            activeSection === 'about' ? 'bg-white/15 text-white font-medium' : 'text-gray-400 hover:text-white'
          }`}>About</button>
          <button onClick={() => smoothScrollTo('experience')} className={`px-2 py-1 rounded-lg text-xs md:text-sm transition-colors ${
            activeSection === 'experience' ? 'bg-white/15 text-white font-medium' : 'text-gray-400 hover:text-white'
          }`}>Experience</button>
          <button onClick={() => smoothScrollTo('projects')} className={`px-2 py-1 rounded-lg text-xs md:text-sm transition-colors ${
            activeSection === 'projects' ? 'bg-white/15 text-white font-medium' : 'text-gray-400 hover:text-white'
          }`}>Projects</button>
          <button onClick={() => smoothScrollTo('contact')} className={`px-2 py-1 rounded-lg text-xs md:text-sm transition-colors ${
            activeSection === 'contact' ? 'bg-white/15 text-white font-medium' : 'text-gray-400 hover:text-white'
          }`}>Contact</button>
        </nav>
        
        <div className="flex justify-center space-x-3 mb-2">
          {socialData.socialMedia.map((social) => {
            const Icon = getIcon(social.socialMediaName);
            return (
              <a key={social.socialMediaName} href={social.url} target="_blank" rel="noopener noreferrer" className="p-1.5 glass-effect rounded-full hover:scale-110 transition-transform">
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}