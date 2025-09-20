'use client';

import React from 'react';
import { SearchContainerProps, SearchStatus } from '@/types';
import { useSearch } from '@/hooks/useSearch';
import SearchBar from '@/components/SearchBar';
import ResultItem from '@/components/ResultItem';
import CategoryFilter from '@/components/CategoryFilter';
import { LoaderIcon } from '@/components/Icons';
import { SEARCH_MESSAGES, SEARCH_PLACEHOLDER, DEFAULT_CATEGORIES } from '@/constants/messages';
import Image from 'next/image';

const SearchContainer: React.FC<SearchContainerProps> = ({ className = '' }) => {
  const {
    updateQuery,
    results,
    searchStatus,
    isLoading,
    selectedCategory,
    selectCategory,
    clearCategoryFilter,
  } = useSearch();

  const defaultCategories = [...DEFAULT_CATEGORIES];

  const handleTagClick = (tag: string) => {
    updateQuery(tag);
  };

  const handleCategoryChange = (category: string) => {
    if (selectedCategory === category) {
      clearCategoryFilter();
    } else {
      selectCategory(category);
    }
  };
  const renderContent = () => {
    switch (searchStatus) {
      case SearchStatus.LOADING:
        return (
          <div className="flex items-center justify-center min-h-[400px]">
            <LoaderIcon speed="fast" size={53} />
          </div>
        );

      case SearchStatus.ERROR:
        return (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="w-62 h-48 flex items-center justify-center">
              <Image 
                src="/images/error.svg" 
                alt="Error" 
                width={247} 
                height={192} 
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        );

      case SearchStatus.EMPTY:
        return (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="w-62 h-48 flex items-center justify-center">
              <Image 
                src="/images/searching.svg" 
                alt="Searching" 
                width={247} 
                height={192} 
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        );

      case SearchStatus.SUCCESS:
        return (
          <div className="space-y-2.5">
            <div className="space-y-2.5">
              {results.map((result, index) => (
                <ResultItem
                  key={`${result.title}-${index}`}
                  result={result}
                  onTagClick={handleTagClick}
                />
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="w-62 flex items-center justify-center">
              <Image 
                src="/images/searching.svg" 
                alt="Searching" 
                width={247} 
                height={192} 
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`w-full mx-auto ${className}`} style={{maxWidth: '690px'}}>
      <div className="bg-white rounded-3xl shadow-figma">
        <div className="p-6">
          <div className="mb-5">
            <SearchBar
              onSearch={updateQuery}
              isLoading={isLoading}
              hasError={searchStatus === SearchStatus.ERROR}
              placeholder={SEARCH_PLACEHOLDER}
            />
          </div>

          <div className="mb-5">
            <CategoryFilter
              categories={defaultCategories}
              activeCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>

          <div className="mt-5  max-h-[600px] overflow-y-auto transition-all duration-300 ease-in-out">
            {renderContent()}
          </div>
        </div>
        
        <div className="border-t border-gray-200 bg-white rounded-b-3xl px-6 py-4">
          <div className={`text-base font-medium ${
            searchStatus === SearchStatus.ERROR ? 'text-error' : 'text-paragraph'
          }`}>
            {searchStatus === SearchStatus.LOADING ? SEARCH_MESSAGES.LOADING : 
             searchStatus === SearchStatus.EMPTY ? SEARCH_MESSAGES.EMPTY : 
             searchStatus === SearchStatus.ERROR ? SEARCH_MESSAGES.ERROR :
             searchStatus === SearchStatus.SUCCESS ? SEARCH_MESSAGES.SUCCESS(results.length) :
             SEARCH_MESSAGES.EMPTY}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
