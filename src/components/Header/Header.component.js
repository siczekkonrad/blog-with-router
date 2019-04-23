import React from 'react'
import NavMenu from '../NavMenu/NavMenu.component';
import { FlyingHeader, Container } from "./Header.style";

const Header = (props) => {
    return (
      <FlyingHeader fixedHeader={props.fixedHeader}>
            <Container>
                <NavMenu />
            </Container>
      </FlyingHeader>
    );
}

export default Header