import { graphql, useStaticQuery } from "gatsby";

export const useComparisionQuery = () => {
  const data = useStaticQuery(graphql`
    query ComparisionSection {
      image1: file(relativePath: { eq: "image1.png" }) {
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
