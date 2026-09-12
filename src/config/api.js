/**
 * Centralized API Base URL Configuration.
 * Defaults to http://localhost:5000 in local development if VITE_API_URL is not set.
 */
export const API_BASE_URL = (
  import.meta.env.VITE_API_URL || 'http://localhost:5000'
).replace(/\/$/, '');
