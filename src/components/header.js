import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div class="h1 bg-dark text-light">
    Justin Hynes
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
