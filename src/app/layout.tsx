import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Topbar } from '@/components/Topbar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { SITE } from '@/lib/site';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: `${SITE.siteName} — ${SITE.tagline}`,
    template: `%s | ${SITE.siteName}`,
  },
  description: SITE.tagline,
  icons: {
    icon: [
      { url: '/assets/img/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/img/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/assets/img/favicon-180.png', sizes: '180x180' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon-16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/favicon-180.png" />
      </head>
      <body>
        <a className="skip-link" href="#konten">
          Langsung ke konten
        </a>
        <Topbar />
        <Header />
        <main id="konten">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
