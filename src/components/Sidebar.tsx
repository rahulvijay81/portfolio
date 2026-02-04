'use client';

import { Github, Linkedin, X, Instagram, User, Briefcase, FolderOpen, Mail } from 'lucide-react';
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
      const sections = ['about', 'experience', 'skills', 'projects', 'contact'];
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
            <p className="text-lg text-gray-400 mb-6">Full Stack Developer</p>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
              Crafting innovative digital solutions that blend cutting-edge technology with exceptional user experiences.
            </p>

            <nav className="space-y-3">
              <button onClick={() => smoothScrollTo('about')} className={`block transition-colors text-left ${activeSection === 'about' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
                }`}>About Me</button>
              <button onClick={() => smoothScrollTo('experience')} className={`block transition-colors text-left ${activeSection === 'experience' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
                }`}>Experience</button>
              <button onClick={() => smoothScrollTo('skills')} className={`block transition-colors text-left ${activeSection === 'skills' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
                }`}>Skills</button>
              <button onClick={() => smoothScrollTo('projects')} className={`block transition-colors text-left ${activeSection === 'projects' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
                }`}>Projects</button>
              <button onClick={() => smoothScrollTo('contact')} className={`block transition-colors text-left ${activeSection === 'contact' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
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
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-100">Rahul Vijay</h1>
          <p className="text-xs text-teal-400 font-medium tracking-wide">Full Stack Developer</p>
        </div>
        <div className="flex space-x-3">
          {socialData.socialMedia.map((social) => {
            const Icon = getIcon(social.socialMediaName);
            return (
              <a key={social.socialMediaName} href={social.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors">
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass-effect border-t border-white/10 px-6 py-2 pb-safe">
        <nav className="flex justify-between items-center">
          <button
            onClick={() => smoothScrollTo('about')}
            className={`flex flex-col items-center p-2 transition-all duration-300 ${activeSection === 'about' ? 'text-teal-400 -translate-y-1' : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            <User size={20} className="mb-1" />
            <span className="text-[10px] font-medium">About</span>
          </button>

          <button
            onClick={() => smoothScrollTo('experience')}
            className={`flex flex-col items-center p-2 transition-all duration-300 ${activeSection === 'experience' ? 'text-teal-400 -translate-y-1' : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            <Briefcase size={20} className="mb-1" />
            <span className="text-[10px] font-medium">Experience</span>
          </button>

          <button
            onClick={() => smoothScrollTo('projects')}
            className={`flex flex-col items-center p-2 transition-all duration-300 ${activeSection === 'projects' ? 'text-teal-400 -translate-y-1' : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            <FolderOpen size={20} className="mb-1" />
            <span className="text-[10px] font-medium">Work</span>
          </button>

          <button
            onClick={() => smoothScrollTo('contact')}
            className={`flex flex-col items-center p-2 transition-all duration-300 ${activeSection === 'contact' ? 'text-teal-400 -translate-y-1' : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            <Mail size={20} className="mb-1" />
            <span className="text-[10px] font-medium">Contact</span>
          </button>
        </nav>
      </div>
    </>
  );
}