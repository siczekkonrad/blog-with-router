import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledPostsList = styled.ul`
    list-style: none;
    padding-left: 0;
`;

const StyledPostListItem = styled.li`
  width: 100%;
  padding: 10px 15px;
  position: relative;
  background: #eeeeee;
  color: #fff;
  transition: all 0.6s ease;
  margin-top: 15px;



  &:hover {
    background: #2a5298;

    a {
      color: #fff;
    }
  }
`;

const StyledPostLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: #2a5298;
`;

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