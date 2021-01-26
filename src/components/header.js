import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  brandHeader: {
    marginTop: -theme.spacing(4),
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
}))
const Header = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Typography className={classes.brandHeader} variant="h1">
          <Link
            to="/"
            style={{
              color: `white`,
              fontWeight: 700,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Typography>
      </div>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
