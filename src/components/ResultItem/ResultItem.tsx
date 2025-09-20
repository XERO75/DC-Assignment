import React from 'react';
import { ResultItemProps } from '@/types';
import Tag from '@/components/Tag';

const ResultItem: React.FC<ResultItemProps> = ({ result, onTagClick }) => {
  return (
    <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer group">
      {/* 图标 */}
      <div className="flex-shrink-0">
        {result.image ? (
          <img 
            src={result.image} 
            alt={result.title}
            className="w-10 h-10 object-cover rounded-lg"
          />
        ) : (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-sm font-semibold text-gray-600">
              {result.title.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
      </div>
      
      {/* 内容 */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {result.title}
        </h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {result.description}
        </p>
      </div>
      
      {/* 箭头图标 */}
      <div className="flex-shrink-0">
        <svg 
          className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </div>
    </div>
  );
};

export default ResultItem;
