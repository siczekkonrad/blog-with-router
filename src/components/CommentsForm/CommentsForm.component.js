import React from 'react'

const CommentsForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <label>Name</label>
        <input type='text' name='name'/>
        <textarea name='commment' />
        <input type='submit' value='dodaj'/>
    </form>
)

export default CommentsForm