import React from 'react'

const CommentsList = (props) => (
    <div className='CommentsList'>
        {props.comments.map(comment => (
            <div className='comment' key={Math.random().toString(13).replace('0.', '')}>
                
                {comment.comment}
            </div>
        ))}
    </div>
)

export default CommentsList