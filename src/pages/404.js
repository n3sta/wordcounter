import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout/Layout'
import SEO from '../components/Layout/Seo/Seo'

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFound>
      <h1>NOT FOUND</h1>
    </NotFound>
  </Layout>
)

export default NotFoundPage
