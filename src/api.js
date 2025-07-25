import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // ✅ CRA syntax
  withCredentials: true,
});

// ✅ Attach token to each request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ✅ Post helpers
export const likePost = (postId) => api.post(`/posts/${postId}/like`);
export const unlikePost = (postId) => api.post(`/posts/${postId}/unlike`);
export const toggleLikePost = (postId) => api.put(`/posts/${postId}/like`);
export const addComment = (postId, comment) =>
  api.post(`/posts/${postId}/comment`, { comment });

export default api;
