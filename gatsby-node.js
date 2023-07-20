const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query WordPress posts using GraphQL
  const result = await graphql(`
    query AllWordPressPosts {
      allWpPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  // Check for any errors while fetching data
  if (result.errors) {
    throw result.errors;
  }

  // Access the array of posts
  const allWordpressPost = result.data.allWpPost.edges;

  // Create pages for each WordPress post
  const postTemplate = path.resolve(`./src/templates/PostTemplate.js`);
  allWordpressPost.forEach(({ node }) => {
    createPage({
      path: `/posts/${node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: node.id,
      },
    });
  });
};
