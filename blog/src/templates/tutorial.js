import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Tutorial = ({ data }) => {
    const {title, body} = data.contentfulVideoTutorials;

    return (
        <Layout>
            <h1>{title}</h1>
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
    }
  }
`