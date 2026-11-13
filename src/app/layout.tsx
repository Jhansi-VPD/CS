import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { CookieBanner } from '@/components/common/CookieBanner';
import { Chatbot } from '@/components/chatbot/Chatbot';
import { HashScroll } from '@/components/common/HashScroll';
import { LogoIntro } from '@/components/common/LogoIntro';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Coral Swift | Connecting Global Opportunities with Delivery Excellence',
  description:
    'Coral Swift is a US-oriented IT and Non-IT project solutions and partnership platform connecting international project requirements with qualified delivery organizations.',
  keywords: [
    'Coral Swift',
    'IT solutions',
    'Non-IT solutions',
    'BPO',
    'delivery partnership',
    'cross-border technology',
    'strategic partnerships',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Coral Swift',
    title: 'Coral Swift | Connecting Global Opportunities with Delivery Excellence',
    description:
      'US-focused business positioning | IT & Non-IT project solutions | Strategic delivery partnerships.',
    images: [{ url: '/assets/coral-swift-official-logo.png', width: 512, height: 512, alt: 'Coral Swift' }],
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '64x64', type: 'image/png' },
    ],
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
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
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
