import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostDataProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    return fetch("http://localhost:8088/posts")
      .then((res) => res.json())
      .then(setPosts);
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        getAllPosts,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
