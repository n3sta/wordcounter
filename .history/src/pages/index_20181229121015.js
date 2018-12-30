import React from 'react'

import Layout from '../components/Layout/Layout'
import SEO from '../components/Layout/Seo/Seo'
import Content from '../components/Layout/Content/Content';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Content />
  </Layout>
)

export default IndexPage
