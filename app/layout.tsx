import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Business 9ca9b9ac-39d1-462f-9f16-9c62e308a1ff - Professional business-9ca9b9ac-39d1-462f-9f16-9c62e308a1ff Services',
  description: 'Trusted business-9ca9b9ac-39d1-462f-9f16-9c62e308a1ff services with expertise you can rely on.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      </body>
    </html>
  );
}
