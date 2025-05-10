import type {Metadata} from 'next';
import './globals.css';
import {cn} from '@/lib/cn';

export const metadata: Metadata = {
  metadataBase: new URL('https://tiemtrabaco.com'),
  title: 'Tiệm Trà Baco - Trà sữa - Mỳ Cay - Ăn Vặt',
  description:
    'Trà sữa, mỳ cay, ăn vặt, tré trộn, chân gà, trà, trà tắc, kem tươi, mì trộn, viên chiên, phô mai, bánh tráng trộn',
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
