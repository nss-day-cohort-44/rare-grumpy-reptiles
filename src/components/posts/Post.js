import React, { useContext } from "react";
// import "./Post.css";
import { Link } from "react-router-dom";

export const Post = ({ post }) => (
  <section className="post">
    <div className="post_name">
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
      <div className="postContent">{post.content}</div>
    </div>
  </section>
);
