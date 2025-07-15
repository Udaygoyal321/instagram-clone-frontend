import React, { useEffect, useState } from "react";
import api from "../api";
import Post from "../components/ui/Post";
import { Link } from "react-router-dom";

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const userId = localStorage.getItem("userId");

  const fetchMyPosts = async () => {
    try {
      const res = await api.get("/posts/user/me");
      setPosts(res.data);
    } catch (err) {
      console.error("Failed to load profile posts", err);
    }
  };

  useEffect(() => {
    fetchMyPosts();
  }, []);

  return (
    <div className="max-w-lg mx-auto p-4">
        <Link to="/logout" className="text-red-600">Logout</Link>
      <h1 className="text-xl font-bold mb-4">My Profile</h1>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => (
          <Post key={post._id} post={post} currentUserId={userId} />
        ))
      )}
    </div>
  );
};

export default Profile;
