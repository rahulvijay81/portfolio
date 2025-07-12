import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = 'https://rahulvijay.netlify.app';

export const metadata: Metadata = {
  title: {
    default: "Rahul - Full Stack Developer Portfolio",
    template: "%s | Rahul - Full Stack Developer"
  },
  description: "Full Stack Developer specializing in React, Next.js, Node.js. Frontend Developer at StratAgile with 2+ years experience building scalable web applications.",
  keywords: ["Full Stack Developer", "React Developer", "Next.js", "Node.js", "Frontend Developer", "JavaScript", "TypeScript", "Portfolio"],
  authors: [{ name: "Rahul" }],
  creator: "Rahul",
  publisher: "Rahul",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Rahul - Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in React, Next.js, Node.js. Frontend Developer at StratAgile with 2+ years experience.",
    siteName: "Rahul Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Rahul - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul - Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in React, Next.js, Node.js. Frontend Developer at StratAgile with 2+ years experience.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rahul",
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "StratAgile"
    },
    "url": "https://rahulvijay.netlify.app",
    "sameAs": [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername"
    ],
    "knowsAbout": ["React", "Next.js", "Node.js", "JavaScript", "TypeScript", "Full Stack Development"]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6GBKB76L08"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6GBKB76L08');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
