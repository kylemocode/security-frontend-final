import React from "react";
import { NavbarContainer, NavbarImage, NavbarTitle, LogoutBtn } from "./style";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/authAction";

const Navbar = React.memo(props => {
  const dispatch = useDispatch();

  return (
    <NavbarContainer className="container-fluid">
      <NavbarImage
        src="https://s3-ap-northeast-1.amazonaws.com/www.memepr.com/smartQA/Security+Rabbit+logo+design_dark_logo.png"
        imgWidth={"70px"}
        imgHeight={"70px"}
      />
      <NavbarTitle>Security Rabbit</NavbarTitle>
      {props.noLogOut ? null : (
        <LogoutBtn onClick={() => dispatch(logout)}>Log Out</LogoutBtn>
      )}
    </NavbarContainer>
  );
});

export default Navbar;
