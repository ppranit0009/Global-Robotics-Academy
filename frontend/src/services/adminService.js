import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

// Get dashboard stats
export const getDashboardStats = async () => {
  try {
    const [competitions, programs, teams, gallery, contact] = await Promise.all([
      api.get('/competitions'),
      api.get('/programs'),
      api.get('/teams'),
      api.get('/gallery'),
      api.get('/contact'),
    ]);

    return {
      competitions: competitions.data.length,
      programs: programs.data.length,
      teams: teams.data.length,
      gallery: gallery.data.length,
      contact: contact.data.length,
    };
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return {
      competitions: 0,
      programs: 0,
      teams: 0,
      gallery: 0,
      contact: 0,
    };
  }
};

export default api;
