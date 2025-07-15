import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Backend base URL
});

// attach token to each request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 👇 Add these like/unlike functions here
export const likePost = (postId) => api.post(`/posts/${postId}/like`);
export const unlikePost = (postId) => api.post(`/posts/${postId}/unlike`);
export const toggleLikePost = (postId) => api.put(`/posts/${postId}/like`);
export const addComment = (postId, comment) => api.post(`/posts/${postId}/comment`, { comment });



// You can also add other API helpers here if needed
export default api;
