import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 15px 0;
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 15px;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterInner>
      © by <a href="https://github.com/n3sta" target="_blank">n3sta</a>. All right reserved. 2019
    </FooterInner>
  </FooterWrapper>
)

export default Footer;