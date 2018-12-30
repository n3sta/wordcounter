import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

import Footer from './footer'
import Header from './header'
import './layout.css'



const Layout = ({ children }) => (
  <>
    <Header siteTitle={data.site.siteMetadata.title} />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
