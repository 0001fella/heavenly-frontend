// components/BlogDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const { postId } = useParams(); // Get the post ID from the URL

  // For simplicity, let's assume you have an array of posts
  const posts = {
    "blog-post-1": {
      title: "Blog Post 1",
      content: "This is the content for Blog Post 1. Here, we will talk about the first topic."
    },
    "blog-post-2": {
      title: "Blog Post 2",
      content: "This is the content for Blog Post 2. Here, we will talk about the second topic."
    }
  };

  const post = posts[postId];

  if (!post) {
    return (
      <div className="text-white">
        <h1>Post not found</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-yellow-400">{post.title}</h1>
      <p className="text-white mt-4">{post.content}</p>
    </div>
  );
}

export default BlogDetails;
