import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "../styling/image.css";

const Image = () => {
    const data = useStaticQuery(graphql`
        query {
            cat: file(relativePath: { eq: "cat_scream.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return <Img className="image-styling" fluid={data.cat.childImageSharp.fluid} />
}

export default Image
