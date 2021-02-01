import { useContext, useEffect } from "react"
import React { useContext, useState, useEffect } from 'react'
import { PostContext } from "./PostDataProvider"
// import { CategoriesContext } from "../categories/CategoriesDataProvider"
// react-bootstrap components
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

export const PostForm = (props) => {
    const { addPost, getPostById } = useContext(PostContext)
    const [post, setPost] = useState({})

    // const { categories, getCategories } = useContext(CategoriesContext)

    const editMode = props.match.params.hasOwnProperty("postId")

    const handleControlledInputChange = (event) => {
        const newPost = Object.assign({}, post)
        newPost[event.target.name] = event.target.value
        setPost(newPost)
    }

    const getPostInEditMode = () => {
        if (editMode) {
            const postToEdit = parseInt(props.match.params.postId)

            const selectedPost = getPostById(postToEdit)
            setPost(selectedPost)
        }
    }

    useEffect(() => {
        getCategories()
        getPostInEditMode()
    }, [])





}