import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

import { clientLogger } from '../logger';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

/**
 * API error response structure (matches backend format)
 */
export interface ApiErrorResponse {
  error: {
    code: string;
    message: string;
  };
}

/**
 * Custom API error with typed response
 */
export class ApiError extends Error {
  constructor(
    public readonly code: string,
    message: string,
    public readonly status: number,
    public readonly originalError?: AxiosError<ApiErrorResponse>,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Get auth token from localStorage
 */
function getAuthToken(): string | null {
  return localStorage.getItem('authToken');
}

/**
 * Request interceptor — inject auth token
 */
function requestInterceptor(
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig {
  const token = getAuthToken();

  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}

/**
 * Response interceptor — handle success
 */
function responseInterceptor(response: AxiosResponse): AxiosResponse {
  return response;
}

/**
 * Error interceptor — transform to ApiError + log
 */
function errorInterceptor(error: AxiosError<ApiErrorResponse>): never {
  const status = error.response?.status ?? 0;
  const errorData = error.response?.data?.error;

  // Log error for debugging/monitoring
  clientLogger.error('API request failed', {
    url: error.config?.url,
    method: error.config?.method,
    status,
    code: errorData?.code,
    message: errorData?.message,
  });

  // Handle 401 — clear token and redirect to login
  if (status === 401) {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  }

  // Transform to ApiError
  const apiError = new ApiError(
    errorData?.code ?? 'UNKNOWN_ERROR',
    errorData?.message ?? error.message ?? 'Unknown error',
    status,
    error,
  );

  throw apiError;
}

/**
 * Create configured axios instance
 */
function createApiClient(): AxiosInstance {
  const client = axios.create({
    baseURL: API_BASE_URL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  client.interceptors.request.use(requestInterceptor);
  client.interceptors.response.use(responseInterceptor, errorInterceptor);

  return client;
}

export const apiClient = createApiClient();
