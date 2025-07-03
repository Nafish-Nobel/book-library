import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
// This file sets up a custom Axios instance with a base URL and default headers.
// It can be imported and used throughout the application to make API requests.