import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const StyledNav = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    list-style: none;
    padding-left: 0;
`;

const StyledListItem = styled.li`
    padding: 0 20px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #FFF;
    transition: all 0.3s ease;

    &:hover {
        color: #36D1DC;
    }
`;
const NavMenu = () => (
  <StyledNav>
    <StyledListItem>
      <StyledLink to="/">Home</StyledLink>
    </StyledListItem>
    <StyledListItem>
      <StyledLink to="/autor">Autor</StyledLink>
    </StyledListItem>
    <StyledListItem>
      <StyledLink to="/kontakt">Kontakt</StyledLink>
    </StyledListItem>
  </StyledNav>
);

export default NavMenu;