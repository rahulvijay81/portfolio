import { ExternalLink, Code, Github } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen p-8">
      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-effect rounded-lg p-6">
            <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <Code size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
            <p className="text-gray-400 mb-4">Description of the project and technologies used.</p>
            <div className="flex space-x-4">
              <a href="#" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300">
                <ExternalLink size={16} />
                <span>Live</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <Github size={16} />
                <span>Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}