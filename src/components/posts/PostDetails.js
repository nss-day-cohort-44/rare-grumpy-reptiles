import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "./PostDataProvider";
import { Link } from "react-router-dom";
import "./Post.css";

export const PostDetails = (props) => {
  const { getPostByUser } = useContext(PostContext);
  const [post, setPost] = useState({});

  useEffect(() => {
    getPostByUser(props.match.params.id).then((parsedPost) =>
      setPost(parsedPost)
    );
    console.log("POSTS", post);
  }, []);

  return (
    <>
      <div className="postDetails">
        <h3>{post.title}</h3>
        <div>{post.content}</div>
        <div>{post.user.username}</div>
        <div>{post.publication_date}</div>
        <Link to={`/`}>Comments</Link>
      </div>
    </>
  );
};
