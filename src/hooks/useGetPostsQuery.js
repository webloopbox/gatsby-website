import { graphql, useStaticQuery } from "gatsby";

export const useGetPostsQuery = () => {
  const data = useStaticQuery(graphql`
    query WPPostsList {
      allWpPost {
        nodes {
          id
          uri
          slug
          title
          date
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 450) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return data;
};
