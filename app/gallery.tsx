'use client';

import Image from 'next/image';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import img0 from '@/public/assets/baco/0-min.jpg';
import img1 from '@/public/assets/baco/1-min.jpg';
import img2 from '@/public/assets/baco/2-min.jpg';
import img3 from '@/public/assets/baco/3-min.jpg';
import img4 from '@/public/assets/baco/4-min.jpg';
import img5 from '@/public/assets/baco/5-min.jpg';
import img6 from '@/public/assets/baco/6-min.jpg';
import img7 from '@/public/assets/baco/7-min.jpg';
import img8 from '@/public/assets/baco/8-min.jpg';
import img9 from '@/public/assets/baco/9-min.jpg';
import img10 from '@/public/assets/baco/10-min.jpg';
import img11 from '@/public/assets/baco/11-min.jpg';
import img12 from '@/public/assets/baco/12-min.jpg';
import img13 from '@/public/assets/baco/13-min.jpg';
import img14 from '@/public/assets/baco/14-min.jpg';

const images = [
  img0,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
];

export default function Gallery() {
  return (
    <PhotoProvider
      easing={type =>
        type === 2
          ? 'cubic-bezier(0.36, 0, 0.66, -0.56)'
          : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    >
      <div className="[--size:170px] sm:[--size:200px] grid gap-4 auto-rows-[200px] grid-cols-[repeat(auto-fill,minmax(var(--size),1fr))] lg:[--size:300px]">
        {images.map((src, index) => (
          <PhotoView key={index} src={`/assets/baco/${index}-min.jpg`}>
            <div
              className={`relative overflow-hidden rounded-lg group cursor-zoom-in ${
                index % 5 === 0 ? 'row-span-2' : 'row-span-1'
              }`}
            >
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <Image
                  src={src}
                  alt=""
                  placeholder="blur"
                  fill
                  priority
                  quality={100}
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
}
