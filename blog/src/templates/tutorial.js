import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Tutorial = ({ data }) => {
    const {title} = data.contentfulVideoTutorial;

    return (
        <Layout>
            <h1>{title}</h1>
        </Layout>
    )
}

export default Tutorial;

export const pageQuery = graphql`
  query videoTutorialsQuery($slug: String!) {
    contentfulVideoTutorials(slug: { eq: $slug }) {
      title
      slug
    }
  }
`