import * as React from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import Hero from "../components/organisms/Hero";
import { graphql } from "gatsby";
import ".././styles/index.scss";

export default function Home({ data }) {
  console.log("data: ", data);

  return (
    <Layout>
      <Hero data={Object.values(data)} />
    </Layout>
  );
}

export const query = graphql`
  query Slide {
    slide1: file(relativePath: { eq: "slide1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide2: file(relativePath: { eq: "slide2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide3: file(relativePath: { eq: "slide3.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
