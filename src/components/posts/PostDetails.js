import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "./PostDataProvider";
import { Link } from "react-router-dom";
import { AddCommentButton } from "../comments/AddCommentButton";

// import "./Post.css";

export const PostDetails = (props) => {
  const { getPostById, getPostByUser, posts } = useContext(PostContext);
  const [post, setPost] = useState({ user: { username: null } });

  useEffect(() => {
    // debugger;
    getPostById(props.match.params.id).then((parsedPost) => {
      setPost(parsedPost);
    });
  }, []);
  console.log("POST", post);
  console.log("PropS", props);

  return (
    <>
      <div className="postDetails">
        <h3>{post.title}</h3>
        <div>{post.content}</div>
        <div>{post.user.username}</div>
        <div>{post.publication_date}</div>
        <Link to={`/posts/${post.id}/comments`}>
          Check Out Comments for this Post!
        </Link>
        <div>
          <AddCommentButton {...props} />
        </div>
        <Link to={`posts/edit/${post.id}`}>Edit</Link>
      </div>
    </>
  );
};
