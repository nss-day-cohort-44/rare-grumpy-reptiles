import React from "react";
import { Route } from "react-router-dom";
import { PostDataProvider } from "./posts/PostDataProvider";
import { PostList } from "./posts/PostList";
import {CategoryList } from "./categories/CategoryList"
import {CategoryDataProvider } from "./categories/CategoryDataProvider"
import { CategoryManager } from "./categories/CategoryManager";

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
            render={(props) => <CategoryManager {...props} />}
          ></Route>
        </CategoryDataProvider>

      </div>
    </>
  );
};
