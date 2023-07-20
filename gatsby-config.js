module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://dev-gatsby-wp-cms.pantheonsite.io/graphql`,
      },
    },
  ],
};
