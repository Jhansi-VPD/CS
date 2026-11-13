import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { CookieBanner } from '@/components/common/CookieBanner';
import { Chatbot } from '@/components/chatbot/Chatbot';
import { HashScroll } from '@/components/common/HashScroll';
import { LogoIntro } from '@/components/common/LogoIntro';

function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    const raw = process.env.NEXT_PUBLIC_SITE_URL.trim();
    return raw.startsWith('http://') || raw.startsWith('https://') ? raw : `https://${raw}`;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.RENDER_EXTERNAL_URL) {
    return process.env.RENDER_EXTERNAL_URL;
  }
  if (process.env.URL) {
    return process.env.URL;
  }
  if (process.env.NODE_ENV === 'production') {
    return 'https://coralswift.com';
  }
  return 'http://localhost:3000';
}

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Coral Swift | Connecting Global Opportunities with Delivery Excellence',
  description:
    'Coral Swift is a US-oriented IT and Non-IT project solutions and partnership platform connecting international project requirements with qualified delivery organizations.',
  keywords: [
    'Coral Swift',
    'CoralSwift Technologies',
    'IT solutions',
    'Non-IT solutions',
    'BPO',
    'delivery partnership',
    'cross-border technology',
    'strategic partnerships',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Coral Swift Technologies',
    title: 'Coral Swift | Connecting Global Opportunities with Delivery Excellence',
    description:
      'US-focused business positioning | IT & Non-IT project solutions | Strategic delivery partnerships.',
    images: [
      {
        url: '/images/coral-swift-og-share.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Coral Swift Technologies - Connecting Global Opportunities with Delivery Excellence',
      },
      {
        url: '/assets/coral-swift-official-logo.png',
        width: 687,
        height: 480,
        type: 'image/png',
        alt: 'Coral Swift Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coral Swift | Connecting Global Opportunities with Delivery Excellence',
    description:
      'US-focused business positioning | IT & Non-IT project solutions | Strategic delivery partnerships.',
    images: ['/images/coral-swift-og-share.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [{ url: '/favicon.png', sizes: '64x64', type: 'image/png' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#080B2E',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(sessionStorage.getItem('cs-intro-shown')==='1'){var s=document.createElement('style');s.textContent='#cs-intro{display:none!important}';document.head.appendChild(s)}}catch(e){}",
          }}
        />
      </head>
      <body
        className="bg-white text-navy-midnight font-sans antialiased selection:bg-coral-bright selection:text-white min-h-dvh flex flex-col"
        suppressHydrationWarning
      >
        <LogoIntro />
        <Header />
        <main className="flex-grow relative z-10 bg-white parallax-footer-shadow">{children}</main>
        <Footer />
        <CookieBanner />
        <Chatbot />
        <HashScroll />
      </body>
    </html>
  );
}
