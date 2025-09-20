import axios, { AxiosResponse } from 'axios';
import { ApiResponse, SearchParams } from '@/types';

// API基础URL - 从环境变量获取
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://frontend-test-api.digitalcreative.cn';

// 创建axios实例
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10秒超时
});

// 搜索工具API
export const searchTools = async (params: SearchParams): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await apiClient.get('/', {
      params: {
        search: params.query,
        'no-throttling': params.noThrottling ?? true,
      },
    });
    
    return response.data;
  } catch (error) {
    // 处理不同类型的错误
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        throw new Error('请求超时，请稍后重试');
      }
      if (error.response?.status === 404) {
        throw new Error('未找到相关工具');
      }
      if (error.response && error.response.status >= 500) {
        throw new Error('服务器错误，请稍后重试');
      }
    }
    throw new Error('网络错误，请检查网络连接');
  }
};

// 模拟错误请求（用于测试错误状态）
export const searchToolsWithError = async (params: SearchParams): Promise<ApiResponse> => {
  const response = await apiClient.get('/', {
    params: {
      search: params.query,
      'no-throttling': false, // 设置为false来模拟错误
    },
  });
  
  return response.data;
};
