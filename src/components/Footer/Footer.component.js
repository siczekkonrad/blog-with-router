import React from 'react'
import { StyledFooter } from './Footer.style';

const Footer = () => (
	<StyledFooter>
		&copy; - {new Date().getFullYear()}
	</StyledFooter>
)


export default Footer