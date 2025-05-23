import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { H1 } from "../components/Heading";

const Tutorial = ({ data }) => {
    const {title, body, video} = data.contentfulVideoTutorials;

    return (
        <Layout>
        <GatsbyImage
            image={video.gatsbyImageData}
            />
            <H1>{title}</H1>
            <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}></div>
        </Layout>
    )
}

export default Tutorial;

export const pageQuery = graphql`
  query videoTutorialsQuery($slug: String!) {
    contentfulVideoTutorials(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      video {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          width: 960
        )
      }
    }
  }
`