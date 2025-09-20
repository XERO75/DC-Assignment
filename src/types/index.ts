// 搜索结果项的类型定义
export interface SearchResult {
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
}

// API响应的类型定义 - API直接返回SearchResult数组
export type ApiResponse = SearchResult[];

// 搜索状态枚举
export enum SearchStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
  EMPTY = 'empty'
}

// 搜索参数类型
export interface SearchParams {
  query: string;
  noThrottling?: boolean;
}

// 组件Props类型
export interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
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
