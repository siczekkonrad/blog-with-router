import React from 'react';
import styled from 'styled-components';
import TextSection from '../Text-Section/Text-Section.component';

const StyledCommentContainer = styled.div`
    border: 1px solid #eee;
    margin-top: 15px;
    padding: 14px;
`;

const CommentsList = props => (
  <div className="CommentsList">
    <label>Liczba komentarzy: {props.comments.length}</label>
    {props.comments.map(comment => (
      <StyledCommentContainer
        key={Math.random()
          .toString(13)
          .replace("0.", "")}
      >
        Autor : <b>{comment.name}</b>
        <TextSection>{comment.comment}</TextSection>
      </StyledCommentContainer>
    ))}
  </div>
);

export default CommentsList