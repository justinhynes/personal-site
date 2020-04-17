import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import "../styling/social.css"

const Social = () => (
    <div className="bg-dark social-styling">
        <a className="social-link" href="https://www.linkedin.com/in/justin-hynes-94013a1b/">
            <FontAwesomeIcon size="2x" icon={faLinkedin} />
        </a>
        <a className="px-4 social-link" href="https://github.com/justinhynes">
            <FontAwesomeIcon size="2x" icon={faGithub} />
        </a>
        <a className="pr-4 social-link" href="https://www.instagram.com/justinhynes/">
            <FontAwesomeIcon size="2x" icon={faInstagram} />
        </a>
    </div>
)

export default Social
