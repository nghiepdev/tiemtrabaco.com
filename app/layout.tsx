import type {Metadata} from 'next';
import './globals.css';
import {cn} from '@/lib/cn';

const jsonLd = {
  '@context': 'http://schema.org',
  '@type': 'Restaurant',
  name: 'Tiệm Trà Baco',
  description:
    'Thưởng thức trà sữa, mỳ cay và đồ ăn vặt ngon, chuẩn vị. Chất lượng đảm bảo, phục vụ nhanh chóng, giá cả hợp lý',

  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Đường ĐH 75, Hoà Đồng, Tây Hòa',
    addressLocality: 'Tuy Hoà',
    addressRegion: 'Phú Yên',
    postalCode: '56000',
    addressCountry: 'VN',
  },
  telephone: '0372440541',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '12.98821478319863',
    longitude: '109.23313161143116',
  },
  url: 'https://tiemtrabaco.com',
  image: [
    'https://tiemtrabaco.com/assets/baco/baco-1.jpg',
    'https://tiemtrabaco.com/assets/baco/baco-2.jpg',
    'https://tiemtrabaco.com/assets/baco/baco-3.jpg',
    'https://tiemtrabaco.com/assets/baco/5-min.jpg',
    'https://tiemtrabaco.com/assets/baco/2-min.jpg',
    'https://tiemtrabaco.com/assets/baco/3-min.jpg',
    'https://tiemtrabaco.com/assets/baco/4-min.jpg',
    'https://tiemtrabaco.com/assets/baco/6-min.jpg',
    'https://tiemtrabaco.com/assets/baco/7-min.jpg',
    'https://tiemtrabaco.com/assets/baco/8-min.jpg',
    'https://tiemtrabaco.com/assets/baco/9-min.jpg',
  ],
  servesCuisine: [
    'Trà sữa',
    'Mỳ cay',
    'Ăn vặt',
    'Tré trộn',
    'Chân gà',
    'Trà chanh',
    'Trà tắc',
    'Kem tươi',
    'Mì trộn',
    'Viên chiên',
    'Phô mai',
    'Bánh tráng trộn',
  ],
  priceRange: '15000 VND - 45000 VND',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '17',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '21:00',
    },
  ],
  sameAs: ['https://www.facebook.com/tiemtrabaco'],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tiemtrabaco.com'),
  title: 'Tiệm Trà Baco | Trà sữa - Mỳ Cay - Ăn Vặt',
  description:
    'Thưởng thức trà sữa, mỳ cay và đồ ăn vặt ngon, chuẩn vị. Chất lượng đảm bảo, phục vụ nhanh chóng, giá cả hợp lý',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={cn('antialiased')}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
        {children}
      </body>
    </html>
  );
}
