/**
 * Centralized API Base URL Configuration.
 * Reads import.meta.env.VITE_API_URL (configured in Vercel / .env).
 * In production without VITE_API_URL, defaults safely to the live Render backend URL.
 */
export const API_BASE_URL = (
  import.meta.env.VITE_API_URL || 'https://bizlink-backend-f110.onrender.com'
).replace(/\/$/, '');
