import { Calendar, MapPin, Building, Briefcase } from 'lucide-react';
import ExperienceData from '../data/experience.json';

export default function ExperienceSection() {

  return (
    <section id="experience" className="min-h-screen p-8">
      
      <div className="space-y-6">
        {ExperienceData.experiences.map((exp, index) => (
          <div 
            key={index} 
            className="glass-effect rounded-xl p-6 spotlight-effect group border bg-slate-800/50 border-teal-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 animate-fade-in-up"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-200 mb-2 group-hover:text-teal-300 transition-colors">
                  {exp.title}
                </h3>
                
                <div className="flex items-center gap-2 text-teal-400">
                  <Building size={16} />
                  <span className="font-medium">{exp.company}</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-400 text-sm">{exp.type}</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 text-sm text-slate-400 lg:text-right lg:min-w-[200px]">
                <div className="flex items-center gap-2 lg:justify-end">
                  <Calendar size={14} />
                  <span>{exp.duration}</span>
                </div>
                <div className="text-xs text-slate-500">{exp.period}</div>
                <div className="flex items-center gap-2 lg:justify-end">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
                <div className="text-xs text-slate-500">{exp.workType}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}