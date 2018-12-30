import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Footer from './Footer/Footer'
import Header from './Header/Header'
import './layout.css'

const LayoutWrapper = styled.div`
  min-height: 100vh;
  max-width: 1170px;
  margin: 0 auto;
  margin-top: 100px;
  background-color: #F7F8F9;
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Header />
    {children}
    <Footer />
  </LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
