import { Mail, Download } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center p-3 md:p-6 lg:p-8 scroll-mt-24 lg:scroll-mt-0">
      <div>
        <h2 className="text-lg md:text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-xs md:text-base text-gray-300 mb-8 lg:pr-[200px]">
          I&apos;d love to connect and explore exciting opportunities with you! Whether you have interesting projects, creative ideas, collaboration proposals, or just want to chat about technology and innovation, please don&apos;t hesitate to reach out. I&apos;m always eager to discuss new challenges, share insights, and build meaningful professional relationships. My inbox is open 24/7, and I typically respond within a few hours!
        </p>
        <a
          href="https://www.linkedin.com/in/rahulvijay81/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
        >
          <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
          <span>Connect Now 🚀</span>
        </a>
        <a
          href="/rahulvijay.pdf"
          download
          className="group inline-flex items-center space-x-2 bg-teal-500/20 backdrop-blur-sm border border-teal-500/50 hover:bg-teal-500/30 hover:border-teal-500/60 px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20 ml-4"
        >
          <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
          <span>Download Resume</span>
        </a>
      </div>
    </section>
  );
}