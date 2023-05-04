/**
 * @type {import('gatsby').GatsbyConfig}
*/

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `fe-coding-challenge`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'dotenv',
    'octokit',
    `gatsby-plugin-postcss`,
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
}
