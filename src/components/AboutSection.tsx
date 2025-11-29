import AboutData from '../data/about.json';
import type { AboutData as AboutDataType } from '../types';

const aboutData: AboutDataType = AboutData;

export default function AboutSection() {
  return (
    <section id="about" className="h-auto lg:min-h-screen flex items-center p-4 md:p-6 lg:p-8 scroll-mt-24 lg:scroll-mt-0">
      <div>
        {aboutData.paragraphs.map((paragraph, index) => (
          <p key={index} className={`text-xs md:text-base text-gray-300 leading-relaxed ${index < aboutData.paragraphs.length - 1 ? 'mb-4' : ''}`}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}