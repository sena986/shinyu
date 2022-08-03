import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../sy3-2.png";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  padding: 20px 100px;
  height: 120px;
  z-index: 10;
  color: #a4a1a1;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

const Box = styled.div``;

const Alink = styled(Link)`
  margin: 0px 30px;
`;

function Header() {
  return (
    <Nav>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <Box>
        <Alink to="/office">大阪事務所</Alink>
        <Alink to="/office">第一プラント</Alink>
        <Alink to="/office">第二プラント</Alink>
        <Alink to="/office">第三プラント</Alink>
      </Box>
    </Nav>
  );
}

export default Header;
