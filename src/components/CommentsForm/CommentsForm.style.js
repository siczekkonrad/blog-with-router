import styled from 'styled-components'

export const StyledForm = styled.form`
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