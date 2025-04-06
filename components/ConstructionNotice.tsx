'use client';

import React from 'react';

const ConstructionNotice: React.FC = () => {
  return (
    <div className='fixed inset-0 bg-black/80 backdrop-blur-none z-[9999] flex items-center justify-center pointer-events-auto'>
      <div className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md mx-auto text-center'>
        <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
          Trang web đang được xây dựng
        </h2>
        <p className='text-gray-700 dark:text-gray-300 text-lg'>
          Để đặt Trà sữa và Ăn vặt tại{' '}
          <a
            href='https://www.facebook.com/tiemtrabaco'
            target='_fanpage'
            className='text-blue-600 font-bold'
          >
            Facebook Tiệm Trà BaCo
          </a>{' '}
          hoặc{' '}
          <span className='text-blue-600 font-bold'>Zalo 0372 440 541</span>
        </p>
      </div>
    </div>
  );
};

export default ConstructionNotice;
