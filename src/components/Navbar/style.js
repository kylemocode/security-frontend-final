import styled from 'styled-components';

export const NavbarContainer = styled.div`
    width: 100%;
    font-family: "微軟正黑體";
    height: 75px;
    color: white ;
    margin-top: 0;
    display: flex;
    align-items: center;
    background-color: black;
    opacity: ${props => props.opacity ? props.opacity : 0.7};
    position: fixed;
    top: 0;
    z-index: 100;
`
// radial-gradient( circle 484px at 49.4% 19%,  rgba(23,156,214,1) 0%, rgba(52,48,111,1) 100.2% )
export const NavbarImage = styled.img`
    width: ${props => props.imgWidth ? props.imgWidth : "50px"};
    height: ${props => props.imgHeight ? props.imgHeight : "50px"};
    margin-right: 10px;
    margin-left: 30px; 
    margin-bottom: ${props => props.imgmb ? props.imgmb : "0px"};
    opacity: 1;
    z-index: 10;
`
export const NavbarTitle = styled.h3`
    margin-top: 0px;
    margin-left: 15px;
    margin-bottom: 0px;
    font-family: "Play";
    margin-left: 20px;
    opacity: 1;
    z-index: 10;
`