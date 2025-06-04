import axios from 'axios';
import { RepositoryData, ApiResponse } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const repositoryService = {
  async getRepositoryInfo(): Promise<RepositoryData> {
    const response = await api.get<RepositoryData>('/monitor');
    return response.data;
  },

  async checkHealth(): Promise<ApiResponse> {
    const response = await api.get<ApiResponse>('/');
    return response.data;
  }
};

export default api; 