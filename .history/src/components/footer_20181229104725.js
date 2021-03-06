import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px 0;
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 15px;
`;

const Footer = () => (
  <Footer>
    <FooterInner>
      © TheCoacher 2018. All right reserved.
    </FooterInner>
  </Footer>
)

export default Footer;