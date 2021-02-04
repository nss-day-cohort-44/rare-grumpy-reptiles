import React from 'react'
import Button from 'react-bootstrap/Button'

export const EditPostButton = (props) => {
    const postId = parseInt(props.match.params.id)

    return (
        <Button className="btn" variant="primary" onClick={() => props.history.push(`/posts/edit/${postId}`)}>
            Edit Post
        </Button>
    )
}