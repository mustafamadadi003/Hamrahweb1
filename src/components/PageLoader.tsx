import React from 'react';

export const PageLoader: React.FC = () => (
  <div className="flex h-screen w-full items-center justify-center bg-[#F8F9FF] dark:bg-[#0B1F3A]">
    <div className="animate-spin h-12 w-12 border-4 border-[#00F5D4] border-t-transparent rounded-full"></div>
  </div>
);
