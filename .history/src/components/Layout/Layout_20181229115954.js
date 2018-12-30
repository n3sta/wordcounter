import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Footer from './Footer/Footer'
import Header from './Header/Header'
import './layout.css'

const LayoutWrapper = styled.div`
  width: 100%;
  background-color: #F7F8F9;
`;

const LayoutContainer = styled.div`
  min-height: 100vh;
  padding-top: 85px;
  max-width: 1170px;
  margin: 0 auto;
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  </LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
