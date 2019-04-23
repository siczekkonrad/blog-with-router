import React from 'react';
import { StyledPostsList , StyledPostLink, StyledPostListItem} from "./PostsList.style";

const PostsList = props => (
  <StyledPostsList>
    {props.posts.map(post => (
      <StyledPostListItem>
        <StyledPostLink to={`/post/${post.id}`}>{post.title}</StyledPostLink>
      </StyledPostListItem>
    ))}
  </StyledPostsList>
);

export default PostsList;