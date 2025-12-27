"use client";

import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function Gallery() {
  return (
    <PhotoProvider
      easing={(type) =>
        type === 2
          ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
          : "cubic-bezier(0.34, 1.56, 0.64, 1)"
      }
    >
      <div className="[--size:170px] sm:[--size:200px] grid gap-4 auto-rows-[200px] grid-cols-[repeat(auto-fill,minmax(var(--size),1fr))] lg:[--size:300px]">
        {Array.from({ length: 15 }).map((_, index) => (
          <PhotoView key={index} src={`/assets/baco/${index}-min.jpg`}>
            <div
              className={`relative overflow-hidden rounded-lg group cursor-zoom-in ${
                index % 5 === 0 ? "row-span-2" : "row-span-1"
              }`}
            >
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <Image
                  src={`/assets/baco/${index}-min.jpg`}
                  alt=""
                  fill
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
