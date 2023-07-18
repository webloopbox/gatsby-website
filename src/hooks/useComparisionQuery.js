import { graphql, useStaticQuery } from "gatsby";

export const useComparisionQuery = () => {
  const data = useStaticQuery(graphql`
    query ComparisionSection {
      image1: file(relativePath: { eq: "section_img1.png" }) {
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
