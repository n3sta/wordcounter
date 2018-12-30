import React from 'react'
import PropTypes from 'prop-types'

import Footer from './Footer/Footer'
import Header from './Header/Header'
import './layout.css'

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
