import React from "react";
import { authConfig } from "../../auth/config";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./styles";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Início
          </NavLink>
        </NavMenu>
        <NavBtn onClick={() => authConfig.auth().signOut()}>
          <NavBtnLink to="/login">Sair</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
