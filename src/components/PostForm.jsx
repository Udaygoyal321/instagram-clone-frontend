// src/components/PostForm.jsx
import React, { useState } from "react";

const PostForm = ({ onSubmit }) => {
  const [caption, setCaption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!caption.trim()) return;
    onSubmit({ caption });
    setCaption("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="What's on your mind?"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full"
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Post
      </button>
    </form>
  );
};

export default PostForm;
