import React from 'react';
import { ResultItemProps } from '@/types';
import Image from 'next/image';
import { RedirectIcon } from '@/components/Icons';

const ResultItem: React.FC<ResultItemProps> = ({ result }) => {
  const handleClick = () => {
    if (result.url) {
      window.open(result.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="flex items-center gap-5 p-3 hover:bg-gray-100 rounded-xl transition-colors duration-200 cursor-pointer group"
      onClick={handleClick}
    >
      <div className="flex-shrink-0 w-19 h-19">
        {result.image ? (
          <div className="w-19 h-19 bg-white rounded-lg flex items-center justify-center">
            <Image 
              width={76}
              height={76}
              src={result.image} 
              alt={result.title}
              className="w-15 h-15 object-contain"
            />  
          </div>
        ) : (
          <div className="w-19 h-19 bg-white rounded-lg flex items-center justify-center">
            <span className="text-sm font-semibold text-gray-600">
              {result.title.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="text-xl font-normal text-title mb-2">
          {result.title}
        </h3>
        <p className="text-base text-paragraph leading-tight">
          {result.description}
        </p>
      </div>
      
      <div className="flex-shrink-0">
        <RedirectIcon 
          size={26} 
          color="currentColor" 
          className="text-paragraph opacity-0 group-hover:opacity-20 transition-opacity duration-200"
        />
      </div>
    </div>
  );
};

export default ResultItem;
