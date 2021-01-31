import React from "react"
import { Typography, AppBar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  footer: {
    marginBottom: theme.spacing(2),
    color: `black`,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    textAlign: "center",
  },
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "#fef4d6",
  },
}))
const Footer = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <AppBar elevation={0} className={classes.appBar}>
      <Typography className={classes.footer}>
        © www.traceylea.net {new Date().getFullYear()}
      </Typography>
    </AppBar>
  )
}

export default Footer
