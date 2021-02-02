import React from "react";
import { Route } from "react-router-dom";
import { PostDataProvider } from "./posts/PostDataProvider";
import { PostDetails } from "./posts/PostDetails";
import { PostList } from "./posts/PostList";
import { CommentDataProvider } from "./comments/CommentDataProvider";
import { CommentList } from "./comments/CommentList";
import { CommentForm } from "./comments/CommentForm";
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
          <Route
            path="/posts/:id(\d+)"
            render={(props) => {
              return <PostDetails {...props} />;
            }}
          />
        </PostDataProvider>
      </div>
      <div>
        <CommentDataProvider>
          <Route
            exact
            path="/posts/:id(\d+)/comments"
            render={(props) => <CommentList {...props} />}
          ></Route>
        </CommentDataProvider>
      </div>
      <div>
        <CommentDataProvider>
          <Route
            exact
            path="/posts/:id(\d+)/comments/create"
            render={(props) => <CommentForm {...props} />}
          ></Route>
        </CommentDataProvider>
      </div>
      {/* <div>
        <CommentDataProvider>
          <Route
            exact
            path="/comments"
            render={(props) => <CommentList {...props} />}
          ></Route>
        </CommentDataProvider>
      </div> */}
    </>
  );
};
