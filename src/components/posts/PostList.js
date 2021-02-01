import React, { useContext, useEffect, useState } from "react";
import { Post } from "./Post";
import { PostContext } from "./PostDataProvider";
import "./Post.css";

export const PostList = () => {
  const { posts, getAllPosts } = useContext(PostContext);
  const { filteredPosts, setPost } = useState([]);
  useEffect(() => {
    getAllPosts();
  }, []);
  useEffect(() => {
    console.log("POSTS", posts);
  }, [posts]);

  return (
    <div className="postList">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
