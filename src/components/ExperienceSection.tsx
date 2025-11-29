import { Calendar, MapPin, Building } from 'lucide-react';
import { calculateDuration } from '../utils/dateUtils';
import ExperienceData from '../data/experience.json';
import type { ExperienceData as ExperienceDataType } from '../types';

const experienceData: ExperienceDataType = ExperienceData;

export default function ExperienceSection() {

  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center p-3 md:p-6 lg:p-8">

      <div className="w-full space-y-6">
        {experienceData.experiences.map((exp, index) => (
          <div
            key={index}
            className="glass-effect rounded-lg p-4 md:p-6 hover:bg-white/5 transition-colors"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-base md:text-xl font-semibold text-slate-200 mb-2 group-hover:text-teal-300 transition-colors">
                  {exp.title}
                </h3>

                <div className="flex flex-wrap items-center gap-2 text-teal-400">
                  <Building size={16} />
                  <span className="font-medium">{exp.company}</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-400 text-sm">{exp.type}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-sm text-slate-400 lg:text-right lg:min-w-[200px]">
                <div className="flex items-center gap-2 lg:justify-end">
                  <Calendar size={14} />
                  <span className="break-words">{exp.duration}</span>
                </div>
                <div className="text-xs text-slate-500">
                  {(() => {
                    const [start, end] = exp.duration.split(" - ");
                    return calculateDuration(start, end);
                  })()}
                </div>
                <div className="flex items-center gap-2 lg:justify-end">
                  <MapPin size={14} />
                  <span className="break-words">{exp.location}</span>
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