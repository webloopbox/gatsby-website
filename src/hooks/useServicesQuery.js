import { graphql, useStaticQuery } from "gatsby";

export const useServicesQuery = () => {
  const data = useStaticQuery(graphql`
    query Services {
      serviceImg1: file(relativePath: { eq: "service1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      serviceImg2: file(relativePath: { eq: "service2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      serviceImg3: file(relativePath: { eq: "service3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      serviceImg4: file(relativePath: { eq: "service4.png" }) {
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
