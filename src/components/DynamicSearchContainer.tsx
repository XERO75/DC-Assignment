'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const SearchContainer = dynamic(() => import('./SearchContainer'), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    </div>
  )
});

export default function DynamicSearchContainer() {
  return (
    <div className="fixed top-0 inset-0 flex justify-center py-8">
      <Suspense fallback={
        <div className="w-full mx-auto" style={{maxWidth: '690px'}}>
          <div className="bg-white rounded-3xl shadow-figma">
            <div className="min-h-[400px] flex  justify-center p-6">
              <div className="animate-pulse text-gray-500">Loading...</div>
            </div>
          </div>
        </div>
      }>
        <SearchContainer />
      </Suspense>
    </div>
  );
}
