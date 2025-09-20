import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchTools } from '@/utils/api';
import { SearchResult, SearchStatus } from '@/types';

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const updateQuery = useCallback((newQuery: string) => {
    setQuery(newQuery);
    
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    debounceTimerRef.current = setTimeout(() => {
      setDebouncedQuery(newQuery);
    }, 300);
  }, []);
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['search', debouncedQuery],
    queryFn: () => searchTools({ query: debouncedQuery, noThrottling: true }), //TODO: change to true to disable throttling
    enabled: debouncedQuery.length > 0,
    staleTime: 5 * 60 * 1000,
    retry: 0,
  });

  const searchStatus = useMemo((): SearchStatus => {
    if (isLoading) return SearchStatus.LOADING;
    if (isError) return SearchStatus.ERROR;
    if (data && data.length === 0) return SearchStatus.EMPTY;
    if (data && data.length > 0) return SearchStatus.SUCCESS;
    if (debouncedQuery.length > 0 && !isLoading && !isError && !data) return SearchStatus.EMPTY;
    return SearchStatus.IDLE;
  }, [isLoading, isError, data, debouncedQuery]);

  const allResults: SearchResult[] = useMemo(() => {
    return data || [];
  }, [data]);

  const results: SearchResult[] = useMemo(() => {
    if (!selectedCategory) {
      return allResults;
    }
    
    return allResults.filter(result => {
      const category = result.category.toLowerCase();
      switch (selectedCategory.toLowerCase()) {
        case 'languages':
          return category.includes('language') || category.includes('framework');
        case 'build':
          return category.includes('build') || category.includes('test') || category.includes('deploy');
        case 'design':
          return category.includes('design') || category.includes('ui') || category.includes('ux');
        case 'cloud':
          return category.includes('cloud') || category.includes('infrastructure') || category.includes('devops');
        default:
          return result.category === selectedCategory;
      }
    });
  }, [allResults, selectedCategory]);

  // 基于过滤后的结果重新计算状态
  const finalSearchStatus = useMemo((): SearchStatus => {
    if (searchStatus === SearchStatus.LOADING) return SearchStatus.LOADING;
    if (searchStatus === SearchStatus.ERROR) return SearchStatus.ERROR;
    if (searchStatus === SearchStatus.EMPTY) return SearchStatus.EMPTY;
    if (searchStatus === SearchStatus.SUCCESS) {
      // 如果有原始数据但过滤后为空，显示EMPTY
      if (results.length === 0) return SearchStatus.EMPTY;
      return SearchStatus.SUCCESS;
    }
    return searchStatus;
  }, [searchStatus, results]);

  const clearSearch = useCallback(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
    
    setQuery('');
    setDebouncedQuery('');
    setSelectedCategory('');
  }, []);

  const retrySearch = useCallback(() => {
    refetch();
  }, [refetch]);

  const selectCategory = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const clearCategoryFilter = useCallback(() => {
    setSelectedCategory('');
  }, []);
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  return {
    query,
    updateQuery,
    clearSearch,
    results,
    searchStatus: finalSearchStatus,
    isLoading,
    isError,
    error: error?.message,
    retrySearch,
    selectedCategory,
    selectCategory,
    clearCategoryFilter,
  };
};
