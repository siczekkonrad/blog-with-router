import React from 'react'
import {Link} from 'react-router-dom'

const NavMenu = () => (
    <ul>
        <Link to='/'>Home</Link>
        <Link to='/autor'>Autor</Link>
        <Link to='/kontakt'>Kontakt</Link>
    </ul>
)

export default NavMenu