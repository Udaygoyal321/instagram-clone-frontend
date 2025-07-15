import React, { useEffect, useState } from "react";
import api from "../api";
import PostForm from "../components/PostForm";
import Post from "../components/ui/Post"; // ✅ Import Post component
import { Link } from "react-router-dom";
import CommentSection from "../components/CommentSection";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const userId = localStorage.getItem("userId"); // ✅ Get current user ID

  const fetchPosts = async () => {
    try {
      const res = await api.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.error("Failed to fetch posts", err);
    }
  };

  const handleCreatePost = async (data) => {
    try {
      await api.post("/posts", data);
      fetchPosts(); // refresh feed
    } catch (err) {
      alert("Failed to post");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-lg mx-auto p-4">
        <Link to="/logout" className="text-red-600">Logout</Link>
      <h1 className="text-xl font-bold mb-4">Feed</h1>
      <PostForm onSubmit={handleCreatePost} />

      {posts.map((post) => (
  <div key={post._id} className="border-b border-gray-200 py-4">
    <p>{post.caption}</p>
    <p className="text-sm text-gray-500">@{post.userId?.username}</p>

    <CommentSection post={post} />
  </div>
))}

    </div>
  );
};

export default Feed;
