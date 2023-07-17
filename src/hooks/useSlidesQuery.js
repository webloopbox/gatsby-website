import { graphql, useStaticQuery } from "gatsby";

export const useSlidesQuery = () => {
  const data = useStaticQuery(graphql`
    query Slides {
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
  `);

  return data;
};
