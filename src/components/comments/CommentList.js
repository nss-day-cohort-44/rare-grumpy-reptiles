import React, { useContext, useEffect, useState } from "react";
import { Comment } from "./Comment";
import { CommentContext } from "./CommentDataProvider";
import "./Comment.css";

export const CommentList = () => {
  const { comments, getAllComments } = useContext(CommentContext);
  const { filteredComments, setComments } = useState([]);
  useEffect(() => {
    getAllComments();
  }, []);

  useEffect(() => {
    console.log("Comments", comments);
  }, [comments]);

  return (
    <div className="commentList">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};