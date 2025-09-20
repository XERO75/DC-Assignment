import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchTools } from '@/utils/api';
import { SearchResult, SearchStatus } from '@/types';

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 更新查询并触发防抖
  const updateQuery = useCallback((newQuery: string) => {
    setQuery(newQuery);
    
    // 清除之前的定时器
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    // 设置新的定时器
    debounceTimerRef.current = setTimeout(() => {
      setDebouncedQuery(newQuery);
    }, 300); // 300ms防抖
  }, []);

  // 使用React Query进行数据获取
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['search', debouncedQuery],
    queryFn: () => searchTools({ query: debouncedQuery, noThrottling: true }),
    enabled: debouncedQuery.length > 0, // 只有查询不为空时才执行
    staleTime: 5 * 60 * 1000, // 5分钟内数据被认为是新鲜的
    retry: 1, // 失败时重试1次
  });

  // 计算搜索状态
  const searchStatus = useMemo((): SearchStatus => {
    if (isLoading) return SearchStatus.LOADING;
    if (isError) return SearchStatus.ERROR;
    if (data && data.length === 0) return SearchStatus.EMPTY;
    if (data && data.length > 0) return SearchStatus.SUCCESS;
    return SearchStatus.IDLE;
  }, [isLoading, isError, data]);

  // 获取搜索结果
  const allResults: SearchResult[] = useMemo(() => {
    return data || [];
  }, [data]);

  // 根据选择的分类过滤结果
  const results: SearchResult[] = useMemo(() => {
    if (!selectedCategory) {
      return allResults;
    }
    
    // 根据固定分类标签过滤结果
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

  // 清除搜索
  const clearSearch = useCallback(() => {
    // 清除防抖定时器
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
    
    setQuery('');
    setDebouncedQuery('');
    setSelectedCategory('');
  }, []);

  // 重新搜索
  const retrySearch = useCallback(() => {
    refetch();
  }, [refetch]);

  // 选择分类
  const selectCategory = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  // 清除分类筛选
  const clearCategoryFilter = useCallback(() => {
    setSelectedCategory('');
  }, []);

  // 组件卸载时清理定时器
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
    searchStatus,
    isLoading,
    isError,
    error: error?.message,
    retrySearch,
    selectedCategory,
    selectCategory,
    clearCategoryFilter,
  };
};
