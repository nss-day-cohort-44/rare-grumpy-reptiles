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

  const getPostByUser = (userId) => {
    return fetch(
      `http://localhost:8088/posts/?user_id=${userId}?_expand=username`
    );
  };
  return (
    <PostContext.Provider
      value={{
        posts,
        getAllPosts,
        getPostById,
        getPostByUser,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
