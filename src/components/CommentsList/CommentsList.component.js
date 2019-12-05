import React from 'react';
import TextSection from '../Text-Section/Text-Section.component';
import { StyledCommentContainer } from './CommetnsList.style';

function CommentsList(props) {

  const { length } = props.comments;
  return (
    <div className="CommentsList">
      <label>Liczba komentarzy: {length}</label>
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
  )
};

export default CommentsList