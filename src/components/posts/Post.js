import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

//this is a link for the hot dog name to take you to the form page

export const Post = ({ post }) => (
  <section className="post">
    <div className="post_name">
      <Link to={`/posts/${post.id}`}>{post.name}</Link>
    </div>
  </section>
);
