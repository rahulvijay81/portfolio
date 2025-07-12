import AboutData from '../data/about.json';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center p-8">
      <div>
        {AboutData.paragraphs.map((paragraph, index) => (
          <p key={index} className={`text-base text-gray-300 leading-relaxed ${index < AboutData.paragraphs.length - 1 ? 'mb-4' : ''}`}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}