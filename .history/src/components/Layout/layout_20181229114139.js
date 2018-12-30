import React from 'react'
import PropTypes from 'prop-types'

import Footer from './footer'
import Header from './header'
import './layout.css'



const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
