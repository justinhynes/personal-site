import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import HeaderMenu from "./headerMenu"

import "../styling/header.css"

const Header = ({ siteTitle }) => (
    <div className="d-flex flex-row align-items-center justify-content-between h1 bg-dark text-light text-center header-styling">
    <Link className="header-link" to="/">Justin Hynes</Link>
    <HeaderMenu className="d-flex justify-content-end"/>
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
