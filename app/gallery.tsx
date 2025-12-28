"use client";

import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useHash } from "./use-hash";
import { startTransition } from "react";
import { useRouter } from "next/navigation";

export default function Gallery() {
  const router = useRouter();
  const [hash] = useHash();

  if (hash === "#gallery") {
    startTransition(() => {
      const node = document.querySelector<HTMLElement>(
        `[data-gallery-index="12"]`,
      );
      if (node instanceof HTMLElement) {
        setTimeout(() => {
          node.click();
          router.refresh();
        }, 1000);
      }
    });
  }

  return (
    <PhotoProvider
      easing={(type) =>
        type === 2
          ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
          : "cubic-bezier(0.34, 1.56, 0.64, 1)"
      }
    >
      <div
        className="[--size:170px] sm:[--size:200px] grid gap-4 auto-rows-[200px] grid-cols-[repeat(auto-fill,minmax(var(--size),1fr))] lg:[--size:300px]"
        role="list"
        aria-label="Thư viện ảnh"
      >
        {Array.from({ length: 15 }).map((_, index) => (
          <PhotoView
            key={index}
            src={`/assets/baco/${index}-min.jpg`}
            aria-label={`Xem ảnh ${index + 1} trong 15 ảnh của thư viện`}
          >
            <div
              role="listitem"
              className={`relative overflow-hidden rounded-lg group cursor-zoom-in focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 focus-within:outline-none ${
                index % 5 === 0 ? "row-span-2" : "row-span-1"
              }`}
              tabIndex={0}
              data-gallery-index={index}
            >
              <div
                className="absolute inset-0 bg-gray-200 animate-pulse"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <Image
                  src={`/assets/baco/${index}-min.jpg`}
                  alt={`Ảnh ${index + 1} trong thư viện ảnh của Tiệm Trà BaCo`}
                  fill
                  className="object-cover object-center"
                  loading={index < 6 ? "eager" : "lazy"}
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 group-focus:bg-black/30 transition-colors duration-300" />
            </div>
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
}
