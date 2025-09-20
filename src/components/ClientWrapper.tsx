'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import DynamicSearchContainer from '@/components/DynamicSearchContainer';

export default function ClientWrapper() {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        retry: 1,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <main className="w-full">
          <DynamicSearchContainer />
        </main>
      </div>
    </QueryClientProvider>
  );
}
