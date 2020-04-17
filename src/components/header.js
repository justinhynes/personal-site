import PropTypes from "prop-types"
import React from "react"

import HeaderMenu from "./headerMenu"

import "../styling/header.css"

const Header = ({ siteTitle }) => (
    <div className="d-flex flex-row align-items-center justify-content-between h1 bg-dark text-light text-center header-styling">
      <p className="h2 header-name">Justin Hynes</p>
      <HeaderMenu />
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
