import React, {useContext, useState, useEffect} from "react"
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import {CommentContext} from "./CommentDataProvider"

export const CommentForm = (props) => {
const {addComment } = useContext(CommentContext)
const [comment, setComment] = useState({})

// changes the State of comment below

const handleControlledInputChange = (event) => {
    const newComment = Object.assign({}, comment)
    newComment[event.target.name] = event.target.value
    setComment(newComment)
}


const createNewComment = () => {
    addComment({
        
    })
}

return (
    
 <Form>
 <h3 className="postForm__title">{"Add a Comment"}</h3>
 <Form.Group>
     <div className="form-group">
         <Form.Label htmlFor="title">Comment</Form.Label>
         <Form.Control type="text" name="title" required autoFocus className="form-control"
             proptype="varchar"
             defaultValue={Comment.title}
             onChange={handleControlledInputChange}
         />
     </div>
     <Button className="btn" variant="primary" type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createNewComment()
                }}
                className="btn btn-primary">
            
            Submit</Button>
 </Form.Group>
 </Form>
 )



}
