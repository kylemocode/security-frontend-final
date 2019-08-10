import React from 'react'
import { NavbarContainer,NavbarImage,NavbarTitle } from './style';

const Navbar = () => {
    return (
        <NavbarContainer className="container-fluid">
            <NavbarImage src="https://i.imgur.com/cnEq0M9.png"/>
            <NavbarTitle>Security Rabbit</NavbarTitle>
        </NavbarContainer>
    )
}

export default Navbar;

