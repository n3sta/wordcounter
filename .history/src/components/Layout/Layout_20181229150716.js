import React from 'react'
import styled from 'styled-components'

import Content from './Content/Content'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import './layout.css'

const LayoutWrapper = styled.div`
  width: 100%;
  background-color: #F7F8F9;
`;

const LayoutContainer = styled.div`
min-height: calc(100vh - 100px);
  max-width: 1170px;
  margin: 0 auto;
`;

const Layout = () => (
  <LayoutWrapper>
    <Header />
    <LayoutContainer>
      <Content />
      <Footer />
    </LayoutContainer>
  </LayoutWrapper>
)
export default Layout
