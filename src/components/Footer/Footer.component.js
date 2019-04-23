import React from 'react'
import { StyledFooter } from './Footer.style';

const Footer = () => {
   
    return (
        <StyledFooter>
            &copy; - {new Date().getFullYear()}
        </StyledFooter>
    )
}

export default Footer