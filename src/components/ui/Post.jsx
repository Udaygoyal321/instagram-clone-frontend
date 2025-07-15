import React, { useState } from "react";
import { toggleLikePost, addComment } from "../../api";

const Post = ({ post, currentUserId }) => {
  const [likes, setLikes] = useState(post.likes.length);
  const [liked, setLiked] = useState(post.likes.includes(currentUserId));
  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleLikeToggle = async () => {
    try {
      const res = await toggleLikePost(post._id);
      setLikes(res.data.likes);
      setLiked(res.data.liked);
    } catch (err) {
      console.error("Like toggle failed", err);
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const res = await addComment(post._id, newComment);
      setComments(res.data.comments);
      setNewComment("");
    } catch (err) {
      console.error("Comment failed", err);
    }
  };

  return (
    <div className="border-b border-gray-200 py-3">
      <p className="text-base">{post.caption}</p>
      <p className="text-sm text-gray-500">@{post.userId.username}</p>

      <button onClick={handleLikeToggle} className="text-sm mt-1">
        {liked ? "❤️ Unlike" : "🤍 Like"} ({likes})
      </button>

      {/* Comments */}
      <div className="mt-2">
        <form onSubmit={handleAddComment} className="flex gap-2 mb-1">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="border rounded px-2 py-1 flex-1 text-sm"
          />
          <button type="submit" className="text-sm bg-blue-500 text-white px-2 rounded">
            Post
          </button>
        </form>

        {comments.length > 0 && (
          <ul className="text-sm text-gray-700">
            {comments.map((c, i) => (
              <li key={i}>• {c.comment}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Post;
