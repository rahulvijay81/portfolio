import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import LenisProvider from "@/components/LenisProvider";
import PageLoader from "@/components/PageLoader";

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
    default: "Rahul Vijay - Full Stack Developer | React, Next.js, Node.js Expert",
    template: "%s | Rahul Vijay - Full Stack Developer"
  },
  description: "Rahul Vijay - Self-taught Full Stack Developer specializing in React, Next.js, Node.js, Express.js, JavaScript, TypeScript, HTML5, CSS, Tailwind CSS, MongoDB, PostgreSQL, and MySQL. Building dynamic, scalable web applications with responsive UI and robust backend solutions. Expert in Git, RESTful APIs, authentication systems, and deployment on Vercel & Netlify.",
  keywords: [
    "Rahul Vijay",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "RESTful API",
    "Git",
    "Vercel",
    "Netlify",
    "Self-taught Developer",
    "Portfolio",
    "Web Applications"
  ],
  authors: [{ name: "Rahul Vijay" }],
  creator: "Rahul Vijay",
  publisher: "Rahul Vijay",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Rahul Vijay - Full Stack Developer | React, Next.js, Node.js Expert",
    description: "Self-taught Full Stack Developer specializing in React, Next.js, Node.js, Express.js, TypeScript, MongoDB, PostgreSQL. Building dynamic, scalable web applications with responsive UI and robust backend solutions.",
    siteName: "Rahul Vijay Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Rahul Vijay - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Vijay - Full Stack Developer | React, Next.js, Node.js",
    description: "Self-taught Full Stack Developer specializing in React, Next.js, Node.js, Express.js, TypeScript. Building scalable web applications with modern JavaScript frameworks.",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        "name": "Rahul Vijay",
        "jobTitle": "Full Stack Developer",
        "description": "Self-taught Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies",
        "url": siteUrl,
        "sameAs": [
          "https://github.com/rahulvijay81",
          "https://www.linkedin.com/in/rahulvijay81/"
        ],
        "knowsAbout": [
          "React",
          "Next.js",
          "Node.js",
          "Express.js",
          "JavaScript",
          "TypeScript",
          "MongoDB",
          "PostgreSQL",
          "MySQL",
          "Tailwind CSS",
          "HTML5",
          "CSS3",
          "Git",
          "RESTful API",
          "Full Stack Development",
          "Web Development"
        ],
        "knowsLanguage": "English"
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "Rahul Vijay Portfolio",
        "description": "Full Stack Developer portfolio showcasing React, Next.js, Node.js projects and web development expertise",
        "publisher": {
          "@id": `${siteUrl}/#person`
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        "url": siteUrl,
        "name": "Rahul Vijay - Full Stack Developer Portfolio",
        "isPartOf": {
          "@id": `${siteUrl}/#website`
        },
        "about": {
          "@id": `${siteUrl}/#person`
        },
        "description": "Portfolio of Rahul Vijay, a self-taught Full Stack Developer with expertise in React, Next.js, Node.js, and modern web technologies",
        "inLanguage": "en-US"
      },
      {
        "@type": "ProfilePage",
        "mainEntity": {
          "@id": `${siteUrl}/#person`
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          strategy="beforeInteractive"
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
        <PageLoader />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
