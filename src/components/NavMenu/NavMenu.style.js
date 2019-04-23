import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  list-style: none;
  padding-left: 0;
`;

export const StyledListItem = styled.li`
  padding: 0 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    color: #36d1dc;
  }
`;
