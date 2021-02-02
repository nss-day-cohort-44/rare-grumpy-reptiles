import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "./PostDataProvider";
import { Link } from "react-router-dom";
import {AddCommentButton} from "../comments/AddCommentButton"



import "./Post.css";

export const PostDetails = (props) => {
  const { getPostById } = useContext(PostContext);
  const [post, setPost] = useState({});

  useEffect(() => {
    getPostById(props.match.params.id).then((parsedPost) =>
      setPost(parsedPost)
    );
    console.log("POSTS", post);
  }, []);

  return (
    <>
      <div className="postDetails">
        <h3>{post.title}</h3>
        <div>{post.content}</div>
        <div>post author</div>
        <div>{post.publication_date}</div>
        <Link to={`/posts/${post.id}/comments`}>Check Out Comments for this Post!</Link>
        <div>
        <AddCommentButton {...props} />
      </div>
        
        
      </div>
    </>
  );
};
