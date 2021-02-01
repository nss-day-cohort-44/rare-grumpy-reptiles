import React from "react";
import { Route } from "react-router-dom";
import { PostDataProvider } from "./posts/PostDataProvider";
import { PostList } from "./posts/PostList";
import {CategoryList } from "./categories/CategoryList"
import {CategoryDataProvider } from "./categories/CategoryDataProvider"

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

        <CategoryDataProvider>
          <Route
            exact
            path="/categories"
            render={(props) => <CategoryList {...props} />}
          ></Route>
        </CategoryDataProvider>

      </div>
    </>
  );
};
