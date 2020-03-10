import React from "react"
import { Link } from "gatsby"


const HeaderMenu = () => (
    <div className="d-flex flex-row bg-dark text-light text-center">
        <Link to="/" className="h4">Home</Link>
        <Link to="/about" className="h4">About</Link>
    </div>   
)

export default HeaderMenu