import React, { useState } from "react";
import api from "../api";

const CommentSection = ({ post }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post.comments || []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    try {
      const res = await api.post(`/posts/${post._id}/comment`, { comment });
      setComments(res.data.comments); // update local comments
      setComment("");
    } catch (err) {
      alert("Failed to comment");
    }
  };

  return (
    <div className="mt-2">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
          className="border px-2 py-1 w-full text-sm"
        />
        <button type="submit" className="text-blue-600 text-sm">Post</button>
      </form>

      <div className="mt-2 text-sm">
        {comments.map((c, idx) => (
          <p key={idx}>
            <span className="font-medium">@{c.userId?.username || "user"}:</span> {c.comment}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
