import axios from 'axios';

// Create an Axios instance configured for the Laravel backend API
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1',
  withCredentials: true, // Required for Laravel Sanctum cookie-based authentication / CSRF
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Optional: Helper to get CSRF cookie for Laravel Sanctum before POST/PUT requests if needed
export const getCsrfCookie = async () => {
  const sanctumBase = import.meta.env.VITE_SANCTUM_URL || 'http://localhost:8000';
  await axios.get(`${sanctumBase}/sanctum/csrf-cookie`, {
    withCredentials: true,
  });
};

// Types for API payloads
export interface LeadPayload {
  full_name: string;
  email: string;
  phone?: string;
  message: string;
  service_interest?: string;
  budget_range?: string;
}

export interface NewsletterPayload {
  email: string;
}

// API Service Methods
export const apiService = {
  // Submit contact or consultation lead
  submitLead: async (payload: LeadPayload) => {
    try {
      const response = await api.post('/leads', payload);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || { message: 'Network or server error occurred.' };
    }
  },

  // Subscribe to newsletter
  subscribeNewsletter: async (payload: NewsletterPayload) => {
    try {
      const response = await api.post('/newsletter', payload);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || { message: 'Network or server error occurred.' };
    }
  },
};

export default apiService;
