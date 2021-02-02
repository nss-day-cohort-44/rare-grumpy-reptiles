import React from "react";
import { Route } from "react-router-dom";
import { PostDataProvider } from "./posts/PostDataProvider";
import { PostList } from "./posts/PostList";
import { PostForm } from "./posts/PostForm";

export const ApplicationViews = (props) => {
  return (
    <>
      <div>
        <PostDataProvider>
          <Route exact path="/posts" render={
              (props) => <PostList {...props} />
            } />
          <Route exact path="/posts/create" render={
              props => <PostForm {...props} />
          } />
          <Route exact path="/posts/edit/:postId(\d+)" render={
              props => <PostForm {...props} />
          } />
        </PostDataProvider>
      </div>
    </>
  );
};
