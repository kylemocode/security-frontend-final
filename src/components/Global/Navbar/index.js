import React from 'react'
import { NavbarContainer,NavbarImage,NavbarTitle } from './style';

const Navbar = () => {
    return (
        <NavbarContainer className="container-fluid">
            <NavbarImage 
                src="https://s3-ap-northeast-1.amazonaws.com/www.memepr.com/smartQA/Security+Rabbit+logo+design_dark_logo.png"
                imgWidth={'70px'} 
                imgHeight={'70px'}/>
            <NavbarTitle>Security Rabbit</NavbarTitle>
        </NavbarContainer>
    )
}

export default Navbar;

