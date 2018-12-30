import React from 'react'

import Layout from '../components/Layout/Layout'
import SEO from '../components/Layout/Seo/Seo'
import Counter from '../components/Layout/Counter/Counter';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Counter />
  </>
)

export default IndexPage
