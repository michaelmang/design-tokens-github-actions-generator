/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import {
  BaseStyles,
  Box,
  Flex,
  Header,
  Heading,
  StateLabel,
  StyledOcticon,
} from "@primer/components"
import { MarkGithubIcon } from "@primer/octicons-react"
import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

import ExternalLink from "./external-link"

const HEADER_HEIGHT = 64

const Layout = ({ children }) => {
  return (
    <BaseStyles style={{ position: 'relative' }}>
      <Header style={{ justifyContent: "space-between" }}>
        <Header.Item>
          <Header.Link as={Link} to="/" fontSize={2}>
            <StyledOcticon icon={MarkGithubIcon} size={32} mr={2} />
            <span>Design Tokens GitHub Actions Generator</span>
          </Header.Link>
        </Header.Item>
        <Header.Item>
          <Header.Link href="https://github.com/michaelmang/design-tokens-github-actions-generator" target="_blank" rel="noopener noreferrer">
            Contribute
          </Header.Link>
        </Header.Item>
      </Header>
      <main style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }}>
        <Box m={4}>
          <Heading mb={1}>
            <Box as="span" mr={2}>
              Design Tokens GitHub Actions Generator
            </Box>
            <StateLabel status="draft">Draft</StateLabel>
          </Heading>
          <p>Generate a YAML file for your custom GitHub Actions workflow as part of your <ExternalLink href="https://www.michaelmang.dev/blog/introduction-to-design-tokens">design tokens automation</ExternalLink>.</p>
        </Box>
        
        {children}
      </main>
      <footer>
        <Box m={4}>
          <Flex>
            <p>Created by{" "}
            <ExternalLink href="https://michaelmang.dev/">Michael Mangialardi</ExternalLink>{" "}
            as part of <ExternalLink href="https://www.michaelmang.dev/blog/introduction-to-design-tokens">my series on design tokens</ExternalLink>.</p>
          </Flex>
        </Box>
      </footer>
    </BaseStyles>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
