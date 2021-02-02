import React, { useState } from "react";

export const CommentContext = React.createContext();

export const CommentDataProvider = (props) => {
  const [comments, setComments] = useState([]);

  const getAllComments = () => {
    return fetch("http://localhost:8088/comments")
      .then((res) => res.json())
      .then(setComments);
  };

  const getCommentsByPostId = (id) => {
    return fetch(`http://localhost:8088/comments?post_id=${id}`)
    .then((res) => res.json())
    .then(setComments)
    ;
  };

  const addComment = post => {
    return fetch("http://localhost:8088/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(getAllComments)
  }

  return (
    <CommentContext.Provider
      value={{
        comments,
        getAllComments,
        getCommentsByPostId,
        addComment
      }}
    >
      {props.children}
    </CommentContext.Provider>
  );





};
