import React, { useState, useRef, useEffect } from 'react';
import { SearchBarProps } from '@/types';
import { SearchIcon } from '@/components/Icons';

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  isLoading,
  hasError = false,
  placeholder = 'Search what technologies we are using at DC...',
}) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearch(inputValue);
    }
    if (e.key === 'Escape') {
      setInputValue('');
      onSearch('');
    }
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
          <SearchIcon 
            size={24} 
            color="black" 
          />
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`block w-full pl-14 pr-14 py-6 bg-gray-100 border-0 rounded-xl focus:bg-white text-xl placeholder-gray-500 transition-all duration-200 font-normal focus:ring-offset-0 ${
            hasError 
              ? 'outline-2 outline-error focus:ring-2 focus:ring-error' 
              : 'focus:ring-2 focus:ring-primary'
          }`}
          disabled={isLoading}
        />
        
      </div>
      
    </div>
  );
};

export default SearchBar;
