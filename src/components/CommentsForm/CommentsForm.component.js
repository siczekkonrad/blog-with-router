import React from 'react'
import { StyledForm } from './CommentsForm.style';

const CommentsForm = (props) => (
    <StyledForm onSubmit={props.handleSubmit}>
        <div>
            <label>Imię:</label>
            <input type='text' name='name'/>
        </div>
        <div>
            <label>Komantarz:</label>
            <textarea name='commment' />
        </div>
        <input type='submit' value='dodaj'/>
    </StyledForm>
)

export default CommentsForm;