import React from "react"
import { Link } from "gatsby"

import "../styling/headerMenu.css"

const HeaderMenu = () => (
    <div className="d-flex flex-row bg-dark text-light text-center">
        <Link to="/" className="h5 header-menu-link">Home</Link>
        <Link to="/about" className="h5 px-3 header-menu-link">About</Link>
    </div>   
)

export default HeaderMenu
