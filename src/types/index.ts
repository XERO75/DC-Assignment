// Search Result Interface
export interface SearchResult {
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
}

// API Response Type
export type ApiResponse = SearchResult[];

// Search Status Enum
export enum SearchStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
  EMPTY = 'empty'
}

// Search Parameters Interface
export interface SearchParams {
  query: string;
  noThrottling?: boolean;
}

// Search Bar Component Props
export interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
  hasError?: boolean;
  placeholder?: string;
}

// Tag Component Props
export interface TagProps {
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'selected' | 'disabled';
}

// Result Item Component Props
export interface ResultItemProps {
  result: SearchResult;
  onTagClick?: (tag: string) => void;
}

// Search Container Component Props
export interface SearchContainerProps {
  className?: string;
}

// Category Filter Component Props
export interface CategoryFilterProps {
  categories: readonly string[];
  activeCategory?: string;
  onCategoryChange: (category: string) => void;
}
