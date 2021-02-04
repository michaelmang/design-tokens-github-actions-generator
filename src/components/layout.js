/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import {
  BaseStyles,
  Box,
  Header,
  StyledOcticon,
} from "@primer/components"
import { MarkGithubIcon } from "@primer/octicons-react"
import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

import ExternalLink from "./external-link"

const Layout = ({ children }) => {
  return (
    <BaseStyles>
      <Header style={{ justifyContent: "space-between" }}>
        <Header.Item>
          <Header.Link as={Link} to="/" fontSize={2}>
            <StyledOcticon icon={MarkGithubIcon} size={32} mr={2} />
            <span>GitHub Actions Generator</span>
          </Header.Link>
        </Header.Item>
        <Header.Item>
          <Header.Link as={Link} to="/contribute">
            Contribute
          </Header.Link>
        </Header.Item>
      </Header>
      <main>{children}</main>
      <footer style={{ position: "absolute", bottom: 0 }}>
        <Box m={4}>
          Created by{" "}
          <ExternalLink href="https://michaelmang.dev/">
            Michael Mangialardi
          </ExternalLink>
        </Box>
      </footer>
    </BaseStyles>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
