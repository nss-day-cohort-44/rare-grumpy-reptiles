import React from 'react'
import Button from 'react-bootstrap/Button'


return (
    <Button className="btn" variant="primary" onClick={() => props.history.push("/posts/form")}>
        + Post
    </Button>
)