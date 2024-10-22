import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Homepage = () => (
  <Layout>
    <h1>Hi</h1>
  </Layout>
)

export const Head = () => <Seo title="Page One" />

export default Homepage
