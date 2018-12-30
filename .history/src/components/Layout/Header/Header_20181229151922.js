import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  width: 100%;
  margin-bottom: 25px;
  border-bottom: 1px solid #e5e6e7;
  background-color: #FFFFFF;
  z-index: 100;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
  height: 60px;
`;

const Logo = styled.h1`
  color: #3177C7;
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: #6d6f7b;
  text-decoration: none;
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderInner>
        <StyledLink to="/">
            <Logo>WordCounter</Logo>
        </StyledLink>
    </HeaderInner>
</HeaderWrapper>
)

export default Header
