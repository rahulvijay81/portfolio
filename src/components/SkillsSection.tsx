import { Code2, FileCode, Layers, Palette, Smartphone, Zap, Link, Box, Database, Leaf, Flame, GitBranch, Github, Send, Code, Rocket, Server, Package } from 'lucide-react';
import SkillsData from '../data/skills.json';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'JavaScript': Code2,
  'TypeScript': FileCode,
  'React.js': Layers,
  'Next.js': Zap,
  'Redux': Layers,
  'Tailwind CSS': Palette,
  'React Native': Smartphone,
  'Vite.js': Zap,
  'Mini Program Studio': Code,
  'Context API': Link,
  'Zustand': Box,
  'Node.js': Server,
  'Express.js': Server,
  'Strapi CMS': Package,
  'MySQL': Database,
  'PostgreSQL': Database,
  'SQLite': Database,
  'MongoDB': Leaf,
  'Firebase': Flame,
  'Git': GitBranch,
  'GitHub': Github,
  'Postman': Send,
  'VS Code': Code2,
  'REST APIs': Link,
  'CI/CD': Rocket
};

export default function SkillsSection() {
  return (
    <section id="skills" className="lg:min-h-screen flex items-center p-4 sm:p-6 md:p-8 lg:p-8 scroll-mt-24 lg:scroll-mt-0">
      <div className="w-full">
        <h2 className="text-lg md:text-3xl font-bold mb-8">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {SkillsData.skills.map((skill) => {
            const Icon = iconMap[skill.name] || Code2;
            return (
              <span
                key={skill.name}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 hover:border-teal-500/50 rounded-full text-xs md:text-sm transition-colors"
              >
                <Icon size={14} className="text-teal-400" />
                <span>{skill.name}</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
