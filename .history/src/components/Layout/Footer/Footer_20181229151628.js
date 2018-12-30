import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  margin-top: 25px;
  width: 100%;
  padding: 15px 0;
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Link = styled.a`
  color: #1565C0;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterInner>
      © by <Link href="https://github.com/n3sta">n3sta</Link>. All right reserved. 2019
    </FooterInner>
  </FooterWrapper>
)

export default Footer;