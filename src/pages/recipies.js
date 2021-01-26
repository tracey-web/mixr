import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  makeStyles,
} from "@material-ui/core"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const useStyles = makeStyles({
  card: {
    minWidth: 350,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
})
// GraphQL query hook that is provided by Gatsby to let you access static configuration or data that is resolved once at build time. In this case it is the header.
const RecipiesPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  // markup to be rendered by the Browser
  return (
    <Layout>
      <SEO title="Recipies" />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © www.traceylea.net {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </Layout>
  )
}
export default RecipiesPage
