import React from 'react'
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";


export const AddCommentButton = (props) => {
    console.log(props)
    
    
    return (
        <Link to={`/posts/${props.match.params.id}/comments/create`}>Add comment</Link>
    )
}