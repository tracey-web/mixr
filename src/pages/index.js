import React, { memo } from "react"
import { navigate, graphql, useStaticQuery } from "gatsby"
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  Grid,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"

const PureBackgroundImage = memo(({ bg, children }) => (
  <BackgroundImage
    Tag="section"
    fluid={bg.desktop.childImageSharp.fluid}
    style={{
      width: "100%",
      minHeight: "100%",
      backgroundPosition: "centre centre",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      position: "absolute",
      top: 0,
      left: 0,
    }}
    backgroundColor={"none"}
  >
    {children}
  </BackgroundImage>
))

const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
  card: {
    minWidth: 350,
    backgroundColor: "rgba(254, 244, 214, 0.9)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 75,
    paddingTop: 30,
    textAlign: "center",
    color: "#666666",
    fontSize: 30,
  },
  button: {
    marginBottom: 50,
    padding: 15,
    fontSize: 24,
  },
  brandName: {
    textAlign: "center",
    marginTop: "-10px",
    fontSize: "125px",
    fontWeight: 900,
    fontFamily: "Hachi Maru Pop, cursive",
  },
  cardActions: {
    justifyContent: "center",
  },
})

const IndexPage = () => {
  const classes = useStyles()
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "lunch.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <PureBackgroundImage bg={data}>
        <SEO title="Home" />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.root}
        >
          <Grid item xs={9} sm={4} md={3} lg={2}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.brandName}>mixr</Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Amazing lunches <br></br>from your fridge!
                </Typography>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={() => navigate("/recipies/")}
                >
                  What's for lunch?
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </PureBackgroundImage>
    </Layout>
  )
}

export default IndexPage
