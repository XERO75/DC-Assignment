'use client';

import React from 'react';
import { SearchContainerProps, SearchStatus } from '@/types';
import { useSearch } from '@/hooks/useSearch';
import SearchBar from '@/components/SearchBar';
import ResultItem from '@/components/ResultItem';
import CategoryFilter from '@/components/CategoryFilter';
import Tag from '@/components/Tag';

const SearchContainer: React.FC<SearchContainerProps> = ({ className = '' }) => {
  const {
    query,
    updateQuery,
    results,
    searchStatus,
    isLoading,
    error,
    retrySearch,
    selectedCategory,
    selectCategory,
    clearCategoryFilter,
  } = useSearch();

  // 固定的分类标签
  const defaultCategories = ['Languages', 'Build', 'Design', 'Cloud'];

  // 处理标签点击
  const handleTagClick = (tag: string) => {
    updateQuery(tag);
  };

  // 处理分类切换
  const handleCategoryChange = (category: string) => {
    if (selectedCategory === category) {
      // 如果点击的是当前选中的分类，则清除筛选
      clearCategoryFilter();
    } else {
      // 否则选择新的分类
      selectCategory(category);
    }
  };

  // 渲染不同状态的内容
  const renderContent = () => {
    switch (searchStatus) {
      case SearchStatus.LOADING:
        return (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-gray-600">正在搜索...</p>
          </div>
        );

      case SearchStatus.ERROR:
        return (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-red-500 mb-4">
              <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">搜索出错</h3>
            <p className="text-gray-600 mb-4 text-center max-w-md">
              {error || '网络连接出现问题，请稍后重试'}
            </p>
            <button
              onClick={retrySearch}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              重试
            </button>
          </div>
        );

      case SearchStatus.EMPTY:
        return (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.491M15 6.5a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">未找到相关工具</h3>
            <p className="text-gray-600 mb-4 text-center max-w-md">
              没有找到与 &ldquo;{query}&rdquo; 相关的编程工具，请尝试其他关键词
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Tag label="React" onClick={() => handleTagClick('React')} />
              <Tag label="Vue" onClick={() => handleTagClick('Vue')} />
              <Tag label="TypeScript" onClick={() => handleTagClick('TypeScript')} />
              <Tag label="Node.js" onClick={() => handleTagClick('Node.js')} />
            </div>
          </div>
        );

      case SearchStatus.SUCCESS:
        return (
          <div className="space-y-6">
            {/* 结果列表 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {results.map((result, index) => (
                <ResultItem
                  key={`${result.title}-${index}`}
                  result={result}
                  onTagClick={handleTagClick}
                />
              ))}
            </div>
            
            {/* 结果计数 */}
            <div className="text-sm text-gray-500 text-center">
              {results.length} results
            </div>
          </div>
        );

      default:
        return (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto px-4 ${className}`}>
      {/* 搜索框 */}
      <div className="mb-6">
        <SearchBar
          onSearch={updateQuery}
          isLoading={isLoading}
          placeholder="Languages"
        />
      </div>

      {/* 分类筛选器 - 始终显示4个固定标签 */}
      <CategoryFilter
        categories={defaultCategories}
        activeCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* 搜索结果内容 */}
      <div className="mt-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default SearchContainer;
