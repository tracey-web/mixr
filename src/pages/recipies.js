import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Typography,
  Card,
  CardContent,
  Grid,
  makeStyles,
} from "@material-ui/core"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

// const recipies = {
//   recipies: [
//     {
//       title: "Ham and Cheese Toastie",
//       ingredients: ["Ham", "Cheese", "Bread", "Butter"],
//     },
//     {
//       title: "Fry-up",
//       ingredients: [
//         "Bacon",
//         "Eggs",
//         "Baked Beans",
//         "Mushrooms",
//         "Sausage",
//         "Bread",
//       ],
//     },
//     {
//       title: "Salad",
//       ingredients: [
//         "Lettuce",
//         "Tomato",
//         "Cucumber",
//         "Beetroot",
//         "Salad Dressing",
//       ],
//     },
//     {
//       title: "Hotdog",
//       ingredients: ["Hotdog Bun", "Sausage", "Ketchup", "Mustard"],
//     },
//     {
//       title: "Omelette",
//       ingredients: ["Eggs", "Mushrooms", "Milk", "Salt", "Pepper", "Spinach"],
//     },
//   ],
// }

const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
  card: {
    minWidth: 350,
  },
  recipieTitle: {
    fontSize: 14,
  },
  cardContent: {
    justifyContent: "center",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  },
  ingredients: {
    fontSize: 14,
  },
})
// GraphQL query hook that is provided by Gatsby to let you access static configuration or data that is resolved once at build time. In this case it is the header.
const RecipiesPage = () => {
  const classes = useStyles()
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
      <Grid item xs={9} sm={4} md={3} lg={2}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.recipeTitle}></Typography>
            <Typography className={classes.ingredients}></Typography>
          </CardContent>
        </Card>
      </Grid>
      <Footer />
    </Layout>
  )
}
export default RecipiesPage
