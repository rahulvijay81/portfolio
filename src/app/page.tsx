import MouseSpotlight from '@/components/MouseSpotlight';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

export default function Portfolio() {
  return (
    <>
      <main className="min-h-screen lg:flex">
        <MouseSpotlight />
        <Sidebar />
        <MainContent />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Rahul Portfolio",
            "url": "https://rahulvijay.netlify.app",
            "description": "Full Stack Developer portfolio showcasing React, Next.js, and Node.js projects",
            "author": {
              "@type": "Person",
              "name": "Rahul",
              "jobTitle": "Full Stack Developer"
            }
          })
        }}
      />
    </>
  );
}