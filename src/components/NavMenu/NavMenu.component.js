import React from 'react'
import { StyledNav, StyledListItem, StyledLink } from "./NavMenu.style";

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