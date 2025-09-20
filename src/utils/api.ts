import axios, { AxiosResponse } from 'axios';
import { ApiResponse, SearchParams } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://frontend-test-api.digitalcreative.cn';
const DEFAULT_TIMEOUT = 3000;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});
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
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        throw new Error('Request timeout, please try again later');
      }
      if (error.response?.status === 404) {
        throw new Error('No related tools found');
      }
      if (error.response && error.response.status >= 500) {
        throw new Error('Server error, please try again later');
      }
    }
    throw new Error('Network error, please check your network connection');
  }
};

export const searchToolsWithError = async (params: SearchParams): Promise<ApiResponse> => {
  const response = await apiClient.get('/', {
    params: {
      search: params.query,
      'no-throttling': false, 
    },
  });
  
  return response.data;
};
