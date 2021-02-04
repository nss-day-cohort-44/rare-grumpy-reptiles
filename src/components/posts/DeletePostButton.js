import React, { useContext } from "react"
import { PostContext } from "./PostDataProvider"
import Button from "react-bootstrap/Button"

export const DeletePostButton = (props) => {
    const { deletePost } = useContext(PostContext)
     
    const postId = parseInt(props.match.params.id)

    return (
        <Button className="btn" variant="secondary" onClick={() => deletePost(postId).then(()=> props.history.push("/posts"))}>Delete Post</Button> 
    )
}