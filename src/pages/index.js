import { Box, Flex, Heading, Link, Pagehead } from "@primer/components"
import React from "react"
import { Link as GatsbyLink } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Design Tokens GitHub Actions Generator" />
    
    <Box m={4}>
      <Pagehead>
        <Heading fontSize={4}>
          Automations
        </Heading>
      </Pagehead>
      
      <Flex flexDirection="column">
        <Link as={GatsbyLink} to="/transform-design-tokens-on-update">
          Transform Design Tokens On Update
        </Link>
      </Flex>
    </Box>
  </Layout>
)

export default IndexPage
