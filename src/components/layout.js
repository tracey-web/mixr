/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"

let theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h1: {
      fontFamily: "Hachi Maru Pop, cursive",
    },
  },
  palette: {
    primary: {
      main: "#e12f1c",
    },
  },
})

const Layout = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: "#fef4d6",
          margin: `0 auto`,
          height: "100vh",
        }}
      >
        <main>{children}</main>
      </div>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
