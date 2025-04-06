'use client';

import React from 'react';

const ConstructionNotice: React.FC = () => {
  // This component creates a non-dismissible overlay that prevents interaction with content underneath
  return (
    <div
      className='fixed inset-0 bg-black/80 backdrop-blur-none z-[9999] flex items-center justify-center pointer-events-auto'
      // The following styles ensure the overlay cannot be dismissed and blocks all interaction
      style={{
        userSelect: 'none',
        touchAction: 'none',
      }}
      // Prevent any click events from propagating through
      onClick={(e) => e.stopPropagation()}
    >
      <div className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md mx-auto text-center'>
        <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
          Trang web đang được xây dựng
        </h2>
        <p className='text-gray-700 dark:text-gray-300 text-lg'>
          Hẹn gặp lại trong thời gian sắp tới
        </p>
      </div>
    </div>
  );
};

export default ConstructionNotice;
