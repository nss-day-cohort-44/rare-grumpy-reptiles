import React from 'react'
import Button from 'react-bootstrap/Button'

export const AddPostButton = (props) => {
    return (
        <Button className="btn" variant="primary" onClick={() => props.history.push("/posts/create")}>
            + Post
        </Button>
    )
}