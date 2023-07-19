import { graphql, useStaticQuery } from "gatsby";

export const useGalleryQuery = () => {
  const data = useStaticQuery(graphql`
    query Gallery {
      galleryImage1: file(relativePath: { eq: "gallery-img1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      galleryImage2: file(relativePath: { eq: "gallery-img2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      galleryImage3: file(relativePath: { eq: "gallery-img3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      galleryImage4: file(relativePath: { eq: "gallery-img4.png" }) {
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
