import React, { useContext, useEffect } from "react";
import { Post } from "./Post";
import { PostContext } from "./PostDataProvider";
import {AddPostButton} from "./AddPostButton"
import "./Post.css";

export const PostList = (props) => {
  const { posts, getAllPosts } = useContext(PostContext);

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <div>
        <AddPostButton {...props} />
      </div>
      <div className="postList">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};
