import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <NavWrapper>
      <Nav>
        <Link to="/" className="nav-item">
          ChatApp
        </Link>
        <div>
          {/* <Link to="/register">register</Link> */}
          <Link to="/login" className="nav-item">
            LOGIN
          </Link>
        </div>
      </Nav>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: #242526;
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
