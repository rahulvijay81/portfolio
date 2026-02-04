import type { Metadata } from "next";
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
    default: "Rahul - Full Stack Developer Portfolio",
    template: "%s | Rahul - Full Stack Developer"
  },
  description: "Rahul Vijay - Full Stack Developer with 2+ years of experience at StratAgile. Expert in React.js, Next.js, Node.js, TypeScript, and MongoDB. Building scalable web applications and mobile solutions with modern JavaScript frameworks.",
  keywords: ["Full Stack Developer", "React Developer", "Next.js", "Node.js", "Frontend Developer", "JavaScript", "TypeScript", "Portfolio"],
  authors: [{ name: "Rahul" }],
  creator: "Rahul",
  publisher: "Rahul",
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
  other: {
    'application/ld+json': JSON.stringify([
      {
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
          "https://github.com/rahulvijay81",
          "https://www.linkedin.com/in/rahulvijay81/"
        ],
        "knowsAbout": ["React", "Next.js", "Node.js", "JavaScript", "TypeScript", "Full Stack Development"]
      },
      {
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
      }
    ])
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
