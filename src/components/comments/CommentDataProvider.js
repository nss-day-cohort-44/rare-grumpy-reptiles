import React, { useState } from "react";

export const CommentContext = React.createContext();

export const CommentDataProvider = (props) => {
  const [comments, setComments] = useState([]);

  const getAllComments = () => {
    return fetch("http://localhost:8088/comments")
      .then((res) => res.json())
      .then(setComments);
  };

  return (
    <CommentContext.Provider
      value={{
        comments,
        getAllComments,
      }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};
