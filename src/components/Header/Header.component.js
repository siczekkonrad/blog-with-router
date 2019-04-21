import React from 'react'
import NavMenu from '../NavMenu/NavMenu.component';
import styled from 'styled-components';

const FlyingHeader = styled.header`
  display: block;
  width: 100%;
  position: ${props => (props.fixedHeader ? `fixed` : `static`)};
  transform: translate3d(0px, 0px, 0px);
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #2a5298;
  transition: all 0.3s ease-in-out;
  padding: 20px 0;
`;

const Container = styled.div`
    width: 80vw;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
`;

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