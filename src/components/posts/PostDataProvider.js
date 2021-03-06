import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostDataProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    return fetch("http://localhost:8088/posts")
      .then((res) => res.json())
      .then(setPosts);
  };

  const getPostById = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`).then((res) => res.json());
  };

  const addPost = (post) => {
    return fetch("http://localhost:8088/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then(getAllPosts);
  };

  const updatePost = (post) => {
    return fetch(`http://localhost:8088/posts/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then(getAllPosts);
  };

  const getPostByUser = (userId) => {
    return fetch(`http://localhost:8088/posts?user_id=${userId}`);
  };
  return (
    <PostContext.Provider
      value={{
        posts,
        getAllPosts,
        getPostById,
        addPost,
        updatePost,

        getPostByUser,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
