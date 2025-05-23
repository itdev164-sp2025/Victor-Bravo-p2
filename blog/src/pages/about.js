import React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const About = ({ data }) => {
    const {name, company} = data.site.siteMetadata.contact;
    return (
      <Layout>
        <Seo title="About Us" />
        <h1>About Us</h1>
        <p>{`${company} was started be ${name} in 2025.`}</p>
        <p>{`At ${company} we provide simple videos to teach people the basics of video editing.`}</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <StaticImage
            src="../images/videotutor-icon.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Video Tutorials logo"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <Link to="/">Home</Link>
      </Layout>
    )
}

export default About

export const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          name
          company
          address
        }
      }
    }
  }
`