import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(3,27,78,.1);
  background-color: #FFFFFF;
  z-index: 100;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
  height: 65px;
`;

const Logo = styled.h1`
  color: #3177C7;
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  text-decoration: none;
`;

const NavList = styled.ul`
  display: flex;
  margin: 0;
`;

const NavLi = styled.li`
  height: 36px;
  margin: 0 30px 0 0;
  &:last-child {
    margin-right: 0;
  }
`;

const StyledLink = styled(Link)`
  line-height: 36px;
  color: #6d6f7b;
  transition: .3s cubic-bezier(.25,.8,.5,1);
  text-decoration: none;
  &:hover {
    color: #1565C0;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderInner>
        <StyledLink to="/">
            <Logo>eLanista.pl</Logo>
        </StyledLink>
    </HeaderInner>
</HeaderWrapper>
)

export default Header
