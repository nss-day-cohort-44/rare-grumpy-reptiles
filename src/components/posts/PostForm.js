import React, {useContext, useState, useEffect} from "react"
import { PostContext } from "./PostDataProvider"
import { CategoryContext } from "../categories/CategoryDataProvider"
// react-bootstrap components
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

export const PostForm = (props) => {
    const { updatePost, addPost, getPostById } = useContext(PostContext)
    const [post, setPost] = useState({})

    const { categories, getAllCategories } = useContext(CategoryContext)

    const editMode = props.match.params.hasOwnProperty("postId")

    const handleControlledInputChange = (event) => {
        const newPost = Object.assign({}, post)
        newPost[event.target.name] = event.target.value
        setPost(newPost)
    }

    const getPostInEditMode = () => {
        if (editMode) {
            const postToEdit = parseInt(props.match.params.postId)
            
            getPostById(postToEdit)
                .then((selectedPost) => setPost(selectedPost))
        }
    }

    useEffect(() => {
        getAllCategories()
        getPostInEditMode()
    }, [])

    useEffect(() => {
        console.log("categories", categories)
    }, [categories])

    const createNewPost = () => {
        if (editMode) {
            updatePost({
                id: post.id,
                user_id: post.user_id,
                category_id: post.category_id,
                title: post.title,
                publication_date: post.publication_date,
                image_url: post.image_url,
                content: post.content,
                approved: post.approved
            })
            .then(() => props.history.push(`/posts/${post.id}`))
        }
        else {
            addPost({
                user_id: parseInt(localStorage.getItem("rare_user_id")),
                category_id: parseInt(post.category_id),
                title: post.title,
                image_url: post.image_url,
                content: post.content
                })
            .then(() => props.history.push("/posts"))
        }
    }

    return (
        <Container>
            <Form className="postForm">
            <h3 className="postForm__title">{editMode ? "Edit Post" : "Add New Post"}</h3>
            <Form.Group>
                <div className="form-group">
                    <Form.Label htmlFor="title">Article Title</Form.Label>
                    <Form.Control type="text" name="title" required autoFocus className="form-control"
                        proptype="varchar"
                        defaultValue={post.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </Form.Group>
            <Form.Group>
                <div className="form-group">
                    <Form.Label htmlFor="image_url">Image URL</Form.Label>
                    <Form.Control type="text" name="image_url" autoFocus className="form-control"
                        proptype="varchar"
                        defaultValue={post.image_url}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </Form.Group>
            <Form.Group>
                <div className="form-group">
                    <Form.Label htmlFor="content">Article Content</Form.Label>
                    <Form.Control as="textarea" rows={10} name="content" required autoFocus className="form-control"
                        proptype="varchar"
                        defaultValue={post.content}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </Form.Group>
            <Form.Group>
                <div className="form-group">
                    <Form.Label htmlFor="category_id">Category</Form.Label>
                    <Form.Control as="select" name="category_id" className="form-control"
                        proptype="int"
                        value={post.category_id}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a category</option>
                        {categories.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.label}
                            </option>
                        ))}
                    </Form.Control>
                </div>
            </Form.Group>
            <Button className="btn" variant="primary" type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createNewPost()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Save"}
            </Button>
            {
                editMode 
                ?
                <Button className="btn" variant="secondary" onClick={() => props.history.push("/posts")}>Cancel</Button>
                :
                ""
            }
            </Form>
        </Container>
    )
}