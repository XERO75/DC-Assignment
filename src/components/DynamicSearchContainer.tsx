'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// 动态导入SearchContainer，禁用SSR
const SearchContainer = dynamic(() => import('./SearchContainer'), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="mb-8">
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="搜索编程工具..."
              className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg text-lg"
              disabled
            />
          </div>
        </div>
      </div>
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-pulse text-gray-500">正在加载...</div>
      </div>
    </div>
  )
});

export default function DynamicSearchContainer() {
  return (
    <Suspense fallback={
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="搜索编程工具..."
                className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg text-lg"
                disabled
              />
            </div>
          </div>
        </div>
        <div className="min-h-[400px] flex items-center justify-center">
          <div className="animate-pulse text-gray-500">正在加载...</div>
        </div>
      </div>
    }>
      <SearchContainer />
    </Suspense>
  );
}
