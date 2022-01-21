import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <BrowserRouter>
      <NavWrapper>
        <Nav>
          <Link to="/" className="nav-item">
            ChatApp
          </Link>
          <div>
            {/* <Link to="/register">register</Link> */}
            {/* <Link to="/login" className="nav-item">
              LOGIN
            </Link> */}
          </div>
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
