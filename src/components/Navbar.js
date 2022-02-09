import React from "react";
import styled from "styled-components";

import { BrowserRouter } from "react-router-dom";
import { SignOutButton } from "./auth/SignOutButton";

export const Navbar = () => {
  return (
    <BrowserRouter>
      <NavWrapper>
        <Nav>
          <Logo>ChatApp</Logo>
          <SignOutButton />
        </Nav>
      </NavWrapper>
    </BrowserRouter>
  );
};

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100vw;
  background: #242526;
  position: fixed;
  z-index: 100;
  border-bottom: solid 3px #333;
`;

const Logo = styled.h2`
  color: white;
  font-weight: 600;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 70vw;

  .nav-item {
    text-decoration: none;
    color: white;
    font-weight: 600;
  }
`;
