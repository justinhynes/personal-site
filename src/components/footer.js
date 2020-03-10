import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

import Social from "../components/social"

import '../styling/footer.css'

const Footer = () => (
    <footer className="bg-dark text-light footer-style">
        <Social/>
        <FontAwesomeIcon icon={faCopyright}/> {new Date().getFullYear()}, Justin Hynes
    </footer>
)

export default Footer