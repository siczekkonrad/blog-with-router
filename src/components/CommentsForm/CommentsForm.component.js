import React from 'react'
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 50vw;
  max-width: 500px;

  input,
  textarea {
    margin-top: 10px;
    margin-bottom: 20px;
    display: block;
    width: 100%;
    appearance: none;
    border: 1px solid #eee;
    padding: 10px;
  }
  input[type="submit"] {
    background: #2a5298;
    border: 1px solid #2a5298;
    color: #fff;

    &:hover {
      opacity: 0.95;
    }
  }
`;
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