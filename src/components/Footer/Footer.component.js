import React from 'react'
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 20px;
  margin-top: 60px;
  background: #2a5298;
  color: #fff;
  text-align: center;
`;
const Footer = () => {
   
    return (
        <StyledFooter>
            &copy; - {new Date().getFullYear()}
        </StyledFooter>
    )
}

export default Footer