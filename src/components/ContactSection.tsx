import { Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center p-8">
      <div>
        <p className="text-lg text-gray-300 mb-8">
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition-colors"
        >
          <Mail size={20} />
          <span>Say Hello</span>
        </a>
      </div>
    </section>
  );
}