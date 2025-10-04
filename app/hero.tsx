'use client';

import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center min-h-[80vh] w-full overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center w-full">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-yellow-100 via-violet-200 to-fuchsia-200 bg-clip-text text-transparent drop-shadow-lg animate-fade-in">
          Tiệm Trà BaCo
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-white/90 animate-fade-in delay-100">
          Trà sữa - Mỳ cay - Ăn vặt
        </p>
        <a
          href="https://maps.app.goo.gl/3Ww4WrnMZ1mu3uzB9"
          target="_map"
          rel="noopener noreferrer"
          className="group flex items-start gap-3 mb-8 animate-fade-in delay-200 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 hover:border-pink-300/50"
        >
          <div className="flex-shrink-0">
            <span className="i-hugeicons-location-01 text-pink-400 text-2xl group-hover:text-pink-300 transition-colors" />
          </div>
          <div className="text-center flex-1">
            <p className="text-lg md:text-xl text-white font-semibold group-hover:text-pink-100 transition-colors">
              Xã Hoà Đồng, huyện Tây Hoà
            </p>
            <p className="text-base md:text-lg text-pink-300 font-bold group-hover:text-pink-200 transition-colors">
              Tỉnh Phú Yên
            </p>
            <p className="text-sm text-white/70 mt-1 group-hover:text-white/90 transition-colors">
              📍 Nhấn để xem bản đồ
            </p>
          </div>
          <div className="flex-shrink-0 self-center">
            <span className="i-hugeicons-arrow-right-01 text-white/60 group-hover:text-pink-300 text-lg transition-colors" />
          </div>
        </a>
        <div className="flex gap-4 items-center animate-fade-in delay-300">
          <a
            href="https://www.facebook.com/tiemtrabaco"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 shadow-lg hover:scale-105 transition-all text-white px-8 py-3 rounded-full text-lg font-semibold focus:ring-4 focus:ring-pink-300 focus:outline-none"
          >
            <span className="i-hugeicons-messenger" />
            Gọi món
          </a>
          <PhotoProvider>
            <PhotoView src="/assets/baco/12-min.jpg">
              <button className="text-white/90 hover:text-pink-400 cursor-pointer underline underline-offset-4 px-4 py-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-pink-300">
                Xem menu
              </button>
            </PhotoView>
          </PhotoProvider>
        </div>
      </div>
      {/* Simple fade-in animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}
