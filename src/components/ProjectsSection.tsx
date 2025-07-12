import { Tag } from 'lucide-react';
import type { ProjectsData } from '../types';

// Import JSON data
const projectsData: ProjectsData = require('../data/projects.json');

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen p-3 md:p-6 lg:p-8">
      <div className="space-y-6 max-w-4xl mx-auto">
        {projectsData.projects.map((project, i) => (
          <div key={i} className="glass-effect rounded-lg p-4 md:p-6 hover:bg-white/5 transition-colors">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-base md:text-xl font-semibold text-white mb-1">{project.name}</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed text-xs md:text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  <Tag size={12} className="mr-1" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}