import React, { useContext, useEffect } from "react";
import {Post} from "./Post";
import {PostContext} from "./PostDataProvider";
import "./Post.css"

export const PostList = () => {
    const { posts, getPosts} = useContext(PostContext);
    useEffect(() => {
        getAllPosts();
    }, []);

    if (posts.id === )
    
}