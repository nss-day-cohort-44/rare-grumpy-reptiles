import React from 'react'
import Button from 'react-bootstrap/Button'

export const AddCommentButton = (props) => {
    console.log(props)
    
    return (
        <Button className="btn" variant="primary" onClick={() => props.history.push(`${props.match.params.id}/comments/create/`)}>
            + Comment
        </Button>
    )
}