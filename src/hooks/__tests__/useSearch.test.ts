import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useSearch } from '../useSearch';

// Mock the API function
jest.mock('../../utils/api');

// Mock React Query
const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  
  return ({ children }: { children: React.ReactNode }) => {
    return React.createElement(QueryClientProvider, { client: queryClient }, children);
  };
};

describe('useSearch Hook', () => {
  it('should initialize with empty state', () => {
    const { result } = renderHook(() => useSearch(), {
      wrapper: createWrapper(),
    });

    expect(result.current.query).toBe('');
    expect(result.current.results).toEqual([]);
    expect(result.current.searchStatus).toBe('idle');
    expect(result.current.isLoading).toBe(false);
    expect(result.current.selectedCategory).toBe('');
  });

  it('should update query when updateQuery is called', () => {
    const { result } = renderHook(() => useSearch(), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.updateQuery('react');
    });

    expect(result.current.query).toBe('react');
  });

  it('should handle category selection', () => {
    const { result } = renderHook(() => useSearch(), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.selectCategory('Frontend');
    });

    expect(result.current.selectedCategory).toBe('Frontend');
  });

  it('should clear category filter', () => {
    const { result } = renderHook(() => useSearch(), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.selectCategory('Frontend');
    });

    expect(result.current.selectedCategory).toBe('Frontend');

    act(() => {
      result.current.clearCategoryFilter();
    });

    expect(result.current.selectedCategory).toBe('');
  });
});