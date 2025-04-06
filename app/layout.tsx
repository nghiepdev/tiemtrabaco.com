import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import ConstructionNotice from '@/components/ConstructionNotice';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tiemtrabaco.com'),
  title: 'Tiệm Trà Baco - Baco Milk Tea Shop',
  description:
    'Trà sữa, ăn vặt, kem tươi, mì trộn, viên chiên, phô mai, trà trái cây',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConstructionNotice />
        {children}
      </body>
    </html>
  );
}
