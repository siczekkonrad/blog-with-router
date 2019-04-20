import React from 'react'


const Post = (props) => (
    <div>
        <h1>{props.match.params.id}</h1>
    </div>
) 

export default Post