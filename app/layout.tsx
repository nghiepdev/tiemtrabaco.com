import type {Metadata} from 'next';
import './globals.css';
import {cn} from '@/lib/cn';

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
    <html lang="vi">
      <body className={cn('antialiased')}>{children}</body>
    </html>
  );
}
