export interface SearchResult {
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
}

export type ApiResponse = SearchResult[];

export enum SearchStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
  EMPTY = 'empty'
}

export interface SearchParams {
  query: string;
  noThrottling?: boolean;
}
export interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
  hasError?: boolean;
  placeholder?: string;
}

export interface TagProps {
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'selected' | 'disabled';
}

export interface ResultItemProps {
  result: SearchResult;
  onTagClick?: (tag: string) => void;
}

export interface SearchContainerProps {
  className?: string;
}
