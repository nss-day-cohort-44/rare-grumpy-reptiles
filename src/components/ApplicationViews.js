import React from "react";
import { Route } from "react-router-dom";
import { PostDataProvider } from "./posts/PostDataProvider";
import { PostList } from "./posts/PostList";

export const ApplicationViews = (props) => {
  return (
    <>
      <div>
        <PostDataProvider>
          <Route
            exact
            path="/posts"
            render={(props) => <PostList {...props} />}
          ></Route>
        </PostDataProvider>
      </div>
    </>
  );
};
